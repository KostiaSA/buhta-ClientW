import {throwError} from "../buhta-core/Error";
import {parse} from "UUID";

export class SchemaObjectTypeInfo {
    id: string;
    name: string;
    description: string;
    type: Function;
}

export let registeredSchemaObjectTypes: { [id: string]: SchemaObjectTypeInfo } = {};
export let registeredSchemaObjectTypesAsArray: SchemaObjectTypeInfo[] = [];

export function registerSchemaObjectType(info: SchemaObjectTypeInfo) {
    if (registeredSchemaObjectTypes[info.id] !== undefined) {
        throwError("registerSchemaObjectType(): duplicated id '" + info.id + "' for '" + info.name +
            "' and '" + registeredSchemaObjectTypes[info.id].name + "'");
    }

    if (parse(info.id) === null)
        throwError("registerSchemaObjectType(): id '" + info.id + "' for '" + info.name + " must be GUID");

    registeredSchemaObjectTypes[info.id] = info;
    registeredSchemaObjectTypesAsArray.push(info);
    (info.type as any).$$schemaObjectTypeInfo = info;

}


