import * as React from "react";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {GridColumnProps} from "./GridColumn";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "../../Error";
import {getGridColumnInfos} from "./getGridColumnInfos";
import {numberCompare} from "../../numberCompare";
import {removeFromArray, moveInArray, insertIntoArray} from "../../arrayUtils";
import {GridColumnGroupProps} from "./GridColumnGroup";
import {
    GridTreeDataSourceFromArrayParams, GridTreeDataSourceFromArray,
    InternalTreeNode
} from "./GridTreeDataSourceFromArray";
import {SqlDb, DataRow, DataTable} from "../../../buhta-sql/SqlDb";
import {SelectStmt} from "../../../buhta-sql/SelectStmt";
import {getInstantPromise} from "../../getInstantPromise";

export interface GridTreeDataSourceFromSqlTableParams extends GridTreeDataSourceFromArrayParams<DataRow> {
    arrayObj?: DataRow[];
    db: SqlDb;
    select: SelectStmt;
    tableName: string;
}

export class GridTreeDataSourceFromSqlTable extends GridTreeDataSourceFromArray<DataRow> {
    constructor(public params: GridTreeDataSourceFromSqlTableParams) {
        super(params);
    }

    getIsAsync() {
        return true;
    };

    protected isLoaded: boolean = false;

    refreshFromSql(): Promise<string> {
        this.isLoaded = false;
        return this.getRowsAsync().then(() => {
            return "Ok";
        });
    }

    getRowsAsync(): Promise<DataRow[]> {
        if (this.isLoaded) {
            return getInstantPromise<DataRow[]>(this.getRows());
            // return new Promise(
            //     (resolve: (obj: DataRow[]) => void, reject: (error: string) => void) => {
            //         resolve(this.getRows());
            //     });
        }
        else {
            return this.params.db.executeSQL(this.params.select)
                .then((tables: DataTable[]) => {
                    this.arrayObj = tables[0].rows;
                    this.createNodesFromParentKey();
                    return this.getRows();
                });
        }
    }


}