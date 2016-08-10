import * as React from "react";
import * as _ from "lodash";
import {Component, ComponentProps} from "../Component";
import {SchemaForm} from "../../../buhta-schema/SchemaForm/SchemaForm";
import {BaseControl} from "../../../buhta-ui/BaseControl";
import {UIComponent, UIComponentProps} from "../UIComponent/UIComponent";
import {SchemaComponent} from "../../../buhta-schema/SchemaComponent/SchemaComponent";

export interface UIFormProps extends UIComponentProps {
    schemaComponent: SchemaComponent;
}


export class UIForm extends UIComponent<UIFormProps> {

    render(): JSX.Element {
        this.clearStyles();


        // if (this.props.sizeTo === "parent") {// && this.props.type==="column") {
        //     this.addStyles({height: "100%"});
        // }


        let children = this.props.schemaComponent.children.map((child: BaseControl| string, index: number) => {
            if (_.isString(child))
                return child;
            else
                return child.render(this, index, null);
        });


        return (
            <div {...this.getRenderProps()} ref={ (e) => { this.nativeElement = e; }}>
                {children}
            </div>
        );
    }
}

