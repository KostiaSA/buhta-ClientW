import * as React from "react";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps, PropertyEditorInfo} from "../PropertyEditors/BasePropertyEditor";
import {getPropertyEditors} from "../PropertyEditors/getPropertyEditor";
import {Form} from "../../buhta-core/Components/Form/Form";


export interface ObjectDesignerProps extends ComponentProps {
    designedObject: DesignedObject;
}

export class ObjectDesigner extends Component<ObjectDesignerProps,any> {
    constructor(props: ObjectDesignerProps, context) {
        super(props, context);
        this.props = props;
    }

    renderPropertyDesigners(): JSX.Element[] {
        let ret: JSX.Element[] = [];

        getPropertyEditors(this.props.designedObject).forEach((propInfo: PropertyEditorInfo, index)=> {
            let editorProps: BasePropertyEditorProps = {
                designedObject: this.props.designedObject,
                propertyEditorInfo: propInfo,
                index: index,
                key: index
            };

            ret.push(React.createElement(propInfo.editorType, editorProps, null));
        });

        return ret;
    }

    render() {
        this.addClassName("object-designer");

        return (
            <Form {...this.getRenderProps()}>
                Object designer
                {this.renderPropertyDesigners()}
            </Form>
        );
    }

}