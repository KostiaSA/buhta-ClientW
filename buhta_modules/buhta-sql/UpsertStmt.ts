import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {
    SqlDialect, SqlValue, SqlNumberValue, SqlDateValue, SqlDateTimeValue, SqlGuidValue,
    SqlNullValue, SqlStringValue
} from "./SqlCore";
import {Operand, BooleanOper, WhereClause} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {SelectTable, SelectColumn} from "./SelectStmt";
import {SqlBatch} from "./SqlDb";


export interface UpsertColumn {
    colName?: string;
    raw?: string;
}

export interface UpsertTable {
    dbName?: string;
    tableName?: string;
    raw?: string;
}

export class UpsertStmt {

    private _UpsertTable: UpsertTable[] = [];
    private _UpsertColumns: UpsertColumn[] = [];

    private _selectTable: SelectTable[] = [];
    private _selectColumns: SelectColumn[] = [];
    private _where: WhereClause[] = [];

    constructor(table?: string | UpsertTable) {
        if (table)
            this.table(table);
    }

    column(column: string | UpsertColumn, value: null|string|number|Date|SelectColumn|SqlValue): UpsertStmt {
        if (_.isString(column))
            this._UpsertColumns.push({colName: column});
        else if (column.colName)
            this._UpsertColumns.push(column);
        else if (column.raw)
            this._UpsertColumns.push({raw: column.raw});
        else
            throwError("UpsertStmt.column(): invalid column type");

        if (value === null)
            this._selectColumns.push({value: new SqlNullValue()});
        else if (value instanceof SqlValue)
            this._selectColumns.push({value: value});
        else if (_.isString(value))
//            this._selectColumns.push({colName: value});
            this._selectColumns.push({value: new SqlStringValue(value)});
        else if (_.isNumber(value) || _.isDate(value))
            this._selectColumns.push({raw: value});
        else if (value.raw)
            this._selectColumns.push({raw: value.raw});
        else
            this._selectColumns.push(value);


        return this;
    }

    table(table: string | UpsertTable): UpsertStmt {
        if (this._UpsertTable.length > 0)
            throwError("UpsertStmt.table(): one Upsert table is already defined");

        if (_.isString(table))
            this._UpsertTable.push({tableName: table});
        else
            this._UpsertTable.push(table);
        return this;
    }

    tableRaw(rawSql: string): UpsertStmt {
        if (this._UpsertTable.length > 0)
            throwError("UpsertStmt.table(): one Upsert table is already defined");

        this._UpsertTable.push({raw: rawSql});
        return this;
    }

    fromTable(table: string | SelectTable): UpsertStmt {
        if (_.isString(table))
            this._selectTable.push({tableName: table});
        else
            this._selectTable.push(table);
        return this;
    }

    fromTableRaw(rawSql: string): UpsertStmt {
        this._selectTable.push({raw: rawSql});
        return this;
    }

    where(operand1: Operand, oper: BooleanOper, operand2: Operand): UpsertStmt {
        this._where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }


