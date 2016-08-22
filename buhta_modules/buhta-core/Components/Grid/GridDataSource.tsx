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

export interface GridDataSource<T extends GridDataSourceRow> {
    getIsAsync(): boolean;
    getGridColumns(): GridColumns;
    getRowsAsync(): Promise<T[]>;
    getRows(): T[];
    //getNewRow(parentRowData?: T): Promise<T>;
    addRow(rowData: T): void;
    getEmptyDataSourceMessage(): React.ReactNode;
    getDeleteRowMessage (): React.ReactNode;

    deleteRow(rowData: T): void;

    canDragRow(rowIndex: T, mode: "move" | "copy"): boolean;

    canDropInto(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean;

    canDropBefore(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean;

    canDropAfter(dragRowData: T, targetRowData: T, mode: "move" | "copy"): boolean;

    dropInto(dragRowData: T, targetRowData: T, mode: "move" | "copy"): void;

    dropAfter(dragRowData: T, targetRowData: T, mode: "move" | "copy"): void;

    dropBefore(dragRowData: T, targetRowData: T, mode: "move" | "copy"): void;

    refresh(): void;

    getNodeChildDetails(dataItem: T): AgGrid.NodeChildDetails | null;

    getDesignedObjectOfRow(rowData: T): Promise<DesignedObject>;

    openEditForm(grid: GridState<T>, rowData: T): void;

}


