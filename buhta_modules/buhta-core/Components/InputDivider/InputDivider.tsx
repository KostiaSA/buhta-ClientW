import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";


export interface InputDividerProps extends ComponentProps<any>, AutoFormControlProps {
    title?: string;
    key?: number
}


export class InputDivider extends Component<InputDividerProps, any> {
    constructor(props: InputDividerProps, context: any) {
        super(props, context);
        this.props = props;
    }

    render(): JSX.Element {
        return (
            <tr className="control" key={this.props.key}>
                <td colspan="0" style={{textAlign: "right", verticalAlign: "middle"}}>
                    <span
                        className="divider">{this.props.title}
                    </span>
                </td>
            </tr>
        )
    }


}