import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import Grid from "../../buhta-core/Components/Grid/Grid";


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

        let dataSource = new GridFlatDataSourceFromArray(this.props.designedObject[this.props.propertyName]);
        let customParams = this.props.customParams as ListEditorParams;

        if (customParams.getNewListItem !== undefined)
            dataSource.params.getNewRow = () => customParams.getNewListItem!(this.props.designedObject);

        return (
            <Grid
                dataSource={dataSource}
                editable={true}
                enableDragDrop={customParams.enableDragDrop}
            >
            </Grid>
        );
    }

}

export interface ListEditorParams extends AutoFormControlProps {
    getNewListItem?: (listOwner: DesignedObject) => Promise<DesignedObject>;
    enableDragDrop?: boolean;
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
            propertyType: String,
            customParams: params
        });
    };
}



