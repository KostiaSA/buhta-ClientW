import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwError} from "./Error";


export type ObservableOnChangeHandler<T>= (target: any, p: PropertyKey, oldValue: any, newValue: any) => void;

// не сохраняются свойства, которые начинаются с $$
export function Observable<T extends DesignedObject>(obj: DesignedObject, onChangeCallback?: ObservableOnChangeHandler<T>): T {
    if (!obj)
        throwError("Observable(): obj === null");

    let proxyHandler = {
            set: (target: T, p: PropertyKey, value: any, receiver: any): any => {
                if (p.toString().substr(0, 2) !== "$$") {
                    if (!target.$$changeCount)
                        target.$$changeCount = 1;
                    else
                        target.$$changeCount++;
                    if (target.$$onChange)
                        target.$$onChange(target, p, target[p], value);
                    if (_.isArray(value))
                        processArray(value, proxyHandler, onChangeCallback);
                    else if (_.isObject(value))
                        processObject(value, proxyHandler, onChangeCallback);
                    console.log({observableSetTaget: target, prop: p , value: value});
                }
                target[p] = value;
                return true;
            }
        }
        ;

    processObject(obj, proxyHandler, onChangeCallback);
    let observableObject = new Proxy(obj, proxyHandler) as T;

    return observableObject;
}


function processObject(obj: any, proxyHandler: any, onChangeCallback?: ObservableOnChangeHandler < any >) {
    if (!obj)
        return;

    obj.$$onChange = onChangeCallback;
    for (let propName in obj) {
        if (obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {

            let propValue: any = obj[propName];

            if (_.isArray(propValue)) {
                propValue.$$changeCount = 0;
                processArray(propValue, proxyHandler, onChangeCallback);
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

function processArray(obj: any[], proxyHandler: any, onChangeCallback?: ObservableOnChangeHandler<any>) {
    if (!obj)
        return;

    (obj as any).$$onChange = onChangeCallback;

    obj.forEach((arrayItem, index) => {

        if (_.isArray(arrayItem)) {
            arrayItem.$$changeCount = 0;
            processArray(arrayItem, proxyHandler, onChangeCallback);
            obj[index] = new Proxy(arrayItem, proxyHandler);
        }
        else if (_.isObject(arrayItem)) {
            arrayItem.$$changeCount = 0;
            processObject(arrayItem, proxyHandler, onChangeCallback);
            obj[index] = new Proxy(arrayItem, proxyHandler);
        }

    });
}

