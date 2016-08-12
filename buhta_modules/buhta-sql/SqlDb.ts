import * as _ from "lodash";
import * as uuid from "UUID";
import * as moment from "moment";

import {throwError} from "../buhta-core/Error";
import {SelectStmt} from "./SelectStmt";
import {SqlDialect, SqlStmt} from "./SqlCore";
import {getConnectionId} from "../buhta-core/getConnectionId";
import {checkAuth} from "../buhta-core/Auth";
import {socket} from "../buhta-core/Socket";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";


// общее с client и server ------------------

export interface AuthSocketRequest {
    connectionId: string;
    queryId: string;
    login: string;
    password: string;
}

export interface ExecuteSqlSocketRequest {
    connectionId: string;
    queryId: string;
    dbName: string;
    sql: string;
}

export interface ExecuteSqlBatchSocketRequest {
    connectionId: string;
    queryId: string;
    dbName: string;
    sql: string[];
}

export type SqlBatchItem= string | SqlStmt | (string | SqlStmt)[];
export type SqlBatch= SqlBatchItem | SqlBatchItem [] ;

export type SqlValueParseMode= "" | "Date";

export interface SqlAnswerColumn {
    name: string;
    parse: SqlValueParseMode;
}

export interface SqlAnswerRow {
    values: any[];
}

export interface AuthSocketAnswer {
    error?: string;
    userId?: string;
}

export interface ExecuteSqlSocketAnswer {
    columns?: SqlAnswerColumn[];
    rows?: SqlAnswerRow[];
    error?: string;
}

export interface ExecuteSqlBatchSocketAnswer {
    answers?: ExecuteSqlSocketAnswer[];
    error?: string;
    errorSql?: string;
}
// общее с client и server ------------------

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
    type: string;  // для mssql
    length: number;
    mysqlDataType: number;  // для mysql
    isDateTime: boolean;
    isOnlyDate: boolean;
    dataTypeID: number; // для pg;
    isGuid: boolean;
    charsetNr: number;
    isPgBigInt: boolean;

    constructor(public table: DataTable) {
    }
}


export class DataRow extends DesignedObject {
    [index: string]: any;
    constructor(public $$table: DataTable) {
        super();
    }

    $$getValue(columnIndex: number): any {
        if (columnIndex < 0 || columnIndex >= this.$$table.columns.length)
            throw "DataRow.$$getValue(" + columnIndex + "): columnIndex out of range";

        return this[this.$$table.columns[columnIndex].name];
    }

    //[index: number]: DataType;
}


export class SqlDb {

    constructor(dbName?: string, dialect?: SqlDialect) {
        if (dbName)
            this.dbName = dbName;
        if (dialect)
            this.dialect = dialect;
    }

    dbName: string;
    dialect: SqlDialect

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

    // updateFromObject(sql: string | UpdateStmt, obj: any, unknownRecord: "error"|"ignore"|"insert" = "error"): Promise<"ok"|string> {
    //
    // }


