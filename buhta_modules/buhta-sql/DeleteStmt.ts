import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";
import {SqlDialect, SqlValue, SqlNumberValue, SqlDateValue, SqlDateTimeValue} from "./SqlCore";
import {Operand, BooleanOper, WhereClause} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {SelectTable, SelectColumn} from "./SelectStmt";


export interface DeleteTable {
    dbName?: string;
    tableName?: string;
    raw?: string;
}

export class DeleteStmt {

    private _updateTable: DeleteTable[] = [];

    private _selectTable: SelectTable[] = [];
    private _where: WhereClause[] = [];

    table(table: string | DeleteTable): DeleteStmt {
        if (this._updateTable.length > 0)
            throwError("DeleteStmt.table(): one delete table is already defined");

        if (_.isString(table))
            this._updateTable.push({tableName: table});
        else
            this._updateTable.push(table);
        return this;
    }

    tableRaw(rawSql: string): DeleteStmt {
        if (this._updateTable.length > 0)
            throwError("DeleteStmt.table(): one delete table is already defined");

        this._updateTable.push({raw: rawSql});
        return this;
    }

    fromTable(table: string | SelectTable): DeleteStmt {
        if (_.isString(table))
            this._selectTable.push({tableName: table});
        else
            this._selectTable.push(table);
        return this;
    }

    fromTableRaw(rawSql: string): DeleteStmt {
        this._selectTable.push({raw: rawSql});
        return this;
    }

    where(operand1: Operand, oper: BooleanOper, operand2: Operand): DeleteStmt {
        this._where.push({operand1: operand1, oper: oper, operand2: operand2});
        return this;
    }


    private emitDeleteTable(table: DeleteTable, e: SqlEmitter, level: string) {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("DeleteStmt: table.tableName or table.raw not defined");
        if (table.tableName)
            e.emitQuotedName(table.tableName);
        if (table.raw)
            e.emit(table.raw);
    }


    private emitSelectTable(table: SelectTable, e: SqlEmitter, level: string): DeleteStmt {
        e.emitLevel(level);
        if (table.dbName)
            e.emitQuotedName(table.dbName).emit("..");
        if (!table.tableName && !table.raw)
            throwError("DeleteStmt: table.tableName or table.raw not defined");
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

        if (this._updateTable.length === 0)
            throwError("DeleteStmt: update table not defined");

        e.emit("DELETE FROM ");
        this.emitDeleteTable(this._updateTable[0], e, "");
        e.emitLine();

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
        else
            throwError("DeleteStmt: where clause is not defined");

        return e.toSql();
    }
}



