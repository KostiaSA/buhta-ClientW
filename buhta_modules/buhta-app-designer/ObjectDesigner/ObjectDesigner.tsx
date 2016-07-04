import * as React from "react";
import {ComponentProps, Component} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {BasePropertyEditorProps} from "../PropertyEditors/BasePropertyEditor";


export interface ObjectDesignerProps extends ComponentProps {
    designedObject: DesignedObject;
}

export class ObjectDesigner extends Component<ObjectDesignerProps,any> {
    constructor(props: ObjectDesignerProps, context) {
        super(props, context);
        this.props = props;
    }

    renderProperyDesigners(): JSX.Element[] {
        let ret: JSX.Element[] = [];

        // this.props.designedObject.propertyEditors.fo

        for (let editedPropertyName in this.props.designedObject.propertyEditors) {
            let propInfo = this.props.designedObject.propertyEditors[editedPropertyName];

            let editorProps: BasePropertyEditorProps = {
                designedObject: this.props.designedObject,
                propertyName: editedPropertyName,
                index: 0
            }


            ret.push(React.createElement(propInfo.editorType, editorProps, null));

            //propInfo.
            // propertyName is what you want
            // you can get the value like this: myObject[propertyName]
        }
//        return ret;
        return [];

    }

    render() {
        this.addClassName("object-designer");

        // return (
        //     <div {...this.getRenderProps()}>
        //         <div className="tabs">
        //             <ul>
        //                 <li className="is-active"><a>Параметры</a></li>
        //                 <li><a>Индекы</a></li>
        //                 <li><a>Колонки</a></li>
        //                 <li><a>SQL</a></li>
        //             </ul>
        //         </div>
        //         Copy
        //
        //         {this.renderProperyDesigners()}
        //     </div>
        // );
        return (
            <div >
                Copy бля
            </div>
        );
    }

}