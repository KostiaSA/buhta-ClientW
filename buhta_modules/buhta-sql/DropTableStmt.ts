import * as _ from "lodash";
import {SqlDataType, SqlDialect} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {SqlBatch} from "./SqlDb";


export interface DropTable {
    db?: string;
    table?: string;
    raw?: string;
}


export class DropTableStmt {
    constructor(table?: string | DropTable) {
        if (table)
            this.table(table);
    }

    _table: DropTable;

    table(table: string | DropTable): DropTableStmt {
        if (_.isString(table))
            this._table = {table: table};
        else
            this._table = table;
        return this;
    }

    private emitDropTable(table: DropTable, e: SqlEmitter, level: string): DropTableStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("DropTableStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    }


    toSql(dialect: SqlDialect): SqlBatch {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        e.emit("DROP TABLE ");
        this.emitDropTable(this._table, e, "");

        return e.toSql();
    }

}