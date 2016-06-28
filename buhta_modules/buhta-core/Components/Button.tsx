import * as React from "react";
import {VisiblePlugin, VisiblePluginProps} from "../Plugins/VisiblePlugin";
import {OnClickPlugin, OnClickPluginProps} from "../Plugins/OnClickPlugin";
import {Component} from "./Component";

export interface ButtonProps extends VisiblePluginProps, OnClickPluginProps {
    text?: string;
}

@VisiblePlugin
@OnClickPlugin
export class Button extends Component<ButtonProps,{}> {
    constructor(props: ButtonProps, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        this.addClassName("button");

        return (
            <button {...this.getRenderProps()}>
                {this.props.children}
            </button>
        );
    }

}