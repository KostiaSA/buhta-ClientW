import {getSchema} from "../buhta-schema/Schema";
import {SchemaApplication} from "../buhta-schema/SchemaApplication/SchemaApplication";
import {getNewGuid} from "../buhta-sql/SqlCore";
/**
 * Created by Kostia on 12.09.2016.
 */

export function createDefaultApp():Promise<void|string> {
    // todo все это надо отвязать от имен
    let app=new SchemaApplication(getSchema());
    app.id=getNewGuid();
    app.name="Новое приложение";
    app.mainDbName="Data";
    app.mainDbDialect= "mssql";
    app.userSettingsDbName= "UserSettings";
    app.userSettingsDbDialect= "mssql";
    return app.save();

}