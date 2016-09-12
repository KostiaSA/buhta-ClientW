import * as React from "react";
import * as _ from "lodash";

import {PropertyEditorInfo, BasePropertyEditor} from "./PropertyEditors/BasePropertyEditor";
//import {ObservableOnChangeHandler} from "../buhta-core/Observable";
import {getObjectConstructorName} from "../buhta-core/getObjectConstructorName";
import {GridDataSourceRow} from "../buhta-core/Components/Grid/GridDataSource";
import {ObjectDesigner, ObjectDesignerProps} from "./ObjectDesigner/ObjectDesigner";


export class DesignedObject implements GridDataSourceRow {

    constructor(public $$owner?: DesignedObject) {
    }


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

    $$getDesignerWindowSizePosStoreKey(): string {
        return "ObjectDesigner/" + getObjectConstructorName(this);
    }

    $$validate(errors: string[]) {

    }

    $$fillOwnerRecursive() {
        for (let propName in this) {
            if (this.hasOwnProperty(propName)) {
                let propValue: any = this[propName];

                if (propName.substring(0, 2) !== "$$") {
                    if (_.isArray(propValue)) {
                        this.$$fillArrayItemsOwnerRecursive(propValue)
                    }
                    else if (_.isObject(propValue) && propValue.$$fillOwnerRecursive !== undefined) {
                        propValue.$$owner = this;
                        propValue.$$fillOwnerRecursive();
                    }
                }
            }
        }
    }

    private $$fillArrayItemsOwnerRecursive(arr: any[]) {
        arr.forEach((item: any)=> {
            if (_.isArray(item)) {
                this.$$fillArrayItemsOwnerRecursive(item)
            }
            else if (_.isObject(item) && item.$$fillOwnerRecursive !== undefined) {
                item.$$owner = this;
                item.$$fillOwnerRecursive();
            }
        }, this);
    }


}

