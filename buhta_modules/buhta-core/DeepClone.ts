import * as _ from "lodash";

import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwError} from "./Error";

export function DeepClone<T>(obj: any): T  {
    if (!obj)
        throwError("DeepClone(): obj === null");

    let refsClones: any = {};

    if (_.isArray(obj))
        return cloneArray(obj, refsClones);
    else
        return cloneObject(obj, refsClones);
}

function cloneObject(obj: any, refsClones: any): any {
    if (!obj)
        return undefined;

    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
        return refsClones[obj.$$uniqueObjectId];

    let cloned: any = new obj.constructor();
    cloned.$$isClone = true;

    obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
    refsClones[obj.$$uniqueObjectId] = cloned;

    for (let propName in obj) {
        if (obj.hasOwnProperty(propName)) {
            let propValue: any = obj[propName];

            if (propName.substring(0, 2) !== "$$") {
                if (_.isArray(propValue)) {
                    cloned[propName] = cloneArray(propValue, refsClones);
                }
                else if (_.isObject(propValue)) {
                    cloned[propName] = cloneObject(propValue, refsClones);
                }
                else
                    cloned[propName] = obj[propName];
            }
            else {

                cloned[propName] = cloneObject$$(propValue, refsClones);
            }
        }
    }
    return cloned;
}

function cloneObject$$(obj: any, refsClones: any): any {
    if (!obj)
        return undefined;

    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
        return refsClones[obj.$$uniqueObjectId];
    else
        return obj;
}

function cloneArray(obj: any, refsClones: any): any {
    if (!obj)
        return undefined;

    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
        return refsClones[obj.$$uniqueObjectId];

    let cloned: any = [];
    cloned.$$isClone = true;

    obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
    refsClones[obj.$$uniqueObjectId] = cloned;

    obj.forEach((arrayItem: any) => {
        if (_.isArray(arrayItem)) {
            cloned.push(cloneArray(arrayItem, refsClones));
        }
        else if (_.isObject(arrayItem)) {
            cloned.push(cloneObject(arrayItem, refsClones));
        }
        else
            cloned.push(arrayItem);


    });
    return cloned;
}
