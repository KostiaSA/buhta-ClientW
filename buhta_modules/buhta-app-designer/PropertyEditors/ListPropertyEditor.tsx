import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {TreeGrid} from "../../buhta-core/Components/TreeGrid/TreeGrid";
import {TreeGridColumns} from "../../buhta-core/Components/TreeGrid/TreeGridColumns";
import {TreeGridColumn} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";


export class ListPropertyEditor extends BasePropertyEditor {

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

        // return (
        //     <Input
        //         type={InputType.Text}
        //         bindObject={this.props.designedObject}
        //         bindPropName={this.props.propertyName}
        //         onChange={this.props.onChange}
        //         {...this.getRenderProps()}
        //     />
        // );

        return (
            <TreeGrid
                dataSource={ this.props.designedObject[this.props.propertyName] }
                treeMode={false}
            >
                <TreeGridColumns>
                    <TreeGridColumn caption="Имя колонки" fieldName="name" width={100}>
                    </TreeGridColumn>
                    <TreeGridColumn caption="Тип данных" fieldName="dataType" width={150}>
                    </TreeGridColumn>
                </TreeGridColumns>
            </TreeGrid>
        );
    }

}

export interface ListEditorParams extends AutoFormControlProps {

}

export function ListEditor(params: ListEditorParams): Function {
    return function (target: any, propertyName: string) {
        registerPropertyEditor({
            inputCaption: params.inputCaption,
            inputTab: params.inputTab,
            inputGroup: params.inputGroup,
            inputDescription: params.inputDescription,
            propertyName: propertyName,
            objectType: target.constructor,
            editorType: ListPropertyEditor,
            propertyType: String
        });
    };
}



