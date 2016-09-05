import * as React from "react";
import * as AgGrid from "ag-grid";
import {GridColumnProps, GridColumnDef} from "./GridColumn";
import {InternalTreeNode} from "./GridTreeDataSourceFromArray";
import {GridColumnGroupProps, GridColumnGroup} from "./GridColumnGroup";
import {GridColumns} from "./GridColumns";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {GridState} from "./Grid";


export interface GridDataSourceRow {
    [propName: string]: any;
    $$dataSourceTreeNode?: InternalTreeNode;
    $$gridRowHeight?: number;
}

// export interface DataSourceColumn extends GridColumnProps {
//
// }
//
// export interface DataSourceColumnGroup extends GridColumnGroupProps {
//     columns: (DataSourceColumn | DataSourceColumnGroup)[];
// }

export interface GridDataSource<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject> {
    lookupValuePropName?: string;
    lookupLabelPropName?: string;

    getLookupLabel(lookupValue: any): string;
    getLookupLabelAsync(lookupValue: any): Promise<string>;


    getIsAsync(): boolean;
    getGridColumns(): GridColumns;
    getRowsAsync(): Promise<TRow[]>;
    getRows(): TRow[];
    //getNewRow(parentRowData?: TRow): Promise<TRow>;
    addRow(rowData: TRow): void;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    getDataValue(rowData: TRow, propertyName: string): any;

    getIsRowsDataEqual(rowData1: TRow, rowData2: TRow): boolean;  // используется в Grid-e для поиска FocusedRow

    deleteRow(rowData: TRow): void;

    canDragRow(rowIndex: TRow, mode: "move" | "copy"): boolean;

    canDropInto(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): boolean;

    canDropBefore(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): boolean;

    canDropAfter(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): boolean;

    dropInto(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): void;

    dropAfter(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): void;

    dropBefore(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): void;

    getNodeChildDetails(dataItem: TRow): AgGrid.NodeChildDetails | null;

    getDesignedObjectOfRow(rowData: TRow): Promise<TDesignedObject>;
    getNewDesignedObject(rowData: TRow): Promise<TDesignedObject>;

    openInsertForm(grid: GridState<TRow,TDesignedObject>, focusedRowData?: TRow): void;
    openEditForm(grid: GridState<TRow,TDesignedObject>, editedRowData: TRow): void;
    openDeleteForm(grid: GridState<TRow,TDesignedObject>, toDeleteRows: TRow[]): void;

}


