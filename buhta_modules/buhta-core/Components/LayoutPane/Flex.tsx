import {Component, ComponentProps} from "../Component";
import * as React from "react";


export interface FlexProps extends ComponentProps {
    onClick?: React.MouseEventHandler;
}

export class Flex extends Component<FlexProps,any> {

    render() {
        this.addClassName("Flex");

        this.clearStyles();
        let style = {
            flex: 1,
            position: 'relative'
        };
        this.addStyles(style);

        return (
            <div {...this.getRenderProps()} >
                {this.props.children}
            </div>
        );

    }
}