    selectToObject<T>(sql: SqlBatch, obj: T, unknownProps: "error"|"ignore"|"assign" = "error"): Promise<any|string> {

        let promise: Promise<any|string> = new Promise(
            (resolve: (obj: T) => void, reject: (error: string) => void) => {
                this.executeSQL(sql)
                    .then((table: DataTable[]) => {
                            if (table[0].rows.length === 0)
                                reject("rows count === 0");
                            else {
                                let row = table[0].rows[0];
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
                                                    throwError("SqlDb.selectToObject(): object property '" + prop + "' not found");
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

    // executeSQL(sql: string | SqlStmt): Promise<DataTable|string> {
    //
    //     let getSqlText = (): string => {
    //         if ((sql as SqlStmt).toSql)
    //             return (sql as SqlStmt).toSql(this.dialect);
    //         else if (_.isString(sql))
    //             return sql;
    //         else {
    //             throwError("SqlDb.executeSql(): invalid sql type");
    //             throw  "fake";
    //         }
    //     };
    //
    //     let promise: Promise<DataTable|string> = new Promise(
    //         (resolve: (str: DataTable) => void, reject: (error: string) => void) => {
    //             let queryId = "query-" + Math.random().toString(36).slice(2);
    //
    //             let req: ExecuteSqlSocketRequest = {
    //                 connectionId: getConnectionId(),
    //                 dbName: this.dbName,
    //                 sql: getSqlText(),
    //                 queryId: queryId
    //             };
    //
    //             socket.emit("executeSQL", req);
    //
    //             socket.once(queryId, (response: ExecuteSqlSocketAnswer) => {
    //
    //                     if (response.error) {
    //                         reject(response.error);
    //                     }
    //                     else {
    //                         let dataTable = new DataTable();
    //
    //                         if (response.columns) {
    //                             for (let i = 0; i < response.columns!.length; i++) {
    //                                 let dataColumn = new DataColumn(dataTable);
    //                                 _.assign(dataColumn, response.columns![i]);
    //                                 if (this.dialect === "mssql") {
    //                                     //////////////////////////////////
    //                                     // export var TYPES: {
    //                                     //     VarChar:          sqlTypeFactoryWithLength;
    //                                     //     NVarChar:         sqlTypeFactoryWithLength;
    //                                     //     Text:             sqlTypeFactoryWithNoParams;
    //                                     //     Int:              sqlTypeFactoryWithNoParams;
    //                                     //     BigInt:           sqlTypeFactoryWithNoParams;
    //                                     //     TinyInt:          sqlTypeFactoryWithNoParams;
    //                                     //     SmallInt:         sqlTypeFactoryWithNoParams;
    //                                     //     Bit:              sqlTypeFactoryWithNoParams;
    //                                     //     Float:            sqlTypeFactoryWithNoParams;
    //                                     //     Numeric:          sqlTypeFactoryWithPrecisionScale;
    //                                     //     Decimal:          sqlTypeFactoryWithPrecisionScale;
    //                                     //     Real:             sqlTypeFactoryWithNoParams;
    //                                     //     Date:             sqlTypeFactoryWithNoParams;
    //                                     //     DateTime:         sqlTypeFactoryWithNoParams;
    //                                     //     DateTime2:        sqlTypeFactoryWithScale;
    //                                     //     DateTimeOffset:   sqlTypeFactoryWithScale;
    //                                     //     SmallDateTime:    sqlTypeFactoryWithNoParams;
    //                                     //     Time:             sqlTypeFactoryWithScale;
    //                                     //     UniqueIdentifier: sqlTypeFactoryWithNoParams;
    //                                     //     SmallMoney:       sqlTypeFactoryWithNoParams;
    //                                     //     Money:            sqlTypeFactoryWithNoParams;
    //                                     //     Binary:           sqlTypeFactoryWithNoParams;
    //                                     //     VarBinary:        sqlTypeFactoryWithLength;
    //                                     //     Image:            sqlTypeFactoryWithNoParams;
    //                                     //     Xml:              sqlTypeFactoryWithNoParams;
    //                                     //     Char:             sqlTypeFactoryWithLength;
    //                                     //     NChar:            sqlTypeFactoryWithLength;
    //                                     //     NText:            sqlTypeFactoryWithNoParams;
    //                                     //     TVP:              sqlTypeFactoryWithTvpType;
    //                                     //     UDT:              sqlTypeFactoryWithNoParams;
    //                                     //     Geography:        sqlTypeFactoryWithNoParams;
    //                                     //     Geometry:         sqlTypeFactoryWithNoParams;
    //                                     // };
    //                                     //////////////////////////////////
    //                                     if (dataColumn.type) {  // !!! у double почему-то не заполнен type, херня какая-то
    //                                         if (dataColumn.type.indexOf("Date") >= 0 || dataColumn.type.indexOf("Time") >= 0) {
    //                                             dataColumn.isDateTime = true;
    //                                         }
    //                                         if (dataColumn.type === "Date") {
    //                                             dataColumn.isOnlyDate = true;
    //                                         }
    //                                         if (dataColumn.type === "UniqueIdentifier") {
    //                                             dataColumn.isGuid = true;
    //                                         }
    //                                     }
    //                                 }
    //                                 else if (this.dialect === "pg") {
    //                                     ///////////////////////////////////
    //                                     //     Bool        ->   16
    //                                     //     ByteA       ->   17
    //                                     //     Char        ->   18
    //                                     //     Name        ->   19
    //                                     //     Int8        ->   20
    //                                     //     Int2        ->   21
    //                                     //     Int4        ->   23
    //                                     //     RegProc     ->   24
    //                                     //     Text        ->   25
    //                                     //     Oid         ->   26
    //                                     //     Tid         ->   27
    //                                     //     Xid         ->   28
    //                                     //     Cid         ->   29
    //                                     //     Xml         ->  142
    //                                     //     Point       ->  600
    //                                     //     LSeg        ->  601
    //                                     //     Path        ->  602
    //                                     //     Box         ->  603
    //                                     //     Polygon     ->  604
    //                                     //     Line        ->  628
    //                                     //     Cidr        ->  650
    //                                     //     Float4      ->  700
    //                                     //     Float8      ->  701
    //                                     //     AbsTime     ->  702
    //                                     //     RelTime     ->  703
    //                                     //     TInterval   ->  704
    //                                     //     Unknown     ->  705
    //                                     //     Circle      ->  718
    //                                     //     Money       ->  790
    //                                     //     MacAddr     ->  829
    //                                     //     Inet        ->  869
    //                                     //     BpChar      -> 1042
    //                                     //     VarChar     -> 1043
    //                                     //     Date        -> 1082
    //                                     //     Time        -> 1083
    //                                     //     Timestamp   -> 1114
    //                                     //     TimestampTZ -> 1184
    //                                     //     Interval    -> 1186
    //                                     //     TimeTZ      -> 1266
    //                                     //     Bit         -> 1560
    //                                     //     VarBit      -> 1562
    //                                     //     Numeric     -> 1700
    //                                     //     RefCursor   -> 1790
    //                                     //     Record      -> 2249
    //                                     //     Void        -> 2278
    //                                     //     UUID        -> 2950
    //                                     //     JSON        ->  114
    //                                     //     JSONB       -> 3802
    //                                     // /////////////////////////////////
    //                                     if (
    //                                         dataColumn.dataTypeID === 1082 ||
    //                                         dataColumn.dataTypeID === 1083 ||
    //                                         dataColumn.dataTypeID === 1114 ||
    //                                         dataColumn.dataTypeID === 1184 ||
    //                                         dataColumn.dataTypeID === 1186 ||
    //                                         dataColumn.dataTypeID === 1266 ||
    //                                         dataColumn.dataTypeID === 702 ||
    //                                         dataColumn.dataTypeID === 703
    //                                     ) {
    //                                         dataColumn.isDateTime = true;
    //                                     }
    //                                     if (dataColumn.dataTypeID === 1082) {
    //                                         dataColumn.isOnlyDate = true;
    //                                     }
    //                                     if (dataColumn.dataTypeID === 2950) {
    //                                         dataColumn.isGuid = true;
    //                                     }
    //
    //                                 }
    //                                 else if (this.dialect === "mysql") {
    //                                     ////////////////////////
    //                                     // int	BIT = 16
    //                                     // int	BLOB = 252
    //                                     // int	CHAR = 1
    //                                     // int	DATE = 10
    //                                     // int	DATETIME = 12
    //                                     // int	DECIMAL = 0
    //                                     // int	DOUBLE = 5
    //                                     // int	ENUM = 247
    //                                     // int	FLOAT = 4
    //                                     // int	GEOMETRY = 255
    //                                     // int	INT24 = 9
    //                                     // int	INTERVAL = 247
    //                                     // int	LONG = 3
    //                                     // int	LONG_BLOB = 251
    //                                     // int	LONGLONG = 8
    //                                     // int	MEDIUM_BLOB = 250
    //                                     // int	NEWDATE = 14
    //                                     // int	NEWDECIMAL = 246
    //                                     // int	NULL = 6
    //                                     // int	SET = 248
    //                                     // int	SHORT = 2
    //                                     // int	STRING = 254
    //                                     // int	TIME = 11
    //                                     // int	TIMESTAMP = 7
    //                                     // int	TINY = 1
    //                                     // int	TINY_BLOB = 249
    //                                     // int	VAR_STRING = 253
    //                                     // int	VARCHAR = 15
    //                                     // int	YEAR = 13
    //                                     ////////////////////////
    //                                     dataColumn.mysqlDataType = dataColumn.type as any;
    //                                     if (
    //                                         dataColumn.mysqlDataType === 10 ||
    //                                         dataColumn.mysqlDataType === 12 ||
    //                                         dataColumn.mysqlDataType === 247 ||
    //                                         dataColumn.mysqlDataType === 11 ||
    //                                         dataColumn.mysqlDataType === 7
    //                                     ) {
    //                                         dataColumn.isDateTime = true;
    //                                     }
    //                                     if (dataColumn.mysqlDataType === 10) {
    //                                         dataColumn.isOnlyDate = true;
    //                                     }
    //                                     if (dataColumn.mysqlDataType === 253 &&
    //                                         dataColumn.length === 16 &&
    //                                         dataColumn.charsetNr === 63) {
    //                                         dataColumn.isGuid = true;
    //                                     }
    //                                 }
    //                                 dataTable.columns.push(dataColumn);
    //                             }
    //                         }
    //
    //                         if (response.rows) {
    //                             response.rows!.forEach((row: any) => {
    //
    //                                 let dataRow = new DataRow(dataTable);
    //
    //                                 dataTable.columns.forEach((col, index) => {
    //                                     if (col.isDateTime) {
    //                                         dataRow[col.name] = new Date(row[index]);
    //                                         if (col.isOnlyDate)
    //                                             dataRow[col.name].setHours(0, 0, 0, 0);
    //                                         else {
    //                                             if (this.dialect === "mssql") { // mssql - убираем timezone
    //                                                 dataRow[col.name] = moment(dataRow[col.name]).add((dataRow[col.name] as Date).getTimezoneOffset(), "minutes").toDate();
    //                                             }
    //                                         }
    //
    //                                     }
    //                                     else if (col.isGuid) {
    //                                         if (this.dialect === "mysql") {
    //                                             dataRow[col.name] = (uuid as any).unparse(new Uint8Array(row[index]));
    //                                         }
    //                                         else
    //                                             dataRow[col.name] = row[index].toLowerCase();
    //                                     }
    //                                     else
    //                                         dataRow[col.name] = row[index];
    //
    //                                 });
    //
    //                                 dataTable.rows.push(dataRow);
    //                             });
    //                         }
    //
    //                         resolve(dataTable);
    //                     }
    //
    //                 }
    //             );
    //
    //
    //         }
    //     );
    //     return promise;
    // }

    // executeSQL(sql: string | SqlStmt | (string | SqlStmt)[]): Promise<DataTable|string> {
    //
    //     return checkAuth()
    //         .then(() => {
    //             let getSqlText = (): string => {
    //                 if ((sql as SqlStmt).toSql)
    //                     return (sql as SqlStmt).toSql(this.dialect);
    //                 else if (_.isString(sql))
    //                     return sql;
    //                 else {
    //                     throwError("SqlDb.executeSql(): invalid sql type");
    //                     throw  "fake";
    //                 }
    //             };
    //
    //             let promise: Promise<DataTable|string> = new Promise(
    //                 (resolve: (str: DataTable) => void, reject: (error: string) => void) => {
    //                     let queryId = "query-" + Math.random().toString(36).slice(2);
    //
    //                     let req: ExecuteSqlSocketRequest = {
    //                         connectionId: getConnectionId(),
    //                         dbName: this.dbName,
    //                         sql: getSqlText(),
    //                         queryId: queryId
    //                     };
    //
    //                     socket.emit("executeSql", req);
    //
    //                     socket.once(queryId, (response: ExecuteSqlSocketAnswer) => {
    //
    //                             if (response.error) {
    //                                 reject(response.error);
    //                             }
    //                             else {
    //                                 let dataTable = new DataTable();
    //
    //                                 if (response.columns) {
    //                                     for (let i = 0; i < response.columns!.length; i++) {
    //                                         let dataColumn = new DataColumn(dataTable);
    //                                         _.assign(dataColumn, response.columns![i]);
    //                                         if (this.dialect === "mssql") {
    //                                             //////////////////////////////////
    //                                             // export var TYPES: {
    //                                             //     VarChar:          sqlTypeFactoryWithLength;
    //                                             //     NVarChar:         sqlTypeFactoryWithLength;
    //                                             //     Text:             sqlTypeFactoryWithNoParams;
    //                                             //     Int:              sqlTypeFactoryWithNoParams;
    //                                             //     BigInt:           sqlTypeFactoryWithNoParams;
    //                                             //     TinyInt:          sqlTypeFactoryWithNoParams;
    //                                             //     SmallInt:         sqlTypeFactoryWithNoParams;
    //                                             //     Bit:              sqlTypeFactoryWithNoParams;
    //                                             //     Float:            sqlTypeFactoryWithNoParams;
    //                                             //     Numeric:          sqlTypeFactoryWithPrecisionScale;
    //                                             //     Decimal:          sqlTypeFactoryWithPrecisionScale;
    //                                             //     Real:             sqlTypeFactoryWithNoParams;
    //                                             //     Date:             sqlTypeFactoryWithNoParams;
    //                                             //     DateTime:         sqlTypeFactoryWithNoParams;
    //                                             //     DateTime2:        sqlTypeFactoryWithScale;
    //                                             //     DateTimeOffset:   sqlTypeFactoryWithScale;
    //                                             //     SmallDateTime:    sqlTypeFactoryWithNoParams;
    //                                             //     Time:             sqlTypeFactoryWithScale;
    //                                             //     UniqueIdentifier: sqlTypeFactoryWithNoParams;
    //                                             //     SmallMoney:       sqlTypeFactoryWithNoParams;
    //                                             //     Money:            sqlTypeFactoryWithNoParams;
    //                                             //     Binary:           sqlTypeFactoryWithNoParams;
    //                                             //     VarBinary:        sqlTypeFactoryWithLength;
    //                                             //     Image:            sqlTypeFactoryWithNoParams;
    //                                             //     Xml:              sqlTypeFactoryWithNoParams;
    //                                             //     Char:             sqlTypeFactoryWithLength;
    //                                             //     NChar:            sqlTypeFactoryWithLength;
    //                                             //     NText:            sqlTypeFactoryWithNoParams;
    //                                             //     TVP:              sqlTypeFactoryWithTvpType;
    //                                             //     UDT:              sqlTypeFactoryWithNoParams;
    //                                             //     Geography:        sqlTypeFactoryWithNoParams;
    //                                             //     Geometry:         sqlTypeFactoryWithNoParams;
    //                                             // };
    //                                             //////////////////////////////////
    //                                             if (dataColumn.type) {  // !!! у double почему-то не заполнен type, херня какая-то
    //                                                 if (dataColumn.type.indexOf("Date") >= 0 || dataColumn.type.indexOf("Time") >= 0) {
    //                                                     dataColumn.isDateTime = true;
    //                                                 }
    //                                                 if (dataColumn.type === "Date") {
    //                                                     dataColumn.isOnlyDate = true;
    //                                                 }
    //                                                 if (dataColumn.type === "UniqueIdentifier") {
    //                                                     dataColumn.isGuid = true;
    //                                                 }
    //                                             }
    //                                         }
    //                                         else if (this.dialect === "pg") {
    //                                             ///////////////////////////////////
    //                                             //     Bool        ->   16
    //                                             //     ByteA       ->   17
    //                                             //     Char        ->   18
    //                                             //     Name        ->   19
    //                                             //     Int8        ->   20
    //                                             //     Int2        ->   21
    //                                             //     Int4        ->   23
    //                                             //     RegProc     ->   24
    //                                             //     Text        ->   25
    //                                             //     Oid         ->   26
    //                                             //     Tid         ->   27
    //                                             //     Xid         ->   28
    //                                             //     Cid         ->   29
    //                                             //     Xml         ->  142
    //                                             //     Point       ->  600
    //                                             //     LSeg        ->  601
    //                                             //     Path        ->  602
    //                                             //     Box         ->  603
    //                                             //     Polygon     ->  604
    //                                             //     Line        ->  628
    //                                             //     Cidr        ->  650
    //                                             //     Float4      ->  700
    //                                             //     Float8      ->  701
    //                                             //     AbsTime     ->  702
    //                                             //     RelTime     ->  703
    //                                             //     TInterval   ->  704
    //                                             //     Unknown     ->  705
    //                                             //     Circle      ->  718
    //                                             //     Money       ->  790
    //                                             //     MacAddr     ->  829
    //                                             //     Inet        ->  869
    //                                             //     BpChar      -> 1042
    //                                             //     VarChar     -> 1043
    //                                             //     Date        -> 1082
    //                                             //     Time        -> 1083
    //                                             //     Timestamp   -> 1114
    //                                             //     TimestampTZ -> 1184
    //                                             //     Interval    -> 1186
    //                                             //     TimeTZ      -> 1266
    //                                             //     Bit         -> 1560
    //                                             //     VarBit      -> 1562
    //                                             //     Numeric     -> 1700
    //                                             //     RefCursor   -> 1790
    //                                             //     Record      -> 2249
    //                                             //     Void        -> 2278
    //                                             //     UUID        -> 2950
    //                                             //     JSON        ->  114
    //                                             //     JSONB       -> 3802
    //                                             // /////////////////////////////////
    //                                             if (
    //                                                 dataColumn.dataTypeID === 1082 ||
    //                                                 dataColumn.dataTypeID === 1083 ||
    //                                                 dataColumn.dataTypeID === 1114 ||
    //                                                 dataColumn.dataTypeID === 1184 ||
    //                                                 dataColumn.dataTypeID === 1186 ||
    //                                                 dataColumn.dataTypeID === 1266 ||
    //                                                 dataColumn.dataTypeID === 702 ||
    //                                                 dataColumn.dataTypeID === 703
    //                                             ) {
    //                                                 dataColumn.isDateTime = true;
    //                                             }
    //                                             if (dataColumn.dataTypeID === 1082) {
    //                                                 dataColumn.isOnlyDate = true;
    //                                             }
    //                                             if (dataColumn.dataTypeID === 2950) {
    //                                                 dataColumn.isGuid = true;
    //                                             }
    //
    //                                         }
    //                                         else if (this.dialect === "mysql") {
    //                                             ////////////////////////
    //                                             // int	BIT = 16
    //                                             // int	BLOB = 252
    //                                             // int	CHAR = 1
    //                                             // int	DATE = 10
    //                                             // int	DATETIME = 12
    //                                             // int	DECIMAL = 0
    //                                             // int	DOUBLE = 5
    //                                             // int	ENUM = 247
    //                                             // int	FLOAT = 4
    //                                             // int	GEOMETRY = 255
    //                                             // int	INT24 = 9
    //                                             // int	INTERVAL = 247
    //                                             // int	LONG = 3
    //                                             // int	LONG_BLOB = 251
    //                                             // int	LONGLONG = 8
    //                                             // int	MEDIUM_BLOB = 250
    //                                             // int	NEWDATE = 14
    //                                             // int	NEWDECIMAL = 246
    //                                             // int	NULL = 6
    //                                             // int	SET = 248
    //                                             // int	SHORT = 2
    //                                             // int	STRING = 254
    //                                             // int	TIME = 11
    //                                             // int	TIMESTAMP = 7
    //                                             // int	TINY = 1
    //                                             // int	TINY_BLOB = 249
    //                                             // int	VAR_STRING = 253
    //                                             // int	VARCHAR = 15
    //                                             // int	YEAR = 13
    //                                             ////////////////////////
    //                                             dataColumn.mysqlDataType = dataColumn.type as any;
    //                                             if (
    //                                                 dataColumn.mysqlDataType === 10 ||
    //                                                 dataColumn.mysqlDataType === 12 ||
    //                                                 dataColumn.mysqlDataType === 247 ||
    //                                                 dataColumn.mysqlDataType === 11 ||
    //                                                 dataColumn.mysqlDataType === 7
    //                                             ) {
    //                                                 dataColumn.isDateTime = true;
    //                                             }
    //                                             if (dataColumn.mysqlDataType === 10) {
    //                                                 dataColumn.isOnlyDate = true;
    //                                             }
    //                                             if ((dataColumn.mysqlDataType === 253 || dataColumn.mysqlDataType === 254) &&
    //                                                 dataColumn.length === 16 &&
    //                                                 dataColumn.charsetNr === 63) {
    //                                                 dataColumn.isGuid = true;
    //                                             }
    //                                             //console.log(dataColumn);
    //                                         }
    //                                         dataTable.columns.push(dataColumn);
    //                                     }
    //                                 }
    //
    //                                 if (response.rows) {
    //                                     response.rows!.forEach((row: any) => {
    //
    //                                         let dataRow = new DataRow(dataTable);
    //
    //                                         dataTable.columns.forEach((col, index) => {
    //                                             if (col.isDateTime) {
    //                                                 dataRow[col.name] = new Date(row[index]);
    //                                                 if (col.isOnlyDate)
    //                                                     dataRow[col.name].setHours(0, 0, 0, 0);
    //                                                 else {
    //                                                     if (this.dialect === "mssql") { // mssql - убираем timezone
    //                                                         dataRow[col.name] = moment(dataRow[col.name]).add((dataRow[col.name] as Date).getTimezoneOffset(), "minutes").toDate();
    //                                                     }
    //                                                 }
    //
    //                                             }
    //                                             else if (col.isGuid) {
    //                                                 if (this.dialect === "mysql") {
    //                                                     if (_.isArrayBuffer(row[index]))
    //                                                         dataRow[col.name] = (uuid as any).unparse(new Uint8Array(row[index]));
    //                                                     else
    //                                                         dataRow[col.name] = row[index];
    //                                                 }
    //                                                 else
    //                                                     dataRow[col.name] = row[index].toLowerCase();
    //                                             }
    //                                             else
    //                                                 dataRow[col.name] = row[index];
    //
    //                                         });
    //
    //                                         dataTable.rows.push(dataRow);
    //                                     });
    //                                 }
    //
    //                                 resolve(dataTable);
    //                             }
    //
    //                         }
    //                     );
    //
    //
    //                 }
    //             );
    //             return promise;
    //         });
    //
    // }


    private sqlBatchToStringArray(sql: SqlBatch, dialect: SqlDialect): string[] {
        let ret: string[] = [];
        if (_.isString(sql))
            ret.push(<string>sql);
        else if ((<SqlStmt>sql).toSql) {
            ret.push(...this.sqlBatchToStringArray((<SqlStmt>sql).toSql(dialect), dialect));
        }
        else if (_.isArray(sql)) {
            sql.forEach((sqlItem) => {
                ret.push(...this.sqlBatchToStringArray(sqlItem, dialect));
            });
        }
        return ret;
    }

    selectToBoolean(sql: SqlBatch): Promise<boolean|string> {
        return this.executeSQL(sql)
            .then((tables: DataTable[]) => {
                    if (tables[0].rows.length === 0)
                        throwError("rows count === 0");
                    else {
                        let value = tables[0].rows[0].$$getValue(0);
                        if (value === 0 || value === "false")
                            return false;
                        else if (value === 1 || value === "true")
                            return true;
                        else {
//                            console.log(value);
                            throwError("SqlDb.selectToBoolean(): select result should be 0, 1, 'true' or 'false'");
                        }
                    }
                }
            ) as Promise<boolean|string>;

    }

    selectToString(sql: SqlBatch): Promise<string|string> {
        return this.executeSQL(sql)
            .then((tables: DataTable[]) => {
                    if (tables[0].rows.length === 0)
                        throwError("rows count === 0");
                    else {
                        let value = tables[0].rows[0].$$getValue(0);
                        if (value === null || _.isString(value))
                            return value;
                        else
                            throwError("SqlDb.selectToString(): select result should be a string");
                    }
                }
            ) as Promise<string|string>;

    }

    selectToNumber(sql: SqlBatch): Promise<number|string> {
        return this.executeSQL(sql)
            .then((tables: DataTable[]) => {
                    if (tables[0].rows.length === 0)
                        throwError("rows count === 0");
                    else {
                        let value = tables[0].rows[0].$$getValue(0);
                        if (value === null || _.isNumber(value))
                            return value;
                        else
                            throwError("SqlDb.selectToNumber(): select result should be a number");
                    }
                }
            ) as Promise<number|string>;

    }

    selectToDate(sql: SqlBatch): Promise<Date|string> {
        return this.executeSQL(sql)
            .then((tables: DataTable[]) => {
                    if (tables[0].rows.length === 0)
                        throwError("rows count === 0");
                    else {
                        let value = tables[0].rows[0].$$getValue(0);
                        if (value === null || _.isDate(value))
                            return value;
                        else
                            throwError("SqlDb.selectToDate(): select result should be a date/time");
                    }
                }
            ) as Promise<Date|string>;

    }

    executeSQL(sql: SqlBatch): Promise<DataTable[]|string> {

        return checkAuth()
            .then(() => {
                // let getSqlText = (): string[] => {
                //     return sql.map((_sql: any) => {
                //         if ((_sql as SqlStmt).toSql)
                //             return (_sql as SqlStmt).toSql(this.dialect);
                //         else if (_.isString(_sql))
                //             return _sql;
                //     });
                // };

                let promise: Promise<DataTable[]|string> = new Promise(
                    (resolve: (str: DataTable[]) => void, reject: (error: string) => void) => {
                        let queryId = "query-" + Math.random().toString(36).slice(2);

                        let req: ExecuteSqlBatchSocketRequest = {
                            connectionId: getConnectionId(),
                            dbName: this.dbName,
                            sql: this.sqlBatchToStringArray(sql, this.dialect),
                            queryId: queryId
                        };

                        //console.log(this.dialect);
                        //console.log(req.sql);

                        socket.emit("executeSqlBatch", req);

                        socket.once(queryId, (_response: ExecuteSqlBatchSocketAnswer) => {

                                if (_response.error) {
                                    reject(_response.error);
                                }
                                else {

                                    let dataTables = _response.answers!.map<DataTable>((response) => {
                                        let dataTable = new DataTable();
                                        if (response.columns) {
                                            for (let i = 0; i < response.columns!.length; i++) {
                                                let dataColumn = new DataColumn(dataTable);
                                                _.assign(dataColumn, response.columns![i]);
                                                if (this.dialect === "mssql") {
                                                    //////////////////////////////////
                                                    // export var TYPES: {
                                                    //     VarChar:          sqlTypeFactoryWithLength;
                                                    //     NVarChar:         sqlTypeFactoryWithLength;
                                                    //     Text:             sqlTypeFactoryWithNoParams;
                                                    //     Int:              sqlTypeFactoryWithNoParams;
                                                    //     BigInt:           sqlTypeFactoryWithNoParams;
                                                    //     TinyInt:          sqlTypeFactoryWithNoParams;
                                                    //     SmallInt:         sqlTypeFactoryWithNoParams;
                                                    //     Bit:              sqlTypeFactoryWithNoParams;
                                                    //     Float:            sqlTypeFactoryWithNoParams;
                                                    //     Numeric:          sqlTypeFactoryWithPrecisionScale;
                                                    //     Decimal:          sqlTypeFactoryWithPrecisionScale;
                                                    //     Real:             sqlTypeFactoryWithNoParams;
                                                    //     Date:             sqlTypeFactoryWithNoParams;
                                                    //     DateTime:         sqlTypeFactoryWithNoParams;
                                                    //     DateTime2:        sqlTypeFactoryWithScale;
                                                    //     DateTimeOffset:   sqlTypeFactoryWithScale;
                                                    //     SmallDateTime:    sqlTypeFactoryWithNoParams;
                                                    //     Time:             sqlTypeFactoryWithScale;
                                                    //     UniqueIdentifier: sqlTypeFactoryWithNoParams;
                                                    //     SmallMoney:       sqlTypeFactoryWithNoParams;
                                                    //     Money:            sqlTypeFactoryWithNoParams;
                                                    //     Binary:           sqlTypeFactoryWithNoParams;
                                                    //     VarBinary:        sqlTypeFactoryWithLength;
                                                    //     Image:            sqlTypeFactoryWithNoParams;
                                                    //     Xml:              sqlTypeFactoryWithNoParams;
                                                    //     Char:             sqlTypeFactoryWithLength;
                                                    //     NChar:            sqlTypeFactoryWithLength;
                                                    //     NText:            sqlTypeFactoryWithNoParams;
                                                    //     TVP:              sqlTypeFactoryWithTvpType;
                                                    //     UDT:              sqlTypeFactoryWithNoParams;
                                                    //     Geography:        sqlTypeFactoryWithNoParams;
                                                    //     Geometry:         sqlTypeFactoryWithNoParams;
                                                    // };
                                                    //////////////////////////////////
                                                    if (dataColumn.type) {  // !!! у double почему-то не заполнен type, херня какая-то
                                                        if (dataColumn.type.indexOf("Date") >= 0 || dataColumn.type.indexOf("Time") >= 0) {
                                                            dataColumn.isDateTime = true;
                                                        }
                                                        if (dataColumn.type === "Date") {
                                                            dataColumn.isOnlyDate = true;
                                                        }
                                                        if (dataColumn.type === "UniqueIdentifier") {
                                                            dataColumn.isGuid = true;
                                                        }
                                                    }
                                                }
                                                else if (this.dialect === "pg") {
                                                    ///////////////////////////////////
                                                    //     Bool        ->   16
                                                    //     ByteA       ->   17
                                                    //     Char        ->   18
                                                    //     Name        ->   19
                                                    //     Int8        ->   20
                                                    //     Int2        ->   21
                                                    //     Int4        ->   23
                                                    //     RegProc     ->   24
                                                    //     Text        ->   25
                                                    //     Oid         ->   26
                                                    //     Tid         ->   27
                                                    //     Xid         ->   28
                                                    //     Cid         ->   29
                                                    //     Xml         ->  142
                                                    //     Point       ->  600
                                                    //     LSeg        ->  601
                                                    //     Path        ->  602
                                                    //     Box         ->  603
                                                    //     Polygon     ->  604
                                                    //     Line        ->  628
                                                    //     Cidr        ->  650
                                                    //     Float4      ->  700
                                                    //     Float8      ->  701
                                                    //     AbsTime     ->  702
                                                    //     RelTime     ->  703
                                                    //     TInterval   ->  704
                                                    //     Unknown     ->  705
                                                    //     Circle      ->  718
                                                    //     Money       ->  790
                                                    //     MacAddr     ->  829
                                                    //     Inet        ->  869
                                                    //     BpChar      -> 1042
                                                    //     VarChar     -> 1043
                                                    //     Date        -> 1082
                                                    //     Time        -> 1083
                                                    //     Timestamp   -> 1114
                                                    //     TimestampTZ -> 1184
                                                    //     Interval    -> 1186
                                                    //     TimeTZ      -> 1266
                                                    //     Bit         -> 1560
                                                    //     VarBit      -> 1562
                                                    //     Numeric     -> 1700
                                                    //     RefCursor   -> 1790
                                                    //     Record      -> 2249
                                                    //     Void        -> 2278
                                                    //     UUID        -> 2950
                                                    //     JSON        ->  114
                                                    //     JSONB       -> 3802
                                                    // /////////////////////////////////
                                                    if (
                                                        dataColumn.dataTypeID === 1082 ||
                                                        dataColumn.dataTypeID === 1083 ||
                                                        dataColumn.dataTypeID === 1114 ||
                                                        dataColumn.dataTypeID === 1184 ||
                                                        dataColumn.dataTypeID === 1186 ||
                                                        dataColumn.dataTypeID === 1266 ||
                                                        dataColumn.dataTypeID === 702 ||
                                                        dataColumn.dataTypeID === 703
                                                    ) {
                                                        dataColumn.isDateTime = true;
                                                    }
                                                    if (dataColumn.dataTypeID === 1082) {
                                                        dataColumn.isOnlyDate = true;
                                                    }
                                                    if (dataColumn.dataTypeID === 2950) {
                                                        dataColumn.isGuid = true;
                                                    }
                                                    if (dataColumn.dataTypeID === 20) {
                                                        dataColumn.isPgBigInt = true;
                                                    }
                                                    //console.log(dataColumn);
                                                }
                                                else if (this.dialect === "mysql") {
                                                    ////////////////////////
                                                    // int	BIT = 16
                                                    // int	BLOB = 252
                                                    // int	CHAR = 1
                                                    // int	DATE = 10
                                                    // int	DATETIME = 12
                                                    // int	DECIMAL = 0
                                                    // int	DOUBLE = 5
                                                    // int	ENUM = 247
                                                    // int	FLOAT = 4
                                                    // int	GEOMETRY = 255
                                                    // int	INT24 = 9
                                                    // int	INTERVAL = 247
                                                    // int	LONG = 3
                                                    // int	LONG_BLOB = 251
                                                    // int	LONGLONG = 8
                                                    // int	MEDIUM_BLOB = 250
                                                    // int	NEWDATE = 14
                                                    // int	NEWDECIMAL = 246
                                                    // int	NULL = 6
                                                    // int	SET = 248
                                                    // int	SHORT = 2
                                                    // int	STRING = 254
                                                    // int	TIME = 11
                                                    // int	TIMESTAMP = 7
                                                    // int	TINY = 1
                                                    // int	TINY_BLOB = 249
                                                    // int	VAR_STRING = 253
                                                    // int	VARCHAR = 15
                                                    // int	YEAR = 13
                                                    ////////////////////////
                                                    dataColumn.mysqlDataType = dataColumn.type as any;
                                                    if (
                                                        dataColumn.mysqlDataType === 10 ||
                                                        dataColumn.mysqlDataType === 12 ||
                                                        dataColumn.mysqlDataType === 247 ||
                                                        dataColumn.mysqlDataType === 11 ||
                                                        dataColumn.mysqlDataType === 7
                                                    ) {
                                                        dataColumn.isDateTime = true;
                                                    }
                                                    if (dataColumn.mysqlDataType === 10) {
                                                        dataColumn.isOnlyDate = true;
                                                    }
                                                    if ((dataColumn.mysqlDataType === 253 || dataColumn.mysqlDataType === 254) &&
                                                        dataColumn.length === 16 &&
                                                        dataColumn.charsetNr === 63) {
                                                        dataColumn.isGuid = true;
                                                    }
                                                }
                                                dataTable.columns.push(dataColumn);
                                            }
                                        }

                                        if (response.rows) {
                                            response.rows!.forEach((row: any) => {

                                                let dataRow = new DataRow(dataTable);

                                                dataTable.columns.forEach((col, index) => {
                                                    if (col.isDateTime) {
                                                        dataRow[col.name] = new Date(row[index]);
                                                        if (col.isOnlyDate)
                                                            dataRow[col.name].setHours(0, 0, 0, 0);
                                                        else {
                                                            if (this.dialect === "mssql") { // mssql - убираем timezone
                                                                dataRow[col.name] = moment(dataRow[col.name]).add((dataRow[col.name] as Date).getTimezoneOffset(), "minutes").toDate();
                                                            }
                                                        }

                                                    }
                                                    else if (col.isGuid) {
                                                        if (this.dialect === "mysql") {
                                                            if (_.isArrayBuffer(row[index]))
                                                                dataRow[col.name] = (uuid as any).unparse(new Uint8Array(row[index]));
                                                            else
                                                                dataRow[col.name] = row[index];

                                                        }
                                                        else
                                                            dataRow[col.name] = row[index].toLowerCase();
                                                    }
                                                    else if (col.isPgBigInt) {
                                                        dataRow[col.name] = Number.parseInt(row[index]);
                                                    }
                                                    else
                                                        dataRow[col.name] = row[index];

                                                });

                                                dataTable.rows.push(dataRow);
                                            });
                                        }

                                        return dataTable;
                                    });


                                    resolve(dataTables);
                                }

                            }
                        );


                    }
                );
                return promise;
            });

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