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

    canDropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean;

    canDropBefore(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean;
    
    canDropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean;

    dropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): void;

    dropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): void;

    refresh(): void;

    getNodeChildDetails(dataItem: any): AgGrid.NodeChildDetails | null;
}


