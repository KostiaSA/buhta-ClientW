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

export interface GridFlatDataSourceFromArrayParams<T extends GridDataSourceRow> {

    positionFieldName?: string;  // sort
    getNewRow?: () => Promise<T>;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class GridFlatDataSourceFromArray<T extends GridDataSourceRow> implements GridDataSource<T> {
    constructor(_arrayObj: T[], public params: GridFlatDataSourceFromArrayParams<T> = {}) {
        this.arrayObj = _arrayObj.filter((item) => item !== undefined);

    }
    
    private arrayObj: T[];

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<T[]> {
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

    getRows(): T[] {
        return this.arrayObj;
    }

    getNewRow(): Promise<T> {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridArrayDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: T) {
        this.arrayObj.push(row);
    }

    deleteRow(rowData: T) {
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

    canDragRow(rowIndex: T, mode: "move" | "copy"): boolean {
        return true;
    }

    canDropInto(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropAfter(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropBefore(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy"): boolean {
        return false;
    }

    dropBefore(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy") {

    }

    dropInto(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy") {

    }

    dropAfter(dragRowIndex: T, targetRowIndex: T, mode: "move" | "copy") {

    }

    refresh() {

    }

    getNodeChildDetails(dataItem: T): AgGrid.NodeChildDetails {
        return {group: false};
    }
}