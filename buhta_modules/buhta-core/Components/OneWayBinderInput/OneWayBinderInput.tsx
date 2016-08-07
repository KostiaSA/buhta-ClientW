import * as React from "react";
import {ComponentProps, Component, ComponentState} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {OneWayBinder_base, getOneWayBinderTypesDataSource} from "../../../buhta-schema/OneWayBinder/OneWayBinder";
import {SelectInput} from "../SelectInput/SelectInput";
import {SelectInputDataSource} from "../SelectInput/SelectInputDataSource";

export interface OneWayBinderInputProps extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    maxWidth?: number;
    onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
    //binderType?: OneWayBinderType;
}

// export class OneWayBinderInputState extends ComponentState<OneWayBinderInputProps> {
//     constructor(private input: OneWayBinderInput) {
//         super(input);
//     }
//     editedValue: OneWayBinder_base<any>;
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

    // renderEditor(): JSX.Element {
    //
    //     let editedBinder = this.props.bindObject[this.props.bindPropName] as OneWayBinder_base<any>;
    //     if (editedBinder)
    //
    //         return (
    //             <input
    //                 type="text"
    //                 value={this.getText()}
    //                 onChange={this.handleOnChange}
    //                 {...this.getRenderProps()}
    //             />
    //         );
    // }

    handleSelectChange = () => {
        if (this.props.bindObject && this.props.bindPropName)
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    private selectDataSource: SelectInputDataSource<OneWayBinder_base<any>>;
    private activeBinder: OneWayBinder_base<any>;

    render(): JSX.Element {

        // let editedBinder: OneWayBinder_base<any>;
        // if (!(this.props.bindObject[this.props.bindPropName] instanceof OneWayBinder_base))
        //     this.props.bindObject[this.props.bindPropName] = new OneWayBinder_base<any>(this.props.bindObject[this.props.bindPropName]);

        if (!this.activeBinder)
            this.activeBinder = this.props.bindObject[this.props.bindPropName] as OneWayBinder_base<any>;

        if (!this.selectDataSource)
            this.selectDataSource = getOneWayBinderTypesDataSource();

        return (
            <p className="control has-addons">
                <SelectInput
                    bindObject={this}
                    bindPropName="activeBinder"
                    valuesDataSource={this.selectDataSource}
                    onChange={ ()=>{ this.forceUpdate(); console.log(this.activeBinder)} }
                >
                </SelectInput>
                {this.activeBinder.renderValueEditor()}
            </p>
        );

    }

}