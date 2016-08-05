import * as React from "react";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";

export class ButtonControl extends BaseControl {
    @StringEditor({
        inputCaption: "Текст"
    })
    text: string;
    
    visible: boolean;

    handleOnClick: Function;

    beforeRender() {
        super.beforeRender();
    }

    getProps(): ButtonProps {
        return {text: this.text};
    }

    getComponent(): Function {
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