    private emitUpsertTable(table: UpsertTable, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("UpsertStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
    }

    private emitUpdateColumn(col: UpsertColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (!col.colName && col.raw === undefined)
            throwError("UpsertStmt: column.colName or column.raw not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.raw !== undefined)
            e.emit(col.raw);
    }

    private emitInsertColumn(col: UpsertColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (!col.colName && col.raw === undefined)
            throwError("UpsertStmt: column.colName or column.raw not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.raw !== undefined)
            e.emit(col.raw);
    }

    private emitSelectColumn(col: SelectColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (col.tableName)
            e.emitQuotedName(col.tableName).emit(".");
        if (!col.colName && col.raw === undefined && col.value === undefined)
            throwError("UpsertStmt: column.colName or column.raw or column.value not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.value !== undefined)
            e.emit(col.value.toSql(e.dialect));
        if (col.raw !== undefined) {
            if (_.isNumber(col.raw))
                e.emit(new SqlNumberValue(col.raw).toSql(e.dialect));
            else if (_.isDate(col.raw))
                e.emit(new SqlDateTimeValue(col.raw).toSql(e.dialect));
            else if (_.isString(col.raw))
                e.emit(col.raw);
            else {
                throwError("UpsertStmt.emitSelectColumn(): invalid column 'raw' type");
            }
        }
        if (col.as)
            e.emit(" ").emitQuotedName(col.as);
    }

    private emitSelectTable(table: SelectTable, e: SqlEmitter, level: string): UpsertStmt {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("UpsertStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
        if (table.as)
            e.emit(" ").emitQuotedName(table.as);
        return this;
    }

    toSql(dialect: SqlDialect): SqlBatch {

        let batch: string[] = [];

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        if (this._UpsertTable.length === 0)
            throwError("UpsertStmt: Upsert table not defined");

        e.emitBeginTransaction();
        batch.push(e.toSql());
        e.clear();

        // if (dialect === "mssql") {
        //     e.emitBeginTransaction().emitLine();
        // }
        //
        // if (dialect === "pg") {
        //     e.emit("DO $$ BEGIN").emitLine();
        // }
        //
        // if (dialect === "mysql") {
        //     e.emitBeginTransaction().emitLine();
        // }

        e.emit("UPDATE ");
        this.emitUpsertTable(this._UpsertTable[0], e, "");
        e.emit(" SET").emitLine();
        this._UpsertColumns.forEach((col: UpsertColumn, index: number) => {
            this.emitUpdateColumn(col, e, "  ");
            e.emit("=");

            this.emitSelectColumn(this._selectColumns[index], e, "");

            if (index !== this._UpsertColumns.length - 1)
                e.emit(",");

            e.emitLine();
        });

        if (this._selectTable.length > 0) {
            e.emit("FROM").emitLine();
            this._selectTable.forEach((table: SelectTable, index: number) => {
                this.emitSelectTable(table, e, "  ");
                if (index !== this._selectTable.length - 1)
                    e.emit(",");
                e.emitLine();
            });
        }

        if (this._where.length > 0) {
            e.emit("WHERE").emitLine();
            this._where.forEach((where: WhereClause, index: number) => {
                e.emitWhere(where, "  ");
                if (index !== this._where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });

        }
        batch.push(e.toSql());
        e.clear();

        e.emit("INSERT INTO ");
        this.emitUpsertTable(this._UpsertTable[0], e, "");
        e.emit("(").emitLine();
        this._UpsertColumns.forEach((col: UpsertColumn, index: number) => {
            this.emitInsertColumn(col, e, "  ");
            if (index !== this._UpsertColumns.length - 1)
                e.emit(",");
            e.emitLine();
        });
        e.emit(")").emitLine();

        if (this._selectTable.length > 0) {

            e.emit("SELECT").emitLine();
            this._selectColumns.forEach((col: SelectColumn, index: number) => {
                this.emitSelectColumn(col, e, "  ");
                if (index !== this._selectColumns.length - 1)
                    e.emit(",");
                e.emitLine();
            });

            if (this._selectTable.length > 0) {
                e.emit("FROM").emitLine();
                this._selectTable.forEach((table: SelectTable, index: number) => {
                    this.emitSelectTable(table, e, "  ");
                    if (index !== this._selectTable.length - 1)
                        e.emit(",");
                    e.emitLine();
                });
            }

            if (this._where.length > 0) {
                e.emit("WHERE").emitLine();
                this._where.forEach((where: WhereClause, index: number) => {
                    e.emitWhere(where, "  ");
                    //if (index !== this._where.length - 1)
                    //  e.emit(" AND ");
                    e.emitLine();
                });

            }
            e.emit("NOT EXISTS (").emitLine();
            e.emit("  SELECT 1 FROM table WHERE ").emitLine();
            this._where.forEach((where: WhereClause, index: number) => {
                e.emitWhere(where, "    ");
                if (index !== this._where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });
            e.emit(")");
        }
        else {
            e.emit("SELECT ").emitLine();
            this._selectColumns.forEach((col: SelectColumn, index: number) => {
                this.emitSelectColumn(col, e, "  ");
                if (index !== this._selectColumns.length - 1)
                    e.emit(",");
                e.emitLine();
            });
            e.emit("WHERE NOT EXISTS (").emitLine();
            e.emit("  SELECT 1 FROM ");
            this.emitUpsertTable(this._UpsertTable[0], e, "");
            e.emit(" WHERE ").emitLine();
            this._where.forEach((where: WhereClause, index: number) => {
                e.emitWhere(where, "    ");
                if (index !== this._where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });
            e.emit(")");
        }
        batch.push(e.toSql());
        e.clear();

        e.emitCommit();
        batch.push(e.toSql());

        // e.emit(";").emitLine();
        //
        // if (dialect === "mssql") {
        //     e.emitCommit().emitLine();
        // }
        // if (dialect === "pg") {
        //     e.emitCommit();
        //     e.emit("END$$;");
        // }
        // if (dialect === "mysql") {
        //     e.emitCommit().emitLine();
        // }

        return batch;
    }
}



