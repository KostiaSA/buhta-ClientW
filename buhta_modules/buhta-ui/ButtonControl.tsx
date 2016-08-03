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
        this.children.length = 0;
        this.children.push(this.text);
    }

    getProps(): ButtonProps {
        return {};
    }

    getComponent(): Function {
        return Button;
    }

    get $$controlName(){
        return "<Button>";
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