import * as React from "react";
import * as _ from "lodash";
import {BaseControl, ShowInDesignerGrid} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {OneWayBinderEditor} from "../buhta-app-designer/PropertyEditors/OneWayBinderPropertyEditor";

export class ButtonControl extends BaseControl {
    @OneWayBinderEditor({
        inputCaption: "Текст"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    text: string | OneWayBinder<string>;

    @OneWayBinderEditor({
        inputCaption: "Текст2"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    text2: string | OneWayBinder<string>;

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

    get $$controlName(): JSX.Element | string {
        let tag = "<Button>";
        return (
            <span className="html-tag">
              {tag}
            </span>
        );
    }

    // get $$controlMainProps() {
    //     return (
    //         <span>text="{this.text.toString()}"</span>
    //     );
    // }

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
