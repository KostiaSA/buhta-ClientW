import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {numberCompare} from "../../numberCompare";
import {removeFromArray, moveInArray, insertIntoArray} from "../../arrayUtils";
import {GridColumnGroupProps} from "./GridColumnGroup";
import {BaseControl} from "../../../buhta-ui/BaseControl";

export interface GridTreeDataSourceFromComponentParams {

    positionFieldName?: string;  // sort

    getNewRow?: () => GridDataSourceRow;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}


export class GridTreeDataSourceFromComponent implements GridDataSource {
    constructor(private nodes: BaseControl[], public params: GridTreeDataSourceFromComponentParams) {
        this.set$$parentForAllNodes();
    }
    
    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<GridDataSourceRow[]> {
        throwAbstractError();
        throw "fake";
    }

    getGridColumns(): (GridColumnProps | GridColumnGroupProps)[] {
        return [];
    }

    getRows(): GridDataSourceRow[] {
        return this.nodes;
    }

    getNewRow(parentNode?: BaseControl): GridDataSourceRow {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridComponentChildrenDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(node: BaseControl) {
        throwAbstractError();
        //this.nodes.push(node);
    }

    deleteRow(node: BaseControl) {
        if (node.$$parent) {
            removeFromArray(node.$$parent.children, node);
        }
        else {
            removeFromArray(this.nodes, node);
        }
    }

    private set$$parentForAllNodes() {
        this.nodes.forEach((item) => {
            this.set$$parentRecursive(item);
        });

    }

    private set$$parentRecursive(parent: BaseControl) {
        parent.children.forEach((item) => {
            item.$$parent = parent;
            this.set$$parentRecursive(item);
        });

    }

    private forEachNode(callback: (node: BaseControl) => void, arr?: BaseControl[]) {
        if (arr === undefined)
            arr = this.nodes;
        arr.forEach((item) => {
            callback(item);
            this.forEachNode(callback, item.children);
        });
    }

    // private getNodeParent(node: BaseControl): BaseControl | undefined {
    //     let parent: BaseControl | undefined;
    //     this.forEachNode((_parent) => {
    //         if (parent === undefined && _parent.children.indexOf(node) >= 0)
    //             parent = _parent;
    //     });
    //     return parent;
    // }


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

    canDragRow(rowIndex: BaseControl, mode: "move" | "copy"): boolean {
        return true;
    }

    canDropBefore(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    canDropInto(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy"): boolean {
        if (this.hasParent(targetRowData, dragRowData) || dragRowData.$$parent === targetRowData)
            return false;
        else
            return true;
    }

    canDropAfter(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy"): boolean {

        if (this.hasParent(targetRowData, dragRowData))
            return false;
        else
            return true;
    }

    dropBefore(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy") {
        let dragNode = dragRowData;
        let targetNode = targetRowData;

        if (dragNode.$$parent === targetNode.$$parent) {
            let arr = this.nodes;
            if (targetNode.$$parent) {
                arr = targetNode.$$parent.children;
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
            if (dragNode.$$parent) {
                dragArr = dragNode.$$parent.children;
            }
            let targetArr = this.nodes;
            if (targetNode.$$parent) {
                targetArr = targetNode.$$parent.children;
            }

            insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode));
            removeFromArray(dragArr, dragNode);

            dragNode.$$parent = targetNode.$$parent;
            //dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);

        }

    }

    dropInto(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy") {
        let dragNode = dragRowData;
        let targetNode = targetRowData;

        targetNode.children.push(dragNode);
        this.recalcChildrenPositions(targetNode.children);

        if (dragNode.$$parent)
            removeFromArray(dragNode.$$parent.children, dragNode);
        else
            removeFromArray(this.nodes, dragNode);

        dragNode.$$parent = targetNode;
        //dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
    }

    dropAfter(dragRowData: BaseControl, targetRowData: BaseControl, mode: "move" | "copy") {
        let dragNode = dragRowData;
        let targetNode = targetRowData;

        if (dragNode.$$parent === targetNode.$$parent) {
            let arr = this.nodes;
            if (targetNode.$$parent) {
                arr = targetNode.$$parent.children;
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
            if (dragNode.$$parent) {
                dragArr = dragNode.$$parent.children;
            }
            let targetArr = this.nodes;
            if (targetNode.$$parent) {
                targetArr = targetNode.$$parent.children;
            }

            insertIntoArray(targetArr, dragNode, targetArr.indexOf(targetNode) + 1);
            removeFromArray(dragArr, dragNode);

            dragNode.$$parent = targetNode.$$parent;
            //  dragRowData[this.params.parentKeyFieldName!] = targetRowData[this.params.keyFieldName!];
            this.recalcChildrenPositions(targetArr);
        }
    }

    refresh() {

    }

    private recalcChildrenPositions(nodes: BaseControl[]) {
        if (this.params.positionFieldName !== undefined) {
            nodes.forEach((node: BaseControl, index: number) => {
                node[this.params.positionFieldName!] = index;
            });
        }
    }

    private hasParent(rowData?: BaseControl, parentData?: BaseControl): boolean {
        let parentNode = rowData;
        if (parentNode === parentData)
            return true;
        while (parentNode) {
            parentNode = parentNode.$$parent;
            if (parentNode === parentData)
                return true;
        }
        return false;
    }

    getNodeChildDetails(dataItem: BaseControl): AgGrid.NodeChildDetails | null {

        if (!dataItem)
            return null;

        if (dataItem.children.length > 0)

            return {
                group: true,
                expanded: true,
                children: dataItem.children
            };
        else
            return null;
    }

}