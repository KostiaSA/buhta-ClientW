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
import {SchemaTableColumn} from "../../buhta-schema/SchemaTable/SchemaTableColumn";


export class DataTypePropertyEditor extends BasePropertyEditor {

    handleChange = (): void=> {
        //this.props.designedObject[this.props.propertyName] = (event.target as any).value;
        if (this.props.onChange !== undefined)
            this.props.onChange();
        console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
        this.forceUpdate();
    }

    private selectDataSource: SelectInputDataSource<BaseDataType>;
    //private activeDataType: BaseDataType;
    get activeDataType(): BaseDataType {
        return this.props.designedObject[this.props.propertyName] as BaseDataType;
    };

    createSelectDataSource() {
        this.selectDataSource = new SelectInputDataSourceFromArray<BaseDataType>(
            registeredDataTypes
                .sort((a, b) => stringCompare(a.name, b.name))
                .map((dataTypeInfo: DataTypeInfo) => {

                    let retDataSourceItem = {
                        label: dataTypeInfo.name,
                        value: getObjectInstanceOfType(dataTypeInfo.type, []) as BaseDataType
                    };

                    retDataSourceItem.value.column = this.props.designedObject as SchemaTableColumn;

                    if (this.activeDataType !== undefined && this.activeDataType.getName() === retDataSourceItem.value.getName())
                        retDataSourceItem.value = this.activeDataType;
                    return retDataSourceItem;

                }));
    };

    renderDataTypeEditor(): JSX.Element | null {
        if (this.activeDataType !== undefined)
            return this.activeDataType.getDesignerEditor();
        else
            return null;

    }

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
            <div className="control is-grouped" style={{whiteSpace:"nowrap"}}>
                <p className="control">
                    <SelectInput
                        bindObject={this.props.designedObject}
                        bindPropName={this.props.propertyName}
                        valuesDataSource={this.selectDataSource}
                        onChange={this.handleChange}
                        {...this.getRenderProps()}
                    />
                </p>
                { this.renderDataTypeEditor() }
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



