import {PropertyEditorInfo} from "./BasePropertyEditor";


export function registerPropertyEditor(editor: PropertyEditorInfo) {

    let objType: any = editor.objectType;

    if (!objType.$$propertyEditors)
        objType.$$propertyEditors = [];

    objType.$$propertyEditors.push(editor);

    //console.log("registerPropertyEditor " + editor.propertyName);
    //console.log(editor);

}

