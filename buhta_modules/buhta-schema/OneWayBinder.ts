import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwAbstractError} from "../buhta-core/Error";
import {SelectInputDataSource} from "../buhta-core/Components/SelectInput/SelectInputDataSource";
import {SelectInputDataSourceFromArray} from "../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";

export type OneWayBinderType = "value" | "local variable";

export function getOneWayBinderTypesDataSource(): SelectInputDataSource<string> {
    return new SelectInputDataSourceFromArray<string>([
        ["value", "Значение"],
        ["local variable", "Переменная"]
    ]);
}

export class OneWayBinder<T> extends DesignedObject {
    binderType: OneWayBinderType;
    value: T | undefined;
    localVariable: any;

    constructor(value?: T) {
        super();
        this.value = value;
        if (value !== undefined)
            this.binderType = "value";
    }

    getValue(): T {
        if (this.binderType === "value")
            return this.value!;
        else {
            throwAbstractError();
            throw  "fake";
        }
    }
}
