import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {PropertyEditorInfo} from "../buhta-app-designer/PropertyEditors/BasePropertyEditor";
import {OneWayBinder_undefined} from "../buhta-schema/OneWayBinder/OneWayBinder_undefined";

export class BaseControl extends DesignedObject {
//    name: string;
//    parent: BaseControl;

    // @StringEditor({
    //     inputCaption: "Текст777"
    // })
    // fake777: string;


    $$flatIndex: number; // используется в TreeGridComponentChildrenDataSourceParams
    $$flatParent: BaseControl | null; // используется в TreeGridComponentChildrenDataSourceParams

    children: BaseControl[] = [];
//    reactElement: Component<any, any>;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function | undefined {
        return undefined;
    }

    beforeRender() {
    }

    render(): JSX.Element | undefined {
        this.beforeRender();
        let children = this.children.map((child: BaseControl) => {
            // if (_.isString(child))
            //     return child;
            // else
            return child.render();
        });
        let comp = this.getComponent();
        if (comp !== undefined)
            return React.createElement(this.getComponent() as any, this.getProps(), children);
        else
            return undefined;
    }

    get $$controlName(): JSX.Element | string {
        return "<baseControl>";
    }

    get $$controlMainProps(): JSX.Element {
        return this.$$controlPropsByColumnName("main-properties");
    }

    get $$controlEvents(): JSX.Element {
        return this.$$controlPropsByColumnName("events");
    }

    $$controlPropsByColumnName(column: string): JSX.Element {

        let props: any[] = [];

        getShowInDesignerInfos(this)
            .filter((info) => {
                return (
                    info.column === column &&
                    this[info.propertyName] !== undefined &&
                    this[info.propertyName] !== null &&
                    (!(this[info.propertyName] instanceof OneWayBinder_undefined))
                );
            })
            .forEach((info, index) => {

                let propValue = this[info.propertyName];
                let propValueAsString = "";

                // if (propValue === undefined)
                //     propValueAsString = "undefined";
                // else if (propValue === null)
                //     propValueAsString = "null";
                //else
                if (propValue.toString !== undefined)
                    propValueAsString = propValue.toString();
                else
                    propValueAsString = "error: toString() is undefined";


                let prop = (
                    <div key={index}>
                        <span className="property">{info.propertyName }</span>
                        <span className="string">={propValueAsString}</span>
                    </div>
                );
                props.push(prop);
            });


        return (
            <div>
                {props}
            </div>
        );
    }
}

export interface ShowInDesignerGridParams {
    column: "main-properties" | "events";
}


export interface ShowInDesignerInfo extends ShowInDesignerGridParams {
    propertyName: string;
    objectType: typeof DesignedObject;
}

function registerShowInDesignerInfo(info: ShowInDesignerInfo) {

    let objType: any = info.objectType;

    if (!objType.$$propertyShowInDesignerInfos)
        objType.$$propertyShowInDesignerInfos = [];

    objType.$$propertyShowInDesignerInfos.push(info);

    console.log("registerShowInDesignerInfo " + info.propertyName);
    //console.log(editor);

}

export function getShowInDesignerInfos(obj: DesignedObject): ShowInDesignerInfo[] {

    let infos = (obj.constructor as any).$$propertyShowInDesignerInfos as ShowInDesignerInfo[];
    if (!infos)
        infos = [];

    infos = infos.filter((info) => obj instanceof info.objectType);

    //console.log("getPropertyEditors") ;
    //console.log(editors);
    return infos;

}


export function ShowInDesignerGrid(params: ShowInDesignerGridParams): Function {
    return function (target: any, propertyName: string) {

        let info: ShowInDesignerInfo = {
            propertyName: propertyName,
            objectType: target.constructor,
            column: params.column
        };

        registerShowInDesignerInfo(info);
    };
}

