import * as React from "react";
import * as AgGrid from "ag-grid";
import {GridColumnProps} from "./GridColumn";

export interface GridDataSource<T> {
    isTreeGridDataSource: boolean;
    getTreeGridColumns(): GridColumnProps[];
    getRows(): T[];

    getRow(rowIndex: number): T;
    getRowChildren(rowIndex: number): T[];

    getNewRow(): T;
    addRow(row: T): number;
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


