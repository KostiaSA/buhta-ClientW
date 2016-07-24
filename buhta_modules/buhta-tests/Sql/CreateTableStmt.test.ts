import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDialect} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SqlDb} from "../../buhta-sql/SqlDb";
import {DropTableStmt} from "../../buhta-sql/DropTableStmt";
import {DropTableIfExistsStmt} from "../../buhta-sql/DropTableIfExistsStmt";


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

    @test
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
    mysql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mysql";
        drop_table_proc(dialect, done);
    }
}
