import * as React from "react";
import {ComponentProps, Component} from "../Component";

export interface DesktopProps extends ComponentProps {
    text?: string;
}

export class Desktop extends Component<DesktopProps,{}> {
    constructor(props: DesktopProps, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        this.addClassName("desktop");
        this.addStyles({height: "100%"});

        return (
            <div {...this.getRenderProps()}>
                {this.props.children}
            </div>
        );
    }

}