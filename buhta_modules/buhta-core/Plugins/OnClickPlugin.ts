import * as React from "react";
import {ComponentPlugin} from "./Plugin";
import {Component} from "../Components/Component";

export interface OnClickPluginProps {
    onClick?: React.MouseEventHandler;
}

export class OnClickPlugin extends ComponentPlugin<OnClickPluginProps, any> {

    willMount() {
        super.willMount();
        this.owner.addProps({onClick: this.props.onClick});
    }

    willReceiveProps(nextProps: OnClickPluginProps) {
        super.willReceiveProps(nextProps);
        this.owner.addProps({onClick: this.props.onClick});
    }

}

// export function OnClickPlugin(target: any) {
//     target.plugins.push(OnClickPluginClass);
//     return target;
// }

