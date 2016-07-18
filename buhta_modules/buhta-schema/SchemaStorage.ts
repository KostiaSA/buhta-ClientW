import {SchemaObjectId} from "./SchemaObject";

export interface SchemaObjectTable {
    id?: SchemaObjectId;
    parentObjectID?: SchemaObjectId;
    name?: string;
    description?: string;
    createDate?: Date;
    createUserID?: SchemaObjectId;
    changeDate?: Date;
    changeUserID?: SchemaObjectId;
    lockDateTime?: Date;
    lockedByUserID?: SchemaObjectId;
    position?: number;
}
