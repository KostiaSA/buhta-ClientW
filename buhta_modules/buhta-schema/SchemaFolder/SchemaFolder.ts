import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SchemaObject} from "../SchemaObject";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {SCHEMA_FOLDER_ICON} from "../../buhta-core/Constants";


export class SchemaFolder extends SchemaObject {
    @StringEditor({
        inputCaption: "Имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя каталога"
    })
    name: string;

    @StringEditor({
        inputCaption: "Описание",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Описание каталога"
    })
    description: string;

    getTypeDisplay(): string {
        return "Каталог";
    }

}

registerSchemaObjectType({
    id: "24e296b2-605d-4e66-8c35-8c25e181e5ba",
    name: "Каталог",
    description: "Каталог объектов схемы",
    type: SchemaFolder,
    icon: SCHEMA_FOLDER_ICON
});


