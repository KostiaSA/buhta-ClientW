import * as React from "react";
import {ComponentProps, Component} from "../Component";

const boxSource = {
    beginDrag(props) {
        const { id, left, top } = props;
        return { id, left, top };
    }
};

export class Draggable extends Component<any,any> {
    constructor(props: any, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        this.addClassName("draggable");
        this.addProps({draggable:true});
        //this.addStyles({height: "100%"});

        //return React.createElement(propInfo.editorType, editorProps, null)
        return (
            <div {...this.getRenderProps()}>
                это драггабле
                {this.props.children}
            </div>
        );
    }

}