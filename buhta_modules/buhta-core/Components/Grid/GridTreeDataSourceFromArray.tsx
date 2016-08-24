import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps, GridColumnDef} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {numberCompare} from "../../numberCompare";
import {removeFromArray, moveInArray, insertIntoArray} from "../../arrayUtils";
import {GridColumnGroupProps, GridColumnGroup} from "./GridColumnGroup";
import {GridColumns} from "./GridColumns";
import {GridBaseDataSource, GridBaseDataSourceParams} from "./GridBaseDataSource";

export interface GridTreeDataSourceFromArrayParams<T extends GridDataSourceRow> extends GridBaseDataSourceParams<T> {
    arrayObj?: T[];
    keyFieldName: string; // key для treeMode parentKey
    parentKeyFieldName: string; // parentKey для treeMode parentKey
    positionFieldName?: string;  // sort для treeMode parentKey

    autoExpandNodesToLevel?: number;

//    getNewRow?: (parentRowData?: T) => Promise<T>;
//    getEmptyDataSourceMessage?: () => React.ReactNode;
//    getDeleteRowMessage?: () => React.ReactNode;

//    gridColumns?: GridColumns;
}

export class InternalTreeNode {
    constructor() {
    }

    //element: HTMLElement;
    //sourceObject: any;
    sourceIndex: number;
    key: string;
    parentKey: string;
    //sourceRow: any;
    //sourceRowContainer: any;  // массив children, в котором сидит sourceRow, используется в DragDrop
    //cellElements: HTMLElement[] = [];

    // для treeMode;
    parent: InternalTreeNode;
    children: InternalTreeNode[] = [];
    expanded: boolean;
    level: number;


    // iterateRecursive(callback: (node: InternalTreeNode<GridDataSourceRow>) => void) {
    //     callback(this);
    //     this.children.forEach((child: InternalTreeNode<GridDataSourceRow>) => {
    //         child.iterateRecursive(callback);
    //     });
    //
    // }
}

export class GridTreeDataSourceFromArray<T extends GridDataSourceRow> extends GridBaseDataSource<T> implements GridDataSource<T> {
    constructor(public params: GridTreeDataSourceFromArrayParams<T>) {
//        this.arrayObj = _arrayObj.filter((item) => item !== undefined);
        super(params);
        if (params.arrayObj !== undefined) {
            this.arrayObj = params.arrayObj.filter((item) => item !== undefined);
            this.createNodesFromParentKey();
        }
    }


    protected arrayObj: T[];
    protected nodes: InternalTreeNode[] = [];


    // getColumnDefs(): (GridColumnDef | GridColumnGroup)[] {
    //     if (this.params.columnDefs !== undefined)
    //         return this.params.columnDefs;
    //     else
    //         return [];
    // };


