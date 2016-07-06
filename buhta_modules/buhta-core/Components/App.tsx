import * as React from "react";
import {Component, ComponentProps, ComponentState} from "./Component";
import {Desktop} from "./Desktop/Desktop";
import Element = JSX.Element;

export interface AppProps extends ComponentProps {
    title?: string;
}


export class AppWindow {
    constructor() {
        this.id = Math.random().toString(36).slice(2, 12);
    }

    id: string;
    content: JSX.Element;
}

class AppState extends ComponentState {
    windows: AppWindow[] = [];  // последнее активно
}

export class App extends Component<AppProps, ComponentState> {
    constructor(props: AppProps, context:any) {
        super(props, context);
        this.props = props;
        this.state = new AppState(this);
    }

    protected willMount() {
        super.willMount();
        appInstance = this;
    }

    // protected didMount() {
    //     super.didMount();
    //     appInstance = this;
    // }

    desktop: Desktop;


    render() {
        this.addClassName("app");

        return (
            <div {...this.getRenderProps()}>
                Buhta App!
                {this.props.children}
            </div>
        );
    }

}

export let appInstance: App;