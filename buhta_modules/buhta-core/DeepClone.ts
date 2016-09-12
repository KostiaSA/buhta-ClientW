import * as _ from "lodash";

import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwError} from "./Error";
import {getRandomString} from "./getRandomString";

export function deepClone<T>(obj: any): T {
    // todo clone ArrayBuffer

    if (!obj)
        throwError("deepClone(): obj === null");

    let refsClones: any = {};

    if (_.isArray(obj))
        return cloneArray(obj, refsClones);
    else
        return cloneObject(obj, refsClones);
}

function cloneObject(obj: any, refsClones: any): any {
    if (obj === undefined)
        return undefined;

    if (obj === null)
        return null;

    if (obj.$$uniqueObjectId !== undefined && refsClones[obj.$$uniqueObjectId] !== undefined)
        return refsClones[obj.$$uniqueObjectId];

    let cloned: any = new obj.constructor();
    cloned.$$isClone = true;

    obj.$$uniqueObjectId = getRandomString();
    refsClones[obj.$$uniqueObjectId] = cloned;

    for (let propName in obj) {
        if (obj.hasOwnProperty(propName)) {
            let propValue: any = obj[propName];

            if (propName.substring(0, 2) !== "$$") {
                if (_.isDate(propValue)) {
                    cloned[propName] = new Date(obj[propName].getTime());
                }
                else if (_.isArray(propValue)) {
                    cloned[propName] = cloneArray(propValue, refsClones);
                }
                else if (_.isObject(propValue)) {
                    cloned[propName] = cloneObject(propValue, refsClones);
                }
                else
                    cloned[propName] = obj[propName];
            }
            else {
                if (!_.isString(propValue))
                    cloned[propName] = cloneObject$$(propValue, refsClones);
            }
        }
    }
    return cloned;
}

function cloneObject$$(obj: any, refsClones: any): any {
    if (obj === undefined)
        return undefined;

    if (obj === null)
        return null;

    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
        return refsClones[obj.$$uniqueObjectId];
    else
        return obj;
}

function cloneArray(obj: any, refsClones: any): any {
    if (obj === undefined)
        return undefined;

    if (obj === null)
        return null;

    if (obj.$$uniqueObjectId && refsClones[obj.$$uniqueObjectId])
        return refsClones[obj.$$uniqueObjectId];

    let cloned: any = [];
    cloned.$$isClone = true;

    obj.$$uniqueObjectId = Math.random().toString(36).slice(2, 16);
    refsClones[obj.$$uniqueObjectId] = cloned;

    obj.forEach((arrayItem: any) => {
        if (_.isDate(arrayItem)) {
            cloned.push(new Date(arrayItem.getTime()));
        }
        else if (_.isArray(arrayItem)) {
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
