import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {SqlDb, asSqlString} from "../buhta-sql/SqlDb";
import {assert} from "chai";
import {SqlDialect} from "../buhta-sql/SqlCore";
import {SelectStmt} from "../buhta-sql/SelectStmt";


function getTestString() {
    let ret: string[] = [];
    for (let i = 32; i < 128; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");

}

function select_one_row(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let testStr = getTestString();
    testStr = getTestString() + "精選品牌全球速賣通集合暢銷科技發現趨勢樣式";
    testStr = "\0жопа?";

    let select = new SelectStmt();
    select.addColumnAs(asSqlString(testStr, dialect), "testStr");
    // s.addColumnRaw("getdate() as ddd");
    // s.addColumnRaw("NULL as nu");

    // db.selectToObject<any>("select 'eee' as eee, getdate() ddd", {}, "assign").done((obj) => {
    //      console.log(obj);
    //         });

    // db.selectToObject<any>("select 'eee' as eee, CURRENT_TIMESTAMP ddd", {}, "assign").done((obj) => {
    //     console.log(obj);
    // });


    db.selectToObject<any>(select, {}, "assign").done((obj) => {
        console.log(obj.testStr);
        console.log(testStr);
        assert.equal(obj.testStr, testStr);
        done();
    });

}


function test_sql(dialect: SqlDialect, done: () => void) {

    select_one_row(dialect, done);

}

@suite("sql dialects")
class Hello {
    @test
    mssql(done: () => void) {
        let dialect: SqlDialect = "mssql";
        test_sql(dialect, done);

    }

    @test
    postgres(done: () => void) {
        let dialect: SqlDialect = "pg";
        test_sql(dialect, done);

    }

    @test
    mysql(done: () => void) {
        let dialect: SqlDialect = "mysql";
        test_sql(dialect, done);

    }
}