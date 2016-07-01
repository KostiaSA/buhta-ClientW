import * as React from "react";
import {BasePropertyEditor} from "./BasePropertyEditor";
import {DesignedObject} from "../DesignedObject";


export class StringPropertyEditor extends BasePropertyEditor {


    // getPropertyType(): string {
    //     return "string";
    // }

    handleChange(event: React.SyntheticEvent) {
        this.props.designedObject[this.props.propertyName] = (event.target as any).value;
        console.log("change === " + this.props.propertyName + " " + this.props.designedObject[this.props.propertyName]);
    }

    render(): JSX.Element {

        /*
         Binder
         this.designedObject.addWatch(this.propertyName, (name, oldVal, newVal) => {
         console.log('change 1 ' + name +" "+oldVal+" -> "+newVal);
         });
         */

        return (
            <div>
                string editor for {this.props.propertyName} => { this.props.designedObject[this.props.propertyName]}
            </div >
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

export function StringEditor(propertyPage?: string,
                             propertyGroup?: string,
                             propertyDescription?: string): Function {
    return function (target: any, propertyName: string) {
        (target.constructor as typeof DesignedObject).registerPropertyEditor(
            propertyName,
            propertyPage,
            propertyGroup,
            propertyDescription,
            StringPropertyEditor,
            String
        );
    }
}



