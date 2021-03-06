"use strict";
var _ = require("lodash");
var SqlEmitter_1 = require("./SqlEmitter");
var Error_1 = require("../buhta-core/Error");
var DropTableIfExistsStmt = (function () {
    function DropTableIfExistsStmt(table) {
        if (table)
            this.table(table);
    }
    DropTableIfExistsStmt.prototype.table = function (table) {
        if (_.isString(table))
            this._table = { table: table };
        else
            this._table = table;
        return this;
    };
    DropTableIfExistsStmt.prototype.emitDropTable = function (table, e, level) {
        e.emitLevel(level);
        if (table.db)
            e.emitQuotedName(table.db).emit("..");
        if (!table.table && !table.raw)
            Error_1.throwError("DropTableIfExistsStmt: table.name or table.raw not defined");
        if (table.table)
            e.emitQuotedName(table.table);
        if (table.raw)
            e.emit(table.raw);
        return this;
    };
    DropTableIfExistsStmt.prototype.emitDropTableName = function (table, e, level) {
        e.emitLevel(level);
        if (table.raw)
            e.emit(table.raw);
        else {
            if (e.dialect === "mssql" && table.table.startsWith("#")) {
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
    };
    DropTableIfExistsStmt.prototype.toSql = function (dialect) {
        var e = new SqlEmitter_1.SqlEmitter();
        e.dialect = dialect;
        e.noLevels = false;
        if (dialect === "mssql") {
            e.emit("IF OBJECT_ID(");
            this.emitDropTableName(this._table, e, "");
            e.emit(",'U') IS NOT NULL ");
            e.emit("DROP TABLE ");
            this.emitDropTable(this._table, e, "");
        }
        else if (dialect === "pg") {
            e.emit("DROP TABLE IF EXISTS ");
            this.emitDropTable(this._table, e, "");
        }
        else if (dialect === "mysql") {
            e.emit("DROP TABLE IF EXISTS ");
            this.emitDropTable(this._table, e, "");
        }
        else {
            Error_1.throwError("DropTableIfExistsStmt.toSql(): invalid sql dialect '" + dialect + "'");
        }
        return e.toSql();
    };
    return DropTableIfExistsStmt;
}());
exports.DropTableIfExistsStmt = DropTableIfExistsStmt;
//# sourceMappingURL=DropTableIfExistsStmt.js.map