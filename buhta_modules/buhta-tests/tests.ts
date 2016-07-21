import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {SqlDb} from "../buhta-sql/SqlDb";
import {assert} from "chai";


@suite("тестовый тест")
class Hello {
    @test
    mssql_select_one_row(done: () => void) {

        let db = new SqlDb();
        db.dbName = "schema-pg";
        db.dbName = "schema-mssql";
        db.dialect = "mssql";

        // let s = new SelectStmt();
        // s.addColumnAs("'123'","жопа");
        // s.addColumnRaw("getdate() as ddd");
        // s.addColumnRaw("NULL as nu");

        // db.selectToObject<any>("select 'eee' as eee, getdate() ddd", {}, "assign").done((obj) => {
        //      console.log(obj);
        //         });

        // db.selectToObject<any>("select 'eee' as eee, CURRENT_TIMESTAMP ddd", {}, "assign").done((obj) => {
        //     console.log(obj);
        // });


        db.selectToObject<any>("select 'eee' as eee, getdate() ddd", {}, "assign").done((obj) => {
            assert.equal(obj.eee, "eee");
            done();
            console.log(obj);
        });
    }

    @test
    world2_12() {
        // throw "error-?";
    }

    @test
    world2_13() {
        // throw "error-?";
    }
}