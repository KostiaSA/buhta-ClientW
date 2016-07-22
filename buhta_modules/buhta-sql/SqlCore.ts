import * as moment from "moment";
import {SelectColumn} from "./SelectStmt";
import {throwError, throwAbstractError} from "../buhta-core/Error";
export type SqlDialect = "mssql" | "pg" | "mysql";

export type BooleanOper = "=" | ">" | "<" | ">=" | "<=" | "<>" | "!=" | "LIKE";

export type Operand = string | number | SelectColumn;

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
    toSql(): string {
        console.log("toSql1");
        throwAbstractError();
        throw "fake";
    }
}

export class SqlString extends SqlValue {
    constructor(public value: string, public dialect: SqlDialect) {
        super();
    }

    toSql(): string {
        if (this.dialect === "mssql")
            return "N'" + this.value.replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
        else if (this.dialect === "pg")
        // симол с кодом 0 запрещен в postgresql, поэтому стираем его
            return "'" + this.value.replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
        else if (this.dialect === "mysql")
            return "'" + mysql_escape_string(this.value) + "'";
        else {
            throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }
    }
}

export class SqlDate extends SqlValue {
    constructor(public value: Date, public dialect: SqlDialect) {
        super();
    }

    toSql(): string {
        if (this.dialect === "mssql")
            return "CONVERT(DATE,'" + moment(this.value).format("YYYYMMDD") + "')";
        else if (this.dialect === "pg")
            return "DATE '" + moment(this.value).format("YYYY-MM-DD") + "'";
        else if (this.dialect === "mysql")
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD") + "','%Y-%c-%d')";
        else {
            throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }

    }
}

export class SqlDateTime extends SqlValue {
    constructor(public value: Date, public dialect: SqlDialect) {
        super();
    }

    toSql(): string {
        if (this.dialect === "mssql")
            return "CONVERT(DATETIMEOFFSET,'" + moment(this.value).format("YYYYMMDD HH:mm:ss.SSS Z") + "')";
        else if (this.dialect === "pg")
            return "TIMESTAMP(3) WITH TIME ZONE '" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS ZZ") + "'";
        else if (this.dialect === "mysql")
            // timezone не воспринимает
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "','%Y-%c-%d %k:%i:%s.%f')";
        else {
            throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }

    }
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




