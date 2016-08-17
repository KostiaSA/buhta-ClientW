import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {numberCompare} from "../../numberCompare";
import {removeFromArray, moveInArray, insertIntoArray} from "../../arrayUtils";

export interface GridTreeDataSourceFromArrayParams<T> {

    keyFieldName: string; // key для treeMode parentKey
    parentKeyFieldName: string; // parentKey для treeMode parentKey
    positionFieldName?: string;  // sort для treeMode parentKey

    autoExpandNodesToLevel?: number;

    getNewRow?: () => T;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

class InternalTreeNode<T> {
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
    parent: InternalTreeNode<T>;
    children: InternalTreeNode<T>[] = [];
    expanded: boolean;
    level: number;


    // iterateRecursive(callback: (node: InternalTreeNode<T>) => void) {
    //     callback(this);
    //     this.children.forEach((child: InternalTreeNode<T>) => {
    //         child.iterateRecursive(callback);
    //     });
    //
    // }
}

export class GridTreeDataSourceFromArray<T extends DesignedObject> implements GridDataSource<T> {
    constructor(public arrayObj: T[], public params: GridTreeDataSourceFromArrayParams<T>) {
        this.createNodesFromParentKey();
    }

    private nodes: InternalTreeNode<T>[] = [];

    get isTreeGridDataSource() {
        return true;
    }

    getTreeGridColumns(): GridColumnProps[] {
        return [];
        //     if (this.arrayObj.length === 0)
        //         return [];
        //     else
        //         return getGridColumnInfos(this.arrayObj[0]).map<GridColumnProps>((col) => {
        //
        //             let ret: any = {};
        //             _.assign(ret, col);
        //             return ret;
        //
        //             // return ({
        //             //     caption: col.caption,
        //             //     width: col.width,
        //             //     order: col.order,
        //             //     propertyName: col.propertyName,
        //             //     showHierarchyTree: col.showHierarchyTree,
        //             //     showHierarchyPadding: col.showHierarchyPadding
        //             // });
        //         });
        //
    }

    getRows(): T[] {
        return this.nodes.map((node) => {
            return this.arrayObj[node.sourceIndex];
        }, this);
    }

    getRow(index: number): T {
        return this.arrayObj[index];
    }

    getNewRow(): T {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridTreeDataSourceFromArray: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: T): number {
        this.arrayObj.push(row);
        return this.arrayObj.length - 1;
    }

    deleteRow(rowIndex: number) {
        let deletedItems = _.pullAt(this.arrayObj, rowIndex);
        if (deletedItems.length === 0)
            throwError("TreeGridTreeDataSourceFromArray.deleteRow(): invalid rowIndex (" + rowIndex + ")");
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

    getRowChildren(rowIndex: number): T[] {
        return [];
    }

    canDragRow(rowIndex: number, mode: "move" | "copy"): boolean {
        return true;
    }

    canDropBefore(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    canDropInto(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean {
        if (this.hasParent(targetRowData, dragRowData) || dragRowData.$$dataSourceTreeNode.parent === targetRowData.$$dataSourceTreeNode)
            return false;
        else
            return true;
    }

    canDropAfter(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    dropBefore(dragRowData: any, targetRowData: any, mode: "move" | "copy") {
        let dragNode = dragRowData.$$dataSourceTreeNode;
        let targetNode = targetRowData.$$dataSourceTreeNode;

        if (dragNode.parent === targetNode.parent) {
            let arr = this.nodes;
            if (targetNode.parent) {
                arr = targetNode.parent.children;
            }
            let toPos = arr.indexOf(targetNode)-1;
            let fromPos = arr.indexOf(dragNode);
            if (toPos < fromPos)
                toPos += 1;
            moveInArray(arr, [dragNode], toPos);
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
        }

    }

    dropInto(dragRowData: any, targetRowData: any, mode: "move" | "copy") {
        console.log("dropInto+");
        let dragNode = dragRowData.$$dataSourceTreeNode;
        let targetNode = targetRowData.$$dataSourceTreeNode;

        targetNode.children.push(dragNode);

        if (dragNode.parent)
            removeFromArray(dragNode.parent.children, dragNode);
        else
            removeFromArray(this.nodes, dragNode);

        dragNode.parent = targetNode;
    }

    dropAfter(dragRowData: any, targetRowData: any, mode: "move" | "copy") {
        let dragNode = dragRowData.$$dataSourceTreeNode;
        let targetNode = targetRowData.$$dataSourceTreeNode;

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
        }
    }

    refresh() {

    }

    private hasParent(rowData: any, parentData: any): boolean {
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

    private nodeList: any = {};

    private createNodesFromParentKey() {

        this.nodes = [];
        this.nodeList = {};

        if (this.params.keyFieldName === undefined)
            throwError("GridTreeDataSourceFromArray: property 'keyFieldName' is undefined");

        if (this.params.parentKeyFieldName === undefined)
            throwError("GridTreeDataSourceFromArray: property 'parentKeyFieldName' is undefined");

        this.arrayObj.forEach((dataSourceItem: any, index: number) => {
            let node = new InternalTreeNode<any>();
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
                    if ((node  as InternalTreeNode<any>).parent !== undefined)
                        throwError("GridTreeDataSourceFromArray: internal error");
                    (node  as InternalTreeNode<any>).parent = parentNode;
                    (parentNode as InternalTreeNode<any>).children.push(node);
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
        let sortNodes = (nodes: InternalTreeNode<any>[]): InternalTreeNode<any>[] => {
            if (this.params.positionFieldName !== undefined) {
                return nodes.sort((a: InternalTreeNode<any>, b: InternalTreeNode<any>) => {

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
                return nodes.sort((a: InternalTreeNode<any>, b: InternalTreeNode<any>) => numberCompare(a.sourceIndex, b.sourceIndex));
            }
        };


        let processNode = (node: InternalTreeNode<any>, level: number) => {
            node.level = level;
            node.expanded = this.params.autoExpandNodesToLevel !== undefined && node.level < this.params.autoExpandNodesToLevel;
            node.children = sortNodes(node.children);
            node.children.forEach((node: InternalTreeNode<any>) => {
                processNode(node, level + 1);
            }, this);
        };

        this.nodes.forEach((node: InternalTreeNode<any>) => {
            processNode(node, 0);
        }, this);

        this.nodes = sortNodes(this.nodes);
        //this.state.nodes = this.state.nodes.sort((a, b) => numberCompare(a.sourceIndex, b.sourceIndex));

    }

    getNodeChildDetails(dataItem: any): AgGrid.NodeChildDetails | null {

        let node = dataItem.$$dataSourceTreeNode;

        if (node.children.length > 0)

            return {
                group: true,
                expanded: node.expanded,
                children: node.children.map((childNode: InternalTreeNode<any>) => {
                    return this.arrayObj[childNode.sourceIndex];
                }, this),
                //field: "name",
                //key: dataId

            };
        else
            return null;
    }

}