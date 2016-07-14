import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";


export type ObservableOnChangeHandler<T>= (target: any, p: PropertyKey, oldValue: any, newValue: any) => void;

// не сохраняются свойства, которые начинаются с $$
export function Observable<T extends DesignedObject>(obj: DesignedObject, onChangeCallback?: ObservableOnChangeHandler<T>): T {

    let proxyHandler = {
        set: (target: T, p: PropertyKey, value: any, receiver: any): any => {
            if (p.toString().substr(0, 2) !== "$$") {
                if (!target.$$changeCount)
                    target.$$changeCount = 1;
                else
                    target.$$changeCount++;
                if (target.$$onChange)
                    target.$$onChange(target, p, target[p], value);
                console.log("observable set " + p.toString());
            }
            target[p] = value;
            return true;
        }
    };

    processObject(obj, proxyHandler);
    let observableObject = new Proxy(obj, proxyHandler) as T;

    return observableObject;
}


function processObject(obj: any, proxyHandler: any, onChangeCallback?: ObservableOnChangeHandler<any>) {
    obj.$$onChange = onChangeCallback;
    for (let propName in obj) {
        if (obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {

            let propValue: any = obj[propName];

            if (_.isArray(propValue)) {
                propValue.$$changeCount = 0;
                obj[propName] = new Proxy(propValue, proxyHandler);
            }
            else if (_.isObject(propValue)) {
                propValue.$$changeCount = 0;
                processObject(propValue, proxyHandler, onChangeCallback);
                obj[propName] = new Proxy(propValue, proxyHandler);
            }

        }
    }
}


