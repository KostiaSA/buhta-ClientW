import * as _ from "lodash";
import {SqlDataType, SqlDialect} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {SqlBatch} from "./SqlDb";
import {DropTableIfExistsStmt} from "./DropTableIfExistsStmt";

export interface CreateColumn {
    column?: string;
    dataType?: SqlDataType;
    dataLen?: number;
    decimals?: number;
    notNull?: boolean;
    primaryKey?: boolean;
    raw?: string;
}

export interface CreateTable {
    db?: string;
    table?: string;
    raw?: string;
}


export class CreateTableStmt {
    isTempTable: boolean;
    _table: CreateTable;
    columns: CreateColumn[] = [];
    
    constructor(table?: string | CreateTable) {
        if (table)
            this.table(table);
    }


    primaryKeyColumn(column: string | CreateColumn, dataType?: SqlDataType, dataLen?: number, decimals?: number): CreateTableStmt {
        if (_.isObject(column)) {
            this.columns.push(column);
        }
        else {
            this.columns.push({
                column: column.toString(),
                dataType: dataType,
                dataLen: dataLen,
                decimals: decimals,
                notNull: true, 
                primaryKey: true
            });

        }
        return this;
    }
    
    column(column: string | CreateColumn, dataType?: SqlDataType, dataLen?: number, decimals?: number): CreateTableStmt {
        if (_.isObject(column)) {
            this.columns.push(column);
        }
        else {
            this.columns.push({
                column: column.toString(),
                dataType: dataType,
                dataLen: dataLen,
                decimals: decimals
            });

        }
        return this;
    }

    table(table: string | CreateTable): CreateTableStmt {
        if (_.isString(table))
            this._table = {table: table};
        else
            this._table = table;
        return this;
    }

