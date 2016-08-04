import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwError} from "./Error";
import {getObjectConstructorName} from "./getObjectConstructorName";


export type ObservableOnChangeHandler<T>= (target: any, p: PropertyKey, oldValue: any, newValue: any) => void;

// не сохраняются свойства, которые начинаются с $$
export function Observable<T extends DesignedObject>(obj: DesignedObject, onChangeCallback?: ObservableOnChangeHandler<T>): T {
    if (!obj)
        throwError("Observable(): obj === null ");


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
                    //console.log({observableSetTaget: target, prop: p , value: value});
                }
                target[p] = value;
                return true;
            }
        }
        ;

    let processed: any = {};  // храним обработанные объекты для избежания зацикливания

    processObject(obj, proxyHandler, processed, onChangeCallback);
    let observableObject = new Proxy(obj, proxyHandler) as T;

    return observableObject;
}


function processObject(obj: any, proxyHandler: any, processed: any, onChangeCallback?: ObservableOnChangeHandler < any >) {
    if (!obj || getObjectConstructorName(obj) === "Function" || processed[obj.$$uniqueObjectId] === true)
        return;
    if (obj.$$uniqueObjectId !== undefined)
        obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
    processed[obj.$$uniqueObjectId] = true;
    //console.log("o-processObject: " + obj.constructor.toString().substr(0, 40));
    obj.$$onChange = onChangeCallback;
    for (let propName in obj) {
        if (obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {

            let propValue: any = obj[propName];
            //console.log("o-processObject-prop:" + propName);

            if (_.isArray(propValue)) {
                propValue.$$changeCount = 0;
                processArray(propValue, proxyHandler, processed, onChangeCallback);
                obj[propName] = new Proxy(propValue, proxyHandler);
            }
            else if (_.isObject(propValue)) {
                propValue.$$changeCount = 0;
                processObject(propValue, proxyHandler, processed, onChangeCallback);
                obj[propName] = new Proxy(propValue, proxyHandler);
            }

        }
    }
}

function processArray(obj: any[], proxyHandler: any, processed: any, onChangeCallback?: ObservableOnChangeHandler<any>) {
    if (!obj)
        return;

    //console.log("o-processArray");

    (obj as any).$$onChange = onChangeCallback;

    obj.forEach((arrayItem, index) => {

        if (_.isArray(arrayItem)) {
            arrayItem.$$changeCount = 0;
            processArray(arrayItem, proxyHandler, processed, onChangeCallback);
            obj[index] = new Proxy(arrayItem, proxyHandler);
        }
        else if (_.isObject(arrayItem)) {
            arrayItem.$$changeCount = 0;
            processObject(arrayItem, proxyHandler, processed, onChangeCallback);
            obj[index] = new Proxy(arrayItem, proxyHandler);
        }

    });
}

