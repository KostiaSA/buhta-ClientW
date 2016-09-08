import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SchemaObject} from "../SchemaObject";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {
    SCHEMA_FOLDER_ICON, SCHEMA_APPLICATION_ICON, SCHEMA_APPLICATION_TYPE_ID,
    USER_SETTINGS_TABLE_NAME
} from "../../buhta-core/Constants";
import {SqlDialect, SqlDialectValues} from "../../buhta-sql/SqlCore";
import {SelectEditor} from "../../buhta-app-designer/PropertyEditors/SelectPropertyEditor";
import {SqlDb, SqlBatch} from "../../buhta-sql/SqlDb";
import {CheckTableExistsStmt} from "../../buhta-sql/CheckTableExistsStmt";
import {throwError} from "../../buhta-core/Error";
import {CreateTableStmt} from "../../buhta-sql/CreateTableStmt";


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

    getMainDb(): SqlDb {
        return new SqlDb(this.mainDbName, this.mainDbDialect);
    }

    getUserSettingsDb(): SqlDb {
        return new SqlDb(this.userSettingsDbName, this.userSettingsDbDialect);
    }

    initUserSettingsDb(): Promise<void> {
        let batch: SqlBatch = [];

        return this.getUserSettingsDb().selectToBoolean(new CheckTableExistsStmt(USER_SETTINGS_TABLE_NAME))
            .then((isTableExists: boolean) => {
                if (isTableExists)
                    throwError("таблица '" + USER_SETTINGS_TABLE_NAME + "' уже существует, выберите чистую базу данных");

                let sql = new CreateTableStmt(USER_SETTINGS_TABLE_NAME)
                    .column("userId", "guid")
                    .column("storeKey", "text", 0)
                    .column("settingsJson", "text");

                return this.getUserSettingsDb().executeSQL(sql).then(()=> {
                });
            });

    }

}

registerSchemaObjectType({
    id: SCHEMA_APPLICATION_TYPE_ID,
    name: "Приложение",
    description: "Пользовательское приложение",
    type: SchemaApplication,
    icon: SCHEMA_APPLICATION_ICON
});


