import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDb, DataTable, SqlBatch} from "../../buhta-sql/SqlDb";
import {SqlDialect} from "../../buhta-sql/SqlCore";
import {RaiseExceptionStmt} from "../../buhta-sql/RaiseExceptionStmt";
import {CreateTempTableStmt} from "../../buhta-sql/CreateTempTableStmt";
import {InsertStmt} from "../../buhta-sql/InsertStmt";

function syntax_test_proc(dialect: SqlDialect, done: () => void) {
    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let sql: string[] = [];
    if (dialect === "mssql")
        sql.push("begin tran");
    else
        sql.push("start transaction");
    sql.push("select 1 as \"Z1\" ,2 as ZZZ2");
    sql.push("select 2 as zz, 3 as yy, 4 as pp from INFORMATION_SCHEMA.TABLES where 1=2");
    sql.push("commit12");
    sql.push("select 3 as z3, 5 as z5");

    db.executeSQL(sql)
        .then((tables: DataTable[]) => {
            throw "syntax error expected";
        })
        .catch((error) => {
            //console.log(error.toString());
            assert.include(error.toString(), "commit12");
            done();
        });
}

function raise_exception_test_proc(dialect: SqlDialect, done: () => void) {
    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;


    db.executeSQL(new RaiseExceptionStmt("custrom error 0987654321"))
        .then((tables: DataTable[]) => {
            throw "syntax error expected";
        })
        .catch((error) => {
            //console.log(error.toString());
            assert.include(error.toString(), "custrom error 0987654321");
            done();
        });
}

function primary_key_exception_test_proc(dialect: SqlDialect, done: () => void) {
    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let batch: SqlBatch = [];

    let create_sql = new CreateTempTableStmt();
    create_sql.table("#BuhtaTestTempTable");
    create_sql.column({column: "id", dataType: "int", notNull: true});
    create_sql.column("name", "string", 50);
    batch.push(create_sql);

    let insert_sql = new InsertStmt();
    insert_sql.table("#BuhtaTestTempTable");
    insert_sql.column("id", 999);
    insert_sql.column("name", "'test str 1'");
    batch.push(insert_sql);

    batch.push(insert_sql);


    db.executeSQL(batch)
        .then((tables: DataTable[]) => {
            throw "primary key error expected";
        })
        .catch((error) => {
            done();
        });
}

@suite("Sql InvalidSyntax")
export class InvalidSyntaxTest {

    @test
    mssql_syntax_error(done: () => void) {
        syntax_test_proc("mssql", done);
    }

    @test
    pg_syntax_error(done: () => void) {
        syntax_test_proc("pg", done);
    }

    @test
    mysql_syntax_error(done: () => void) {
        syntax_test_proc("mysql", done);
    }

    @test
    mssql_raise_exception(done: () => void) {
        raise_exception_test_proc("mssql", done);
    }

    @test
    pg_raise_exception(done: () => void) {
        raise_exception_test_proc("pg", done);
    }

    @test
    mysql_raise_exception(done: () => void) {
        raise_exception_test_proc("mysql", done);
    }

    @test
    mssql_primary_key_exception(done: () => void) {
        primary_key_exception_test_proc("mssql", done);
    }

    @test
    pg_primary_key_exception(done: () => void) {
        primary_key_exception_test_proc("pg", done);
    }

    @test
    mysql_primary_key_exception(done: () => void) {
        primary_key_exception_test_proc("mysql", done);
    }
}
