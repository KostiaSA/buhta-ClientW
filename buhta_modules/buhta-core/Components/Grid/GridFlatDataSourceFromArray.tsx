import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {GridColumnGroupProps} from "./GridColumnGroup";
import {removeFromArray} from "../../arrayUtils";

export interface GridFlatDataSourceFromArrayParams {

    positionFieldName?: string;  // sort
    getNewRow?: () => GridDataSourceRow;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class GridFlatDataSourceFromArray implements GridDataSource {
    constructor(_arrayObj: GridDataSourceRow[], public params: GridFlatDataSourceFromArrayParams = {}) {
        this.arrayObj = _arrayObj.filter((item) => item !== undefined);

    }
    
    private arrayObj: GridDataSourceRow[];

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<GridDataSourceRow[]> {
        throwAbstractError();
        throw "fake";
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

    addRow(row: GridDataSourceRow) {
        this.arrayObj.push(row);
    }

    deleteRow(rowData: GridDataSourceRow) {
        removeFromArray(this.arrayObj, rowData);
        // let deletedItems = _.pullAt(this.arrayObj, rowIndex);
        // if (deletedItems.length === 0)
        //     throwError("TreeGridArrayDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
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

    canDragRow(rowIndex: GridDataSourceRow, mode: "move" | "copy"): boolean {
        return true;
    }

    canDropInto(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropAfter(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropBefore(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy"): boolean {
        return false;
    }

    dropBefore(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy") {

    }

    dropInto(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy") {

    }

    dropAfter(dragRowIndex: GridDataSourceRow, targetRowIndex: GridDataSourceRow, mode: "move" | "copy") {

    }

    refresh() {

    }

    getNodeChildDetails(dataItem: GridDataSourceRow): AgGrid.NodeChildDetails {
        return {group: false};
    }
}