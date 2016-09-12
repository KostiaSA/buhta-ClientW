import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo, BasePropertyEditor} from "../PropertyEditors/BasePropertyEditor";

import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";

import {deepClone} from "../../buhta-core/deepClone";
// import {Layout} from "../../buhta-core/Components/LayoutPane/Layout";
// import {Flex} from "../../buhta-core/Components/LayoutPane/Flex";
// import {Tabs, Tab} from "../../buhta-core/Components/Tabs/Tabs";
// import {Fixed} from "../../buhta-core/Components/LayoutPane/Fixed";
// import {Button} from "../../buhta-core/Components/Button/Button";

import {BaseControl} from "../../buhta-ui/BaseControl";
import {isDeepEqual} from "../../buhta-core/isDeepEqual";
import {getUserId} from "../../buhta-core/Auth";
import {OpenWindowParams} from "../../buhta-core/Components/Desktop/Desktop";
import {appInstance} from "../../buhta-core/Components/App/App";
import {SchemaForm} from "../../buhta-schema/SchemaForm/SchemaForm";
import {getObjectConstructorName} from "../../buhta-core/getObjectConstructorName";
import {ObjectDesigner} from "../ObjectDesigner/ObjectDesigner";
// import {
//     GridTreeDataSourceFromComponentParams,
//     GridTreeDataSourceFromComponent
// } from "../../buhta-core/Components/Grid/GridTreeDataSourceFromComponent";
import Grid from "../../buhta-core/Components/Grid/Grid";
import {GridColumnDef} from "../../buhta-core/Components/Grid/GridColumn";
import {GridState} from "../../buhta-core/Components/Grid/Grid";
import {GridColumns} from "../../buhta-core/Components/Grid/GridColumns";
import {registeredSchemaObjectTypesAsArray, SchemaObjectTypeInfo} from "../../buhta-schema/SchemaObjectTypeInfo";
import {stringCompare} from "../../buhta-core/stringCompare";
import {GridFlatDataSourceFromArray} from "../../buhta-core/Components/Grid/GridFlatDataSourceFromArray";
import {LookupDialogParams, showLookupDialog} from "../../buhta-core/Dialogs/showLookupDialog";
import {registeredControlTypesAsArray, ControlTypeInfo} from "../../buhta-ui/ControlTypeInfo";
import {SchemaObject} from "../../buhta-schema/SchemaObject";


export interface SchemaObjectDesignerProps extends ComponentProps<any> {
    designedObject: SchemaObject;
    onChange?: () => void;
    onSaveChanges?: () => void;
    onCancelChanges?: () => void;
}

export class SchemaObjectDesigner extends Component<SchemaObjectDesignerProps, any> {
    constructor(props: SchemaObjectDesignerProps, context: any) {
        super(props, context);
        this.props = props;
    }

    needToSave: boolean;
    //snapshot: Snapshot = new Snapshot();
    clonedDesignedObject: SchemaObject;

    protected willMount() {
        super.willMount();
        this.needToSave = false;

        this.clonedDesignedObject = deepClone<SchemaObject>(this.props.designedObject);

    }

    private compareInterval: number;

    protected startCheckDesignedObjectIsChanged() {
        this.compareInterval = setInterval(() => {
            console.log("deepCompare");
            if (!isDeepEqual(this.clonedDesignedObject, this.props.designedObject)) {
                clearInterval(this.compareInterval);
                this.needToSave = true;
                this.forceUpdate();

            }
        }, 200);
    }

    protected willUnmount() {
        super.willUnmount();
        clearInterval(this.compareInterval);
    }


    protected didMount() {
        super.didMount();
        this.startCheckDesignedObjectIsChanged();
    }

    handleSaveChanges = (): void => {

        if (this.clonedDesignedObject.createDate === null) {
            this.clonedDesignedObject.createDate = new Date();
        }
        if (this.clonedDesignedObject.createUserID === null) {
            this.clonedDesignedObject.createUserID = getUserId();
        }

        this.clonedDesignedObject.changeDate = new Date();
        this.clonedDesignedObject.changeUserID = getUserId();

        console.log({clonedDesignedObject: this.clonedDesignedObject});

        this.clonedDesignedObject.save()
            .then(() => {
                if (this.props.onSaveChanges)
                    this.props.onSaveChanges();
                //console.log("SchemaObject " + this.clonedDesignedObject.name + " saved.");
                //console.log(this.props.onSaveChanges);
            })
            .catch((error) => {
                this.showErrorWindow(error);
            });
    }

    handleCancelChanges = (): void => {
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
    }

    handleValidate = (): string[] => {
        console.log({clonedDesignedObjectVVV: this.clonedDesignedObject});
        let errors: string[] = [];
        this.clonedDesignedObject.$$validate(errors);
        return errors;
    }

    propertyDesigners: JSX.Element[];

    renderPropertyDesigners(): JSX.Element[] {
        if (this.propertyDesigners === undefined) {
            this.propertyDesigners = [];
            this.clonedDesignedObject.$$getPropertyEditors()
                .then((propInfos: PropertyEditorInfo[]) => {
                    propInfos.forEach((propInfo: PropertyEditorInfo, index: number) => {
                        //console.log(propInfo);

                        let editorProps: BasePropertyEditorProps & PropertyEditorInfo = {
                            designedObject: this.clonedDesignedObject,
                            //propertyEditorInfo: propInfo,
                            index: index,
                            key: index,
                            onChange: this.props.onChange,

                            // это из propInfo: PropertyEditorInfo, заполяется далее через _.assign
                            propertyName: "",
                            objectType: DesignedObject,
                            editorType: BasePropertyEditor,
                            propertyType: null
                        };

                        _.assign(editorProps, propInfo);

                        if (!editorProps.inputCaption)
                            editorProps.inputCaption = editorProps.propertyName;
                        //console.log(editorProps);

                        this.propertyDesigners.push(React.createElement(propInfo.editorType, editorProps, {}));
                    }, this);
                    this.forceUpdate();
                });
        }

        return this.propertyDesigners;
    }

    render() {
        console.log("render-schema-object-designer");

        this.addClassName("schema-object-designer");
        this.addProps({onChange: this.props.onChange});

        return (
            <AutoForm
                sizeTo="parent"
                onSaveChanges={this.handleSaveChanges}
                onCancelChanges={this.handleCancelChanges}
                onValidate={this.handleValidate}
                needToSave={this.needToSave}
                designedObject={this.clonedDesignedObject}
                {...this.getRenderProps()}>
                {this.renderPropertyDesigners()}
            </AutoForm>
        );
    }

}