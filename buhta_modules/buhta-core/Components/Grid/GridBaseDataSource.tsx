import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps, GridColumnDef} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {GridColumnGroupProps, GridColumnGroup} from "./GridColumnGroup";
import {removeFromArray} from "../../arrayUtils";
import {GridColumns} from "./GridColumns";
import {GridState} from "./Grid";
import {OpenWindowParams} from "../Desktop/Desktop";
import {ObjectDesigner, ObjectDesignerProps} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {getInstantPromise} from "../../getInstantPromise";

export interface GridBaseDataSourceParams<T extends GridDataSourceRow> {
//
//     positionFieldName?: string;  // sort
//     getNewRow?: () => Promise<T>;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;
    gridColumns?: GridColumns;

    getNewDesignedObject?: (focusedData: T) => Promise<DesignedObject>;
    getDesignedObjectOfRow?: (editedData: T) => Promise<DesignedObject>;

    openEditForm?: (grid: GridState<T>, rowData: T) => void;
    openInsertForm?: (grid: GridState<T>, focusedRowData: T) => void;

    onGetDataValue?: (rowData: T, propertyName: string) => any;

}

export class GridBaseDataSource<T extends GridDataSourceRow> {
    constructor(public params: GridBaseDataSourceParams<T>) {
    }

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<T[]> {
        throwAbstractError();
        throw "fake";
    }

    getGridColumns(): GridColumns {
        return this.params.gridColumns!;
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
        return false;
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

    addRow(row: T) {
        throwAbstractError();
    }

    getNodeChildDetails(dataItem: T): AgGrid.NodeChildDetails | null {
        return null;
    }

    getDesignedObjectOfRow(rowData: T): Promise<DesignedObject> {
        if (this.params.getDesignedObjectOfRow !== undefined) {
            return this.params.getDesignedObjectOfRow(rowData);
        }
        else if (rowData instanceof DesignedObject)
            return getInstantPromise<DesignedObject>(rowData);
        else {
            throwError("GridBaseDataSource.getDesignedObjectOfRow(): could not convert rowData to 'DesignedObject'");
            throw  "fake";
        }
    }

    openEditForm(grid: GridState<T>, rowData: T) {
        if (this.params.openEditForm !== undefined) {
            this.params.openEditForm(grid, rowData);
        }
        else {

            this.getDesignedObjectOfRow(rowData).then((designedObject) => {


                let designerProps: ObjectDesignerProps = {
                    designedObject: designedObject,
                    onSaveChanges: () => {
                        grid.refresh();
                        grid.setFocusedRow(rowData);
                    }
                };

                let win = designedObject.$$getDesigner(designerProps);

                let openParam: OpenWindowParams = {
                    title: "редактирование",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId()
                };

                grid.component.getParentDesktop().openWindow(win, openParam);

            });
        }

    }

    getNewDesignedObject(parentRowData: T): Promise<DesignedObject> {
        if (this.params.getNewDesignedObject !== undefined) {
            return this.params.getNewDesignedObject(parentRowData);
        }
        throwError("GridBaseDataSource.getNewDesignedObject(): function 'getNewDesignedObject' is not defined");
        throw  "fake";
    }

    openInsertForm(grid: GridState<T>, focusedRowData: T) {
        if (this.params.openInsertForm !== undefined) {
            this.params.openInsertForm(grid, focusedRowData);
        }
        else {

            this.getNewDesignedObject(focusedRowData).then((newDesignedObject) => {


                let designerProps: ObjectDesignerProps = {
                    designedObject: newDesignedObject,
                    onSaveChanges: () => {
                        grid.refresh();
                        grid.setFocusedRow(newDesignedObject as any);
                    }
                };

                let win = newDesignedObject.$$getDesigner(designerProps);

                let openParam: OpenWindowParams = {
                    title: "добавление",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId()
                };

                grid.component.getParentDesktop().openWindow(win, openParam);

            });
        }

    }

    getIsRowsDataEqual(rowData1: T, rowData2: T): boolean {
        return rowData1 === rowData2;
    }

    getDataValue(rowData: T, propertyName: string): any {
        if (this.params.onGetDataValue !== undefined)
            return this.params.onGetDataValue(rowData, propertyName);
        else
            return rowData[propertyName];
    }

}