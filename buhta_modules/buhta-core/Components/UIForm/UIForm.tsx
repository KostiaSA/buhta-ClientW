import * as React from "react";
import * as _ from "lodash";
import {Component, ComponentProps} from "../Component";
import {SchemaForm} from "../../../buhta-schema/SchemaForm/SchemaForm";
import {BaseControl} from "../../../buhta-ui/BaseControl";
import {UIComponent} from "../UIComponent/UIComponent";

export class UIForm extends UIComponent<SchemaForm> {

    render(): JSX.Element {
        this.clearStyles();

        //this.addClassName("Layout");
        //this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});

        if (this.props.sizeTo === "parent") {// && this.props.type==="column") {
            this.addStyles({height: "100%"});
        }

        //      this.addProps({onClick: this.props.onClick});

        let children = this.props.children.map((child: BaseControl| string, index: number) => {
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

