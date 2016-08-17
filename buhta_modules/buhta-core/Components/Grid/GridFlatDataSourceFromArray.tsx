import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";

export interface GridFlatDataSourceFromArrayParams<T> {

    getNewRow?: () => T;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class GridFlatDataSourceFromArray<T extends DesignedObject> implements GridDataSource<T> {
    constructor(public arrayObj: T[], public params: GridFlatDataSourceFromArrayParams<T> = {}) {

    }

    get isTreeGridDataSource() {
        return true;
    }

    getTreeGridColumns(): GridColumnProps[] {
        if (this.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos(this.arrayObj[0]).map<GridColumnProps>((col) => {

                let ret: any = {};
                _.assign(ret, col);
                return ret;

                // return ({
                //     caption: col.caption,
                //     width: col.width,
                //     order: col.order,
                //     propertyName: col.propertyName,
                //     showHierarchyTree: col.showHierarchyTree,
                //     showHierarchyPadding: col.showHierarchyPadding
                // });
            });

    }

    getRows(): T[] {
        return this.arrayObj;
    }

    getRow(index: number): T {
        return this.arrayObj[index];
    }

    getNewRow(): T {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridArrayDataSource: method getNewRow() not defined");
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
            throwError("TreeGridArrayDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
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

    canDropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropBefore(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean {
        return false;
    }

    dropBefore(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {

    }
    
    dropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {
        
    }

    dropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {
        
    }

    refresh() {

    }

    getNodeChildDetails(dataItem: any): AgGrid.NodeChildDetails {
        return {group: false};
    }
}