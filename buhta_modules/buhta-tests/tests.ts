import * as uuid from "UUID";
import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {SqlDb} from "../buhta-sql/SqlDb";
import {assert} from "chai";
import {
    SqlDialect, SqlStringValue, SqlDateTimeValue, SqlDateValue, SqlNumberValue,
    SqlGuidValue
} from "../buhta-sql/SqlCore";
import {SelectStmt} from "../buhta-sql/SelectStmt";
import * as moment from "moment";
import {CreateTableStmtTest} from "./Sql/CreateTableStmt.test";



function getTestString() {
    let ret: string[] = [];
    for (let i = 1; i <= 20000; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");
}

function getLongTestString(mb: number) { // в мегабайтах
    let ret: string[] = [];
    for (let j = 1; j <= 1024 * mb; j++)
        for (let i = 200; i <= 1024 + 200; i++)
            ret.push(String.fromCharCode(i));
    return ret.join("");

}

function badCodes() {
    let x=new CreateTableStmtTest();

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

    let testStr = getTestString() + getTestString() + getTestString();
    let testLongStr = getLongTestString(1);
    let testDate = new Date(2016, 11, 28);
    let testDateTime = new Date();
    let testNumber = 1.79E+308;
    let testNumber2 = 9007199254740991;
    let testNumber3 = 9.0071992547402233224;
    let testGuid = uuid.v1().toString();

    let select = new SelectStmt();
    select.addColumnAs(new SqlStringValue(testStr, dialect), "testStr");
  //  select.addColumnAs(new SqlStringValue(testLongStr, dialect), "testLongStr");
    select.addColumnAs(new SqlDateValue(testDate, dialect), "testDate");
    select.addColumnAs(new SqlDateTimeValue(testDateTime, dialect), "testDateTime");
    select.addColumnAs(new SqlNumberValue(testNumber, dialect), "testNumber");
    select.addColumnAs(new SqlNumberValue(testNumber2, dialect), "testNumber2");
    select.addColumnAs(new SqlNumberValue(testNumber3, dialect), "testNumber3");
    select.addColumnAs(new SqlGuidValue(testGuid, dialect), "testGuid");

    db.selectToObject<any>(select, {}, "assign").done((obj) => {
        //console.log(testDate);
        //console.log(obj.testDate);
        assert.equal(obj.testStr, testStr);
       // assert.equal(obj.testLongStr, testLongStr);
        assert.equal(obj.testDate.getTime(), testDate.getTime());
        assert.equal(obj.testDateTime.getTime(), testDateTime.getTime());
        assert.equal(obj.testNumber, testNumber);
        assert.equal(obj.testNumber2, testNumber2);
        assert.equal(obj.testNumber3, testNumber3);
        assert.equal(obj.testGuid, testGuid);
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
        console.log(uuid.v1());
    }


    @test @timeout(5000)
    mssql(done: () => void) {
        let dialect: SqlDialect = "mssql";
        test_sql(dialect, done);

    }

    @test @timeout(5000)
    postgres(done: () => void) {
        let dialect: SqlDialect = "pg";
        test_sql(dialect, done);

    }

    @test @timeout(5000)
    mysql(done: () => void) {
        let dialect: SqlDialect = "mysql";
        test_sql(dialect, done);

    }
}