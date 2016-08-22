import * as React from "react";
import * as _ from "lodash";

import {PropertyEditorInfo, BasePropertyEditor} from "./PropertyEditors/BasePropertyEditor";
//import {ObservableOnChangeHandler} from "../buhta-core/Observable";
import {getObjectConstructorName} from "../buhta-core/getObjectConstructorName";
import {GridDataSourceRow} from "../buhta-core/Components/Grid/GridDataSource";
import {ObjectDesigner, ObjectDesignerProps} from "./ObjectDesigner/ObjectDesigner";


export class DesignedObject implements GridDataSourceRow {

    [name: string]: any;

    getClassName() {
        return "Объект";
    }

    toString() {

        let funcNameRegex = /function (.{1,})\(/;
        let results = (funcNameRegex).exec((this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    $$unwatchedProps: string[] = ["propertyEditors", "$$unwatchedProps"];
    $$changeCount: number;
    //$$onChange: ObservableOnChangeHandler<DesignedObject>;

    $$getHostConstructor = (): string => {
        return "buhta." + getObjectConstructorName(this);
    }

    $$getPropertyEditors(): Promise<PropertyEditorInfo[]> {

        return new Promise(
            (resolve: (obj: PropertyEditorInfo[]) => void, reject: (error: string) => void) => {
                let editors = (this.constructor as any).$$propertyEditors as PropertyEditorInfo[];
                if (editors !== undefined) {
                    editors = editors.filter((edt) => this instanceof edt.objectType);
                    //console.log("getPropertyEditors") ;
                    //console.log(editors);
                    //return editors;
                    resolve(editors);
                }
                else
                    resolve([]);
            });


    }

    $$getDesigner(props: ObjectDesignerProps): JSX.Element {
        let win =
            <ObjectDesigner
                {...props}
            >
            </ObjectDesigner>;
        return win;
    }


    // id: string;
    // name: string;
    // className: string;
    // inheritFrom: string;
    // moduleName: string;
    // references: Array<string> = [];

    //private static propertyEditors: { [propertyName: string]: PropertyEditorInfo; } = {};

    // static registerPropertyEditor(propertyName: string,
    //                               propertyPage: string,
    //                               propertyGroup: string,
    //                               propertyDescription: string,
    //                               objectType: typeof DesignedObject,
    //                               editorType: typeof BasePropertyEditor,
    //                               propertyType: typeof Object | typeof String) {
    //
    //     let info: PropertyEditorInfo = {
    //         propertyName: propertyName,
    //         propertyPage: propertyPage,
    //         propertyGroup: propertyGroup,
    //         propertyDescription: propertyDescription,
    //         objectType: objectType,
    //         editorType: editorType,
    //         propertyType: propertyType,
    //     }
    //
    //     DesignedObject.propertyEditors[propertyName] = info;
    //
    //     console.log("registerPropertyEditor " + propertyName);
    //     console.log(info);
    //
    // }

    // get propertyEditors():{ [propertyName: string]: PropertyEditorInfo; }{
    //     return (DesignedObject as any).$$propertyEditors;
    // }

    // registerPropertyEditors() {
    //     this.propertyEditors.length = 0;
    // }
    //
    //
    // registerPropertyEditor(propertyName: string, propertyEditor: BasePropertyEditor) {
    //     propertyEditor.designedObject = this;
    //     propertyEditor.propertyName = propertyName;
    //     this.propertyEditors.push(propertyEditor);
    // }

    // emitTsCode(): string {
    //
    //     this.registerPropertyEditors();
    //
    //     let tsCode = new TsCode(this.moduleName, this.className, this.inheritFrom, this.references);
    //
    //     this.propertyEditors.forEach((editor) => {
    //         editor.designedObject = this;
    //         editor.emitTsCode(tsCode);
    //     });
    //
    //     return tsCode.getCode();
    // }

}

