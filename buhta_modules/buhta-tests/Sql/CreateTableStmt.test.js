"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
var SqlCore_1 = require("../../buhta-sql/SqlCore");
var CreateTableStmt_1 = require("../../buhta-sql/CreateTableStmt");
var SqlDb_1 = require("../../buhta-sql/SqlDb");
var DropTableStmt_1 = require("../../buhta-sql/DropTableStmt");
var DropTableIfExistsStmt_1 = require("../../buhta-sql/DropTableIfExistsStmt");
var InsertStmt_1 = require("../../buhta-sql/InsertStmt");
var SelectStmt_1 = require("../../buhta-sql/SelectStmt");
var UpdateStmt_1 = require("../../buhta-sql/UpdateStmt");
var DeleteStmt_1 = require("../../buhta-sql/DeleteStmt");
var UpsertStmt_1 = require("../../buhta-sql/UpsertStmt");
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
function drop_table_if_exist_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new DropTableIfExistsStmt_1.DropTableIfExistsStmt();
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
function getTestString() {
    var ret = [];
    for (var i = 1; i <= 20000; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");
}
//const testGuid = "1473a9f0-524e-11e6-af1b-d58df55606f6";
var testGuid = "ffffffff-ffff-ffff-ffff-ffffffffffff";
var testStr250 = "var common[] = require('./common');";
var testText = getTestString() + getTestString() + getTestString() + getTestString();
var testSByte = -128;
var testByte = 255;
var testShort = -32768;
var testUShort = 65535;
var testInt = -2147483648;
var testUInt = 4294967295;
var testLong = -9007199254740991; // не настоящий long, это js Number.MIN_SAFE_INTEGER
var testULong = 9007199254740991; // не настоящий ulong, это js Number.MAX_SAFE_INTEGER
var testFloat = 3.40282e38;
var testDouble = 1.797693134862315e+308; // Number.MAX_VALUE postgres не тянет, пришлось убрать одну цифру;
var testDecimal = -9007199254740.99;
var testDate = new Date(3000, 1, 1);
var testDateTime = new Date(3000, 11, 31, 23, 59, 59, 999);
var updateTestStr250 = "The above \ncopyright * notice and this ? permis'sion' [notice] shall 熱賣產品在您的國家 be included in";
var updateTestInt = 214483648;
function insert_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new InsertStmt_1.InsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlCore_1.SqlGuidValue(testGuid));
    sql.column("str250", new SqlCore_1.SqlStringValue(testStr250));
    sql.column("text", new SqlCore_1.SqlStringValue(testText));
    sql.column("sbyte", testSByte);
    sql.column("byte", testByte);
    sql.column("short", testShort);
    sql.column("ushort", testUShort);
    sql.column("int", testInt);
    sql.column("uint", testUInt);
    sql.column("long", testLong);
    sql.column("ulong", testULong);
    sql.column("float", testFloat);
    sql.column("double", testDouble);
    sql.column("decimal", testDecimal);
    sql.column("date", testDate);
    sql.column("datetime", testDateTime);
    // sql.column("timestamp", "timestamp");
    // sql.column("blob", "blob");
    db.executeSQL(sql)
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function select_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new SelectStmt_1.SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "text", "sbyte");
    sql.column("byte");
    sql.column("short");
    sql.column("ushort");
    sql.column("int");
    sql.column("uint");
    sql.column("long")
        .column("ulong")
        .column("float")
        .column("double")
        .column("decimal")
        .column("date")
        .column("datetime")
        .where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (table) {
        var row = table[0].rows[0];
        //    assert.equal(row["guid"], testGuid);
        chai_1.assert.equal(row["str250"], testStr250);
        chai_1.assert.equal(row["text"], testText);
        chai_1.assert.equal(row["sbyte"], testSByte);
        chai_1.assert.equal(row["byte"], testByte);
        chai_1.assert.equal(row["short"], testShort);
        chai_1.assert.equal(row["int"], testInt);
        chai_1.assert.equal(row["uint"], testUInt);
        chai_1.assert.equal(row["long"], testLong);
        chai_1.assert.equal(row["ulong"], testULong);
        chai_1.assert.isBelow(Math.abs(row["float"] - testFloat), 1e+33);
        chai_1.assert.equal(row["decimal"], testDecimal);
        chai_1.assert.equal(row["date"].getTime(), testDate.getTime());
        chai_1.assert.equal(row["datetime"].getTime(), testDateTime.getTime());
        //console.log({fromDb1: row["double"], test: testDouble, sub: row["double"] - testDouble});
        chai_1.assert.isBelow(Math.abs(row["double"] - testDouble), 5e+293);
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function update_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new UpdateStmt_1.UpdateStmt();
    sql.table("BuhtaTestTable");
    sql.column("str250", new SqlCore_1.SqlStringValue(updateTestStr250));
    sql.column("int", updateTestInt);
    sql.column("short", "byte");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function check_update_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new SelectStmt_1.SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (table) {
        var row = table[0].rows[0];
        chai_1.assert.equal(row["str250"], updateTestStr250);
        chai_1.assert.equal(row["short"], testByte);
        chai_1.assert.equal(row["int"], updateTestInt);
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function upsert_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new UpsertStmt_1.UpsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlCore_1.SqlGuidValue(testGuid));
    sql.column("str250", new SqlCore_1.SqlStringValue(updateTestStr250));
    sql.column("int", updateTestInt);
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql.toSql(dialect))
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function check_upsert_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new SelectStmt_1.SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (table) {
        var row = table[0].rows[0];
        chai_1.assert.equal(row["guid"], testGuid);
        chai_1.assert.equal(row["str250"], updateTestStr250);
        chai_1.assert.equal(row["int"], updateTestInt);
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function upsert2_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new UpsertStmt_1.UpsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlCore_1.SqlGuidValue(testGuid));
    sql.column("str250", new SqlCore_1.SqlStringValue(testStr250));
    sql.column("int", updateTestInt);
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql.toSql(dialect))
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function check_upsert2_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new SelectStmt_1.SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (table) {
        var row = table[0].rows[0];
        chai_1.assert.equal(row["guid"], testGuid);
        chai_1.assert.equal(row["str250"], testStr250);
        chai_1.assert.equal(row["int"], updateTestInt);
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function delete_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new DeleteStmt_1.DeleteStmt();
    sql.table("BuhtaTestTable");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (fake) {
        done();
    })
        .catch(function (error) {
        console.error(error);
        throw error;
    });
}
function check_delete_table_proc(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var sql = new SelectStmt_1.SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("*");
    sql.where("guid", "=", new SqlCore_1.SqlGuidValue(testGuid));
    db.executeSQL(sql)
        .then(function (table) {
        var row = table[0].rows[0];
        chai_1.assert.equal(table[0].rows.length, 0);
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
    // @test @timeout(15000)
    // pg_select_batch_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-pg";
    //     db.dialect = "pg";
    //
    //     let sql: string[] = [];
    //
    //     let total = 2000;
    //     for (let i = 0; i < total; i++) {
    //         if (i === 100)
    //             sql.push("select " + i + " as a777");
    //         else
    //             sql.push("select " + i + " as a777");
    //     }
    //
    //     db.executeSQLBatch(sql)
    //         .then((tables: DataTable[]) => {
    //
    //             for (let i = 0; i < total; i++) {
    //                 let row = tables[i].rows[0];
    //                 assert.equal(row["a777"], i);
    //             }
    //
    //             done();
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             throw error;
    //         });
    // }
    //
    // @test @timeout(45000)
    // pg_select_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-pg";
    //     db.dialect = "pg";
    //
    //     let sql: string[] = [];
    //
    //     let counter = 0;
    //     let total = 2000;
    //     for (let i = 0; i < total; i++) {
    //         //setTimeout(() => {
    //         db.executeSQLBatch(["select " + i + " as a777"])
    //             .then((table: DataTable[]) => {
    //                 let row = table[0].rows[0];
    //
    //                 assert.equal(row["a777"], i);
    //
    //                 counter++;
    //                 if (counter === total)
    //                     done();
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //                 throw error;
    //             });
    //
    //         //}, i * 5);
    //     }
    // }
    //
    // @test @timeout(15000)
    // mysql_select_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-mysql";
    //     db.dialect = "mysql";
    //
    //     // let sql: string[] = [];
    //
    //     let counter = 0;
    //     let total = 2000;
    //     for (let i = 0; i < total; i++) {
    //         db.executeSQL("select " + i + " as a777")
    //             .then((table: DataTable) => {
    //                 let row = table.rows[0];
    //
    //                 assert.equal(row["a777"], i);
    //
    //                 counter++;
    //                 if (counter === total)
    //                     done();
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //                 throw error;
    //             });
    //
    //     }
    // }
    //
    // @test @timeout(15000)
    // mysql_select_batch_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-mysql";
    //     db.dialect = "mysql";
    //
    //     let sql: string[] = [];
    //
    //     let total = 2000;
    //     for (let i = 0; i < total; i++)
    //         sql.push("select " + i + " as a777");
    //
    //     db.executeSQLBatch(sql)
    //         .then((tables: DataTable[]) => {
    //
    //             for (let i = 0; i < total; i++) {
    //                 let row = tables[i].rows[0];
    //                 assert.equal(row["a777"], i);
    //             }
    //
    //             done();
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             throw error;
    //         });
    // }
    //
    // @test @timeout(15000)
    // mssql_select_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-mssql";
    //     db.dialect = "mssql";
    //
    //     // let sql: string[] = [];
    //
    //     let counter = 0;
    //     let total = 2000;
    //     for (let i = 0; i < total; i++) {
    //         db.executeSQL("select " + i + " as a777")
    //             .then((table: DataTable) => {
    //                 let row = table.rows[0];
    //
    //                 assert.equal(row["a777"], i);
    //
    //                 counter++;
    //                 if (counter === total)
    //                     done();
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //                 throw error;
    //             });
    //
    //     }
    // }
    //
    // @test @timeout(15000)
    // mssql_select_batch_2000(done: () => void) {
    //
    //     let db = new SqlDb();
    //     db.dbName = "test-mssql";
    //     db.dialect = "mssql";
    //
    //     let sql: string[] = [];
    //
    //     let total = 2000;
    //     for (let i = 0; i < total; i++)
    //         sql.push("select " + i + " as a777");
    //
    //     db.executeSQLBatch(sql)
    //         .then((tables: DataTable[]) => {
    //
    //             for (let i = 0; i < total; i++) {
    //                 let row = tables[i].rows[0];
    //                 assert.equal(row["a777"], i);
    //             }
    //
    //             done();
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             throw error;
    //         });
    // }
    CreateTableStmtTest.prototype.mssql_drop_table_if_exist = function (done) {
        var dialect = "mssql";
        drop_table_if_exist_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_create_table = function (done) {
        var dialect = "mssql";
        create_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_insert_table = function (done) {
        var dialect = "mssql";
        insert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_select_table = function (done) {
        var dialect = "mssql";
        select_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_update_table = function (done) {
        var dialect = "mssql";
        update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_check_update_table = function (done) {
        var dialect = "mssql";
        check_update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_delete_table = function (done) {
        var dialect = "mssql";
        delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_check_delete_table = function (done) {
        var dialect = "mssql";
        check_delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_upsert_table = function (done) {
        var dialect = "mssql";
        upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_check_upsert_table = function (done) {
        var dialect = "mssql";
        check_upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_upsert2_table = function (done) {
        var dialect = "mssql";
        upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_check_upsert2_table = function (done) {
        var dialect = "mssql";
        check_upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mssql_drop_table = function (done) {
        var dialect = "mssql";
        drop_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_drop_table_if_exist = function (done) {
        var dialect = "pg";
        drop_table_if_exist_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_create_table = function (done) {
        var dialect = "pg";
        create_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_insert_table = function (done) {
        var dialect = "pg";
        insert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_select_table = function (done) {
        var dialect = "pg";
        select_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_update_table = function (done) {
        var dialect = "pg";
        update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_check_update_table = function (done) {
        var dialect = "pg";
        check_update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_delete_table = function (done) {
        var dialect = "pg";
        delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_check_delete_table = function (done) {
        var dialect = "pg";
        check_delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_upsert_table = function (done) {
        var dialect = "pg";
        upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_check_upsert_table = function (done) {
        var dialect = "pg";
        check_upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_upsert2_table = function (done) {
        var dialect = "pg";
        upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_check_upsert2_table = function (done) {
        var dialect = "pg";
        check_upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.pg_drop_table = function (done) {
        var dialect = "pg";
        drop_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_drop_table_if_exist = function (done) {
        var dialect = "mysql";
        drop_table_if_exist_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_create_table = function (done) {
        var dialect = "mysql";
        create_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_insert_table = function (done) {
        var dialect = "mysql";
        insert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_select_table = function (done) {
        var dialect = "mysql";
        select_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_update_table = function (done) {
        var dialect = "mysql";
        update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_check_update_table = function (done) {
        var dialect = "mysql";
        check_update_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_delete_table = function (done) {
        var dialect = "mysql";
        delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_check_delete_table = function (done) {
        var dialect = "mysql";
        check_delete_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_upsert_table = function (done) {
        var dialect = "mysql";
        upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_check_upsert_table = function (done) {
        var dialect = "mysql";
        check_upsert_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_upsert2_table = function (done) {
        var dialect = "mysql";
        upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_check_upsert2_table = function (done) {
        var dialect = "mysql";
        check_upsert2_table_proc(dialect, done);
    };
    CreateTableStmtTest.prototype.mysql_drop_table = function (done) {
        var dialect = "mysql";
        drop_table_proc(dialect, done);
    };
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_drop_table_if_exist", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_create_table", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(10000)
    ], CreateTableStmtTest.prototype, "mssql_insert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_select_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_check_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_check_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_check_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mssql_check_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.skip
    ], CreateTableStmtTest.prototype, "mssql_drop_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_drop_table_if_exist", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_create_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_insert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_select_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_check_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_check_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_check_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "pg_check_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.skip
    ], CreateTableStmtTest.prototype, "pg_drop_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_drop_table_if_exist", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_create_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_insert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_select_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_check_update_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_check_delete_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_check_upsert_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test
    ], CreateTableStmtTest.prototype, "mysql_check_upsert2_table", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.skip
    ], CreateTableStmtTest.prototype, "mysql_drop_table", null);
    CreateTableStmtTest = __decorate([
        mocha_typescript_1.suite("Sql CreateTableStmt")
    ], CreateTableStmtTest);
    return CreateTableStmtTest;
}());
exports.CreateTableStmtTest = CreateTableStmtTest;
//# sourceMappingURL=CreateTableStmt.test.js.map