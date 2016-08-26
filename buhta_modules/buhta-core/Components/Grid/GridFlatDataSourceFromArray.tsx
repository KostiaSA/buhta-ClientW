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

export interface GridFlatDataSourceFromArrayParams<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject>
extends GridBaseDataSourceParams<TRow,TDesignedObject> {
    arrayObj: TRow[];
    positionFieldName?: string;  // sort
//    getNewRow?: () => Promise<TRow>;
//    getEmptyDataSourceMessage?: () => React.ReactNode;
//    getDeleteRowMessage?: () => React.ReactNode;
//    gridColumns?: GridColumns;

}

export class GridFlatDataSourceFromArray<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject>
extends GridBaseDataSource<TRow,TDesignedObject> implements GridDataSource<TRow,TDesignedObject> {
    constructor(public params: GridFlatDataSourceFromArrayParams<TRow,TDesignedObject>) {
        super(params);
        // this.arrayObj = params.arrayObj;//.filter((item) => item !== undefined);

    }

    // private arrayObj: TRow[];

    getIsAsync() {
        return false;
    };

    getRowsAsync(): Promise<TRow[]> {
        throwAbstractError();
        throw "fake";
    }

    getGridColumns(): GridColumns {
        if (this.params.gridColumns !== undefined)
            return this.params.gridColumns;
        else if (this.params.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos(this.params.arrayObj[0]).map<GridColumnProps>((col) => {
                if (col.isPositionField === true)
                    this.params.positionFieldName = col.propertyName;
                let ret: any = {};
                _.assign(ret, col);
                return ret;
            });

    }

    getRows(): TRow[] {
        return this.params.arrayObj.filter((item) => item !== undefined);
        //return this.arrayObj;
    }

    // getNewRow(): Promise<TRow> {
    //     if (this.params.getNewRow)
    //         return this.params.getNewRow();
    //     else {
    //         throwError("GridFlatDataSourceFromArray: function 'getNewRow' is not defined");
    //         throw  "";  // fake typescript 2
    //     }
    // }

    addRow(row: TRow) {
        this.params.arrayObj.push(row);
    }

    deleteRow(rowData: TRow) {
        removeFromArray(this.params.arrayObj, rowData);
    }

    canDropInto(dragRowData: TRow, targetRowData: TRow, mode: "move" | "copy"): boolean {
        return false;
    }


}