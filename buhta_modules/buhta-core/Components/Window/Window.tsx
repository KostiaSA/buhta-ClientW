import * as React from "react";
import {ComponentProps, Component} from "../Component";

export interface WindowProps extends ComponentProps {
    title?: string;
    top?:number;
    left?:number;
    width?:number;
    height?:number;
}

export class Window extends Component<WindowProps,{}> {
    constructor(props: WindowProps, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        this.addClassName("window");
        //this.addStyles({height: "100%"});

        return (
            <div {...this.getRenderProps()}>
                {this.props.children}
            </div>
        );
    }

}