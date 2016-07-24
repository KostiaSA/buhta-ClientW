"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
var CreateTableStmt_1 = require("../../buhta-sql/CreateTableStmt");
var SqlDb_1 = require("../../buhta-sql/SqlDb");
var DropTableStmt_1 = require("../../buhta-sql/DropTableStmt");
function create_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new CreateTableStmt_1.CreateTableStmt();
    sql.addTable("BuhtaTestTable");
    sql.addColumn({ column: "guid", dataType: "guid", notNull: true, primaryKey: true });
    sql.addColumn("str250", "string", 250);
    sql.addColumn("text", "text");
    sql.addColumn("sbyte", "sbyte");
    sql.addColumn("byte", "byte");
    sql.addColumn("short", "short");
    sql.addColumn("ushort", "ushort");
    sql.addColumn("int", "int");
    sql.addColumn("uint", "uint");
    sql.addColumn("long", "long");
    sql.addColumn("ulong", "ulong");
    sql.addColumn("float", "float");
    sql.addColumn("double", "double");
    sql.addColumn({ column: "decimal", dataType: "decimal", dataLen: 15, decimals: 2 });
    sql.addColumn("date", "date");
    sql.addColumn("datetime", "datetime");
    sql.addColumn("timestamp", "timestamp");
    sql.addColumn("blob", "blob");
    db.executeSQL(sql)
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function drop_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new DropTableStmt_1.DropTableStmt();
    sql.addTable("BuhtaTestTable");
    db.executeSQL(sql)
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
var CreateTableStmtTest = (function () {
    function CreateTableStmtTest() {
    }
    CreateTableStmtTest.prototype.mssql_create_table = function (done) {
        var dialect = "mssql";
        create_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_drop_table = function (done) {
        var dialect = "mssql";
        drop_table_proc(dialect, done);
    };
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(5000)
    ], CreateTableStmtTest.prototype, "mssql_create_table", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(5000)
    ], CreateTableStmtTest.prototype, "mssql_drop_table", null);
    CreateTableStmtTest = __decorate([
        mocha_typescript_1.suite("Sql CreateTableStmt")
    ], CreateTableStmtTest);
    return CreateTableStmtTest;
}());
exports.CreateTableStmtTest = CreateTableStmtTest;
//# sourceMappingURL=CreateTableStmt.test.js.map