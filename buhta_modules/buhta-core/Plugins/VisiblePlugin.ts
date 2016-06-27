import * as Core from "../index"

export interface VisiblePluginProps {
    visible?: boolean;
    defaultVisible?: boolean;
}

export interface VisiblePluginState {
    visible?: boolean;
}


export class VisiblePlugin extends Core.ComponentPlugin<VisiblePluginProps,VisiblePluginState> {
    // constructor(owner: any) {
    //     super(owner);
    // }

    protected willMount() {
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
        //console.log("жопа13 state.visible=" + state.visible.toString());
    }

    protected willReceiveProps(nextProps: VisiblePluginProps) {
        //let state = this.owner.state as VisiblePluginState;
        if (nextProps.visible !== undefined) {
            this.state.visible = nextProps.visible;
        }
        else
            this.state.visible = true;
        this.owner.toggleClassName(!this.state.visible, "is-hidden");
    }

}

export function Visible(target) {
    target.plugins.push(Core.VisiblePlugin);
    return target;
}

