
import MouseEventHandler = __React.MouseEventHandler;
import {ComponentPlugin} from "./Plugin";

export interface OnClickPluginProps {
    onClick?: MouseEventHandler;
}

class OnClickPluginClass extends ComponentPlugin<OnClickPluginProps,any> {

    protected willMount() {
        super.willMount();
        this.owner.addProps({onClick: this.props.onClick});
    }

    protected willReceiveProps(nextProps: OnClickPluginProps) {
        this.owner.addProps({onClick: this.props.onClick});
    }

}

export function OnClickPlugin(target) {
    target.plugins.push(OnClickPluginClass);
    return target;
}

