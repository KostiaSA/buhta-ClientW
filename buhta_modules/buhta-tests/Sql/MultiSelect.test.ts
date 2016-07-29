import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDb, DataTable} from "../../buhta-sql/SqlDb";
import {SqlDialect} from "../../buhta-sql/SqlCore";

function test_proc(dialect: SqlDialect, done: () => void) {
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
    sql.push("commit");
    sql.push("select 3 as z3, 5 as z5");

    db.executeSQL(sql)
        .then((tables: DataTable[]) => {

            assert.equal(tables[0].rows[0]["Z1"], 1);
            assert.equal(tables[0].rows.length, 1);
            assert.equal(tables[0].columns.length, 2);

            assert.equal(tables[1].rows.length, 0);
            assert.equal(tables[1].columns.length, 3);

            assert.equal(tables[2].rows[0]["z3"], 3);
            assert.equal(tables[2].rows[0]["z5"], 5);
            assert.equal(tables[2].rows.length, 1);
            assert.equal(tables[2].columns.length, 2);

            done();
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
}


@suite("Sql MultiSelect")
export class MultiSelectTest {

    @test
    mssql_multi_select(done: () => void) {
        test_proc("mssql", done);
    }

    @test
    pg_multi_select(done: () => void) {
        test_proc("pg", done);
    }

    @test
    mysql_multi_select(done: () => void) {
        test_proc("mysql", done);
    }

}
