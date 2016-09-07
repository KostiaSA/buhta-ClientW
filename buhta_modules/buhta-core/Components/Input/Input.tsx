import * as React from "react";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";

export enum InputType {Text, Number, Date, Boolean }

export interface InputProps extends ComponentProps<any>, AutoFormControlProps {
    type: InputType;
    bindObject: any;
    bindPropName: string;
    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
    checkboxCaption?: string;
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
            case InputType.Boolean:
                return this.renderBoolean();
            default:
                throw  "Input.render():=> unknown InputType '" + this.props.type + "'";
        }
    }



    handleOnChangeText = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

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


    handleOnChangeNumber = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

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

    getBoolean = (): boolean => {
        console.log("getBoolean");
        console.log(this.props.bindObject[this.props.bindPropName]);
        if (this.props.bindObject && this.props.bindPropName) {
            if (this.props.bindObject[this.props.bindPropName]===true)
                return true;
            else
                return false;
        }
        else
            return false;  // todo как-то надо показать unbinded?
    };

    handleOnChangeBoolean = (event: React.SyntheticEvent) => {
        console.log(event.target);
        console.log((event.target as any).checked);
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).checked;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    renderBoolean(): JSX.Element {

        this.clearStyles();
        this.addClassName("checkbox");
        //this.addStyles({width: 30});

        return (
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={this.getBoolean()}
                    onChange={this.handleOnChangeBoolean}
                    {...this.getRenderProps()}
                />
                <span className="caption" style={{marginLeft:5}}>{this.props.checkboxCaption}</span>
            </label>
        );
    }

}