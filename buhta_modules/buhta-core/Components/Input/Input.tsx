import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {FormControlProps} from "../Form/Form";

export enum InputType {Text, Number, Date }

export interface InputProps extends ComponentProps, FormControlProps {
    type: InputType;
    bindObject: Object;
    bindPropName: string;
    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
}


export class Input extends Component<InputProps,{}> {
    constructor(props: InputProps, context) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
    }

    render(): JSX.Element {
        switch (this.props.type) {
            case InputType.Text:
                return this.renderText();
            default:
                throw  "Input.render():=> unknown InputType '" + this.props.type + "'";
        }
    }


    renderText(): JSX.Element {

        let getText = (): string => {
            if (this.props.bindObject && this.props.bindPropName) {
                if (this.props.bindObject[this.props.bindPropName])
                    return this.props.bindObject[this.props.bindPropName].toString();
                else
                    return "";
            }
            else
                return "<unbinded>";
        };

        let onChange = (event: React.SyntheticEvent) => {
            if (this.props.bindObject && this.props.bindPropName)
                this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
            this.setState(this.state);

        };

        this.addClassName("input");

        return (
            <input
                type="text"
                className={this.renderClassName()}
                style={this.props.style}
                value={getText.bind(this)()}
                onChange={onChange.bind(this)}>
            </input>
        );
        //Button from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
    }

}