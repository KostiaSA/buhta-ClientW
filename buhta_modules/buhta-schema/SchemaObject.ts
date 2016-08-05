import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Schema} from "./Schema";
import {getNewGuid} from "../buhta-sql/SqlCore";
import {throwAbstractError} from "../buhta-core/Error";

export type SchemaObjectId = string;


export class SchemaObject extends DesignedObject {
    constructor(private $$schema: Schema) {
        super();
    }

    get schema(): Schema {
        return this.$$schema;
    }

    id: SchemaObjectId | null = null;
    parentObjectID: SchemaObjectId | null = null;

    name: string | null = null;

    description: string  | null = null;

    createDate: Date | null = null;
    createUserID: SchemaObjectId  | null = null;

    changeDate: Date | null = null;
    changeUserID: SchemaObjectId  | null = null;

    lockDateTime: Date | null = null;
    lockedByUserID: SchemaObjectId  | null = null;

    position: number = 0;

    prepareNew() {
        if (!this.id)
            this.id = newSchemaObjectId();
        if (!this.name)
            this.name = "НовыйОбъект";
    }

    getTypeDisplay(): string {
        return "Объект";
    }

    getDesigner(): JSX.Element {
        throwAbstractError();
        throw  "fake";
    }

    save(): Promise<void|string> {
        return this.schema.saveObject(this);
    }


}

export function newSchemaObjectId(): SchemaObjectId {
    return getNewGuid();
}

//
// public virtual void Validate(ValidateErrorList error)
// {
//     if (ID == Guid.Empty)
//         error.AddError(Name, "Пустое поле 'ID'.");
//     if (string.IsNullOrWhiteSpace(Name))
//         error.AddError(Name, "Не заполнено поле 'Имя'.");
// }
//
// //public void Save()
// //{
// //    App.Schema.SchemaObjectsCollection.Save<SchemaObject>(this);
//
// //}
//
// public virtual string DisplayName
// {
//     get
//     {
//         return GetModulePrefix() + Name;
//     }
// }
//
//
// public string GetModulePrefix()
// {
//     var module = GetModule();
//     if (module == null)
//         return "";
//     else
//         return module.Prefix + ".";
// }
//
// public SchemaModule GetModule()
// {
//     if (this is SchemaModule)
//     return null;
// else
//     if (ParentObjectID == null)
//         return null;
//     else
//     {
//         var parent = GetParentObject();
//         if (parent is SchemaModule)
//         return parent as SchemaModule;
//     else
//         return parent.GetModule();
//     }
// }
//
// SchemaObject cached_ParentObject;
// public SchemaObject GetParentObject()
// {
//     if (ParentObjectID == null)
//         return null;
//     else
//     if (cached_ParentObject == null)
//     {
//         cached_ParentObject = App.Schema.GetSampleObject<SchemaObject>((Guid)ParentObjectID);
//     }
//     return cached_ParentObject;
// }
//
//
//
// public event PropertyChangedEventHandler PropertyChanged;
//
// public virtual string GetSchemaDesignerDisplayName()
// {
//     return Name;
// }
//
// public virtual Bitmap GetSchemaDesignerImage()
// {
//     return GetImage();
// }
//
// public virtual Color GetSchemaDesinerColor()
// {
//     return Color.Black;
// }
//
// public virtual string GetSchemaDesignerDescription()
// {
//     return Description;
// }
//
//
// public virtual DateTime? GetSchemaDesignerChangeDate()
// {
//     if (ChangeDate == null)
// return CreateDate;
// else
// return ChangeDate;
// }
//
// public virtual string GetSchemaDesignerChangeUser()
// {
//     if (ChangeUserID == null)
//         return App.Schema.GetObjectName(CreateUserID);
//     else
//         return App.Schema.GetObjectName(ChangeUserID);
// }
//
// public void SaveChanges()
// {
//     App.Schema.SaveObject(this);
//     needSave = false;
//
// }
//
// public void CancelChanges()
// {
//     needSave = false;
// }

