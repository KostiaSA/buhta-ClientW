import {SchemaObject} from "./SchemaObject";

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


