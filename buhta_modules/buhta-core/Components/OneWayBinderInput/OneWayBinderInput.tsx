import * as React from "react";
import {ComponentProps, Component, ComponentState} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {OneWayBinderType, OneWayBinder, getOneWayBinderTypesDataSource} from "../../../buhta-schema/OneWayBinder";
import {SelectInput} from "../SelectInput/SelectInput";

export interface OneWayBinderInputProps extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
    binderType?: OneWayBinderType;
}

// export class OneWayBinderInputState extends ComponentState<OneWayBinderInputProps> {
//     constructor(private input: OneWayBinderInput) {
//         super(input);
//     }
//     editedValue: OneWayBinder<any>;
// }

export class OneWayBinderInput extends Component<OneWayBinderInputProps, any> {
    constructor(props: OneWayBinderInputProps, context: any) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
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

    handleOnChange = (event: React.SyntheticEvent) => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    renderText(): JSX.Element {

        this.clearStyles();
        this.addClassName("input");
        this.addStyles(this.props.style);

        return (
            <input
                type="text"
                value={this.getText()}
                onChange={this.handleOnChange}
                {...this.getRenderProps()}
            />
        );
    }

    render(): JSX.Element {

        let editedBinder: OneWayBinder<any>;
        if (!(this.props.bindObject[this.props.bindPropName] instanceof OneWayBinder))
            this.props.bindObject[this.props.bindPropName] = new OneWayBinder<any>(this.props.bindObject[this.props.bindPropName]);

        editedBinder = this.props.bindObject[this.props.bindPropName];


        return (
            <p className="control has-addons">
                <SelectInput
                    bindObject={editedBinder}
                    bindPropName="binderType"
                    valuesDataSource={getOneWayBinderTypesDataSource()}
                >
                </SelectInput>
                <input className="input" type="text" placeholder="Amount of money"/>
            </p>
        );

    }

}