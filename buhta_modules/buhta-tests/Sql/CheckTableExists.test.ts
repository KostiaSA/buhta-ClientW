import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDb, DataTable} from "../../buhta-sql/SqlDb";
import {SqlDialect} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {CheckTableExistsStmt} from "../../buhta-sql/CheckTableExistsStmt";
import {DropTableIfExistsStmt} from "../../buhta-sql/DropTableIfExistsStmt";

function test_proc(dialect: SqlDialect, done: () => void) {
    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let tableName = "BuhtaTestTableForCheckExists";

    let drop_sql = new DropTableIfExistsStmt(tableName);

    let create_sql = new CreateTableStmt();
    create_sql.table(tableName);
    create_sql.column({column: "id", dataType: "int", notNull: true});
    create_sql.column("name", "string", 50);

    let check_sql = new CheckTableExistsStmt(tableName);

    db.executeSQL(drop_sql)
        .then((tables: DataTable[]) => {
            return db.executeSQL(check_sql);
        })
        .then((tables: DataTable[]) => {
            //console.log(tables[0].rows[0]);
            assert.equal(tables[0].rows[0].$$getValue(0), 0);
            return db.executeSQL(create_sql);
        })
        .then((tables: DataTable[]) => {
            return db.executeSQL(check_sql);
        })
        .then((tables: DataTable[]) => {
            assert.equal(tables[0].rows[0].$$getValue(0), 1);
            done();
        })
        .catch((error) => {
            throw error;
        });
}


@suite("Sql CheckTableExists")
export class CheckTableExistsTest {

    @test
    mssql_check_table_exists(done: () => void) {
        test_proc("mssql", done);
    }

    @test
    pg_check_table_exists(done: () => void) {
        test_proc("pg", done);
    }

    @test
    mysql_check_table_exists(done: () => void) {
        test_proc("mysql", done);
    }

}
