import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {InputType, Input} from "../../buhta-core/Components/Input/Input";


registerOneWayBinder("Число", ()=>new OneWayBinder_NumberValue());

export class OneWayBinder_NumberValue extends OneWayBinder<number> {
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

