import * as React from "react";
import * as ReactDOM from "react-dom";

//import {XComponent, XComponentProps, XComponentState} from "./XComponent";
import * as X from "./X";

export interface XTreeGridColumnProps extends X.XComponentProps {
        caption?: string;
        width?:number;
        fieldName?: string;
        showHierarchyTree?: boolean;
        showHierarchyPadding?: boolean;
    }

    export interface XTreeGridColumnState extends X.XComponentState {
        //disabled?: boolean | booleanFunction;
    }


    export class XTreeGridColumn extends X.XComponent<XTreeGridColumnProps, XTreeGridColumnState> {

        constructor(props: XTreeGridColumnProps, context) {
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


