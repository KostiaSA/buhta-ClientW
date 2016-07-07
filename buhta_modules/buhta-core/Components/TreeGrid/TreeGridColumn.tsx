import * as React from "react";
import {ComponentProps, Component} from "../Component";
//import * as ReactDOM from "react-dom";


export interface TreeGridColumnProps extends ComponentProps<any> {
    caption?: string;
    width?: number;
    fieldName?: string;
    showHierarchyTree?: boolean;
    showHierarchyPadding?: boolean;
}

export class TreeGridColumn extends Component<TreeGridColumnProps, any> {

    constructor(props: TreeGridColumnProps, context: any) {
        super(props, context);

        //this.state.disabled = false;

    }

    render(): JSX.Element {

        //this.addClassName("btn");
        //this.toggleClassName(this.props.disabled, "disabled");

        return (null);
        //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
    }
}


