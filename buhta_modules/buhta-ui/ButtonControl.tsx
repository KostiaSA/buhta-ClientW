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

    getComponent(): React.ReactElement<any> {

        return (
            <Button>
                {this.text}
            </Button>
        );

    }

}
