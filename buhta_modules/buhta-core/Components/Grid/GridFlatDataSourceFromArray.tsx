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
import {ObjectDesigner} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {GridBaseDataSource, GridBaseDataSourceParams} from "./GridBaseDataSource";

export interface GridFlatDataSourceFromArrayParams<T extends GridDataSourceRow> extends GridBaseDataSourceParams<T> {
    arrayObj: T[];
    positionFieldName?: string;  // sort
    getNewRow?: () => Promise<T>;
//    getEmptyDataSourceMessage?: () => React.ReactNode;
//    getDeleteRowMessage?: () => React.ReactNode;
//    gridColumns?: GridColumns;

}

export class GridFlatDataSourceFromArray<T extends GridDataSourceRow> extends GridBaseDataSource<T> implements GridDataSource<T> {
    constructor(public params: GridFlatDataSourceFromArrayParams<T>) {
        super(params);
        this.arrayObj = params.arrayObj.filter((item) => item !== undefined);

    }

    private arrayObj: T[];

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<T[]> {
        throwAbstractError();
        throw "fake";
    }

    getGridColumns(): GridColumns {
        if (this.params.gridColumns !== undefined)
            return this.params.gridColumns;
        else if (this.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos(this.arrayObj[0]).map<GridColumnProps>((col) => {
                if (col.isPositionField === true)
                    this.params.positionFieldName = col.propertyName;
                let ret: any = {};
                _.assign(ret, col);
                return ret;
            });

    }

    getRows(): T[] {
        return this.arrayObj;
    }

    getNewRow(): Promise<T> {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridArrayDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: T) {
        this.arrayObj.push(row);
    }

    deleteRow(rowData: T) {
        removeFromArray(this.arrayObj, rowData);
    }


    // openEditForm(grid: GridState<T>, rowData: T) {
    //
    //     if (!(rowData instanceof DesignedObject))
    //         throwError("Grid:openDeleteForm(): rowData must be 'DesignedObject'");
    //
    //     let designedObject = this.getDesignedObjectOfRow(rowData);
    //
    //     let win =
    //         <ObjectDesigner
    //             designedObject={designedObject}
    //             onSaveChanges={ () => { grid.refresh(); }}
    //         >
    //
    //         </ObjectDesigner>;
    //
    //     let openParam: OpenWindowParams = {
    //         title: "редактирование",
    //         autoPosition: "parent-center",
    //         parentWindowId: grid.component.getParentWindowId()
    //     };
    //
    //     grid.component.getParentDesktop().openWindow(win, openParam);
    //
    // }

}