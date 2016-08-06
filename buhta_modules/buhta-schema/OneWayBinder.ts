import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwAbstractError} from "../buhta-core/Error";

export type OneWayBinderType = "value" | "local variable";

export class OneWayBinder<T> extends DesignedObject {
    binderType: OneWayBinderType;
    value: T | undefined;
    localVariable: any;

    constructor(value?: T) {
        super();
        this.value = value;
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
