import {Component, ComponentProps, ComponentState} from "../Components/Component";

export class ComponentPlugin<P,S extends ComponentState<P>> {

    constructor(public owner: Component<P, S>) {

    }

    protected didMount() {
    }

    protected willMount() {
    }

    protected willUnmount() {
    }

    protected willReceiveProps(nextProps: P) {
    }

    protected didUpdate(prevProps: P, prevState: S, prevContext: any) {
    }

    get state(): S {
        return this.owner.state;
    }

    get props(): P {
        return this.owner.props;
    }

}