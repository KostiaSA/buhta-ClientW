import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {GridColumnGroupProps} from "./GridColumnGroup";

export interface GridFlatDataSourceFromArrayParams {

    positionFieldName?: string;  // sort 
    getNewRow?: () => GridDataSourceRow;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class GridFlatDataSourceFromArray implements GridDataSource {
    constructor(public arrayObj: GridDataSourceRow[], public params: GridFlatDataSourceFromArrayParams = {}) {

    }

    getGridColumns(): (GridColumnProps | GridColumnGroupProps)[] {
        if (this.arrayObj.length === 0)
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

    getRows(): GridDataSourceRow[] {
        return this.arrayObj;
    }

    getNewRow(): GridDataSourceRow {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridArrayDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: GridDataSourceRow): number {
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