import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect} from "./SqlCore";
import { Operand, WhereClause, BooleanOper} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";


export interface UpdateColumn {
    table?: string;
    column?: string;
    raw?: string;
}

export interface UpdateTable {
    db?: string;
    table?: string;
    raw?: string;
}

export class UpdateStmt {

    columns: UpdateColumn[] = [];
    values: Operand[] = [];
    table: UpdateTable;
    where: WhereClause[] = [];

    addColumnAndValue(column: string | UpdateColumn, value: Operand): UpdateStmt {
        if (_.isString(column))
            this.columns.push({column: column});
        else
            this.columns.push(column);
        this.values.push(value);
        return this;
    }

    addTable(table: string | UpdateTable): UpdateStmt {
        if (_.isString(table))
            this.table = {table: table};
        else
            this.table = table;
        return this;
    }

    addWhere(operand1: Operand, oper: BooleanOper, operand2: Operand): UpdateStmt {
        this.where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }


    private emitUpdateColumn(col: UpdateColumn, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (col.table)
            e.emitQuotedName(col.table).emit(".");
        if (!col.column && !col.raw)
            throwError("UpdateStmt: column.name or column.raw not defined");
        if (col.column)
            e.emitQuotedName(col.column);
        if (col.raw)
            e.emit(col.raw);
    }

    private emitUpdateTable(table: UpdateTable, e: SqlEmitter, level: string): UpdateStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("UpdateStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    }


    toSql(dialect: SqlDialect): string {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        e.emit("UPDATE").emit(" ");
        this.emitUpdateTable(this.table, e, "");
        e.emit(" SET").emitLine();

        this.columns.forEach((col: UpdateColumn, index: number) => {
            this.emitUpdateColumn(col, e, "  ");
            e.emit("=");
            e.emitOperand(this.values[index]);

            if (index !== this.columns.length - 1)
                e.emit(",");
            e.emitLine();
        });

        // e.emit("FROM").emitLine();
        // this.from.forEach((table: SelectColumn, index: number) => {
        //     this.emitSelectTable(table, e, "  ");
        //     if (index !== this.from.length - 1)
        //         e.emit(",");
        //     e.emitLine();
        // });

        if (this.where.length > 0) {
            e.emit("WHERE").emitLine();
            this.where.forEach((where: WhereClause, index: number) => {
                e.emitWhere(where, "  ");
                if (index !== this.where.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });

        }
        else
           throwError("UpdateStmt.toSql(): 'WHERE' clause is empty");

        return e.toSql();
    }
}
