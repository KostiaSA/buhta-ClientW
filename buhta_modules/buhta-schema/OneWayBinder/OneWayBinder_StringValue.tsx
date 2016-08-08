import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";

registerOneWayBinder("Строка", ()=>new OneWayBinder_StringValue());

export class OneWayBinder_StringValue extends OneWayBinder<string> {
    value: string | undefined;

    constructor(value?: string) {
        super();
        this.value = value;
    }

    getValue(): string {
        if (this.value === undefined)
            return "<не определено>";
        else
            return this.value;
    }

    renderValueEditor(onChangeCallback?: ()=>void): JSX.Element {

        //onChange={this.handleOnChange}
        return (
            <Input
                type={InputType.Text}
                bindObject={this}
                bindPropName="value"
                onChange={()=>{ if (onChangeCallback) onChangeCallback() }}
            />
        );
    }

    toString() {
        if (this.value === undefined)
            return "{undefined}";
        else
            return `"${this.value}"`;
    }
}



