import {DesignedObject} from "../buhta-app-designer/DesignedObject";

export type OneWayBinderType = "value" | "local variable";

export class OneWayBinder extends DesignedObject {
    type: OneWayBinderType;
    value: any;
    localVariable:any
}
