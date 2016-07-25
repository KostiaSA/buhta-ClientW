import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect, SqlValue, SqlNumberValue, SqlDateValue, SqlDateTimeValue} from "./SqlCore";
import {Operand, BooleanOper, WhereClause} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {SelectTable, SelectColumn} from "./SelectStmt";


export interface InsertColumn {
    colName?: string;
    raw?: string;
}

export interface InsertTable {
    dbName?: string;
    tableName?: string;
    raw?: string;
}

export class InsertStmt {

    private _insertTable: InsertTable[] = [];
    private _insertColumns: InsertColumn[] = [];

    private _selectTable: SelectTable[] = [];
    private _selectColumns: SelectColumn[] = [];
    private _where: WhereClause[] = [];

    column(column: string | InsertColumn, value: string|number|Date|SelectColumn|SqlValue): InsertStmt {
        if (_.isString(column))
            this._insertColumns.push({colName: column});
        else if (column.colName)
            this._insertColumns.push(column);
        else if (column.raw)
            this._insertColumns.push({raw: column.raw});
        else
            throwError("InsertStmt.column(): invalid column type");

        if (value instanceof SqlValue)
            this._selectColumns.push({value: value});
        else if (_.isString(value))
            this._selectColumns.push({colName: value});
        else if (_.isNumber(value) || _.isDate(value))
            this._selectColumns.push({raw: value});
        else if (value.raw)
            this._selectColumns.push({raw: value.raw});
        else
            this._selectColumns.push(value);


        return this;
    }

    table(table: string | SelectTable): InsertStmt {
        if (this._insertTable.length > 0)
            throwError("InsertStmt.table(): one insert table is already defined");

        if (_.isString(table))
            this._insertTable.push({tableName: table});
        else
            this._insertTable.push(table);
        return this;
    }

    tableRaw(rawSql: string): InsertStmt {
        if (this._insertTable.length > 0)
            throwError("InsertStmt.table(): one insert table is already defined");

        this._insertTable.push({raw: rawSql});
        return this;
    }

    fromTable(table: string | SelectTable): InsertStmt {
        if (_.isString(table))
            this._selectTable.push({tableName: table});
        else
            this._selectTable.push(table);
        return this;
    }

    fromTableRaw(rawSql: string): InsertStmt {
        this._selectTable.push({raw: rawSql});
        return this;
    }

    where(operand1: Operand, oper: BooleanOper, operand2: Operand): InsertStmt {
        this._where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }


    private emitInsertTable(table: InsertTable, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("InsertTableStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
    }

    private emitInsertColumn(col: InsertColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (!col.colName && !col.raw)
            throwError("InsertStmt: column.colName or column.raw not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.raw)
            e.emit(col.raw);
    }


    private emitSelectColumn(col: SelectColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (col.tableName)
            e.emitQuotedName(col.tableName).emit(".");
        if (!col.colName && !col.raw && !col.value)
            throwError("InsertStmt: column.colName or column.raw or column.value not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.value)
            e.emit(col.value.toSql());
        if (col.raw) {
            if (_.isNumber(col.raw))
                e.emit(new SqlNumberValue(col.raw, e.dialect).toSql());
            else if (_.isDate(col.raw))
                e.emit(new SqlDateTimeValue(col.raw, e.dialect).toSql());
            else if (_.isString(col.raw))
                e.emit(col.raw);
            else {
                throwError("InsertStmt.emitSelectColumn(): invalid column 'raw' type");
            }
        }
        if (col.as)
            e.emit(" ").emitQuotedName(col.as);
    }

    private emitSelectTable(table: SelectTable, e: SqlEmitter, level: string): InsertStmt {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("InsertStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
        if (table.as)
            e.emit(" ").emitQuotedName(table.as);
        return this;
    }

    toSql(dialect: SqlDialect): string {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        if (this._insertTable.length === 0)
            throwError("InsertStmt: insert table not defined");

        e.emit("INSERT INTO ");
        this.emitInsertTable(this._insertTable[0], e, "");
        e.emit("(").emitLine();
        this._insertColumns.forEach((col: InsertColumn, index: number) => {
            this.emitInsertColumn(col, e, "  ");
            if (index !== this._insertColumns.length - 1)
                e.emit(",");
            e.emitLine();
        });
        e.emit(")").emitLine();

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
                if (index !== this._where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });

        }

        return e.toSql();
    }
}



