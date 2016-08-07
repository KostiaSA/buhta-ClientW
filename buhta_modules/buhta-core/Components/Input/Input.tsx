import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";

export enum InputType {Text, Number, Date }

export interface InputProps extends ComponentProps<any>, AutoFormControlProps {
    type: InputType;
    bindObject: any;
    bindPropName: string;
    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
}


export class Input extends Component<InputProps, any> {
    constructor(props: InputProps, context: any) {
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
            case InputType.Number:
                return this.renderNumber();
            default:
                throw  "Input.render():=> unknown InputType '" + this.props.type + "'";
        }
    }

    getText = (): string => {
        if (this.props.bindObject && this.props.bindPropName) {
            if (this.props.bindObject[this.props.bindPropName])
                return this.props.bindObject[this.props.bindPropName].toString();
            else
                return "";
        }
        else
            return "<unbinded>";
    };

    getNumber = (): string => {
        if (this.props.bindObject && this.props.bindPropName) {
            if (this.props.bindObject[this.props.bindPropName])
                return this.props.bindObject[this.props.bindPropName].toString();
            else
                return "";
        }
        else
            return "<unbinded>";
    };

    handleOnChangeText = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    handleOnChangeNumber = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    renderText(): JSX.Element {

        this.clearStyles();
        this.addClassName("input");
        this.addStyles({width: 300});

        //   this.addStyles(this.props.style);

        return (
            <input
                type="text"
                value={this.getText()}
                onChange={this.handleOnChangeText}
                {...this.getRenderProps()}
            />
        );
    }

    renderNumber(): JSX.Element {

        this.clearStyles();
        this.addClassName("input");
        this.addStyles({width: 150});

        return (
            <input
                type="number"
                value={this.getNumber()}
                onChange={this.handleOnChangeNumber}
                {...this.getRenderProps()}
            />
        );
    }
}