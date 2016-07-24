import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDialect} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {SqlDb} from "../../buhta-sql/SqlDb";
import {DropTableStmt} from "../../buhta-sql/DropTableStmt";


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

@suite("Sql CreateTableStmt")
//@skip
export class CreateTableStmtTest {

    @test @timeout(5000)
    mssql_create_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        create_table_proc(dialect, done);
    }

    @test @timeout(5000)
    mssql_drop_table(done: () => void) {
        let dialect: SqlDialect = "mssql";
        drop_table_proc(dialect, done);
    }

}
