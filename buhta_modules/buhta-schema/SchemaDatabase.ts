import {SchemaObject} from "./SchemaObject";
import {registerSchemaObjectType} from "./SchemaObjectTypeInfo";


export class SchemaDatabase extends SchemaObject {
    sqlUrl: string;
    sqlPort: number | undefined;
    sqlDatabase: string;
    sqlLogin: string;
    sqlPassword: string;
    isTest: boolean;

    getTypeDisplay(): string {
        return "База данных";
    }

}

registerSchemaObjectType({
    id: "10092060-d748-4ccb-97d3-56b95d14e4e0",
    name: "База данных",
    description: "База данных",
    type: SchemaDatabase
});


