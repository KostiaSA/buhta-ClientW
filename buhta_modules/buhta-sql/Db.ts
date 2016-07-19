import * as _ from "lodash";
import * as io from "socket.io-client";
import {SelectStmt} from "./Sql2";
import {throwError} from "../buhta-core/Error";


// общее с client и server ------------------
export type SqlDialect = "mssql" | "pg";

export interface ExecuteSqlSocketRequest {
    queryId: string;
    dbName: string;
    sql: string;
}
export type SqlValueParseMode= "" | "Date";

export interface SqlAnswerColumn {
    name: string;
    parse: SqlValueParseMode;
}

export interface SqlAnswerRow {
    values: any[];
}

export interface ExecuteSqlSocketAnswer {
    columns?: SqlAnswerColumn[];
    rows?: SqlAnswerRow[];
    error?: string;
}
// общее с client и server ------------------

let socket = io.connect();

export class DataTable {
    columns: Array<DataColumn>;
    rows: Array<DataRow>;

    constructor() {
        this.columns = [];
        this.rows = [];
    }
}

export class DataColumn {
    name: string;
    //dataType: ColumnDataType;
    parse: SqlValueParseMode;

    constructor(public table: DataTable, name?: string) {
        this.name = name || "";

    }
}


export class DataRow {
    [index: string]: any;
    constructor(public $$table: DataTable) {
    }

    $$getValue(columnIndex: number): any {
        if (columnIndex < 0 || columnIndex >= this.$$table.columns.length)
            throw "DataRow.$$getValue(" + columnIndex + "): columnIndex out of range";

        return this[this.$$table.columns[columnIndex].name];
    }

    //[index: number]: DataType;
}


export class Db {
    dbName: string;
    dialect: SqlDialect;

    // ищет в объекте свойство с заданным именем в режиме case insensitive,
    // возвращает имя найденного свойства или null
    private getObjectPropNameCaseInsensitive(obj: any, propName: string): string | null {
        let upperPropName = propName.toUpperCase();
        for (let objProp in obj) {
            if (objProp.toUpperCase() === upperPropName)
                return objProp;
        }
        return null;
    }

    selectToObject<T>(sql: string | SelectStmt, obj: T, unknownProps: "error"|"ignore"|"assign" = "error"): Promise<any|string> {

        let promise: Promise<any|string> = new Promise(
            (resolve: (obj: T) => void, reject: (error: string) => void) => {
                this.executeSQL(sql)
                    .then((table: DataTable) => {
                            if (table.rows.length === 0)
                                reject("rows count === 0");
                            else {
                                let row = table.rows[0];
                                for (let prop in row) {
                                    if (prop.slice(0, 2) !== "$$") {
                                        if (obj.hasOwnProperty(prop))
                                            (obj as any)[prop] = row[prop];
                                        else {
                                            let realPropName = this.getObjectPropNameCaseInsensitive(obj, prop);
                                            if (!realPropName) {
                                                if (unknownProps === "assign")
                                                    (obj as any)[prop] = row[prop];
                                                else if (unknownProps === "error")
                                                    throwError("Db.selectToObject(): object property '" + prop + "' not found");
                                            }
                                            else
                                                (obj as any)[realPropName] = row[prop];
                                        }
                                    }
                                }
                                resolve(obj);
                            }
                        }
                    )
                    .catch((error) => {
                        reject(error);
                    });

            }
        );

        return promise;

        // return this.executeSQL(sql).then((table: DataTable) => {
        //     if (table.rows.length === 0)
        //         throwError("table.rows.length===0");
        //     else
        //         obj.xxx = table.rows[0].getValue(0);
        // });
    }

    executeSQL(sql: string | SelectStmt): Promise<DataTable|string> {

        let getSqlText = (): string => {
            if (sql instanceof SelectStmt)
                return sql.toSql(this.dialect);
            else if (_.isString(sql))
                return sql;
            else {
                throwError("Db.executeSql(): invalid sql type");
                throw  "fake";
            }
        };

        let promise: Promise<DataTable|string> = new Promise(
            (resolve: (str: DataTable) => void, reject: (error: string) => void) => {
                //const a: string = "hello from Promise";
                //resolve(a);
                let queryId = "query-" + Math.random().toString(36).slice(2);


                let req: ExecuteSqlSocketRequest = {
                    dbName: this.dbName,
                    sql: getSqlText(),
                    queryId: queryId
                };

                socket.emit("executeSQL", req);
                socket.once(queryId, (response: ExecuteSqlSocketAnswer) => {

                    if (response.error) {
                        reject(response.error);
                    }
                    else {
                        let dataTable = new DataTable();

                        for (let i = 0; i < response.columns!.length; i++) {
                            let dataColumn = new DataColumn(dataTable, response.columns![i].name);
                            dataColumn.parse = response.columns![i].parse;
                            dataTable.columns.push(dataColumn);
                        }

                        response.rows!.forEach((row: any) => {

                            let dataRow = new DataRow(dataTable);

                            for (let i = 0; i < dataTable.columns.length; i++) {
                                if (response.columns![i].parse === "Date")
                                    dataRow[dataTable.columns[i].name] = new Date(row[i]);
                                else
                                    dataRow[dataTable.columns[i].name] = row[i];
                                //dataRow[i] = row[i];
                            }

                            dataTable.rows.push(dataRow);
                        });

                        resolve(dataTable);
                    }

                });


            }
        );
        //let promise: JQueryDeferred<DataTable>;
        //promise = $.Deferred<DataTable>();

        //  socket.once('connect',() => {
        return promise;
    }

    // executeSQL(sql: string): JQueryPromise<DataTable|string> {
    //
    //     let promise: JQueryDeferred<DataTable>;
    //     promise = $.Deferred<DataTable>();
    //
    //     //  socket.once('connect',() => {
    //     let queryId = "query-" + Math.random().toString(36).slice(2);
    //     let req: ExecuteSqlSocketRequest = {
    //         dbName: this.dbName,
    //         sql: sql,
    //         queryId: queryId
    //     };
    //
    //     socket.emit("executeSQL", req);
    //     socket.once(queryId, (response: ExecuteSqlSocketAnswer) => {
    //
    //         if (response.error) {
    //             promise.reject(response.error);
    //         }
    //         else {
    //             let dataTable = new DataTable();
    //
    //             for (let i = 0; i < response.columns!.length; i++) {
    //                 let dataColumn = new DataColumn(dataTable, response.columns![i].name);
    //                 dataTable.columns.push(dataColumn);
    //             }
    //
    //             response.rows!.forEach((row: any) => {
    //
    //                 let dataRow = new DataRow(dataTable);
    //
    //                 for (let i = 0; i < dataTable.columns.length; i++) {
    //                     if (response.columns![i].parse === "D")
    //                         dataRow[dataTable.columns[i].name] = new Date(row[i]);
    //                     else
    //                         dataRow[dataTable.columns[i].name] = row[i];
    //                     //dataRow[i] = row[i];
    //                 }
    //
    //                 dataTable.rows.push(dataRow);
    //             });
    //
    //             promise.resolve(dataTable);
    //         }
    //
    //     });
    //     return promise;
    // }
}