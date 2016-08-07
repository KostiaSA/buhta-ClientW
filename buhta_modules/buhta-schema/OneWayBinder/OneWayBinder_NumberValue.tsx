import * as React from "react";
import {OneWayBinder_base, registerOneWayBinder} from "./OneWayBinder";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";

export class OneWayBinder_NumberValue extends OneWayBinder_base<number> {
    value: number | undefined;

    constructor(value?: number) {
        super();
        this.value = value;
    }

    getValue(): number {
        if (this.value === undefined)
            return NaN;
        else
            return this.value;
    }

    renderValueEditor(onChangeCallback?: ()=>void): JSX.Element {

        //onChange={this.handleOnChange}
        return (
            <Input
                type={InputType.Number}
                bindObject={this}
                bindPropName="value"
                onChange={()=>{ if (onChangeCallback) onChangeCallback() }}
            />
        );
    }

}

registerOneWayBinder("Число", ()=>new OneWayBinder_NumberValue());
