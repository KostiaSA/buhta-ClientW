import {SchemaObject} from "../buhta-schema/SchemaObject";
let buhta = new BuhtaHost();

(window as any)["buhta"] = buhta;

export class BuhtaHost {
    SchemaObject: Function = SchemaObject.constructor;
}