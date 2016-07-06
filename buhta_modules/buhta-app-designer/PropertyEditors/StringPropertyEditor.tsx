import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";
import {registerPropertyEditor} from "./registerPropertyEditor";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";


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
                inputCaption={this.props.propertyEditorInfo.inputCaption}
                inputTab={this.props.propertyEditorInfo.inputTab}
                inputGroup={this.props.propertyEditorInfo.inputGroup}
                inputDescription={this.props.propertyEditorInfo.inputDescription}
                type={InputType.Text}
                bindObject={this.props.designedObject}
                bindPropName={this.props.propertyEditorInfo.propertyName}
                onChange={this.props.onChange}
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

export interface StringEditorParams extends AutoFormControlProps {

}

export function StringEditor(params: AutoFormControlProps): Function {
    return function (target: any, propertyName: string) {
        //  console.log({target, propertyName, constr:target.constructor});
        registerPropertyEditor({
            inputCaption: params.inputCaption,
            inputTab: params.inputTab,
            inputGroup: params.inputGroup,
            inputDescription: params.inputDescription,
            propertyName: propertyName,
            objectType: target.constructor,
            editorType: StringPropertyEditor,
            propertyType: String
        });
    }
}



