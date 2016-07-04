import * as React from "react";
import * as _ from "lodash";
import {Component, ComponentProps} from "../Component";




export interface LayoutProps extends ComponentProps {
    onClick?: React.MouseEventHandler;
    type:"column" | "row";
}

export class Layout extends Component<LayoutProps,any> {

    render() {
        this.addClassName("Layout");

        let style: any = {
            display: "flex",
            flex: 1,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        style.flexDirection = (this.props.type === "column") ? "column" : "row";
        this.addStyles(style);

        this.addProps({onClick: this.props.onClick});

        //console.log(this.getRenderProps());

        return (
            <div onDoubleClick="" {...this.getRenderProps()} >
                {this.props.children}
            </div>
        );
    }
}

//
// (Layout as any).propTypes = {
//     type: React.PropTypes.string.isRequired,
//     className: React.PropTypes.string,
//     style: React.PropTypes.object
// };
//
// (Layout as any).defaultProps = {
//     type: 'row'
// };
//
