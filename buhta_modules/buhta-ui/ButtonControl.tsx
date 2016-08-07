import * as React from "react";
import * as _ from "lodash";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder_base} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {OneWayBinderEditor} from "../buhta-app-designer/PropertyEditors/OneWayBinderPropertyEditor";

export class ButtonControl extends BaseControl {
    @OneWayBinderEditor({
        inputCaption: "Текст"
    })
    text: string | OneWayBinder_base<string>;

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
            return {text: (this.text as OneWayBinder_base<string>).getValue()};

    }

    getComponent(): Function | undefined {
        return Button;
    }

    get $$controlName() {
        return "<Button>";
    }

    get $$controlMainProps() {
        return (
            <span>text="{this.text.toString()}"</span>
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
