import * as _ from "lodash";
import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {throwAbstractError} from "../../buhta-core/Error";
import {SelectInputDataSource} from "../../buhta-core/Components/SelectInput/SelectInputDataSource";
import {SelectInputDataSourceFromArray} from "../../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";
import {OneWayBinder_NumberValue} from "./OneWayBinder_NumberValue";
import {OneWayBinder_StringValue} from "./OneWayBinder_StringValue";

//export type OneWayBinderType = "value" | "variable" | "string" | "number";

let fake1: OneWayBinder_NumberValue;
let fake2: OneWayBinder_StringValue;


export function getOneWayBinderTypesDataSource(activeBinder?: OneWayBinder_base<any>): SelectInputDataSource<OneWayBinder_base<any>> {
    return new SelectInputDataSourceFromArray<OneWayBinder_base<any>>(
        registeredOneWayBinders.map((binderInfo: OneWayBinderInfo)=> {

            let retDataSourceItem = {
                label: binderInfo.binderName,
                value: binderInfo.createBinderCallback()
            }

            if (activeBinder !== undefined && activeBinder.constructor === retDataSourceItem.value.constructor)
                retDataSourceItem.value = activeBinder;
            return retDataSourceItem;

        }));
    // [
    // ["value", "Значение?"],
    // [new OneWayBinderType_StringValue(), "Строка"],
    // ["number", "Число"],
    // ["date", "Дата"],
    // ["variable", "Переменная"]
}

interface OneWayBinderInfo {
    binderName: string;
    createBinderCallback: ()=>OneWayBinder_base<any>;
}

let registeredOneWayBinders: OneWayBinderInfo[] = [];

export function registerOneWayBinder(binderName: string, createBinderCallback: ()=>OneWayBinder_base<any>) {
    let info: OneWayBinderInfo = {
        binderName: binderName,
        createBinderCallback: createBinderCallback
    };
    registeredOneWayBinders.push(info);
}

export class OneWayBinder_base<T> extends DesignedObject {
//    binderType: OneWayBinderType;
//    value: T | undefined;
//    localVariable: any;

    // constructor(value?: T) {
    //     super();
    //     this.value = value;
    //     if (_.isString(value))
    //         this.binderType = "string";
    //     else if (_.isNumber(value))
    //         this.binderType = "number";
    //     else if (value !== undefined)
    //         this.binderType = "value";
    // }

    getValue(): T {
        throwAbstractError();
        throw  "fake";
        // if (this.binderType === "value")
        //     return this.value!;
        // else {
        //     throwAbstractError();
        //     throw  "fake";
        // }
    }

    renderValueEditor(onChangeCallback?: ()=>void): JSX.Element {
        throwAbstractError();
        throw  "fake";
    }

}
