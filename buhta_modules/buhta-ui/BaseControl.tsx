import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {PropertyEditorInfo} from "../buhta-app-designer/PropertyEditors/BasePropertyEditor";
import {OneWayBinder_undefined} from "../buhta-schema/OneWayBinder/OneWayBinder_undefined";
import {ControlEvent} from "./ControlEvent";
import {SchemaComponent} from "../buhta-schema/SchemaComponent/SchemaComponent";
import {UIComponent} from "../buhta-core/Components/UIComponent/UIComponent";
import {ControlPropsForDesignerGrid} from "../buhta-app-designer/ObjectDesigner/ControlPropsForDesignerGrid";

export class BaseControl extends DesignedObject {
//    name: string;
//    parent: BaseControl;

    // @StringEditor({
    //     inputCaption: "Текст777"
    // })
    // fake777: string;


    $$flatIndex: number; // используется в TreeGridComponentChildrenDataSourceParams
    $$flatParent: BaseControl | null; // используется в TreeGridComponentChildrenDataSourceParams

    $$parent: BaseControl | undefined; // используется в GridTreeDataSourceFromComponent
    

    children: BaseControl[] = [];
//    reactElement: Component<any, any>;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getPropsAsync(): Promise<ComponentProps<any>> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function | undefined {
        return undefined;
    }

    beforeRender() {
    }

    $$renderedComponent: Component<ComponentProps<any>, any>;
    $$ownerComponent: UIComponent<any>;
    $$parentControl: BaseControl | null;

    render(ownerComponent: UIComponent<any>, index: number, parentControl: BaseControl | null): JSX.Element | undefined {
        this.$$ownerComponent = ownerComponent;
        this.$$parentControl = parentControl;

        this.beforeRender();
        let children = this.children.map((child: BaseControl, index: number) => {
            // if (_.isString(child))
            //     return child;
            // else
            return child.render(ownerComponent, index, this);
        });
        let comp = this.getComponent();

        let props: ComponentProps<any> = this.getProps();
        if (props.key === undefined)
            props.key = index;

        props.$$control = this;

        if (comp !== undefined)
            return React.createElement(this.getComponent() as any, props, children);
        else
            return undefined;
    }

    renderAsync(ownerComponent: UIComponent<any>, index: number, parentControl: BaseControl | null): Promise<JSX.Element | undefined> {
        this.$$ownerComponent = ownerComponent;
        this.$$parentControl = parentControl;

        this.beforeRender();

        return Promise
            .map(
                this.children,
                (child: BaseControl, index: number, length: number) => {
                    // if (_.isString(child))
                    //     return child;
                    // else
                    return child.renderAsync(ownerComponent, index, this);
                }
            )
            .then((children: JSX.Element[]) => {
                return this.getPropsAsync()
                    .then((props: ComponentProps<any>) => {
                        if (props.key === undefined)
                            props.key = index;
                        let comp = this.getComponent();
                        props.$$control = this;

                        if (comp !== undefined)
                            return React.createElement(this.getComponent() as any, props, children);
                        else
                            return undefined;

                    });
            });

        // let children = this.children.map((child: BaseControl, index: number) => {
        //     // if (_.isString(child))
        //     //     return child;
        //     // else
        //     return child.render(ownerComponent, index, this);
        // });
        // let comp = this.getComponent();
        //
        // let props: ComponentProps<any> = this.getProps();
        // if (props.key === undefined)
        //     props.key = index;
        //
        // props.$$control = this;
        //
        // if (comp !== undefined)
        //     return React.createElement(this.getComponent() as any, props, children);
        // else
        //     return undefined;
    }

    get $$controlName(): JSX.Element | string {
        throwAbstractError();
        throw  "fake";
    }

    get $$controlMainProps(): JSX.Element {
        return this.$$controlPropsByColumnName("main-properties");
    }

    get $$controlEvents(): JSX.Element {
        return this.$$controlPropsByColumnName("events");
    }

    $$controlPropsByColumnName(column: string): JSX.Element {

        // let props: any[] = [];
        //
        // getShowInDesignerInfos(this)
        //     .filter((info) => {
        //         return (
        //             info.column === column &&
        //             this[info.propertyName] !== undefined &&
        //             this[info.propertyName] !== null &&
        //             (!(this[info.propertyName] instanceof OneWayBinder_undefined))
        //         );
        //     })
        //     .forEach((info, index) => {
        //
        //         let propValue = this[info.propertyName];
        //         let propValueAsString = "";
        //
        //         // if (propValue === undefined)
        //         //     propValueAsString = "undefined";
        //         // else if (propValue === null)
        //         //     propValueAsString = "null";
        //         //else
        //         if (propValue.toString !== undefined)
        //             propValueAsString = propValue.toString();
        //         else
        //             propValueAsString = "error: toString() is undefined";
        //
        //
        //         let prop = (
        //             <div key={index}>
        //                 <span className="property">{info.propertyName }</span>
        //                 <span className="string">={propValueAsString}</span>
        //             </div>
        //         );
        //         props.push(prop);
        //     });
        //

        return (
            <ControlPropsForDesignerGrid
                control={this}
                gridColumnName={column}
            >
            </ControlPropsForDesignerGrid>
        );
    }

    createEvent(): ControlEvent {
        let event: ControlEvent = {
            target: this,
            component: this.$$renderedComponent,
            schemaComponent: this.$$ownerComponent.$$runtimeContext
        };

        return event;
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

