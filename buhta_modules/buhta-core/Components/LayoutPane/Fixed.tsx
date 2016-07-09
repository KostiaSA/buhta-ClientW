
import * as React from "react";
import {Component, ComponentProps} from "../Component";

export interface FixedProps extends ComponentProps<any> {
    onClick?: React.MouseEventHandler;
}


export class Fixed extends Component<FixedProps, any> {

    render() {
        this.addClassName("Fixed");

        this.clearStyles();
        let style = {
            position: "relative",
            flex: "0 0 auto"
        };
        this.addStyles(style);

        return (
            <div {...this.getRenderProps()} >
                {this.props.children}
            </div>
        );
    }
}

