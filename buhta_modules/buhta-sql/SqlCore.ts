import * as moment from "moment";
import * as uuid from "UUID";

import {SelectColumn} from "./SelectStmt";
import {throwError, throwAbstractError} from "../buhta-core/Error";

export type SqlDialect = "mssql" | "pg" | "mysql";

export type BooleanOper = "=" | ">" | "<" | ">=" | "<=" | "<>" | "!=" | "LIKE";

export type Operand = string | number | Date | SelectColumn | SqlValue;

export type SqlDataType =
    "sbyte" | "byte" | "short" | "ushort" | "int" | "uint" | "long" | "ulong" |
        "float" | "double" | "decimal"|
        "string" | "text" |
        "guid" |
        "date" | "datetime" | "timestamp" | "blob";


export interface SqlStmt {
    toSql(dialect: SqlDialect): string;
}

export interface WhereClause {
    operand1?: Operand;
    oper?: BooleanOper;
    operand2?: Operand;
    raw?: string;
}

export class SqlValue {
    toSql(dialect: SqlDialect): string {
        console.log("toSql1");
        throwAbstractError();
        throw "fake";
    }
}

export function getNewGuid(): string {
    return uuid.v1().toString();
}


function mssql_escape_string(str: string) {
    return str.replace(/./g, function (char: string): string {
        switch (char) {
            case "'":
                return "''";
            case "?":
                return "'+CHAR(63)+N'";
            default:
                return char;
        }
    });
}

function pg_escape_string(str: string) {
    return str.replace(/./g, function (char: string): string {
        switch (char) {
            case "\0":
                return "";
            case "'":
                return "''";
            case "?":
                return "'||CHR(63)||'";
            default:
                return char;
        }
    });
}

function mysql_escape_string(str: string) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\]/g, function (char: string): string {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\Z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
                return "\\" + char;
            default:
                throw "mysql_escape_string?";
        }
    });
}

export class SqlStringValue extends SqlValue {
    constructor(public value: string) {
        super();
    }

    toSql(dialect: SqlDialect): string {
        if (dialect === "mssql")
        //return "N'" + this.value.replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
            return "N'" + mssql_escape_string(this.value) + "'";
        else if (dialect === "pg")
        // симол с кодом 0 запрещен в postgresql, поэтому стираем его
//            return "'" + this.value.replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
            return "'" + pg_escape_string(this.value) + "'";
        else if (dialect === "mysql")
            return "'" + mysql_escape_string(this.value) + "'";
        else {
            throwError("invalid sql dialect " + dialect);
            throw "fake";
        }
    }
}

export class SqlNumberValue extends SqlValue {
    constructor(public value: number) {
        super();
    }

    toSql(dialect: SqlDialect): string {
        return this.value.toString();
    }
}


export class SqlDateValue extends SqlValue {
    constructor(public value: Date) {
        super();
    }

    toSql(dialect: SqlDialect): string {
        if (dialect === "mssql")
            return "CONVERT(DATE,'" + moment(this.value).format("YYYYMMDD") + "')";
        else if (dialect === "pg")
            return "DATE '" + moment(this.value).format("YYYY-MM-DD") + "'";
        else if (dialect === "mysql")
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD") + "','%Y-%c-%d')";
        else {
            throwError("invalid sql dialect " + dialect);
            throw "fake";
        }

    }
}


function toHexString(bytes: any) {
    return bytes.map(function (byte: any) {
        return ("00" + (byte & 0xFF).toString(16)).slice(-2);
    }).join("");
}

function mysql_guid_to_str(guid: uuid.UUID): string {
    return "0x" + toHexString(guid);
}

export class SqlGuidValue extends SqlValue {
    constructor(public value: string) {
        super();
    }

    toSql(dialect: SqlDialect): string {

        if (dialect === "mssql")
            return "CONVERT(UNIQUEIDENTIFIER,'" + this.value + "')";
        else if (dialect === "pg")
            return "UUID '" + this.value + "'";
        else if (dialect === "mysql")
            return "convert(" + mysql_guid_to_str(uuid.parse(this.value)) + ",binary(16))";
        else {
            throwError("invalid sql dialect " + dialect);
            throw "fake";
        }

    }
}

export class SqlNewGuidValue extends SqlValue {
    constructor() {
        super();
    }

    private value: string;

    toSql(dialect: SqlDialect): string {
        if (!this.value)
            this.value = getNewGuid();

        if (dialect === "mssql")
            return "CONVERT(UNIQUEIDENTIFIER,'" + this.value + "')";
        else if (dialect === "pg")
            return "UUID '" + this.value + "'";
        else if (dialect === "mysql")
            return "convert(" + mysql_guid_to_str(uuid.parse(this.value)) + ",binary(16))";
        else {
            throwError("invalid sql dialect " + dialect);
            throw "fake";
        }

    }
}

export class SqlDateTimeValue extends SqlValue {
    constructor(public value: Date) {
        super();
    }

    toSql(dialect: SqlDialect): string {
        if (dialect === "mssql")
            return "CONVERT(DATETIME2,'" + moment(this.value).format("YYYYMMDD HH:mm:ss.SSS") + "')";
        else if (dialect === "pg")
            return "TIMESTAMP(3)'" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
        else if (dialect === "mysql")
        // timezone не воспринимает
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "','%Y-%c-%d %k:%i:%s.%f')";
        else {
            throwError("invalid sql dialect " + dialect);
            throw "fake";
        }

    }

    // toSql(): string {
    //     if (this.dialect === "mssql")
    //         return "CONVERT(DATETIMEOFFSET,'" + moment(this.value).format("YYYYMMDD HH:mm:ss.SSS Z") + "')";
    //     else if (this.dialect === "pg")
    //         return "TIMESTAMP(3) WITH TIME ZONE '" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS ZZ") + "'";
    //     else if (this.dialect === "mysql")
    //     // timezone не воспринимает
    //         return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "','%Y-%c-%d %k:%i:%s.%f')";
    //     else {
    //         throwError("invalid sql dialect " + this.dialect);
    //         throw "fake";
    //     }
    //
    // }
}


// export function asSqlString(str: any, dialect: SqlDialect) {
//     if (dialect === "mssql")
//         return "N'" + str.toString().replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
//     else if (dialect === "pg")
//     // симол с кодом 0 запрещен в postgresql, поэтому стираем его
//         return "'" + str.toString().replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
//     else if (dialect === "mysql")
//         return "'" + mysql_escape_string(str) + "'";
//     else {
//         throwError("invalid sql dialect " + dialect);
//         throw "fake";
//     }
// }


// export function asSqlDate(date: Date, dialect: SqlDialect) {
//     if (dialect === "mssql")
//         return "CONVERT(DATETIME,'" + moment(date).format("YYYYMMDD HH:mm:ss.SSS") + "')";
//     else if (dialect === "pg")
//         return "'" + moment(date).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
//     else if (dialect === "mysql")
//         return "'" + moment(date).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
//     else {
//         throwError("invalid sql dialect " + dialect);
//         throw "fake";
//     }
// }




