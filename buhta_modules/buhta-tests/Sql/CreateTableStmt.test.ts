import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDialect, SqlGuidValue, SqlNewGuidValue, SqlStringValue, SqlDateValue} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SqlDb, DataTable} from "../../buhta-sql/SqlDb";
import {DropTableStmt} from "../../buhta-sql/DropTableStmt";
import {DropTableIfExistsStmt} from "../../buhta-sql/DropTableIfExistsStmt";
import {InsertStmt} from "../../buhta-sql/InsertStmt";
import {SelectStmt} from "../../buhta-sql/SelectStmt";


function create_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new CreateTableStmt();
    sql.addTable("BuhtaTestTable");
    sql.addColumn({column: "guid", dataType: "guid", notNull: true, primaryKey: true});
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
    sql.addColumn({column: "decimal", dataType: "decimal", dataLen: 15, decimals: 2});
    sql.addColumn("date", "date");
    sql.addColumn("datetime", "datetime");
    sql.addColumn("timestamp", "timestamp");
    sql.addColumn("blob", "blob");

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
    sql.addTable("BuhtaTestTable");

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
    sql.addTable("BuhtaTestTable");

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
const testText = "getTestString() + getTestString() + getTestString() + getTestString()";
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

function insert_table_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql = new InsertStmt();
    sql.table("BuhtaTestTable");
    sql.column("guid", new SqlGuidValue(testGuid, dialect));
    sql.column("str250", new SqlStringValue(testStr250, dialect));
    sql.column("text", new SqlStringValue(testText, dialect));
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
        .where("guid", "=", new SqlGuidValue(testGuid, dialect));

    db.executeSQL(sql)
        .then((table: DataTable) => {
            let row = table.rows[0];

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

            console.log({fromDb1: row["double"], test: testDouble, sub: row["double"] - testDouble});
            assert.isBelow(Math.abs(row["double"] - testDouble), 5e+293);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });

}

@suite("Sql CreateTableStmt")
//@skip
export class CreateTableStmtTest {
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

    @test @skip
    mssql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        drop_table_proc(dialect, done);
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

    @test @skip
    pg_drop_table(done: () => void) {
        let dialect: SqlDialect = "pg";
        drop_table_proc(dialect, done);
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

    @test @skip
    mysql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        drop_table_proc(dialect, done);
    }
}
