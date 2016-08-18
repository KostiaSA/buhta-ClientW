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
    getGridColumns(): (GridColumnProps | GridColumnGroupProps)[];
    getRows(): GridDataSourceRow[];
    getNewRow(): GridDataSourceRow;
    addRow(row: GridDataSourceRow): number;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    deleteRow(rowIndex: number): void;

    canDragRow(rowIndex: number, mode: "move" | "copy"): boolean;

    canDropInto(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean;

    canDropBefore(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean;

    canDropAfter(dragRowData: any, targetRowData: any, mode: "move" | "copy"): boolean;

    dropInto(dragRowData: any, targetRowData: any, mode: "move" | "copy"): void;

    dropAfter(dragRowData: any, targetRowData: any, mode: "move" | "copy"): void;

    dropBefore(dragRowData: any, targetRowData: any, mode: "move" | "copy"): void;

    refresh(): void;

    getNodeChildDetails(dataItem: any): AgGrid.NodeChildDetails | null;
}


