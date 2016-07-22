import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {SqlDb} from "../buhta-sql/SqlDb";
import {assert} from "chai";
import {SqlDialect, SqlString, SqlDateTime, SqlDate} from "../buhta-sql/SqlCore";
import {SelectStmt} from "../buhta-sql/SelectStmt";
import * as moment from "moment";


function getTestString() {
    let ret: string[] = [];
    for (let i = 1; i <= 20000; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");

}

function badCodes() {
    let socket = io.connect();

    for (let i = 0; i < 2560; i++) {
        let str = String.fromCharCode(i);
        let strJson = JSON.stringify(str);

        let queryId = "query-" + Math.random().toString(36).slice(2);
        let req = {
            queryId: queryId,
            str: str
        };

        socket.emit("echo", req);
        socket.once(queryId, (response: any) => {
            if (str !== response.str)
                console.log({i, str, strJson, response: response.str});
        });


        //let strRestored = JSON.parse(strJson);
        //if (str !== strRestored)
        //console.log({i, str, strJson, strRestored});
    }
    console.log("badCodes-end3");
}

function select_one_row(dialect: SqlDialect, done: () => void) {


    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let testStr = getTestString();
    let testDate = new Date(2016, 11, 28);
    let testDateTime = new Date();

    let select = new SelectStmt();
    select.addColumnAs(new SqlString(testStr, dialect), "testStr");
    select.addColumnAs(new SqlDate(testDate, dialect), "testDate");
    select.addColumnAs(new SqlDateTime(testDateTime, dialect), "testDateTime");

    db.selectToObject<any>(select, {}, "assign").done((obj) => {
        //console.log(testDate);
        //console.log(obj.testDate);
        assert.equal(obj.testStr, testStr);
        assert.equal(obj.testDate.getTime(), testDate.getTime());
        assert.equal(obj.testDateTime.getTime(), testDateTime.getTime());
        done();
    });

}


function test_sql(dialect: SqlDialect, done: () => void) {

    select_one_row(dialect, done);

}

@suite("sql dialects")
class Hello {
    @test
    @skip
    //@only
    first_test() {
        //badCodes();
        console.log(moment(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"));
    }


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