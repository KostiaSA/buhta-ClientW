import * as React from "react";
import {OneWayBinder, registerOneWayBinder} from "./OneWayBinder";
import {Input, InputType} from "../../buhta-core/Components/Input/Input";
import {CodeMirrorInput} from "../../buhta-core/Components/CodeMirrorInput/CodeMirrorInput";
import {replaceAll} from "../../buhta-core/replaceAll";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {ControlEvent} from "../../buhta-ui/ControlEvent";

registerOneWayBinder("Код JavaScript", () => new OneWayBinder_JsCode());

export class OneWayBinder_JsCode extends OneWayBinder<any> {
    jsCode: string;

    constructor(jsCode?: string) {
        super();
        this.jsCode = jsCode || "";
    }


    private cachedJsGetValue: (context: ControlEvent) => any;
    private cachedJsCode: string;

    getValue(control: BaseControl): any {
        if (this.jsCode === undefined)
            return undefined;
        else {
            if (!this.cachedJsGetValue || this.cachedJsCode !== this.jsCode) {
                this.cachedJsCode = this.jsCode;
                this.cachedJsGetValue = eval("(" + this.jsCode + ")");
            }
            let event = control.createEvent();
            return this.cachedJsGetValue(event);
        }
    }

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



