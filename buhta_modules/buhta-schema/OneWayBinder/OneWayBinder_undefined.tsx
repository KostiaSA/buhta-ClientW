import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {BaseControl} from "../../buhta-ui/BaseControl";

registerOneWayBinder("<нет значения>", () => new OneWayBinder_undefined());

export class OneWayBinder_undefined extends OneWayBinder<any> {

    constructor() {
        super();
    }

    getValue(control: BaseControl): undefined {
        return undefined;
    }

    renderValueEditor(onChangeCallback?: () => void): JSX.Element {
        return <div></div>;
    }

    toString() {
        return "{undefined}";
    }
}



