import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";

registerOneWayBinder("Обработчик", () => new OneWayBinder_EventHandler());

export class OneWayBinder_EventHandler extends OneWayBinder<string> {
    EventHandlerName: string | undefined;

    constructor(value?: string) {
        super();
        this.EventHandlerName = value;
    }

    getValue(): string {
        if (this.EventHandlerName === undefined)
            return "<имя не определено>";
        else
            return this.EventHandlerName;
    }

    renderValueEditor(onChangeCallback?: () => void): JSX.Element {

        //onChange={this.handleOnChange}
        return (
            <Input
                type={InputType.Text}
                bindObject={this}
                bindPropName="EventHandlerName"
                onChange={() => { if (onChangeCallback) onChangeCallback(); }}
            />
        );
    }

    toString() {
        if (this.EventHandlerName === undefined)
            return "{undefined}";
        else
            return "{" + this.EventHandlerName + "}";
    }
}



