import * as React from "react";
import * as _ from "lodash";
import {BaseControl, ShowInDesignerGrid} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {OneWayBinderEditor} from "../buhta-app-designer/PropertyEditors/OneWayBinderPropertyEditor";
import {onClickEvent} from "../buhta-core/Plugins/OnClickPlugin";
import {OneWayBinder_EventHandler} from "../buhta-schema/OneWayBinder/OneWayBinder_EventHandler";

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

    @OneWayBinderEditor({
        inputCaption: "onClick"
    })
    @ShowInDesignerGrid({column: "events"})
    onClick: string | OneWayBinder_EventHandler;

    visible: boolean;

    beforeRender() {
        super.beforeRender();
    }

    getProps(): ButtonProps {
        let text: string;

        if (_.isString(this.text))
            text = this.text;
        else
            text = (this.text as OneWayBinder<string>).getValue();

        let onClick: onClickEvent | undefined = undefined;
        if (this.onClick !== undefined) {
            let handlerJsCode: string;
            if (_.isString(this.onClick))
                handlerJsCode = this.onClick;
            else
                handlerJsCode = (this.onClick as OneWayBinder_EventHandler).jsCode;
            onClick = eval("(" + handlerJsCode + ")");
        }

        return {
            text: text,
            onClick: onClick
        };

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
