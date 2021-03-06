import {ComponentPlugin} from "./Plugin";
import {ComponentState} from "../Components/Component";

export interface VisiblePluginProps {
    visible?: boolean;
    defaultVisible?: boolean;
}

export interface VisiblePluginState extends ComponentState<VisiblePluginProps> {
    visible?: boolean;
}


export class VisiblePlugin extends ComponentPlugin<VisiblePluginProps, VisiblePluginState> {
    // constructor(owner: any) {
    //     super(owner);
    // }

    willMount() {
        super.willMount();
        //console.log("visible willMount()")

        if (this.props.visible !== undefined && this.props.defaultVisible !== undefined) {
            console.error("VisiblePlugin: only one of the properties must be specified 'visible' or 'defaultVisible'");
        }

        if (this.props.visible !== undefined) {
            this.state.visible = this.props.visible;
        }
        else if (this.props.defaultVisible !== undefined) {
            this.state.visible = this.props.defaultVisible;
        }
        else
            this.state.visible = true;

        this.owner.toggleClassName(!this.state.visible, "is-hidden");
    }

    willReceiveProps(nextProps: VisiblePluginProps) {
        //let state = this.owner.state as VisiblePluginState;
        if (nextProps.visible !== undefined) {
            this.state.visible = nextProps.visible;
        }
        else
            this.state.visible = true;
        this.owner.toggleClassName(!this.state.visible, "is-hidden");
    }

}

// export function VisiblePlugin(target: any) {
//     target.plugins.push(VisiblePluginClass);
//     return target;
// }

