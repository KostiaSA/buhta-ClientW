import {SelectColumn} from "./SelectStmt";
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

