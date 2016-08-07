import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {SelectInputDataSource, SelectInputItem} from "./SelectInputDataSource";
import {SelectInputDataSourceFromArray} from "./SelectInputDataSourceFromArray";


export interface SelectInputProps<T> extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    valuesDataSource: SelectInputDataSource<T> | any[];
    maxWidth?: number;
    //onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
}


export class SelectInput extends Component<SelectInputProps<any>, any> {
    constructor(props: SelectInputProps<any>, context: any) {
        super(props, context);
        this.props = props;
    }

    protected willMount() {
        super.willMount();
    }

    getValue = (): string => {
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
            this.props.bindObject[this.props.bindPropName] = this.ds.getItems()[(event.target as any).value].value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };

    private ds: SelectInputDataSource<any>;

    renderOptions(): JSX.Element[] {
        if (_.isArray(this.props.valuesDataSource))
            this.ds = new SelectInputDataSourceFromArray(this.props.valuesDataSource)
        else
            this.ds = this.props.valuesDataSource as SelectInputDataSource<any>;

        return this.ds.getItems().map((item: SelectInputItem<any>, index: number) => {
            return (
                <option value={index} key={index} disabled={item.disabled}>
                    {item.label}
                </option>
            )
        });
    }


    render(): JSX.Element {

        this.clearStyles();
        this.addClassName("select");
        this.addStyles(this.props.style);

        return (
            <span {...this.getRenderProps()}>
                <select
                    type="text"
                    value={this.getValue()}
                    onChange={this.handleOnChange}
                >
                    {this.renderOptions()}
                </select>
            </span>
        );
    }

}