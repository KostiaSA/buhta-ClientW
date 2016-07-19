import {SchemaObject, SchemaObjectId} from "./SchemaObject";
import {SchemaDatabase} from "./SchemaDatabase";
import {Db} from "../buhta-sql/Db";

export class Schema {
    db: Db;

    private objects_cache: { [key: string]: SchemaObject; } = {};

    resetObjectCache(id: SchemaObjectId) {
        delete this.objects_cache[id];
    }

    getObject<T extends SchemaObject>(id: SchemaObjectId): T {
        // foreach (var helperTable in HelperTables)
        // if (helperTable.ID==ID)
        // return helperTable as T;
        let obj = this.objects_cache[id];
        if (!this.objects_cache[id]) {
            // using (var db = GetMetadataDbManager())
            //  {
            // var obj_cache_to_load = db.SetCommand("SELECT * FROM SchemaObject WHERE ID=" + ID.AsSQL()).ExecuteObject<SchemaObject_cache>();
            // if (obj_cache_to_load == null)
            // return null;
            // obj_cache_to_load.Schema = this;
            // Objects_cache.Add(ID, obj_cache_to_load);
            // }

        }

        return obj as T;
    }

    saveObject(objectToSave: SchemaObject) {

        if (!objectToSave.createDate)
            objectToSave.createDate = new Date();

        // var sql = new StringBuilder();
        // sql.AppendLine(@"BEGIN TRAN");
        //
        // sql.AppendLine(@"
        //                    INSERT [dbo].[SchemaObjectHistory](
        // [ID],[ParentObjectID],[Name],[Description],[JSON],
        // [RootClass],[RootType],[CreateDateTime],[UpdateDateTime],
        // [CreateUser],[UpdateUser])
        // SELECT
        // [ID],[ParentObjectID],[Name],[Description],[JSON],
        // [RootClass],[RootType],[CreateDateTime],[UpdateDateTime],
        // [CreateUser],[UpdateUser]
        // FROM [dbo].[SchemaObject]
        // WHERE ID=" + objectToSave.ID.AsSQL());
        //
        //
        // sql.AppendLine(@"IF NOT EXISTS(SELECT ID FROM SchemaObject WHERE ID=" + objectToSave.ID.AsSQL() + @")");
        // sql.AppendLine(@"  INSERT SchemaObject(ID) VALUES(" + objectToSave.ID.AsSQL() + @")");
        //
        // sql.AppendLine(@"UPDATE SchemaObject SET");
        // if (objectToSave.Name != null)
        // sql.AppendLine(@"  Name=" + objectToSave.Name.AsSQL() + @",");
        //
        // if (objectToSave.Description != null)
        // sql.AppendLine(@"  Description=" + objectToSave.Description.AsSQL() + @",");
        //
        // sql.AppendLine(@"  RootClass=" + objectToSave.GetType().Name.AsSQL() + @",");
        // sql.AppendLine(@"  RootType=" + objectToSave.GetTypeDisplay.AsSQL() + @",");
        //
        // if (objectToSave.ParentObjectID != null)
        // sql.AppendLine(@"  ParentObjectID=" + objectToSave.ParentObjectID.AsSQL() + @",");
        // else
        // sql.AppendLine(@"  ParentObjectID=NULL,");
        //
        // if (objectToSave.CreateDate.Year > 1)
        // sql.AppendLine(@"  CreateDateTime=" + objectToSave.CreateDate.AsSQL() + @",");
        // else
        // sql.AppendLine(@"  CreateDateTime=GetDate(),");
        //
        // //if (objectToSave.ChangeDate != null)
        // //sql.AppendLine(@"  UpdateDateTime=" + objectToSave.ChangeDate.AsSQL() + @",");
        // //else
        // sql.AppendLine(@"  UpdateDateTime=GetDate(),");
        //
        // if (objectToSave.CreateUserID != null)
        // sql.AppendLine(@"  CreateUser=" + objectToSave.CreateUserID.AsSQL() + @",");
        // else
        // sql.AppendLine(@"  CreateUser=NULL,");
        //
        // if (objectToSave.ChangeUserID != null)
        // sql.AppendLine(@"  UpdateUser=" + objectToSave.ChangeUserID.AsSQL() + @",");
        // else
        // sql.AppendLine(@"  UpdateUser=NULL,");
        //
        //
        //
        // sql.AppendLine(@"  JSON=" + objectToSave.GetJsonText().AsSQL() + @" ");
        //
        // sql.AppendLine(@"WHERE ID=" + objectToSave.ID.AsSQL());
        //
        // sql.AppendLine(@"COMMIT");

        // using (var db = GetMetadataDbManager())
        // {
        //     db.SetCommand(sql.ToString()).ExecuteNonQuery();
        // }

        this.resetObjectCache(objectToSave.id!);

// if (AfterSaveSchemaObject!=null)
// {
//     AfterSaveSchemaObject(objectToSave);
// }


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

