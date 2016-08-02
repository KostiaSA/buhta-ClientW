import {suite, test, slow, timeout, skip, only} from "mocha-typescript";
import {assert} from "chai";
import {SqlDb, DataTable} from "../../buhta-sql/SqlDb";
import {SqlDialect, getNewGuid} from "../../buhta-sql/SqlCore";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";
import {CheckTableExistsStmt} from "../../buhta-sql/CheckTableExistsStmt";
import {DropTableIfExistsStmt} from "../../buhta-sql/DropTableIfExistsStmt";
import {SchemaTableColumn} from "../../buhta-schema/SchemaTable/SchemaTableColumn";
import {SchemaTable} from "../../buhta-schema/SchemaTable/SchemaTable";
import {Schema} from "../../buhta-schema/Schema";
import {objectToHostJavaScript} from "../../buhta-core/objectToHostJavaScript";

function test_proc(dialect: SqlDialect, done: () => void) {

    let db = new SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;

    let testDate = new Date();

    let testSchema = new Schema(db);

    db.executeSQL(new DropTableIfExistsStmt("SchemaObject"))
        .then(() => {

            return testSchema.initSchemaStorage()
                .then(() => {

                });

        })
        .then(() => {
            let table = new SchemaTable(testSchema);

            table.name = "Организация";
            table.createDate = testDate;
            table.id = "76348170-5896-11e6-b7b9-9b23287e580a";
            //table.sqlname = "dbo.Организация";
            table.addColumn((col: SchemaTableColumn) => {
                col.name = "Id";
                col.dataType = "guid";
            });
            table.addColumn((col: SchemaTableColumn) => {
                col.name = "Номер";
                col.dataType = "string";
                col.dataLen = 20;
            });
            table.addColumn((col) => {
                col.name = "Название";
                col.dataType = "string";
                col.dataLen = 50;
            });

            return testSchema.saveObject(table);

        })
        .then(() => {
            return testSchema.getObject<SchemaTable>("76348170-5896-11e6-b7b9-9b23287e580a");
        })
        .then((table: SchemaTable) => {
            assert.equal(table.name, "Организация");
            done();
        })
        .catch((error) => {
            throw error;
        });


}


@suite("SchemaStorage Init")
export class InitSchemaStorageTest {

    @test
    mssql_init_schema_storage(done: () => void) {
        test_proc("mssql", done);
    }

    @test
    pg_init_schema_storage(done: () => void) {
        test_proc("pg", done);
    }

    @test
    mysql_init_schema_storage(done: () => void) {
        test_proc("mysql", done);
    }

}
