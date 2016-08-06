import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../Component";
import {AutoFormControlProps} from "../AutoForm/AutoForm";
import {SelectValuesDataSource, SelectValuesItem} from "./SelectValuesDataSource";
import {SelectValuesDataSourceFromArray} from "./SelectValuesDataSourceFromArray";


export interface SelectProps<T> extends ComponentProps<any>, AutoFormControlProps {
    bindObject: any;
    bindPropName: string;
    valuesDataSource: SelectValuesDataSource<T> | any[];
    maxWidth?: number;
    //onClick?: React.ReactEventHandler;
    placeHolder?: string;
    onChange?: () => void;
}


export class Select extends Component<SelectProps<any>, any> {
    constructor(props: SelectProps<any>, context: any) {
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
            this.props.bindObject[this.props.bindPropName] = (event.target as any).value;
        this.forceUpdate();
        if (this.props.onChange)
            this.props.onChange();

    };


    renderOptions(): JSX.Element[] {
        let ds: SelectValuesDataSource<any>;
        if (_.isArray(this.props.valuesDataSource))
            ds = new SelectValuesDataSourceFromArray(this.props.valuesDataSource)
        else
            ds = this.props.valuesDataSource as SelectValuesDataSource<any>;

        return ds.getItems().map((item: SelectValuesItem<any>, index: number) => {
            return (
                <option value={item.value} key={index} disabled={item.disabled}>
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
            <select
                type="text"
                value={this.getValue()}
                onChange={this.handleOnChange}
                {...this.getRenderProps()}
            >
                {this.renderOptions()}
            </select>
        );
    }

}