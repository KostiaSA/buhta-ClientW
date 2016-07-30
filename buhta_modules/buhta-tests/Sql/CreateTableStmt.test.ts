import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDialect, SqlGuidValue, SqlNewGuidValue, SqlStringValue, SqlDateValue} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SqlDb, DataTable, SqlBatch} from "../../buhta-sql/SqlDb";
import {DropTableStmt} from "../../buhta-sql/DropTableStmt";
import {DropTableIfExistsStmt} from "../../buhta-sql/DropTableIfExistsStmt";
import {InsertStmt} from "../../buhta-sql/InsertStmt";
import {SelectStmt} from "../../buhta-sql/SelectStmt";
import {UpdateStmt} from "../../buhta-sql/UpdateStmt";
import {DeleteStmt} from "../../buhta-sql/DeleteStmt";
import {UpsertStmt} from "../../buhta-sql/UpsertStmt";
import {CreateTempTableStmt} from "../../buhta-sql/CreateTempTableStmt";


function create_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new CreateTableStmt();
    sql.table("BuhtaTestTable");
    sql.column({column: "guid", dataType: "guid", notNull: true, primaryKey: true});
    sql.column("str250", "string", 250);
    sql.column("text", "text");

    sql.column("sbyte", "sbyte");
    sql.column("byte", "byte");
    sql.column("short", "short");
    sql.column("ushort", "ushort");
    sql.column("int", "int");
    sql.column("uint", "uint");
    sql.column("long", "long");
    sql.column("ulong", "ulong");
    sql.column("float", "float");
    sql.column("double", "double");
    sql.column({column: "decimal", dataType: "decimal", dataLen: 15, decimals: 2});
    sql.column("date", "date");
    sql.column("datetime", "datetime");
    sql.column("timestamp", "timestamp");
    sql.column("blob", "blob");

    db.executeSQL(sql)
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function drop_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new DropTableStmt();
    sql.table("BuhtaTestTable");

    db.executeSQL(sql)
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function drop_table_if_exist_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new DropTableIfExistsStmt();
    sql.table("BuhtaTestTable");

    db.executeSQL(sql)
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function getTestString() {
    let ret: string[] = [];
    for (let i = 1; i <= 20000; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");
}

//const testGuid = "1473a9f0-524e-11e6-af1b-d58df55606f6";
const testGuid = "ffffffff-ffff-ffff-ffff-ffffffffffff";
const testStr250 = "var common[] = require('./common');";
const testText = getTestString() + getTestString() + getTestString() + getTestString();
const testSByte = -128;
const testByte = 255;
const testShort = -32768;
const testUShort = 65535;
const testInt = -2147483648;
const testUInt = 4294967295;
const testLong = -9007199254740991; // не настоящий long, это js Number.MIN_SAFE_INTEGER
const testULong = 9007199254740991; // не настоящий ulong, это js Number.MAX_SAFE_INTEGER
const testFloat = 3.40282e38;
const testDouble = 1.797693134862315e+308; // Number.MAX_VALUE postgres не тянет, пришлось убрать одну цифру;
const testDecimal = -9007199254740.99;
const testDate = new Date(3000, 1, 1);
const testDateTime = new Date(3000, 11, 31, 23, 59, 59, 999);

const updateTestStr250 = "The above \ncopyright * notice and this ? permis'sion' [notice] shall 熱賣產品在您的國家 be included in";
const updateTestInt = 214483648;

function insert_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new InsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlGuidValue(testGuid));
    sql.column("str250", new SqlStringValue(testStr250));
    sql.column("text", new SqlStringValue(testText));
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
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function select_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new SelectStmt();
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
        .where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((table: DataTable[]) => {
            let row = table[0].rows[0];

            //    assert.equal(row["guid"], testGuid);
            assert.equal(row["str250"], testStr250);
            assert.equal(row["text"], testText);
            assert.equal(row["sbyte"], testSByte);
            assert.equal(row["byte"], testByte);
            assert.equal(row["short"], testShort);
            assert.equal(row["int"], testInt);
            assert.equal(row["uint"], testUInt);
            assert.equal(row["long"], testLong);

            assert.equal(row["ulong"], testULong);

            assert.isBelow(Math.abs(row["float"] - testFloat), 1e+33);

            assert.equal(row["decimal"], testDecimal);
            assert.equal(row["date"].getTime(), testDate.getTime());
            assert.equal(row["datetime"].getTime(), testDateTime.getTime());

            //console.log({fromDb1: row["double"], test: testDouble, sub: row["double"] - testDouble});
            assert.isBelow(Math.abs(row["double"] - testDouble), 5e+293);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function update_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new UpdateStmt();
    sql.table("BuhtaTestTable");
    sql.column("str250", new SqlStringValue(updateTestStr250));
    sql.column("int", updateTestInt);
    sql.column("short", "byte");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function check_update_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((table: DataTable[]) => {
            let row = table[0].rows[0];

            assert.equal(row["str250"], updateTestStr250);
            assert.equal(row["short"], testByte);
            assert.equal(row["int"], updateTestInt);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function upsert_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new UpsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlGuidValue(testGuid));
    sql.column("str250", new SqlStringValue(updateTestStr250));
    sql.column("int", updateTestInt);
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql.toSql(dialect))
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}
function check_upsert_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((table: DataTable[]) => {
            let row = table[0].rows[0];

            assert.equal(row["guid"], testGuid);
            assert.equal(row["str250"], updateTestStr250);
            assert.equal(row["int"], updateTestInt);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}
function upsert2_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new UpsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlGuidValue(testGuid));
    sql.column("str250", new SqlStringValue(testStr250));
    sql.column("int", updateTestInt);
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql.toSql(dialect))
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}
function check_upsert2_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", "str250", "int", "short");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((table: DataTable[]) => {
            let row = table[0].rows[0];

            assert.equal(row["guid"], testGuid);
            assert.equal(row["str250"], testStr250);
            assert.equal(row["int"], updateTestInt);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function delete_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new DeleteStmt();
    sql.table("BuhtaTestTable");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((fake) => {
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function check_delete_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new SelectStmt();
    sql.table("BuhtaTestTable");
    sql.column("*");
    sql.where("guid", "=", new SqlGuidValue(testGuid));

    db.executeSQL(sql)
        .then((table: DataTable[]) => {
            let row = table[0].rows[0];
            assert.equal(table[0].rows.length, 0);
            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

function create_temp_table_proc(dialect: SqlDialect, done: () => void) {
    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let batch: SqlBatch = [];

    let create_sql = new CreateTempTableStmt();
    create_sql.table("#BuhtaTestTempTable");
    create_sql.column({column: "id", dataType: "int", notNull: true, primaryKey: true});
    create_sql.column("name", "string", 50);
    batch.push(create_sql);

    let insert_sql = new InsertStmt();
    insert_sql.table("#BuhtaTestTempTable");
    insert_sql.column("id", 999);
    insert_sql.column("name", "'test str 1'");
    batch.push(insert_sql);

  //  batch.push(new DropTableStmt("#BuhtaTestTempTable"));

    db.executeSQL(batch)
        .then((tables: DataTable[]) => {
            done();
        })
        .catch((error) => {
            throw error;
        });
}


@suite("Sql CreateTableStmt")
//@skip
export class CreateTableStmtTest {

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

    @test
    mssql_drop_table_if_exist(done: () => void) {
        let dialect: SqlDialect = "mssql";
        drop_table_if_exist_proc(dialect, done);
    }

    @test
    mssql_create_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        create_table_proc(dialect, done);
    }

    @test @timeout(10000)
    mssql_insert_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        insert_table_proc(dialect, done);
    }

    @test
    mssql_select_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        select_table_proc(dialect, done);
    }

    @test
    mssql_update_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        update_table_proc(dialect, done);
    }

    @test
    mssql_check_update_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        check_update_table_proc(dialect, done);
    }

    @test
    mssql_delete_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        delete_table_proc(dialect, done);
    }

    @test
    mssql_check_delete_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        check_delete_table_proc(dialect, done);
    }

    @test
    mssql_upsert_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        upsert_table_proc(dialect, done);
    }

    @test
    mssql_check_upsert_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        check_upsert_table_proc(dialect, done);
    }

    @test
    mssql_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        upsert2_table_proc(dialect, done);
    }

    @test
    mssql_check_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        check_upsert2_table_proc(dialect, done);
    }


    @test @skip
    mssql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        drop_table_proc(dialect, done);
    }

    @test
    mssql_create_temp_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        create_temp_table_proc(dialect, done);
    }


    @test
    pg_drop_table_if_exist(done: () => void) {
        let dialect: SqlDialect = "pg";
        drop_table_if_exist_proc(dialect, done);
    }

    @test
    pg_create_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        create_table_proc(dialect, done);
    }

    @test
    pg_insert_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        insert_table_proc(dialect, done);
    }

    @test
    pg_select_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        select_table_proc(dialect, done);
    }

    @test
    pg_update_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        update_table_proc(dialect, done);
    }

    @test
    pg_check_update_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        check_update_table_proc(dialect, done);
    }

    @test
    pg_delete_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        delete_table_proc(dialect, done);
    }

    @test
    pg_check_delete_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        check_delete_table_proc(dialect, done);
    }

    @test
    pg_upsert_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        upsert_table_proc(dialect, done);
    }

    @test
    pg_check_upsert_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        check_upsert_table_proc(dialect, done);
    }

    @test
    pg_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        upsert2_table_proc(dialect, done);
    }

    @test
    pg_check_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        check_upsert2_table_proc(dialect, done);
    }


    @test @skip
    pg_drop_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        drop_table_proc(dialect, done);
    }

    @test
    pg_create_temp_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        create_temp_table_proc(dialect, done);
    }

    @test
    mysql_drop_table_if_exist(done: () => void) {
        let dialect: SqlDialect = "mysql";
        drop_table_if_exist_proc(dialect, done);
    }

    @test
    mysql_create_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        create_table_proc(dialect, done);
    }

    @test
    mysql_insert_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        insert_table_proc(dialect, done);
    }

    @test
    mysql_select_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        select_table_proc(dialect, done);
    }

    @test
    mysql_update_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        update_table_proc(dialect, done);
    }

    @test
    mysql_check_update_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        check_update_table_proc(dialect, done);
    }

    @test
    mysql_delete_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        delete_table_proc(dialect, done);
    }

    @test
    mysql_check_delete_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        check_delete_table_proc(dialect, done);
    }

    @test
    mysql_upsert_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        upsert_table_proc(dialect, done);
    }

    @test
    mysql_check_upsert_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        check_upsert_table_proc(dialect, done);
    }

    @test
    mysql_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        upsert2_table_proc(dialect, done);
    }

    @test
    mysql_check_upsert2_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        check_upsert2_table_proc(dialect, done);
    }

    @test @skip
    mysql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        drop_table_proc(dialect, done);
    }

    @test
    mysql_create_temp_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        create_temp_table_proc(dialect, done);
    }
}
