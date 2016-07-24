import * as _ from "lodash";
import {SqlDataType, SqlDialect} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {DropTable} from "./DropTableStmt";


export class DropTableIfExistStmt {
    table: DropTable;

    addTable(table: string | DropTable): DropTableIfExistStmt {
        if (_.isString(table))
            this.table = {table: table};
        else
            this.table = table;
        return this;
    }

    private emitDropTable(table: DropTable, e: SqlEmitter, level: string): DropTableIfExistStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("DropTableIfExistStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    }

    private emitDropTableName(table: DropTable, e: SqlEmitter, level: string): DropTableIfExistStmt {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            throwError("DropTableIfExistStmt: table.name or table.raw not defined");
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

        if (dialect === "mssql") {
            let tableName = "";
            if (this.table.db)
                tableName = this.table.db + "..";
            "IF OBJECT_ID('dbo.Product', 'U') IS NOT NULL"
            e.emit("DROP TABLE ");
            this.emitDropTable(this.table, e, "");
        }

        return e.toSql();
    }

}