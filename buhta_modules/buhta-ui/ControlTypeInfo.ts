import {throwError} from "../buhta-core/Error";
import {parse} from "UUID";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";

export class ControlTypeInfo {
    name: string;
    group: string;
    description: string;
    type: Function;
}

export let registeredControlTypes: { [id: string]: ControlTypeInfo } = {};
export let registeredControlTypesAsArray: ControlTypeInfo[] = [];

export function registerControlType(info: ControlTypeInfo) {
    if (registeredControlTypes[info.name] !== undefined) {
        throwError("registerControlType(): duplicated name ' for '" + info.name +
            "' and '" + registeredControlTypes[info.name].name + "'");
    }

    registeredControlTypes[info.name] = info;
    registeredControlTypesAsArray.push(info);
    (info.type as any).$$ControlTypeInfo = info;

}


