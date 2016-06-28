import * as BuhtaCore from "../index"
import * as React from "react";

export interface ButtonProps extends BuhtaCore.VisiblePluginProps, BuhtaCore.OnClickPluginProps {
    text?: string;
}


@BuhtaCore.Visible
@BuhtaCore.OnClick
export class Button extends BuhtaCore.Component<ButtonProps,{}> {
    constructor(props: ButtonProps, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        this.addClassName("button");
        
        return (
            <button {...this.getRenderProps()}>
                {this.props.children}
            </button>
        )
            ;
    }

}