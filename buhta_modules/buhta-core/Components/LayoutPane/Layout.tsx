import * as React from "react";
import {Component, ComponentProps} from "../Component";


export interface LayoutProps extends ComponentProps<any> {
    onClick?: React.MouseEventHandler;
    type: "column" | "row";
    sizeTo: "parent" | "content";
}

export class Layout extends Component<LayoutProps,any> {

    render() {
        this.clearStyles();

        this.addClassName("Layout");
        this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});

        if (this.props.sizeTo === "parent") {// && this.props.type==="column") {
            this.addStyles({height: "100%"});
        }
        // if (this.props.sizeTo === "parent") {
        //     let style: any = {
        //         display: "flex",
        //         height:"100%",
        //         position: "relative",
        //         //position: "absolute",
        //         // left: 0,
        //         // right: 0,
        //         // top: 0,
        //         // bottom: 0,
        //
        //        // overflow: "auto"
        //     };
        //     style.flexDirection = this.props.type;
        //     this.addStyles(style);
        // }
        // else {
        //     let style: any = {
        //         display: "flex",
        //         position: "relative",
        //         //overflow: "auto"
        //     };
        //     style.flexDirection = this.props.type;
        //     this.addStyles(style);
        // }

        this.addProps({onClick: this.props.onClick});

        return (
            <div {...this.getRenderProps()} >
                {this.props.children}
            </div>
        );
    }
}