    getGridColumns(): GridColumns {

        if (this.params.gridColumns !== undefined)
            return this.params.gridColumns;
        else if (this.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos(this.arrayObj[0]).map<GridColumnProps>((col) => {
                if (col.isPositionField === true)
                    this.params.positionFieldName = col.propertyName;
                let ret: any = {};
                _.assign(ret, col);
                return ret;
            });
    }

    getRows(): T[] {
        return this.nodes.map((node) => {
            if (this.arrayObj[node.sourceIndex] === undefined)
                throwError("getRows(): internal error");
            return this.arrayObj[node.sourceIndex];
        }, this);
    }

    // getNewRow(parentRowData?: T): Promise<T> {
    //     if (this.params.getNewRow)
    //         return this.params.getNewRow(parentRowData);
    //     else {
    //         throwError("GridTreeDataSourceFromArray: method getNewRow() not defined");
    //         throw  "";  // fake typescript 2
    //     }
    // }


    deleteRow(rowData: T) {

        let node = rowData.$$dataSourceTreeNode!;
        let arr = this.nodes;
        if (node.parent) {
            arr = node.parent.children;
        }
        removeFromArray(arr, node);

        let deleteData = (_node: InternalTreeNode) => {

            (this.arrayObj as any)[_node.sourceIndex] = undefined;

            _node.children.forEach((childNode: InternalTreeNode) => {
                deleteData(childNode);
            });
        };

        deleteData(node);

    }

    getEmptyDataSourceMessage(): React.ReactNode {
        if (this.params.getEmptyDataSourceMessage)
            return this.params.getEmptyDataSourceMessage();
        else
            return "Пустой список.";
    }

    getDeleteRowMessage(): React.ReactNode {
        if (this.params.getDeleteRowMessage)
            return this.params.getDeleteRowMessage();
        else
            return "Удалить запись!";
    }

    canDragRow(rowIndex: T, mode: "move" | "copy"): boolean {
        return true;
    }

    canDropBefore(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    canDropInto(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean {
        if (this.hasParent(targetRowData, dragRowData) || dragRowData.$$dataSourceTreeNode!.parent === targetRowData.$$dataSourceTreeNode)
            return false;
        else
            return true;
    }

    canDropAfter(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    dropBefore(dragRowData: T, targetRowData: T, mode: "move" | "copy") {
        let dragNode = dragRowData.$$dataSourceTreeNode!;
        let targetNode = targetRowData.$$dataSourceTreeNode!;

        if (dragNode.parent === targetNode.parent) {
            let arr = this.nodes;
            if (targetNode.parent) {
                arr = targetNode.parent.children;
            }
            let toPos = arr.indexOf(targetNode) - 1;
            let fromPos = arr.indexOf(dragNode);
            if (toPos < fromPos)
                toPos += 1;
            moveInArray(arr, [dragNode], toPos);
            this.recalcChildrenPositions(arr);
        }
        else {
            let dragArr = this.nodes;
            if (dragNode.parent) {
                dragArr = dragNode.parent.children;
            }
            let targetArr = this.nodes;
            if (targetNode.parent) {
                targetArr = targetNode.parent.children;
            }

            insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode));
            removeFromArray(dragArr, dragNode);

            dragNode.parent = targetNode.parent;
            dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);

        }

    }

    dropInto(dragRowData: T, targetRowData: T, mode: "move" | "copy") {
        console.log("dropInto+");
        let dragNode = dragRowData.$$dataSourceTreeNode!;
        let targetNode = targetRowData.$$dataSourceTreeNode!;

        targetNode.children.push(dragNode);
        this.recalcChildrenPositions(targetNode.children);

        if (dragNode.parent)
            removeFromArray(dragNode.parent.children, dragNode);
        else
            removeFromArray(this.nodes, dragNode);

        dragNode.parent = targetNode;
        dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
    }

    dropAfter(dragRowData: T, targetRowData: T, mode: "move" | "copy") {
        let dragNode = dragRowData.$$dataSourceTreeNode!;
        let targetNode = targetRowData.$$dataSourceTreeNode!;

        if (dragNode.parent === targetNode.parent) {
            let arr = this.nodes;
            if (targetNode.parent) {
                arr = targetNode.parent.children;
            }
            let toPos = arr.indexOf(targetNode);
            let fromPos = arr.indexOf(dragNode);
            if (toPos < fromPos)
                toPos += 1;
            moveInArray(arr, [dragNode], toPos);
            this.recalcChildrenPositions(arr);
        }
        else {
            let dragArr = this.nodes;
            if (dragNode.parent) {
                dragArr = dragNode.parent.children;
            }
            let targetArr = this.nodes;
            if (targetNode.parent) {
                targetArr = targetNode.parent.children;
            }

            insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode) + 1);
            removeFromArray(dragArr, dragNode);

            dragNode.parent = targetNode.parent;
            dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);
        }
    }

    refresh() {

    }

    protected recalcChildrenPositions(nodes: InternalTreeNode[]) {
        if (this.params.positionFieldName !== undefined) {
            nodes.forEach((node: InternalTreeNode, index: number) => {
                let nodeData = this.arrayObj[node.sourceIndex];
                nodeData[this.params.positionFieldName!] = index;
            });
        }
    }

    protected hasParent(rowData: T, parentData: T): boolean {
        let parentNode = rowData.$$dataSourceTreeNode;
        if (parentNode === parentData.$$dataSourceTreeNode)
            return true;
        while (parentNode) {
            parentNode = parentNode.parent;
            if (parentNode === parentData.$$dataSourceTreeNode)
                return true;
        }
        return false;
    }

    protected nodeList: {[key: string]: InternalTreeNode} = {};

    protected createNodesFromParentKey() {

        this.nodes = [];
        this.nodeList = {};

        if (this.params.keyFieldName === undefined)
            throwError("GridTreeDataSourceFromArray: property 'keyFieldName' is undefined");

        if (this.params.parentKeyFieldName === undefined)
            throwError("GridTreeDataSourceFromArray: property 'parentKeyFieldName' is undefined");

        this.arrayObj.forEach((dataSourceItem: T, index: number) => {
            let node = new InternalTreeNode();
            dataSourceItem.$$dataSourceTreeNode = node;
            node.sourceIndex = index;
            node.key = dataSourceItem[this.params.keyFieldName!];

            if (node.key === undefined)
                throwError("GridTreeDataSourceFromArray: key column '" + this.params.keyFieldName + "' not found");

            if (node.key !== null && node.key.toString)
                node.key = node.key.toString();

            node.parentKey = dataSourceItem[this.params.parentKeyFieldName!];
            if (node.parentKey === undefined)
                throwError("GridTreeDataSourceFromArray: parent key column '" + this.params.parentKeyFieldName + "' not found");

            if (node.parentKey !== null && node.parentKey.toString)
                node.parentKey = node.parentKey.toString();

            this.nodeList[node.key] = node;

        }, this);

        for (let key in this.nodeList) {
            let node = this.nodeList[key];
            if (node.parentKey !== undefined) {
                let parentNode = this.nodeList[node.parentKey];
                if (parentNode !== undefined) {
                    if ((node  as InternalTreeNode).parent !== undefined)
                        throwError("GridTreeDataSourceFromArray: internal error");
                    (node  as InternalTreeNode).parent = parentNode;
                    (parentNode as InternalTreeNode).children.push(node);
                }
            }
        }

        for (let key in this.nodeList) {
            let node = this.nodeList[key];
            if (node.parentKey === null) {
                this.nodes.push(node);
            }
        }

        // сортировка children и проставление level
        let sortNodes = (nodes: InternalTreeNode[]): InternalTreeNode[] => {
            if (this.params.positionFieldName !== undefined) {
                return nodes.sort((a: InternalTreeNode, b: InternalTreeNode) => {

                    let aa = this.arrayObj[a.sourceIndex][this.params.positionFieldName!];
                    if (aa === undefined)
                        throwError("GridTreeDataSourceFromArray: position column '" + this.params.positionFieldName + "' not found");
                    if (!_.isNumber(aa))
                        throwError("GridTreeDataSourceFromArray: position column '" + this.params.positionFieldName + "' must be a number");

                    let bb = this.arrayObj[b.sourceIndex][this.params.positionFieldName!];
                    if (bb === undefined)
                        throwError("GridTreeDataSourceFromArray: position column '" + this.params.positionFieldName + "' not found");
                    if (!_.isNumber(bb))
                        throwError("GridTreeDataSourceFromArray: position column '" + this.params.positionFieldName + "' must be a number");

                    return numberCompare(aa, bb);
                });
            }
            else {
                return nodes.sort((a: InternalTreeNode, b: InternalTreeNode) => numberCompare(a.sourceIndex, b.sourceIndex));
            }
        };


        let processNode = (node: InternalTreeNode, level: number) => {
            node.level = level;
            node.expanded = this.params.autoExpandNodesToLevel !== undefined && node.level < this.params.autoExpandNodesToLevel;
            node.children = sortNodes(node.children);
            node.children.forEach((node: InternalTreeNode) => {
                processNode(node, level + 1);
            }, this);
        };

        this.nodes.forEach((node: InternalTreeNode) => {
            processNode(node, 0);
        }, this);

        this.nodes = sortNodes(this.nodes);
        //this.state.nodes = this.state.nodes.sort((a, b) => numberCompare(a.sourceIndex, b.sourceIndex));

    }

    getNodeChildDetails(dataItem: T): AgGrid.NodeChildDetails | null {

        if (!dataItem)
            return null;

        let node = dataItem.$$dataSourceTreeNode!;

        if (node.children.length > 0)

            return {
                group: true,
                expanded: node.expanded,
                children: node.children.map((childNode: InternalTreeNode) => {
                    if (this.arrayObj[childNode.sourceIndex] === undefined)
                        throwError("getRows(): internal error");
                    return this.arrayObj[childNode.sourceIndex];
                }, this),
            };
        else
            return null;
    }

    getIsRowsDataEqual(rowData1: T, rowData2: T): boolean {
        return rowData1[this.params.keyFieldName] === rowData2[this.params.keyFieldName];
    }


}