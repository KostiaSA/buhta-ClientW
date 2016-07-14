import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditors";
import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {Snapshot} from "../../buhta-core/Snapshot";


export interface ObjectDesignerProps extends ComponentProps<any> {
    designedObject: DesignedObject;
    onChange?: () => void;
    onSaveChanges?: () => void;
    onCancelChanges?: () => void;
}

export class ObjectDesigner extends Component<ObjectDesignerProps, any> {
    constructor(props: ObjectDesignerProps, context: any) {
        super(props, context);
        this.props = props;
    }


    snapshot: Snapshot = new Snapshot();


    protected didMount() {
        super.didMount();
        this.snapshot.saveObject(this.props.designedObject, "root");
    }

    renderPropertyDesigners(): JSX.Element[] {
        let ret: JSX.Element[] = [];

        getPropertyEditors(this.props.designedObject).forEach((propInfo: PropertyEditorInfo, index: number) => {
            //console.log(propInfo);
            let editorProps: BasePropertyEditorProps & PropertyEditorInfo = {
                designedObject: this.props.designedObject,
                //propertyEditorInfo: propInfo,
                index: index,
                key: index,
                onChange: this.props.onChange,

                // это из propInfo: PropertyEditorInfo, заполяется далее через _.assign
                propertyName: null,
                objectType: null,
                editorType: null,
                propertyType: null
            };

            _.assign(editorProps, propInfo);

            if (!editorProps.inputCaption)
                editorProps.inputCaption = editorProps.propertyName;
            //console.log(editorProps);

            ret.push(React.createElement(propInfo.editorType, editorProps, null));
        });

        return ret;
    }

    handleSaveChanges = () => {
        console.log("save-changes");
        //console.log(this.props.designedObject);
        if (this.props.onSaveChanges)
            this.props.onSaveChanges();

    }

    handleCancelChanges = () => {
        console.log("cancel-changes");
        this.snapshot.restoreObject(this.props.designedObject, "root");
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
        //console.log(this.props.designedObject);
    }

    handleGetNeedToSave = (): boolean => {
        return false;
    }

    render() {
        this.addClassName("object-designer");
        this.addProps({onChange: this.props.onChange});

        return (
            <AutoForm
                sizeTo="parent"
                onSaveChanges={this.handleSaveChanges}
                onCancelChanges={this.handleCancelChanges}
                onGetNeedToSave={this.handleGetNeedToSave}
                {...this.getRenderProps()}>
                Object designer
                {this.renderPropertyDesigners()}
            </AutoForm>
        );
    }

}