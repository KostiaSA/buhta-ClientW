import * as React from "react";
import * as AgGrid from "ag-grid";
import {GridColumnProps} from "./GridColumn";
import {InternalTreeNode} from "./GridTreeDataSourceFromArray";
import {GridColumnGroupProps} from "./GridColumnGroup";


export interface GridDataSourceRow {
    [propName: string]: any;
    $$dataSourceTreeNode?: InternalTreeNode;
    $$gridRowHeight?: number;
}

export interface GridDataSource {
    getIsAsync(): boolean;
    getGridColumns(): (GridColumnProps | GridColumnGroupProps)[];
    getRowsAsync(): Promise<GridDataSourceRow[]>;
    getRows(): GridDataSourceRow[];
    getNewRow(parentRowData?: GridDataSourceRow): GridDataSourceRow;
    addRow(rowData: GridDataSourceRow): void;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    deleteRow(rowData: GridDataSourceRow): void;

    canDragRow(rowIndex: GridDataSourceRow, mode: "move" | "copy"): boolean;

    canDropInto(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): boolean;

    canDropBefore(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): boolean;

    canDropAfter(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): boolean;

    dropInto(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): void;

    dropAfter(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): void;

    dropBefore(dragRowData: GridDataSourceRow, targetRowData: GridDataSourceRow, mode: "move" | "copy"): void;

    refresh(): void;

    getNodeChildDetails(dataItem: GridDataSourceRow): AgGrid.NodeChildDetails | null;
}


