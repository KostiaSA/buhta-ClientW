import * as React from "react";
import {VisiblePlugin, VisiblePluginProps, VisiblePluginState} from "../../Plugins/VisiblePlugin";
import {OnClickPlugin, OnClickPluginProps} from "../../Plugins/OnClickPlugin";
import {Component, ComponentProps, ComponentState} from "../Component";
import {ICONS_PATH} from "../../Constants";
import {getIconFullPath} from "../../getIconFullPath";

export interface ButtonProps extends ComponentProps<ButtonState>, VisiblePluginProps, OnClickPluginProps {
    text?: string;
    icon?: string;
}

export class ButtonState extends ComponentState<ButtonProps> implements VisiblePluginState {
    visible: boolean;
}

export class Button extends Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new ButtonState(this);
        this.plugins.push(new VisiblePlugin(this));
        this.plugins.push(new OnClickPlugin(this));

    }

    renderIcon(): JSX.Element | undefined {
        if (this.props.icon !== undefined) {
            return (
                <img src={ getIconFullPath(this.props.icon) }/>
            );
        }
        else
            return undefined;
    }

    render() {
        this.addClassName("button");

        return (
            <a {...this.getRenderProps()}>
                {this.renderIcon()}
                {this.props.text}
                {this.props.children}
            </a>
        );
    }

}