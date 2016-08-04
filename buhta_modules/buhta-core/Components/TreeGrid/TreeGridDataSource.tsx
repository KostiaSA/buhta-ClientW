import * as React from "react";
import {TreeGridColumnProps} from "./TreeGridColumn";

export interface TreeGridDataSource<T> {
    isTreeGridDataSource: boolean;
    getTreeGridColumns(): TreeGridColumnProps[];
    getDataRows(): T[];

    getDataRow(rowIndex: number): T;

    getNewRow(): T;
    addRow(row: T): number;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    deleteRow(rowIndex: number): void;

    canDragRow(rowIndex: number, mode: "move" | "copy"): boolean;

    canDropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean;

    canDropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean;

}