    private emitTableName(table: CreateTable, e: SqlEmitter, level: string): CreateTableStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("CreateTableStmt: table.name or table.raw not defined");
        if (table.table) {
            if (this.isTempTable && !table.table.startsWith("#"))
                throwError("CreateTableStmt: temporary table name must begin with '#' char");
            if (!this.isTempTable && table.table.startsWith("#"))
                throwError("CreateTableStmt: persistent table name should not begin with '#' char");
            e.emitQuotedName(table.table);
        }
        if (table.raw)
            e.emit(table.raw);
        return this;
    }

    private emitColumnDataType(col: CreateColumn, e: SqlEmitter) {
        if (e.dialect === "mssql")
            this.emitColumnDataTypeMsSql(col, e);
        else if (e.dialect === "pg")
            this.emitColumnDataTypePg(col, e);
        else if (e.dialect === "mysql")
            this.emitColumnDataTypeMySql(col, e);
        else
            throwError("CreateTableStmt.emitColumnDataType(): invalid sql dialect '" + e.dialect + "'");
    }

    private emitColumnDataTypeMsSql(col: CreateColumn, e: SqlEmitter) {
        switch (col.dataType) {
            case "sbyte":
                e.emit("SMALLINT");
                break;
            case "byte":
                e.emit("TINYINT");
                break;
            case "short":
                e.emit("SMALLINT");
                break;
            case "ushort":
                e.emit("INT");
                break;
            case "int":
                e.emit("INT");
                break;
            case "uint":
                e.emit("BIGINT");
                break;
            case "long":
                e.emit("BIGINT");
                break;
            case "ulong":
                e.emit("DECIMAL(38)");
                break;
            case "float":
                e.emit("REAL");
                break;
            case "double":
                e.emit("FLOAT");
                break;
            case "decimal":
                if (!col.dataLen || col.dataLen < 0 || col.dataLen > 38) throwError("'Precision' of decimal column '" + col.column + "' must be 0..38");
                if (!col.decimals || col.decimals < 0 || col.decimals > 38) throwError("'Scale' of decimal column '" + col.column + "' must be 0..38");
                e.emit(`DECIMAL(${col.dataLen},${col.decimals})`);
                break;
            case "string":
                if (!col.dataLen || col.dataLen < 1 || col.dataLen > 4000) throwError("'Length' of string column '" + col.column + "' must be 1..4000");
                e.emit(`NVARCHAR(${col.dataLen})`);
                break;
            case "text":
                e.emit("NVARCHAR(MAX)");
                break;
            case "guid":
                e.emit("UNIQUEIDENTIFIER");
                break;
            case "date":
                e.emit("DATE");
                break;
            //case "datetime": e.emit("DATETIMEOFFSET"); break;
            case "datetime":
                e.emit("DATETIME2");
                break;
            case "timestamp":
                e.emit("DATETIME2 DEFAULT(GETDATE())");
                break;
            case "blob":
                e.emit(" IMAGE");
                break;

            default:
                throwError("NotImplemented");
        }
    }

    private emitColumnDataTypePg(col: CreateColumn, e: SqlEmitter) {
        switch (col.dataType) {
            case "sbyte":
                e.emit("SMALLINT");
                break;
            case "byte":
                e.emit("SMALLINT");
                break;
            case "short":
                e.emit("SMALLINT");
                break;
            case "ushort":
                e.emit("INT");
                break;
            case "int":
                e.emit("INT");
                break;
            case "uint":
                e.emit("BIGINT");
                break;
            case "long":
                e.emit("BIGINT");
                break;
            case "ulong":
                e.emit("NUMERIC(38)");
                break;
            case "float":
                e.emit("REAL");
                break;
            case "double":
                e.emit("DOUBLE PRECISION");
                break;
            case "decimal":
                if (!col.dataLen || col.dataLen < 0 || col.dataLen > 38) throwError("'Precision' of decimal column '" + col.column + "' must be 0..38");
                if (!col.decimals || col.decimals < 0 || col.decimals > 38) throwError("'Scale' of decimal column '" + col.column + "' must be 0..38");
                e.emit(`NUMERIC(${col.dataLen},${col.decimals})`);
                break;
            case "string":
                if (!col.dataLen || col.dataLen < 1 || col.dataLen > 4000) throwError("'Length' of string column '" + col.column + "' must be 1..4000");
                e.emit(`VARCHAR(${col.dataLen})`);
                break;
            case "text":
                e.emit("TEXT");
                break;
            case "guid":
                e.emit("UUID");
                break;
            case "date":
                e.emit("DATE");
                break;
            case "datetime":
                e.emit("TIMESTAMP");
                break;
            //case "datetime": e.emit("TIMESTAMP WITH TIME ZONE"); break;
            case "timestamp":
                e.emit("TIMESTAMP DEFAULT CURRENT_TIMESTAMP");
                break;
            case "blob":
                e.emit(" BYTEA");
                break;

            default:
                throwError("NotImplemented");
        }
    }

    private emitColumnDataTypeMySql(col: CreateColumn, e: SqlEmitter) {
        switch (col.dataType) {
            case "sbyte":
                e.emit("TINYINT");
                break;
            case "byte":
                e.emit("TINYINT UNSIGNED");
                break;
            case "short":
                e.emit("SMALLINT");
                break;
            case "ushort":
                e.emit("SMALLINT UNSIGNED");
                break;
            case "int":
                e.emit("INT");
                break;
            case "uint":
                e.emit("INT UNSIGNED");
                break;
            case "long":
                e.emit("BIGINT");
                break;
            case "ulong":
                e.emit("BIGINT UNSIGNED");
                break;
            case "float":
                e.emit("FLOAT");
                break;
            case "double":
                e.emit("DOUBLE");
                break;
            case "decimal":
                if (!col.dataLen || col.dataLen < 0 || col.dataLen > 38) throwError("'Precision' of decimal column '" + col.column + "' must be 0..38");
                if (!col.decimals || col.decimals < 0 || col.decimals > 38) throwError("'Scale' of decimal column '" + col.column + "' must be 0..38");
                e.emit(`DECIMAL(${col.dataLen},${col.decimals})`);
                break;
            case "string":
                if (!col.dataLen || col.dataLen < 1 || col.dataLen > 4000) throwError("'Length' of string column '" + col.column + "' must be 1..4000");
                e.emit(`VARCHAR(${col.dataLen})`);
                break;
            case "text":
                e.emit("LONGTEXT");
                break;
            case "guid":
                e.emit("BINARY(16)");
                break;
            case "date":
                e.emit("DATE");
                break;
            case "datetime":
                e.emit("DATETIME(3)");
                break;
            case "timestamp":
                e.emit("TIMESTAMP");
                break;
            case "blob":
                e.emit(" LONGBLOB");
                break;

            default:
                throwError("NotImplemented");
        }
    }

    private emitCreateColumn(col: CreateColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (!(col.column && col.dataType) && col.raw === undefined)
            throwError("CreateTableStmt: column.name+column.dataType or column.raw not defined");
        if ((col.column || col.dataType) && col.raw !== undefined)
            throwError("CreateTableStmt: column.name+column.dataType and column.raw defined");
        if (col.column)
            e.emitQuotedName(col.column);
        e.emit(" ");
        this.emitColumnDataType(col, e);
        if (col.notNull)
            e.emit(" NOT NULL");
        if (col.primaryKey)
            e.emit(" PRIMARY KEY");
        if (col.raw !== undefined)
            e.emit(col.raw);
    }


    toSql(dialect: SqlDialect): SqlBatch {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        if (this.isTempTable) {
            if (e.dialect === "mssql")
                e.emit("CREATE TABLE ");
            else if (e.dialect === "pg")
                e.emit("CREATE TEMPORARY TABLE ");
            else if (e.dialect === "mysql")
                e.emit("CREATE TEMPORARY TABLE ");
            else
                throwError("CreateTableStmt.emitColumnDataType(): invalid sql dialect '" + e.dialect + "'");
        }
        else
            e.emit("CREATE TABLE ");
        this.emitTableName(this._table, e, "");
        e.emit("(").emitLine();

        this.columns.forEach((col: CreateColumn, index: number) => {
            this.emitCreateColumn(col, e, "  ");

            if (index !== this.columns.length - 1)
                e.emit(",");
            e.emitLine();
        });

        e.emit(")").emitLine();

        // Indexes.ForEach(index =>
        // {
        //     sql.Append(DbHelper.BatchDelimiter);
        //     index.EmitCreateSql(sql, lang, identStr);
        // });

        if (this.isTempTable)
            return [new DropTableIfExistsStmt(this._table), e.toSql()];
        else
            return e.toSql();
    }

}