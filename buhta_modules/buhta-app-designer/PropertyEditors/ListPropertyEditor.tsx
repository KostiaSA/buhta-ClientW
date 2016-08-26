import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {
    GridFlatDataSourceFromArray,
    GridFlatDataSourceFromArrayParams
} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {throwError} from "../../buhta-core/Error";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {GridDataSourceRow} from "../../buhta-core/Components/Grid/GridDataSource";


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

        let customParams = this.props.customParams as ListEditorParams;

        let dataSourceParams: GridFlatDataSourceFromArrayParams<GridDataSourceRow,DesignedObject> = {
            arrayObj: this.props.designedObject[this.props.propertyName],
            getNewDesignedObject: (focusedData: DesignedObject): Promise<DesignedObject>=> {
                if (customParams.getNewListItem === undefined)
                    throwError("ListPropertyEditor param 'getNewListItem' is not defined for property '" + this.props.propertyName + "' of object '" + getObjectConstructorName(this.props.designedObject) + "'");
                return customParams.getNewListItem!(this.props.designedObject, focusedData)
            }
        };
        let dataSource = new GridFlatDataSourceFromArray(dataSourceParams);

        //if (customParams.getNewListItem !== undefined)
        //  dataSource.params.getNewRow = () => customParams.getNewListItem!(this.props.designedObject);

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
    getNewListItem?: (listOwner: DesignedObject, parentItem?: DesignedObject) => Promise<DesignedObject>;
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



