import * as React from "react";
import * as _ from "lodash";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditor";
import {Form} from "../../buhta-core/Components/Form/Form";
import {AutoForm} from "../../buhta-core/Components/AutoForm/AutoForm";


export interface ObjectDesignerProps extends ComponentProps<any> {
    designedObject: DesignedObject;
    onChange?: () => void;
}

export class ObjectDesigner extends Component<ObjectDesignerProps, any> {
    constructor(props: ObjectDesignerProps, context: any) {
        super(props, context);
        this.props = props;
    }

    renderPropertyDesigners(): JSX.Element[] {
        let ret: JSX.Element[] = [];

        getPropertyEditors(this.props.designedObject).forEach((propInfo: PropertyEditorInfo, index: number) => {
            //console.log(propInfo);
            let editorProps: BasePropertyEditorProps = {
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
            //console.log(editorProps);

            ret.push(React.createElement(propInfo.editorType, editorProps, null));
        });

        return ret;
    }

    render() {
        this.addClassName("object-designer");
        this.addProps({onChange: this.props.onChange});

        return (
            <AutoForm sizeTo="parent" {...this.getRenderProps()}>
                Object designer
                {this.renderPropertyDesigners()}
            </AutoForm>
        );
    }

}