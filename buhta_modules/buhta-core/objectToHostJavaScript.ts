import * as _ from "lodash";
import {throwError} from "./Error";
import {getObjectConstructorName} from "./getObjectConstructorName";

export function objectToHostJavaScript(obj: any): string {

    let js: string[] = [];
    js.push("(function (){");

    if (!obj.$$getHostConstructor)
        throwError("objectToHostJavaScript(): saved object '" + getObjectConstructorName(obj) + "' must have function '$$getHostConstructor'");

    let constructorName = obj.$$getHostConstructor();

    js.push("var obj=new " + constructorName + "();");

    for (let propName in obj) {
        if (obj.hasOwnProperty(propName)) {
            let propValue: any = obj[propName];

            js.push("obj." + propName + "=");

            if (propValue === null)
                js.push("null");
            else if (_.isNumber(propValue))
                js.push(propValue.toString());
            else if (_.isString(propValue))
                js.push(JSON.stringify(propValue));
            else
                throwError("objectToHostJavaScript(): unknown type for property '" + propName + "'");
            // if (propName.substring(0, 2) !== "$$") {
            //     if (_.isArray(propValue)) {
            //         cloned[propName] = cloneArray(propValue, refsClones);
            //     }
            //     else if (_.isObject(propValue)) {
            //         cloned[propName] = cloneObject(propValue, refsClones);
            //     }
            //     else
            //         cloned[propName] = obj[propName];
            // }
            // else {
            //
            //     cloned[propName] = cloneObject$$(propValue, refsClones);
            // }
            js.push(";");
        }
    }
}

js.push("return obj;})()");
return js.join("");

}