import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect, SqlValue, SqlDateValue, SqlNumberValue} from "./SqlCore";
import {Operand, BooleanOper, WhereClause} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";


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

    columns: SelectColumn[] = [];
    from: SelectTable[] = [];
    where: WhereClause[] = [];

    addColumn(...column: (string | SelectColumn | "*" | SqlValue)[]): SelectStmt {
        column.forEach((col) => {
            if (col instanceof SqlValue)
                this.columns.push({value: col});
            else if (col === "*")
                this.columns.push({raw: "*"});
            else if (_.isString(col))
                this.columns.push({colName: col});
            else if (col.raw)
                this.columns.push({raw: col.raw});
            else if (col.colName)
                this.columns.push(col);
            else
                throwError("SelectStmt.column(): invalid column type");
        });
        return this;
    }

    addColumnAs(column: string | SelectColumn | SqlValue, as: string): SelectStmt {
        if (column instanceof SqlValue)
            this.columns.push({value: column, as: as});
        else if (_.isString(column))
            this.columns.push({colName: column, as: as});
        else {
            column.as = as;
            this.columns.push(column);
        }
        return this;
    }

    addColumnRaw(rawSql: string): SelectStmt {
        this.columns.push({raw: rawSql});
        return this;
    }

    addFrom(table: string | SelectTable): SelectStmt {
        if (_.isString(table))
            this.from.push({tableName: table});
        else
            this.from.push(table);
        return this;
    }

    addFromRaw(rawSql: string): SelectStmt {
        this.from.push({raw: rawSql});
        return this;
    }

    addFromAs(table: string | SelectTable, as: string): SelectStmt {
        if (_.isString(table))
            this.from.push({tableName: table, as: as});
        else {
            table.as = as;
            this.from.push(table);
        }
        return this;
    }

    addWhere(operand1: Operand, oper: BooleanOper, operand2: Operand): SelectStmt {
        this.where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }

    emitSelectColumn(col: SelectColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (col.tableName)
            e.emitQuotedName(col.tableName).emit(".");
        if (!col.colName && !col.raw && !col.value)
            throwError("SelectStmt: column.name or column.raw or column.value not defined");
        if (col.colName)
            e.emitQuotedName(col.colName);
        if (col.value)
            e.emit(col.value.toSql());
        if (col.raw) {
            if (_.isNumber(col.raw))
                e.emit(new SqlNumberValue(col.raw, e.dialect).toSql());
            else if (_.isDate(col.raw))
                e.emit(new SqlDateValue(col.raw, e.dialect).toSql());
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

    toSql(dialect: SqlDialect): string {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = this instanceof InlineSelectStmt;

        e.emit("SELECT").emitLine();
        this.columns.forEach((col: SelectColumn, index: number) => {
            this.emitSelectColumn(col, e, "  ");
            if (index !== this.columns.length - 1)
                e.emit(",");
            e.emitLine();
        });

        if (this.from.length > 0) {
            e.emit("FROM").emitLine();
            this.from.forEach((table: SelectTable, index: number) => {
                this.emitSelectTable(table, e, "  ");
                if (index !== this.from.length - 1)
                    e.emit(",");
                e.emitLine();
            });
        }

        if (this.where.length > 0) {
            e.emit("WHERE").emitLine();
            this.where.forEach((where: WhereClause, index: number) => {
                e.emitWhere(where, "  ");
                if (index !== this.where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });

        }

        return e.toSql();
    }
}

export class InlineSelectStmt extends SelectStmt {

}


