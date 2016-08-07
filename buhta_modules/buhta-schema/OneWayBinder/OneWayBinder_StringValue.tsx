import * as React from "react";
import {OneWayBinder_base, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";

export class OneWayBinder_StringValue extends OneWayBinder_base<string> {
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

    renderValueEditor(): JSX.Element {

        //onChange={this.handleOnChange}
        return (
            <Input
                type={InputType.Text}
                bindObject={this}
                bindPropName="value"
            />
        );
    }
}


registerOneWayBinder("Строка", ()=>new OneWayBinder_StringValue());

