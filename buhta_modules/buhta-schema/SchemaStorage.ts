import {SchemaObjectId} from "./SchemaObject";
import {SqlBatch, SqlDb} from "../buhta-sql/SqlDb";
import {getSchema} from "./Schema";
import {CheckTableExistsStmt} from "../buhta-sql/CheckTableExistsStmt";
import {throwError} from "../buhta-core/Error";
import {CreateTableStmt} from "../buhta-sql/CreateTableStmt";
import {SchemaTable} from "./SchemaTable/SchemaTable";
import {SchemaTableColumn} from "./SchemaTable/SchemaTableColumn";

export interface SchemaObjectTable {
    id?: SchemaObjectId;
    parentObjectId?: SchemaObjectId;
    name?: string;
    description?: string;
    typeId?: string;
    typeName?: string;
    createDate?: Date;
    createUserId?: SchemaObjectId;
    changeDate?: Date;
    changeUserId?: SchemaObjectId;
    lockDateTime?: Date;
    lockedByUserId?: SchemaObjectId;
    position?: number;
}


// export function initSchemaStorage(db?: SqlDb): Promise<void|string> {
//     let batch: SqlBatch = [];
//
//     if (!db)
//         db = getSchema().db;
//
//     return db.selectToBoolean(new CheckTableExistsStmt("SchemaObject"))
//         .then((isTableExists: boolean) => {
//             if (isTableExists)
//                 throwError("таблица 'SchemaObject' уже существует, выберите чистую базу данных");
//
//             let sql = new CreateTableStmt("SchemaObject")
//                 .primaryKeyColumn("id", "guid")
//                 .column("parentObjectId", "guid")
//                 .column("name", "string", 255)
//                 .column("description", "string", 1000)
//                 .column("createDate", "datetime")
//                 .column("createUserId", "guid")
//                 .column("changeDate", "datetime")
//                 .column("changeUserId", "guid")
//                 .column("lockDateTime", "datetime")
//                 .column("lockedByUserId", "guid")
//                 .column("position", "int");
//
//             db!.executeSQL(sql);
//
//         });
//         // .then(() => {
//         //
//         //
//         // });
//
// }


