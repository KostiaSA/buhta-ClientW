import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";


export class StringPropertyEditor extends BasePropertyEditor {


    // getPropertyType(): string {
    //     return "string";
    // }

    handleChange(event: React.SyntheticEvent) {
        this.props.designedObject[this.props.propertyEditorInfo.propertyName] = (event.target as any).value;
        console.log("change === " + this.props.propertyEditorInfo.propertyName + " " + this.props.designedObject[this.props.propertyEditorInfo.propertyName]);
    }

    render(): JSX.Element {

        /*
         Binder
         this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
         console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
         });
         */
        //string editor for {this.props.propertyEditorInfo.propertyName} => { this.props.designedObject[this.props.propertyEditorInfo.propertyName]}

        return (
            <Input
                caption={this.props.propertyEditorInfo.propertyCaption}
                type={InputType.Text}
                bindObject={this.props.designedObject}
                bindPropName={this.props.propertyEditorInfo.propertyName}
            />
        );
        // return (
        //     <div className="form-group" key={this.index.toString() }>
        //         <label className="col-sm-3 control-label">{this.propertyName}</label>
        //         <div className="col-sm-9">
        //             <Input
        //                 type={InputType.Text}
        //                 className="form-control"
        //                 style={{ maxWidth: 500 }}
        //                 bindObject={this.designedObject}
        //                 bindPropName={this.propertyName}
        //             >
        //             </Input>
        //             <small className="error-text hidden"></small>
        //         </div>
        //     </div >
        // );
    }

    // valueLink = { this.designedObject[this.propertyName] } >

}

export function StringEditor(caption?: string,
                             page?: string,
                             group?: string,
                             description?: string): Function {
    return function (target: any, propertyName: string) {
        //  console.log({target, propertyName, constr:target.constructor});
        registerPropertyEditor({
            propertyCaption: caption,
            propertyName: propertyName,
            propertyPage: page,
            propertyGroup: group,
            propertyDescription: description,
            objectType: target.constructor,
            editorType: StringPropertyEditor,
            propertyType: String
        });
    }
}



