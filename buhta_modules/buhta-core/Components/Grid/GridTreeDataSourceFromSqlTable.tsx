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
import {UpdateStmt} from "../../../buhta-sql/UpdateStmt";
import {SqlGuidValue, SqlNumberValue} from "../../../buhta-sql/SqlCore";

export interface GridTreeDataSourceFromSqlTableParams<TDesignedObject extends DesignedObject> extends GridTreeDataSourceFromArrayParams<DataRow,TDesignedObject> {
    arrayObj?: DataRow[];
    db: SqlDb;
    select: SelectStmt;
    tableName: string;
}

export class GridTreeDataSourceFromSqlTable<TDesignedObject extends DesignedObject> extends GridTreeDataSourceFromArray<DataRow,TDesignedObject> {
    constructor(public params: GridTreeDataSourceFromSqlTableParams<TDesignedObject>) {
        super(params);

        if (params.onDragDropUpdate === undefined)
            params.onDragDropUpdate = this.onDragDropUpdate;
    }

    // стандартная обработка подразумевает, что id и parent - это Guid, а position - number
    onDragDropUpdate = (rowKey: string, rowFieldName: string, newFieldValue: any): void => {
        let sql: UpdateStmt;

        if (rowFieldName === this.params.positionFieldName) {
            sql = new UpdateStmt(this.params.tableName)
                .column(rowFieldName, new SqlNumberValue(newFieldValue))
                .where(this.params.keyFieldName, "=", new SqlGuidValue(rowKey));
        }
        else {
            sql = new UpdateStmt(this.params.tableName)
                .column(rowFieldName, new SqlGuidValue(newFieldValue))
                .where(this.params.keyFieldName, "=", new SqlGuidValue(rowKey));
        }

        this.params.db.executeSQL(sql)
            .catch((error) => {
                alert("Ошибка DragDrop: " + error);
            });
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