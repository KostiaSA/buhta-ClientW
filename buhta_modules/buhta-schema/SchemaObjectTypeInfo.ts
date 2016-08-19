import {throwError} from "../buhta-core/Error";

export class SchemaObjectTypeInfo {
    id: string;
    name: string;
    description: string;
    type: Function;
}

export let registeredSchemaObjectTypes: { [id: string]: SchemaObjectTypeInfo } = {};

export function registerSchemaObjectType(info: SchemaObjectTypeInfo) {
    if (registeredSchemaObjectTypes[info.id] !== undefined) {
        throwError("registerSchemaObjectType(): duplicated id '" + info.id + "' for '" + info.name +
            "' and '" + registeredSchemaObjectTypes[info.id].name + "'");
    }
    registeredSchemaObjectTypes[info.id] = info;
    (info.type as any).$$schemaObjectTypeInfo = info;
}


