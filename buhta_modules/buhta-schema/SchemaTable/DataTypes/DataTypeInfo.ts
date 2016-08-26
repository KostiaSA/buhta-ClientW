import {throwError} from "../../../buhta-core/Error";

export class DataTypeInfo {
    name: string;
    description: string;
    type: Function;
    //getNewInstance():
}

export let registeredDataTypes: DataTypeInfo[] = [];

export function registerDataType(info: DataTypeInfo) {

    if (registeredDataTypes.filter((_info)=>_info.name === info.name).length > 0) {
        throwError("registerDataType(): duplicated name '" + info.name)
    }

    registeredDataTypes.push(info);
    (info.type as any).$$DataTypeTypeInfo = info;

}


