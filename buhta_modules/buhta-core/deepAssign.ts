import * as _ from "lodash";

import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {throwError, throwAbstractError} from "./Error";
import {getRandomString} from "./getRandomString";

export function deepAssign(target: DesignedObject, source: DesignedObject) {

    _.assignWith(target, source, (objValue: any, srcValue: any, key: string)=> {
        if (key.startsWith("$$")) {
            return objValue;
        }
        else {
            return srcValue;
        }
    });
    deepReplaceObject(target, target, source);

}

function deepReplaceObject(replaceObj: any, target: Object, source: Object, processed?: any) {
    if (target === source)
        return;

    if (_.isObject(replaceObj) || _.isArray(replaceObj)) {

        if (replaceObj.$$deepReplaceId === undefined)
            replaceObj.$$deepReplaceId = getRandomString();

        if (processed === undefined)
            processed = {};

        // через processedValue избавляемся от зацикливания реккурсии
        let processedValue = processed[replaceObj.$$deepReplaceId];
        if (processedValue === undefined)
            processed[replaceObj.$$deepReplaceId] = 1;
        else if (processedValue > 3)
            return;
        else
            processed[replaceObj.$$deepReplaceId] += 1;

        if (_.isArray(replaceObj)) {
            replaceObj.forEach((item: any, index: number) => {
                if (item === source)
                    replaceObj[index] = target;
                deepReplaceObject(replaceObj[index], target, source, processed);
            });
        }
        else if (_.isObject(replaceObj)) {
            for (let propName in replaceObj) {
                if (replaceObj.hasOwnProperty(propName)) {
                    if (replaceObj[propName] === source)
                        replaceObj[propName] = target;
                    deepReplaceObject(replaceObj[propName], target, source, processed);
                }
            }
        }

        processed[replaceObj.$$deepReplaceId] = 100;
    }
}


