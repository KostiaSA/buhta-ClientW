import * as React from "react";
import {Component, ComponentProps} from "../Component";


export interface PanelProps extends ComponentProps<any> {
//    onClick?: React.MouseEventHandler;
    sizeTo: "parent" | "content";
}

export class Panel extends Component<PanelProps, any> {

    render() {
        this.clearStyles();

        //this.addClassName("Layout");
        //this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});

        if (this.props.sizeTo === "parent") {// && this.props.type==="column") {
            this.addStyles({height: "100%"});
        }

  //      this.addProps({onClick: this.props.onClick});

        return (
            <div {...this.getRenderProps()} >
                {this.props.children}
            </div>
        );
    }
}

