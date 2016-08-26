import * as _ from "lodash";
import {throwError} from "./Error";
import {getObjectConstructorName} from "./getObjectConstructorName";

export function objectToHostJavaScript(obj: any, objPropName?: string, refs?: any): string {

    let noRefs = false;
    if (refs === undefined) {
        refs = [];
        noRefs = true;
    }

    if (refs[obj.$$refId])
        return "refs[" + obj.$$refId + "]";

    let js: string[] = [];
    js.push("(function (refs){");

    if (!obj.$$getHostConstructor)
        throwError("objectToHostJavaScript(): saved object '" + objPropName + "." + getObjectConstructorName(obj) + "' must have function '$$getHostConstructor'");

    let constructorName = obj.$$getHostConstructor();

    obj.$$refId = refs.length;
    refs.push(obj);

    js.push("if (refs === undefined) refs = [];");
    js.push("var obj=new " + constructorName + "();");
    js.push("refs[" + obj.$$refId + "] = obj;");


    for (let propName in obj) {
        if (obj.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$" && !_.isFunction(obj[propName]) && obj[propName]!==undefined) {
            let propValue: any = obj[propName];

            js.push("obj." + propName + "=");

            if (propValue === null)
                js.push("null");
            else if (_.isNumber(propValue))
                js.push(propValue.toString());
            else if (_.isString(propValue))
                js.push(JSON.stringify(propValue));
            else if (_.isDate(propValue))
                js.push("new Date(\"" + propValue.toISOString() + "\")");
            else if (_.isArray(propValue)) {
                js.push("[");
                propValue.forEach((item: any, index: number) => {
                    js.push(objectToHostJavaScript(item, propName + "[" + index + "]", refs));
                    if (index < propValue.length - 1)
                        js.push(",");
                });
                js.push("]");
            }
            else if (_.isObject(propValue))
                js.push(objectToHostJavaScript(propValue, propName, refs));
            else
                throwError("objectToHostJavaScript(): unknown type for property '" + propName + "'");
            js.push(";");
        }
    }

    if (noRefs) {
        js.push("return obj;})()");
        return js_beautify(js.join(""));
    }
    else {
        js.push("return obj;})(refs)");
        return js.join("");
    }

}