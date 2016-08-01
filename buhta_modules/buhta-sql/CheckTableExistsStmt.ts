import * as _ from "lodash";
import {SqlDataType, SqlDialect} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {DropTable} from "./DropTableStmt";
import {SqlBatch} from "./SqlDb";


// возвращает 1 или 0 если таблица существует/не существует

export class CheckTableExistsStmt {
    constructor(table?: string | DropTable) {
        if (table)
            this.table(table);
    }

    _table: DropTable;

    table(table: string | DropTable): CheckTableExistsStmt {
        if (_.isString(table))
            this._table = {table: table};
        else
            this._table = table;
        return this;
    }

    private emitTableName(table: DropTable, e: SqlEmitter, level: string): CheckTableExistsStmt {
        e.emitLevel(level);

        if (table.raw)
            e.emit(table.raw);
        else {
            if (e.dialect === "mssql" && table.table!.startsWith("#")) {
                e.emitStringValue("tempdb.." + table.table);
            }
            else {
                if (table.db && table.table)
                    e.emitStringValue(table.db + ".." + table.table);
                else if (table.table)
                    e.emitStringValue(table.table);
            }
        }
        return this;
    }


    toSql(dialect: SqlDialect): SqlBatch {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        if (dialect === "mssql") {
            e.emit("SELECT CASE WHEN OBJECT_ID(");
            this.emitTableName(this._table, e, "");
            e.emit(",'U') IS NULL THEN 0 ELSE 1 END AS result");
        }
        else if (dialect === "pg") {
            e.emit("SELECT COUNT(1) FROM pg_catalog.pg_class c ");
            e.emit("JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace ");
            e.emit("WHERE  n.nspname = 'public' AND c.relname = ");
            this.emitTableName(this._table, e, "");
        }
        else if (dialect === "mysql") {
            e.emit("SELECT COUNT(1) AS result FROM Information_schema.Tables ");
            e.emit("where table_schema=SCHEMA() AND table_name=");
            this.emitTableName(this._table, e, "");
        }
        else {
            throwError("CheckTableExistsStmt.toSql(): invalid sql dialect '" + dialect + "'");
        }

        return e.toSql();
    }

}