import * as React from "react";
import * as _ from "lodash";

import {BasePropertyEditor, PropertyEditorInfo} from "./BasePropertyEditor";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {SelectValuesDataSource} from "../../buhta-core/Components/Select/SelectValuesDataSource";
import {Select} from "../../buhta-core/Components/Select/Select";


export class SelectPropertyEditor extends BasePropertyEditor {

    handleChange(event: React.SyntheticEvent) {
        // this.props.designedObject[this.props.propertyName] = (event.target as any).value;
        // console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
    }

    render(): JSX.Element {

        let autoFormControlProps: AutoFormControlProps = {
            inputCaption: this.props.inputCaption,
            inputTab: this.props.inputTab,
            inputGroup: this.props.inputGroup,
            inputDescription: this.props.inputDescription
        };

        this.addProps(autoFormControlProps);

        return (
            <Select
                bindObject={this.props.designedObject}
                bindPropName={this.props.propertyName}
                valuesDataSource={(this.props as any as SelectEditorParams).selectValues}
                onChange={this.props.onChange}
                {...this.getRenderProps()}
            />
        );
    }

}

export interface SelectEditorParams extends AutoFormControlProps {
    selectValues: SelectValuesDataSource<any> | any[];
}

export function SelectEditor(params: SelectEditorParams): Function {
    return function (target: any, propertyName: string) {
        //  console.log({target, propertyName, constr:target.constructor});

        let propertyEditorInfo: PropertyEditorInfo = {
            propertyName: propertyName,
            objectType: target.constructor,
            editorType: SelectPropertyEditor,
            propertyType: null
        };

        _.assign(propertyEditorInfo, params);
        registerPropertyEditor(propertyEditorInfo);


        // registerPropertyEditor({
        //     inputCaption: params.inputCaption,
        //     inputTab: params.inputTab,
        //     inputGroup: params.inputGroup,
        //     inputDescription: params.inputDescription,
        //     propertyName: propertyName,
        //
        //     objectType: target.constructor,
        //     editorType: SelectPropertyEditor,
        //     propertyType: Select
        // });
    };
}



