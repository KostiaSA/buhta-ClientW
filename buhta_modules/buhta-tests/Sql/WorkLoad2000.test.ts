import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDb, DataTable} from "../../buhta-sql/SqlDb";

@suite("Sql WorkLoad2000")
export class WorkLoad2000Test {

    @test @timeout(15000)
    mssql_select_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-mssql";
        db.dialect = "mssql";

        // let sql: string[] = [];

        let counter = 0;
        let total = 2000;
        for (let i = 0; i < total; i++) {
            db.executeSQL("select " + i + " as a777")
                .then((table: DataTable[]) => {
                    let row = table[0].rows[0];

                    assert.equal(row["a777"], i);

                    counter++;
                    if (counter === total)
                        done();
                })
                .catch((error) => {
                    console.error(error);
                    throw error;
                });

        }
    }

    @test @timeout(15000)
    mssql_select_batch_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-mssql";
        db.dialect = "mssql";

        let sql: string[] = [];

        let total = 2000;
        for (let i = 0; i < total; i++)
            sql.push("select " + i + " as a777");

        db.executeSQL(sql)
            .then((tables: DataTable[]) => {

                for (let i = 0; i < total; i++) {
                    let row = tables[i].rows[0];
                    assert.equal(row["a777"], i);
                }

                done();
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    @test @timeout(45000)
    pg_select_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-pg";
        db.dialect = "pg";

        let sql: string[] = [];

        let counter = 0;
        let total = 2000;
        for (let i = 0; i < total; i++) {
            //setTimeout(() => {
            db.executeSQL(["select " + i + " as a777"])
                .then((table: DataTable[]) => {
                    let row = table[0].rows[0];

                    assert.equal(row["a777"], i);

                    counter++;
                    if (counter === total)
                        done();
                })
                .catch((error) => {
                    console.error(error);
                    throw error;
                });

            //}, i * 5);
        }
    }

    @test @timeout(15000)
    pg_select_batch_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-pg";
        db.dialect = "pg";

        let sql: string[] = [];

        let total = 2000;
        for (let i = 0; i < total; i++) {
            if (i === 100)
                sql.push("select " + i + " as a777");
            else
                sql.push("select " + i + " as a777");
        }

        db.executeSQL(sql)
            .then((tables: DataTable[]) => {

                for (let i = 0; i < total; i++) {
                    let row = tables[i].rows[0];
                    assert.equal(row["a777"], i);
                }

                done();
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }

    @test @timeout(15000)
    mysql_select_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-mysql";
        db.dialect = "mysql";

        // let sql: string[] = [];

        let counter = 0;
        let total = 2000;
        for (let i = 0; i < total; i++) {
            db.executeSQL("select " + i + " as a777")
                .then((table: DataTable[]) => {
                    let row = table[0].rows[0];

                    assert.equal(row["a777"], i);

                    counter++;
                    if (counter === total)
                        done();
                })
                .catch((error) => {
                    console.error(error);
                    throw error;
                });

        }
    }

    @test @timeout(15000)
    mysql_select_batch_2000(done: () => void) {

        let db = new SqlDb();
        db.dbName = "test-mysql";
        db.dialect = "mysql";

        let sql: string[] = [];

        let total = 2000;
        for (let i = 0; i < total; i++)
            sql.push("select " + i + " as a777");

        db.executeSQL(sql)
            .then((tables: DataTable[]) => {

                for (let i = 0; i < total; i++) {
                    let row = tables[i].rows[0];
                    assert.equal(row["a777"], i);
                }

                done();
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }


}
