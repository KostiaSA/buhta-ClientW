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

}

