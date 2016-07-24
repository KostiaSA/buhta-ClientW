import * as _ from "lodash";
import {SqlDataType, SqlDialect} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {DropTable} from "./DropTableStmt";


export class DropTableIfExistsStmt {
    table: DropTable;

    addTable(table: string | DropTable): DropTableIfExistsStmt {
        if (_.isString(table))
            this.table = {table: table};
        else
            this.table = table;
        return this;
    }

    private emitDropTable(table: DropTable, e: SqlEmitter, level: string): DropTableIfExistsStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("DropTableIfExistsStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    }

    private emitDropTableName(table: DropTable, e: SqlEmitter, level: string): DropTableIfExistsStmt {
        e.emitLevel(level);
        if (table.db)
            e.emit(table.db).emit("..");
        if (table.table)
            e.emit(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    }


    toSql(dialect: SqlDialect): string {

        let e = new SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;

        if (dialect === "mssql") {
            e.emit("IF OBJECT_ID('");
            this.emitDropTableName(this.table, e, "");
            e.emit("','U') IS NOT NULL ");
            e.emit("DROP TABLE ");
            this.emitDropTable(this.table, e, "");
        }
        else if (dialect === "pg") {
            e.emit("DROP TABLE IF EXISTS ");
            this.emitDropTable(this.table, e, "");
        }
        else if (dialect === "mysql") {
            e.emit("DROP TABLE IF EXISTS ");
            this.emitDropTable(this.table, e, "");
        }
        else {
            throwError("DropTableIfExistsStmt.toSql(): invalid sql dialect '" + dialect + "'");
        }

        return e.toSql();
    }

}