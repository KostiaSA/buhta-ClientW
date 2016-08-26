import * as React from "react";
import * as _ from "lodash";

import {BasePropertyEditor, PropertyEditorInfo} from "./BasePropertyEditor";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {SelectInput} from "../../buhta-core/Components/SelectInput/SelectInput";
import {BaseDataType} from "../../buhta-schema/SchemaTable/DataTypes/BaseDataType";
import {getObjectInstanceOfType} from "../../buhta-core/getObjectInstanceOfType";
import {DataTypeInfo, registeredDataTypes} from "../../buhta-schema/SchemaTable/DataTypes/DataTypeInfo";
import {stringCompare} from "../../buhta-core/stringCompare";
import {SelectInputDataSourceFromArray} from "../../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray";
import {SelectInputDataSource} from "../../buhta-core/Components/SelectInput/SelectInputDataSource";


export class DataTypePropertyEditor extends BasePropertyEditor {

    handleChange(event: React.SyntheticEvent) {
        // this.props.designedObject[this.props.propertyName] = (event.target as any).value;
        // console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
    }

    private selectDataSource: SelectInputDataSource<BaseDataType>;
    private activeDataType: BaseDataType;

    createSelectDataSource() {
        this.selectDataSource = new SelectInputDataSourceFromArray<BaseDataType>(
            registeredDataTypes
                .sort((a, b) => stringCompare(a.name, b.name))
                .map((dataTypeInfo: DataTypeInfo) => {

                    let retDataSourceItem = {
                        label: dataTypeInfo.name,
                        value: getObjectInstanceOfType(dataTypeInfo.type, []) as BaseDataType
                    };

                    if (this.activeDataType !== undefined && this.activeDataType.getName() === retDataSourceItem.value.getName())
                        retDataSourceItem.value = this.activeDataType;
                    return retDataSourceItem;

                }));
    };


    render(): JSX.Element {

        let autoFormControlProps: AutoFormControlProps = {
            inputCaption: this.props.inputCaption,
            inputTab: this.props.inputTab,
            inputGroup: this.props.inputGroup,
            inputDescription: this.props.inputDescription
        };

        this.addProps(autoFormControlProps);

        if (this.selectDataSource === undefined)
            this.createSelectDataSource();

        return (
            <div className="control is-horizontal">
                <p className="control">
                    <SelectInput
                        bindObject={this.props.designedObject}
                        bindPropName={this.props.propertyName}
                        valuesDataSource={this.selectDataSource}
                        onChange={this.props.onChange}
                        {...this.getRenderProps()}
                    />
                </p>
                <p className="control">
                    <span>макс. длина</span>
                    <Input
                        type={InputType.Number}
                        bindObject={this}
                        bindPropName="value"
                    />
                </p>
            </div>
        );
    }

}

export interface DataTypeEditorParams extends AutoFormControlProps {

}

export function DataTypeEditor(params: DataTypeEditorParams = {}): Function {
    return function (target: any, propertyName: string) {

        let propertyEditorInfo: PropertyEditorInfo = {
            propertyName: propertyName,
            objectType: target.constructor,
            editorType: DataTypePropertyEditor,
            propertyType: String
        };

        _.assign(propertyEditorInfo, params);
        registerPropertyEditor(propertyEditorInfo);


    };
}



