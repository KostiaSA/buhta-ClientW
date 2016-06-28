import * as React from "react";
import * as Core from "../index"

export interface OnClickPluginProps {
    onClick?: React.MouseEventHandler;
}

export class OnClickPlugin extends Core.ComponentPlugin<OnClickPluginProps,{}> {

    protected willMount() {
        super.willMount();
        this.owner.addProps({onClick: this.props.onClick});
    }

    protected willReceiveProps(nextProps: OnClickPluginProps) {
        this.owner.addProps({onClick: this.props.onClick});
    }

}

export function OnClick(target) {
    target.plugins.push(Core.OnClickPlugin);
    return target;
}

