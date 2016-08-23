import * as React from "react";
import {BaseControl, ShowInDesignerGrid} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {SelectEditor} from "../buhta-app-designer/PropertyEditors/SelectPropertyEditor";
import {registerControlType} from "./ControlTypeInfo";

export type PropertyType = "number" | "string" | "date" | "guid";

export class PropertyControl extends BaseControl {
    @StringEditor({
        inputCaption: "Имя свойства"
    })
    propertyName: string;

    @SelectEditor({
        inputCaption: "Тип свойства",
        selectValues: ["number", ["string", "Строка"], "date", "guid"]
    })
    @ShowInDesignerGrid({column: "main-properties"})
    propertyType: PropertyType;

    @StringEditor({
        inputCaption: "значение по умолчанию"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    defaultValue: OneWayBinder<any>;

    @StringEditor({
        inputCaption: "отрисовка"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    forceUpdate: boolean;

    beforeRender() {
        super.beforeRender();
        let props: any = this.$$ownerComponent.$$runtimeContext.$$props;
        if (this.defaultValue !== undefined && props[this.propertyName] === undefined) {
            if (this.defaultValue.getValue !== undefined)
                props[this.propertyName] = this.defaultValue.getValue(this);
            else
                props[this.propertyName] = this.defaultValue;
        }
    }

    getProps(): ComponentProps<any> {
        return {};
    }
    
    getPropsAsync(): Promise<ComponentProps<any>> {
        return new Promise(
            (resolve: (obj: ComponentProps<any>) => void, reject: (error: string) => void) => {
                resolve({});
            });
    }

    // get $$controlName() {
    //     return "var " + this.variableName;
    // }

    get $$controlName(): JSX.Element | string {
        return (
            <span className="keyword">
                prop
               <span className="property">{" " + this.propertyName}</span>
            </span>
        );
    }


}

registerControlType({
    name: "Property variable",
    group: "variables",
    description: "Свойство компонента",
    type: PropertyControl
});
