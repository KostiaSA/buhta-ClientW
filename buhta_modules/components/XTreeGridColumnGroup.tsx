//import {XComponent, XComponentProps, XComponentState} from "./XComponent";
import * as X from "./X";

export interface XTreeGridColumnGroupProps extends X.XComponentProps {
    caption?: string;
}

export interface XTreeGridColumnGroupState extends X.XComponentState {
    //disabled?: boolean | booleanFunction;
}


export class XTreeGridGroupColumn extends X.XComponent<XTreeGridColumnGroupProps, XTreeGridColumnGroupState> {

    constructor(props: XTreeGridColumnGroupProps, context: any) {
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

