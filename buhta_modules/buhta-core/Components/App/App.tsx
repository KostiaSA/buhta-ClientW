import * as React from "react";
import {Component, ComponentProps, ComponentState} from "../Component";
import {Desktop} from "../Desktop/Desktop";
import Element = JSX.Element;
import {AppErrorBar} from "./AppErrorBar";

export interface AppProps extends ComponentProps<AppState> {
    title?: string;
    sizeTo: "parent" | "content";
}


export class AppWindow {
    constructor() {
        this.id = Math.random().toString(36).slice(2, 12);
    }

    id: string;
    content: JSX.Element;
}

class AppState extends ComponentState<AppProps> {
    windows: AppWindow[] = [];  // последнее активно
}

export class App extends Component<AppProps, AppState> {
    constructor(props: AppProps, context: any) {
        super(props, context);
        this.props = props;
        this.state = new AppState(this);
    }

    protected willMount() {
        super.willMount();
        appInstance = this;
    }

    // protected didMount() {
    //      super.didMount();
    //      appInstance = this;
    // }

    desktop: Desktop;


    render() {
        this.addClassName("app");

        if (this.props.sizeTo === "parent")
            this.addStyles({height: "100%"});

        return (
            <div {...this.getRenderProps()}>
                <AppErrorBar/>
                {this.props.children}
            </div>
        );
    }

}

export let appInstance: App;