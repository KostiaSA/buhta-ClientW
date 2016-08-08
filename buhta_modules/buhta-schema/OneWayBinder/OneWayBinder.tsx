import * as _ from "lodash";
import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {throwAbstractError} from "../../buhta-core/Error";
import {SelectInputDataSource} from "../../buhta-core/Components/SelectInput/SelectInputDataSource";
import {SelectInputDataSourceFromArray} from "../../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";
import {OneWayBinder_NumberValue} from "./OneWayBinder_NumberValue";
import {OneWayBinder_StringValue} from "./OneWayBinder_StringValue";
import {stringCompare} from "../../buhta-core/stringCompare";

export function getOneWayBinderTypesDataSource(activeBinder?: OneWayBinder<any>): SelectInputDataSource<OneWayBinder<any>> {
    return new SelectInputDataSourceFromArray<OneWayBinder<any>>(
        registeredOneWayBinders
            .sort((a, b) => stringCompare(a.binderName, b.binderName))
            .map((binderInfo: OneWayBinderInfo) => {

                let retDataSourceItem = {
                    label: binderInfo.binderName,
                    value: binderInfo.createBinderCallback()
                };

                if (activeBinder !== undefined && activeBinder.constructor === retDataSourceItem.value.constructor)
                    retDataSourceItem.value = activeBinder;
                return retDataSourceItem;

            }));
}

interface OneWayBinderInfo {
    binderName: string;
    createBinderCallback: () => OneWayBinder<any>;
}

let registeredOneWayBinders: OneWayBinderInfo[] = [];

export function registerOneWayBinder(binderName: string, createBinderCallback: () => OneWayBinder<any>) {
    let info: OneWayBinderInfo = {
        binderName: binderName,
        createBinderCallback: createBinderCallback
    };
    registeredOneWayBinders.push(info);
}

export class OneWayBinder<T> extends DesignedObject {

    getValue(): T {
        throwAbstractError();
        throw  "fake";
    }

    renderValueEditor(onChangeCallback?: () => void): JSX.Element {
        throwAbstractError();
        throw  "fake";
    }

}
