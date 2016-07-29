import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect, SqlValue, SqlDateValue, SqlNumberValue, SqlDateTimeValue} from "./SqlCore";
import {Operand, BooleanOper, WhereClause} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {SqlBatch} from "./SqlDb";


export interface SelectColumn {
    tableName?: string;
    colName?: string;
    value?: SqlValue;
    raw?: string|number|Date;
    as?: string;
}

export interface SelectTable {
    dbName?: string;
    tableName?: string;
    select?: InlineSelectStmt;
    as?: string;
    raw?: string;
}

export class SelectStmt {

    _selectColumns: SelectColumn[] = [];
    _selectTable: SelectTable[] = [];
    _where: WhereClause[] = [];

    column(...column: (string | SelectColumn | "*" | SqlValue)[]): SelectStmt {
        column.forEach((col) => {
            if (col instanceof SqlValue)
                this._selectColumns.push({value: col});
            else if (col === "*")
                this._selectColumns.push({raw: "*"});
            else if (_.isString(col))
                this._selectColumns.push({colName: col});
            else if (col.raw)
                this._selectColumns.push({raw: col.raw});
            else if (col.colName)
                this._selectColumns.push(col);
            else
                throwError("SelectStmt.column(): invalid column type");
        });
        return this;
    }

    columnAs(column: string | SelectColumn | SqlValue, as: string): SelectStmt {
        if (column instanceof SqlValue)
            this._selectColumns.push({value: column, as: as});
        else if (_.isString(column))
            this._selectColumns.push({colName: column, as: as});
        else {
            column.as = as;
            this._selectColumns.push(column);
        }
        return this;
    }

    columnRaw(rawSql: string): SelectStmt {
        this._selectColumns.push({raw: rawSql});
        return this;
    }

    table(table: string | SelectTable): SelectStmt {
        if (_.isString(table))
            this._selectTable.push({tableName: table});
        else
            this._selectTable.push(table);
        return this;
    }

    tableRaw(rawSql: string): SelectStmt {
        this._selectTable.push({raw: rawSql});
        return this;
    }

    tableAs(table: string | SelectTable, as: string): SelectStmt {
        if (_.isString(table))
            this._selectTable.push({tableName: table, as: as});
        else {
            table.as = as;
            this._selectTable.push(table);
        }
        return this;
    }

    where(operand1: Operand, oper: BooleanOper, operand2: Operand): SelectStmt {
        this._where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }

    private emitSelectColumn(col: SelectColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (col.tableName)
            e.emitQuotedName(col.tableName).emit(".");
        if (!col.colName && !col.raw && !col.value)
            throwError("SelectStmt: column.name or column.raw or column.value not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.value)
            e.emit(col.value.toSql(e.dialect));
        if (col.raw) {
            if (_.isNumber(col.raw))
                e.emit(new SqlNumberValue(col.raw).toSql(e.dialect));
            else if (_.isDate(col.raw))
                e.emit(new SqlDateTimeValue(col.raw).toSql(e.dialect));
            else if (_.isString(col.raw))
                e.emit(col.raw);
            else
                throwError("SelectStmt.emitSelectColumn(): invalid column 'raw' type");
        }
        if (col.as)
            e.emit(" ").emitQuotedName(col.as);
    }

    private emitSelectTable(table: SelectTable, e: SqlEmitter, level: string): SelectStmt {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("SelectStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
        if (table.as)
            e.emit(" ").emitQuotedName(table.as);
        return this;
    }

    toSql(dialect: SqlDialect): SqlBatch {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = this instanceof InlineSelectStmt;

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

export class InlineSelectStmt extends SelectStmt {

}


