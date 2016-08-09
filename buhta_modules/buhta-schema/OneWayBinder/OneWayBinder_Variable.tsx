import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {BaseControl} from "../../buhta-ui/BaseControl";

registerOneWayBinder("Переменная", () => new OneWayBinder_Variable());

export class OneWayBinder_Variable extends OneWayBinder<string> {
    variableName: string | undefined;

    constructor(value?: string) {
        super();
        this.variableName = value;
    }

    getValue(control: BaseControl): string {
        if (this.variableName === undefined)
            return "<имя не определено>";
        else
            return this.variableName;
    }

    renderValueEditor(onChangeCallback?: () => void): JSX.Element {

        //onChange={this.handleOnChange}
        return (
            <Input
                type={InputType.Text}
                bindObject={this}
                bindPropName="variableName"
                onChange={() => { if (onChangeCallback) onChangeCallback(); }}
            />
        );
    }

    toString() {
        if (this.variableName === undefined)
            return "{undefined}";
        else
            return "{" + this.variableName + "}";
    }
}



