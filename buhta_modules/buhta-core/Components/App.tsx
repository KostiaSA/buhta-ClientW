import * as React from "react";
import {Component, ComponentProps} from "./Component";
import {Desktop} from "./Desktop/Desktop";
import Element = JSX.Element;

export interface AppProps extends ComponentProps {
    title?: string;
}

export class App extends Component<AppProps,{}> {
    constructor(props: AppProps, context) {
        super(props, context);
        this.props = props;
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