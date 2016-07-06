import * as React from "react";
import {ComponentPlugin} from "./Plugin";
import {Component} from "../Components/Component";

export interface OnClickPluginProps {
    onClick?: React.MouseEventHandler;
}

class OnClickPluginClass extends ComponentPlugin<OnClickPluginProps, any> {

    protected willMount() {
        super.willMount();
        this.owner.addProps({onClick: this.props.onClick});
    }

    protected willReceiveProps(nextProps: OnClickPluginProps) {
        this.owner.addProps({onClick: this.props.onClick});
    }

}

export function OnClickPlugin(target: any) {
    target.plugins.push(OnClickPluginClass);
    return target;
}

