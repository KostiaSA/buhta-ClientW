import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SchemaObject} from "../SchemaObject";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {SCHEMA_FOLDER_ICON, SCHEMA_APPLICATION_ICON} from "../../buhta-core/Constants";
import {SqlDialect, SqlDialectValues} from "../../buhta-sql/SqlCore";
import {SelectEditor} from "../../buhta-app-designer/PropertyEditors/SelectPropertyEditor";


export class SchemaApplication extends SchemaObject {
    @StringEditor({
        inputCaption: "Имя приложения",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя приложения"
    })
    name: string;

    @StringEditor({
        inputCaption: "Описание",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Описание приложения"
    })
    description: string;

    @StringEditor({
        inputCaption: "Имя основной базы даных",
        inputTab: "Базы данных",
        inputGroup: "Базы данных",
        inputDescription: "Имя базы для хранения основных данных",
        inputWidthPx: 150
    })
    mainDbName: string;

    @SelectEditor({
        inputCaption: "Sql-диалект",
        inputTab: "Базы данных",
        inputGroup: "Базы данных",
        inputDescription: "Sql-диалект базы для хранения основных данных",
        selectValues: SqlDialectValues,
        combineWithPrevInput: true
    })
    mainDbDialect: SqlDialect;

    @StringEditor({
        inputCaption: "Имя базы пользовательских настроек",
        inputTab: "Базы данных",
        inputGroup: "Базы данных",
        inputDescription: "Имя базы данных для хранения пользовательских настроек",
        inputWidthPx: 150
    })
    userSettingsDbName: string;

    @SelectEditor({
        inputCaption: "Sql-диалект",
        inputTab: "Базы данных",
        inputGroup: "Базы данных",
        inputDescription: "Sql-диалект базы пользовательских настроек",
        selectValues: SqlDialectValues,
        combineWithPrevInput: true
    })
    userSettingsDbDialect: SqlDialect;

    getTypeDisplay(): string {
        return "Приложение";
    }

}

registerSchemaObjectType({
    id: "dc1b02b8-df9a-425c-8860-395237d18fc0",
    name: "Приложение",
    description: "Пользовательское приложение",
    type: SchemaApplication,
    icon: SCHEMA_APPLICATION_ICON
});


