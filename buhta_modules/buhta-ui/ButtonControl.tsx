import * as React from "react";
import * as _ from "lodash";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder";

export class ButtonControl extends BaseControl {
    @StringEditor({
        inputCaption: "Текст"
    })
    text: string | OneWayBinder<string>;
    
    @StringEditor({
        inputCaption: "Текст2"
    })
    text2: string;

    visible: boolean;

    handleOnClick: Function;

    beforeRender() {
        super.beforeRender();
    }

    getProps(): ButtonProps {
        if (_.isString(this.text))
            return {text: this.text};
        else
            return {text: (this.text as OneWayBinder<string>).getValue()};

    }

    getComponent(): Function | undefined {
        return Button;
    }

    get $$controlName() {
        return "<Button>";
    }

    get $$controlMainProps() {
        return (
            <span>text="{this.text}"</span>
        );
    }

// getComponent(): React.ReactElement<any> {
    //
    //     return (
    //         <Button buhtaControl={this}>
    //             {this.text}
    //         </Button>
    //     );
    //     // ButtonControl.prototype.getComponent = function () {
    //     //     return (React.createElement(Button_1.Button, {buhtaControl: this}, this.text));
    //     // };
    //
    // }

}
