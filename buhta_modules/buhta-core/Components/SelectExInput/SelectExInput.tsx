// import * as React from "react";
// import * as _ from "lodash";
//
// import Select = require("react-select");
// import {Option} from "react-select-props";
//
// import {ComponentProps, Component} from "../Component";
// import {AutoFormControlProps} from "../AutoForm/AutoForm";
// import {throwError} from "../../Error";
// import {SelectInputProps} from "../SelectInput/SelectInput";
// import {SelectInputDataSource, SelectInputItem} from "../SelectInput/SelectInputDataSource";
// import {SelectInputDataSourceFromArray} from "../SelectInput/SelectInputDataSourceFromArray";
//
//
// export interface SelectExInputProps<T> extends SelectInputProps<T> {
//     multiSelect?: boolean;
// }
//
// export class SelectExInput extends Component<SelectExInputProps<any>, any> {
//     constructor(props: SelectExInputProps<any>, context: any) {
//         super(props, context);
//         this.props = props;
//     }
//
//     protected willMount() {
//         super.willMount();
//     }
//
//     private getValue(): any {
//         if (this.props.multiSelect === true) {
//             let bindedObject = this.props.bindObject[this.props.bindPropName];
//             if (!_.isArray(bindedObject))
//                 throwError("SelectExInput: binded object property '" + this.props.bindPropName + "' must be an array");
//
//             return bindedObject.map((item: SelectInputItem<any>)=> {
//                 return {value: item, label: this.ds.getLabel(item)};
//             });
//
//         }
//         else {
//             let bindedObject = this.props.bindObject[this.props.bindPropName];
//             return {value: bindedObject, label: this.ds.getLabel(bindedObject)};
//
//         }
//     };
//
//     handleOnChange = (newValue: Option| Option[]) => {
//         if (this.props.bindObject !== undefined && this.props.bindPropName !== undefined) {
//             if (this.props.multiSelect === true) {
//                 if (!newValue) // для пустышки идет null
//                     this.props.bindObject[this.props.bindPropName] = [];
//                 else
//                     this.props.bindObject[this.props.bindPropName] = (newValue as Option[]).map((item: Option)=>item.value);
//             }
//             else {
//                 if (!newValue) // для пустышки идет null
//                     this.props.bindObject[this.props.bindPropName] = undefined;
//                 else
//                     this.props.bindObject[this.props.bindPropName] = (newValue as Option).value;
//             }
//
//             this.forceUpdate();
//             if (this.props.onChange)
//                 this.props.onChange();
//         }
//     };
//
//     private ds: SelectInputDataSource<any>;
//
//     getOptions(): Option[] {
//
//         return this.ds.getItems().map((item: SelectInputItem<any>)=> {
//             let opt: Option = {label: item.label.toString(), value: item.value.toString()}
//             return opt;
//         });
//
//     }
//
//     render(): JSX.Element {
//         if (_.isArray(this.props.valuesDataSource))
//             this.ds = new SelectInputDataSourceFromArray(this.props.valuesDataSource)
//         else
//             this.ds = this.props.valuesDataSource as SelectInputDataSource<any>;
//
//         if (this.ds === undefined)
//             throwError("SelectExInput: property 'valuesDataSource' is not defined");
//
//         this.clearStyles();
//         //this.addClassName("select");
//         this.addStyles(this.props.style);
//         return (
//             <Select
//                 {...this.getRenderProps()}
//                 multi={this.props.multiSelect}
//                 name="fake-field-name"
//                 value={this.getValue()}
//                 onChange={this.handleOnChange}
//                 options={this.getOptions()}
//             >
//             </Select>
//         );
//     }
//
// }