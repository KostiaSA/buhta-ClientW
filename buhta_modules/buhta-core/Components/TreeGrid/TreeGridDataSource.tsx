import * as React from "react";
import {TreeGridColumnProps} from "./TreeGridColumn";

export interface TreeGridDataSource {
    isTreeGridDataSource: boolean;
    getTreeGridColumns(): TreeGridColumnProps[];
    getDataRows(): any[];

    getNewRow(): any;
    addRow(row: any): number;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    deleteRow(rowIndex: number): void;


}