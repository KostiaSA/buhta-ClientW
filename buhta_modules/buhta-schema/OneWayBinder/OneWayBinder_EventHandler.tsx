import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {CodeMirrorInput} from "../../buhta-core/Components/CodeMirrorInput/CodeMirrorInput";
import {replaceAll} from "../../buhta-core/replaceAll";

registerOneWayBinder("Обработчик", () => new OneWayBinder_EventHandler());

export class OneWayBinder_EventHandler extends OneWayBinder<string> {
    jsCode: string;

    constructor(jsCode?: string) {
        super();
        this.jsCode = jsCode || "";
    }

    // getValue(): string {
    //     if (this.jsCode === undefined)
    //         return "<имя не определено>";
    //     else
    //         return eval(this.jsCode);
    // }

    renderValueEditor(onChangeCallback?: () => void): JSX.Element {

        //onChange={this.handleOnChange}

        return (
            <CodeMirrorInput
                mode="javascript"
                bindObject={this}
                bindPropName="jsCode"
                onChange={() => { if (onChangeCallback) onChangeCallback(); }}
            />
        );
    }

    toString() {
        if (this.jsCode === undefined)
            return "{undefined}";
        else
            return "{" + replaceAll(this.jsCode.substr(0, 50), "\n", " ") + "}";
    }
}



