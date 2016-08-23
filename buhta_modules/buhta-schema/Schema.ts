import * as _ from "lodash";
import {SchemaObject, SchemaObjectId} from "./SchemaObject";
import {SchemaDatabase} from "./SchemaDatabase";
import {SqlDb, SqlBatch} from "../buhta-sql/SqlDb";
import {CheckTableExistsStmt} from "../buhta-sql/CheckTableExistsStmt";
import {throwError} from "../buhta-core/Error";
import {CreateTableStmt} from "../buhta-sql/CreateTableStmt";
import {UpsertStmt} from "../buhta-sql/UpsertStmt";
import {SqlNewGuidValue, getNewGuid, SqlGuidValue, SqlStringValue} from "../buhta-sql/SqlCore";
import {objectToHostJavaScript} from "../buhta-core/objectToHostJavaScript";
import {SelectStmt} from "../buhta-sql/SelectStmt";


let defaultSchema: Schema;

export function getSchema(): Schema {
    if (!defaultSchema) {
        defaultSchema = new Schema(new SqlDb("schema", "mssql"));
    }
    return defaultSchema;
}

export class Schema {
    constructor(public db: SqlDb) {

    }


    private objects_cache: { [key: string]: () => SchemaObject; } = {};

    resetObjectCache(id: SchemaObjectId) {
        delete this.objects_cache[id.toLowerCase()];
    }

    getObject<T extends SchemaObject>(id: SchemaObjectId): Promise<T> {
        id = id.toLowerCase();
        return new Promise<T>(
            (resolve: (obj: T) => void, reject: (error: string) => void) => {
                let objConstructor = this.objects_cache[id];

                if (!objConstructor) {
                    console.log("load from sql :" + id);
                    let select = new SelectStmt()
                        .table("SchemaObject")
                        .column("jsCode")
                        .where("id", "=", new SqlGuidValue(id));

                    this.db.selectToString(select)
                        .then((jsCode) => {
                            objConstructor = eval("(function(){return " + jsCode + "})");
                            this.objects_cache[id] = objConstructor;
                            let obj: any = objConstructor();
                            obj.$$schema = this;

                            resolve(obj as T);
                        })
                        .catch((error) => {
                            throwError("Ошибка загрузки компонента (SchemaObject). Не найден компонент с id='" + id.toLowerCase() + "', " + error);
                        });

                }
                else {
                    let obj: any = objConstructor();
                    obj.$$schema = this;

                    resolve(obj as T);
                }

            });

    }

    saveObject(objectToSave: SchemaObject): Promise<void|string> {

        if (!objectToSave.id)
            objectToSave.id = getNewGuid();

        //if (!objectToSave.createDate)
        //  objectToSave.createDate = new Date();

        // нормализация на всякий случай
        objectToSave.id = objectToSave.id.toLowerCase();
        if (_.isString(objectToSave.parentObjectID))
            objectToSave.parentObjectID = objectToSave.parentObjectID.toLowerCase();
        if (_.isString(objectToSave.createUserID))
            objectToSave.createUserID = objectToSave.createUserID.toLowerCase();
        if (_.isString(objectToSave.changeUserID))
            objectToSave.changeUserID = objectToSave.changeUserID.toLowerCase();
        if (_.isString(objectToSave.lockedByUserID))
            objectToSave.lockedByUserID = objectToSave.lockedByUserID.toLowerCase();

        let sql = new UpsertStmt("SchemaObject")
            .column("id", new SqlGuidValue(objectToSave.id))
            .column("parentObjectId", new SqlGuidValue(objectToSave.parentObjectID))
            .column("name", new SqlStringValue(objectToSave.name))
            .column("description", new SqlStringValue(objectToSave.description))
            .column("typeId", new SqlGuidValue(objectToSave.getObjectTypeInfo().id))
            .column("typeName", new SqlStringValue(objectToSave.getObjectTypeInfo().name))
            .column("createDate", objectToSave.createDate)
            .column("createUserId", new SqlGuidValue(objectToSave.createUserID))
            .column("changeDate", objectToSave.changeDate)
            .column("changeUserId", new SqlGuidValue(objectToSave.changeUserID))
            .column("lockDateTime", objectToSave.lockDateTime)
            .column("lockedByUserId", new SqlGuidValue(objectToSave.lockedByUserID))
            .column("jsCode", new SqlStringValue(objectToHostJavaScript(objectToSave)))
            .column("position", objectToSave.position)
            .where("id", "=", new SqlGuidValue(objectToSave.id));

        return this.db.executeSQL(sql).then(() => {
            this.resetObjectCache(objectToSave.id!);
        });

    }

    initSchemaStorage(): Promise<void|string> {
        let batch: SqlBatch = [];

        return this.db.selectToBoolean(new CheckTableExistsStmt("SchemaObject"))
            .then((isTableExists: boolean) => {
                if (isTableExists)
                    throwError("таблица 'SchemaObject' уже существует, выберите чистую базу данных");

                let sql = new CreateTableStmt("SchemaObject")
                    .primaryKeyColumn("id", "guid")
                    .column("parentObjectId", "guid")
                    .column("name", "string", 255)
                    .column("description", "string", 1000)
                    .column("typeId", "guid")
                    .column("typeName", "string", 255)
                    .column("createDate", "datetime")
                    .column("createUserId", "guid")
                    .column("changeDate", "datetime")
                    .column("changeUserId", "guid")
                    .column("lockDateTime", "datetime")
                    .column("lockedByUserId", "guid")
                    .column("jsCode", "text")
                    .column("position", "int");

                this.db.executeSQL(sql);

            });
        // .then(() => {
        //
        //
        // });

    }
}
//     public string SchemaSqlUrl { get; set; }
// public int? SchemaSqlPort { get; set; }
// public string SchemaSqlDatabase { get; set; }
// public string SchemaSqlLogin { get; set; }
// public string SchemaSqlPassword { get; set; }
// public bool SchemaIsTest { get; set; }
//
// public delegate void AfterSaveSchemaObjectEventHandler(SchemaObject schemaObject);
//
// public event AfterSaveSchemaObjectEventHandler AfterSaveSchemaObject;


// public Dictionary<Guid, SchemaObject_cache> Objects_cache
// {
//     get
//     {
//         if (objects_cache == null || objects_cache.Count == 0)
//         {
//             using (var db = GetMetadataDbManager())
//             {
//                 objects_cache = db.SetCommand("SELECT * FROM SchemaObject").ExecuteDictionary<Guid, SchemaObject_cache>("ID");
//                 foreach (var cache in objects_cache.Values)
//                 cache.Schema = this;
//             }
//         }
//         return objects_cache;
//
//     }
// }

//public ImageCollection Images16 = new ImageCollection();

