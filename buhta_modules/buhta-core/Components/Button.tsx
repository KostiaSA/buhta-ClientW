import * as React from "react";
import {VisiblePlugin, VisiblePluginProps, VisiblePluginState} from "../Plugins/VisiblePlugin";
import {OnClickPlugin, OnClickPluginProps} from "../Plugins/OnClickPlugin";
import {Component, ComponentProps, ComponentState} from "./Component";

export interface ButtonProps extends ComponentProps<ButtonState>, VisiblePluginProps, OnClickPluginProps {
    text?: string;
}

export class ButtonState extends ComponentState<ButtonProps> implements VisiblePluginState {
    visible: boolean;
}

//@VisiblePlugin
//@OnClickPlugin
export class Button extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new ButtonState(this);
        this.plugins.push(new VisiblePlugin(this));
        this.plugins.push(new OnClickPlugin(this));
    }

    render() {
        this.addClassName("button");

        return (
            <a {...this.getRenderProps()}>
                {this.props.children}
            </a>
        );
    }

}