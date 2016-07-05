import {PropertyEditorInfo} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";

export function getPropertyEditors(obj: DesignedObject): PropertyEditorInfo[] {

    let editors = (obj.constructor as any).$$propertyEditors as PropertyEditorInfo[];

    editors = editors.filter((edt)=>obj instanceof edt.objectType);

    //console.log("getPropertyEditors");
    //console.log(editors);
    return editors;

}

