import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps, GridColumnDef} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError, throwUnderConstruction} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {GridColumnGroupProps, GridColumnGroup} from "./GridColumnGroup";
import {removeFromArray} from "../../arrayUtils";
import {GridColumns} from "./GridColumns";
import {GridState} from "./Grid";
import {OpenWindowParams, getDesktop} from "../Desktop/Desktop";
import {ObjectDesigner, ObjectDesignerProps} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {getInstantPromise} from "../../getInstantPromise";

export interface GridBaseDataSourceParams<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject> {
//
//     positionFieldName?: string;  // sort
//     getNewRow?: () => Promise<TRow>;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;
    gridColumns?: GridColumns;

    getNewDesignedObject?: (focusedData: TRow) => Promise<TDesignedObject>;
    getDesignedObjectOfRow?: (editedData: TRow) => Promise<TDesignedObject>;
    onDeleteRows?: (rowData: TRow[]) => Promise<void>;

    openInsertForm?: (grid: GridState<TRow,TDesignedObject>, focusedRowData: TRow) => void;
    openEditForm?: (grid: GridState<TRow,TDesignedObject>, rowData: TRow) => void;
    openDeleteForm?: (grid: GridState<TRow,TDesignedObject>, toDeleteRows: TRow[])=> void;

    onGetDataValue?: (rowData: TRow, propertyName: string) => any;

}

export class GridBaseDataSource<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject>
implements GridDataSource<TRow,TDesignedObject> {
    constructor(public params: GridBaseDataSourceParams<TRow,TDesignedObject>) {
    }

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<TRow[]> {
        throwAbstractError();
        throw "fake";
    }
    
    getRows(): TRow[] {
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

    canDragRow(rowIndex: TRow, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropInto(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropAfter(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy"): boolean {
        return false;
    }

    canDropBefore(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy"): boolean {
        return false;
    }

    dropBefore(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy") {
        throwAbstractError();
    }

    dropInto(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy") {
        throwAbstractError();
    }

    dropAfter(dragRowIndex: TRow, targetRowIndex: TRow, mode: "move" | "copy") {
        throwAbstractError();
    }

    addRow(row: TRow) {
        throwAbstractError();
    }

    getNodeChildDetails(dataItem: TRow): AgGrid.NodeChildDetails | null {
        return null;
    }

    getDesignedObjectOfRow(rowData: TRow): Promise<TDesignedObject> {
        if (this.params.getDesignedObjectOfRow !== undefined) {
            return this.params.getDesignedObjectOfRow(rowData);
        }
        else if (rowData instanceof DesignedObject)
            return getInstantPromise<TDesignedObject>(rowData as TDesignedObject);
        else {
            throwError("GridBaseDataSource.getDesignedObjectOfRow(): could not convert rowData to 'DesignedObject'");
            throw  "fake";
        }
    }

    deleteRow(rowData: TRow) {
        throwAbstractError();
    }

    openDeleteForm(grid: GridState<TRow,TDesignedObject>, toDeleteRows: TRow[]) {
        if (this.params.openDeleteForm !== undefined) {
            this.params.openDeleteForm(grid, toDeleteRows);
        }
        else {
            // todo удаление нескольких
            if (toDeleteRows.length > 1)
                throwUnderConstruction();

            // if (!(toDeleteRows[0] instanceof DesignedObject))
            //     throwError("GridBaseDataSource:openDeleteForm(): rowToDelete must be of type 'DesignedObject'");
            let row = toDeleteRows[0];// as DesignedObject;

            let objectClassName = "запись";
            if (row instanceof DesignedObject && row.getClassName !== undefined)
                objectClassName = row.getClassName();

            let objectName = "";
            if (row.toString)
                objectName = row.toString();

//            let message = <div className="color-red">Удалить "{objectClassName}"?<br/>{ objectName }</div>;
            let message = <div>Удалить "{objectClassName}"?<br/>{ objectName }</div>;

            grid.component.showDeleteConfirmationWindow(message, (okResult) => {
                if (okResult) {
                    this.deleteRow(row);
                    if (this.params.onDeleteRows !== undefined) {
                        this.params.onDeleteRows([row])
                            .then(()=> {
                                grid.refresh();
                            })
                            .catch((error: string)=> {
                                grid.component.showErrorWindow("Ошибка удаления: " + error);
                            });
                    }
                    else
                        grid.refresh();
                }
            });
        }
    }

    openEditForm(grid: GridState<TRow,TDesignedObject>, rowData: TRow) {
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
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "blue"
                };

                grid.component.getParentDesktop().openWindow(win, openParam);

            });
        }

    }

    getNewDesignedObject(parentRowData: TRow): Promise<TDesignedObject> {
        if (this.params.getNewDesignedObject !== undefined) {
            return this.params.getNewDesignedObject(parentRowData);
        }
        throwError("GridBaseDataSource.getNewDesignedObject(): function 'getNewDesignedObject' is not defined");
        throw  "fake";
    }

    openInsertForm(grid: GridState<TRow,TDesignedObject>, focusedRowData: TRow) {
        if (this.params.openInsertForm !== undefined) {
            this.params.openInsertForm(grid, focusedRowData);
        }
        else {

            this.getNewDesignedObject(focusedRowData).then((newDesignedObject) => {

                let designerProps: ObjectDesignerProps = {
                    designedObject: newDesignedObject,
                    onSaveChanges: () => {
                        // todo надо как-то уметь получать DataRow из DesignedObject
                        this.addRow((newDesignedObject as any)as TRow);
                        grid.refresh();
                        grid.setFocusedRow(newDesignedObject as any);
                    }
                };

                let win = newDesignedObject.$$getDesigner(designerProps);

                let openParam: OpenWindowParams = {
                    title: "добавление",
                    autoPosition: "parent-center",
                    parentWindowId: grid.component.getParentWindowId(),
                    theme: "green"
                };

                grid.component.getParentDesktop().openWindow(win, openParam);

            });
        }

    }

    getIsRowsDataEqual(rowData1: TRow, rowData2: TRow): boolean {
        return rowData1 === rowData2;
    }

    getDataValue(rowData: TRow, propertyName: string): any {
        if (this.params.onGetDataValue !== undefined)
            return this.params.onGetDataValue(rowData, propertyName);
        else
            return rowData[propertyName];
    }

}