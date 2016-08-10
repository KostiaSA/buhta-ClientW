import {Component, ComponentProps, ComponentState} from "../Components/Component";

export class ComponentPlugin<P,S extends ComponentState<P>> {

    constructor(public owner: Component<P, S>) {

    }

    didMount() {
    }

    willMount() {
    }

    willUnmount() {
    }

    willUpdate() {
    }

    willReceiveProps(nextProps: P) {
    }

    didUpdate(prevProps: P, prevState: S, prevContext: any) {
    }

    get state(): S {
        return this.owner.state;
    }

    get props(): P {
        return this.owner.props;
    }

}