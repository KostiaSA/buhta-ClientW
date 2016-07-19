import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect} from "./Db";

export type BooleanOper = ">" | "<" | ">=" | "<=" | "<>" | "!=" | "like";
export type Operand = string | number | Column;

export interface Column {
    table?: string;
    column?: string;
    raw?: string;
}


export interface SelectColumn extends Column {
    as?: string;
}

export interface SelectTable {
    db?: string;
    table?: string;
    select?: InlineSelectStmt;
    as?: string;
    raw?: string;
}

export interface WhereClause {
    operand1?: Operand;
    oper?: BooleanOper;
    operand2?: Operand;
    raw?: string;
}

class Emitter {
    private sql: string[] = [];
    dialect: SqlDialect;
    noLevels: boolean;

    emit(str: string): Emitter {
        this.sql.push(str);
        return this;
    }

    emitLevel(level: string): Emitter {
        if (!this.noLevels)
            this.sql.push(level);
        return this;
    }

    emitLine(): Emitter {
        if (this.noLevels)
            this.sql.push(" ");
        else
            this.sql.push("\n");
        return this;
    }

    emitQuotedName(name: string): Emitter {
        if (name.slice(0, 1) === "'" && name.slice(-1) === "'")
            this.sql.push(name); // строка живьем, когда в одиночных в кавычках
        else {
            if (this.dialect === "mssql")
                this.sql.push("[" + name + "]");
            else if (this.dialect === "pg")
                this.sql.push("\"" + name + "\"");
            else {
                throwError("Emitter: invalid sql dialect '" + this.dialect + "'");
            }
        }
        return this;
    }

    emitColumn(col: SelectColumn, level: string): Emitter {
        this.emitLevel(level);
        if (col.table)
            this.emitQuotedName(col.table).emit(".");
        if (!col.column && !col.raw)
            throwError("SelectStmt: column.name or column.raw not defined");
        if (col.column)
            this.emitQuotedName(col.column);
        if (col.raw)
            this.emit(col.raw);
        if (col.as)
            this.emit(" ").emitQuotedName(col.as);
        return this;
    }


    emitOperand(operand: Operand): Emitter {
        if (_.isNumber(operand))
            this.emit(operand.toString());
        else if (_.isString(operand))
            this.emitQuotedName(operand);
        else if (operand.raw || operand.column) {
            this.emitColumn(operand, "");
        }
        else
            throwError("SelectStmt.emitOperand(): invalid operand type");
        return this;
    }

    toSql(): string {
        return this.sql.join("");
    }
}

export class SelectStmt {

    columns: SelectColumn[] = [];
    from: SelectTable[] = [];
    where: WhereClause[] = [];

    addColumn(...column: (string | SelectColumn | "*")[]): SelectStmt {
        column.forEach((col) => {
            if (col === "*")
                this.columns.push({raw: "*"});
            else if (_.isString(col))
                this.columns.push({column: col});
            else
                this.columns.push(col);
        });
        return this;
    }

    addColumnAs(column: string | SelectColumn, as: string): SelectStmt {
        if (_.isString(column))
            this.columns.push({column: column, as: as});
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
            this.from.push({table: table});
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
            this.from.push({table: table, as: as});
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


    private emitSelectTable(table: SelectTable, e: Emitter, level: string) {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("SelectStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        if (table.as)
            e.emit(" ").emitQuotedName(table.as);
    }

    private emitWhere(where: WhereClause, e: Emitter, level: string) {
        e.emitLevel(level);
        e.emit("(");
        if (where.raw)
            e.emit(where.raw);
        else {
            e.emitOperand(where.operand1!).emit(" ");
            e.emit(where.oper!).emit(" ");
            e.emitOperand(where.operand2!);
        }
        e.emit(")");
    }

    toSql(dialect: SqlDialect): string {

        let e = new Emitter();
        e.dialect = dialect;
        e.noLevels = this instanceof InlineSelectStmt;

        e.emit("SELECT").emitLine();
        this.columns.forEach((col: SelectColumn, index: number) => {
            e.emitColumn(col, "  ");
            if (index !== this.columns.length - 1)
                e.emit(",");
            e.emitLine();
        });

        e.emit("FROM").emitLine();
        this.from.forEach((table: SelectColumn, index: number) => {
            this.emitSelectTable(table, e, "  ");
            if (index !== this.from.length - 1)
                e.emit(",");
            e.emitLine();
        });

        if (this.from.length > 0) {
            e.emit("WHERE").emitLine();
            this.where.forEach((where: WhereClause, index: number) => {
                this.emitWhere(where, e, "  ");
                if (index !== this.from.length - 1)
                    e.emit(" AND ");
                e.emitLine();
            });

        }

        return e.toSql();
    }
}

export class InlineSelectStmt extends SelectStmt {

}
