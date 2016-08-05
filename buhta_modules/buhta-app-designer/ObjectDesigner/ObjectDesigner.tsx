import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo, BasePropertyEditor} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditors";
import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";
import {Snapshot} from "../../buhta-core/Snapshot";
//import {Observable} from "../../buhta-core/Observable";
import {DeepClone} from "../../buhta-core/DeepClone";
import {isDeepEqual} from "../../buhta-core/DeepCompare";


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

    needToSave: boolean = false;
    clonedDesignedObject: DesignedObject;
    //observableDesignedObject: DesignedObject;

    protected willMount() {
        super.willMount();
        this.needToSave = false;
        this.clonedDesignedObject = DeepClone<DesignedObject>(this.props.designedObject);
    }

    private compareInterval: number;

    protected startCheckDesignedObjectIsChanged() {
        this.compareInterval = setInterval(() => {
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
        //this.snapshot.saveObject(this.props.designedObject, "root");
    }

    renderPropertyDesigners(): JSX.Element[] {
        let ret: JSX.Element[] = [];

        getPropertyEditors(this.clonedDesignedObject).forEach((propInfo: PropertyEditorInfo, index: number) => {
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

            ret.push(React.createElement(propInfo.editorType, editorProps, {}));
        });

        return ret;
    }

    handleSaveChanges = () => {
        console.log("save-changes");
        //console.log(this.props.designedObject);
        _.assign(this.props.designedObject, this.clonedDesignedObject);
        if (this.props.onSaveChanges)
            this.props.onSaveChanges();

    }

    handleCancelChanges = () => {
        console.log("cancel-changes");
        //this.snapshot.restoreObject(this.props.designedObject, "root");
        if (this.props.onCancelChanges)
            this.props.onCancelChanges();
        //console.log(this.props.designedObject);
    }

    // handleGetNeedToSave = (): boolean => {
    //     return this.needToSave;
    // }

    render() {
        this.addClassName("object-designer");
        this.addProps({onChange: this.props.onChange});

        return (
            <AutoForm
                sizeTo="parent"
                onSaveChanges={this.handleSaveChanges}
                onCancelChanges={this.handleCancelChanges}
                needToSave={this.needToSave}
                {...this.getRenderProps()}>
                Object designer
                {this.renderPropertyDesigners()}
            </AutoForm>
        );
    }

}