import {SchemaObjectId} from "./SchemaObject";
import {SqlBatch} from "../buhta-sql/SqlDb";

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


export function initSchemaStorage() {
    let batch: SqlBatch = [];

}
