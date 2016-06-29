import * as React from "react";
import {Component, ComponentProps} from "./Component";

export interface AppProps extends ComponentProps {
    text?: string;
}

export class App extends Component<AppProps,{}> {
    constructor(props: AppProps, context) {
        super(props, context);
        this.props = props;
    }

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