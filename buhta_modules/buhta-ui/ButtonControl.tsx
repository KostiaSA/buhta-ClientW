import * as React from "react";
import * as _ from "lodash";
import {BaseControl, ShowInDesignerGrid} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {OneWayBinderEditor} from "../buhta-app-designer/PropertyEditors/OneWayBinderPropertyEditor";
import {onClickEvent} from "../buhta-core/Plugins/OnClickPlugin";
import {OneWayBinder_EventHandler} from "../buhta-schema/OneWayBinder/OneWayBinder_EventHandler";
import {ControlEvent} from "./ControlEvent";
import {registerControlType} from "./ControlTypeInfo";

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

    getPropsAsync(): Promise<ButtonProps> {
        return new Promise(
            (resolve: (obj: ButtonProps) => void, reject: (error: string) => void) => {
                let props: ButtonProps = {};

                let text: string;

                if (_.isString(this.text))
                    props.text = this.text;
                else
                    props.text = (this.text as OneWayBinder<string>).getValue(this);

                //let onClick: ((event: ControlEvent) => void) | undefined = undefined;

                if (this.onClick !== undefined) {
                    let handlerJsCode: string;
                    if (_.isString(this.onClick))
                        handlerJsCode = this.onClick;
                    else
                        handlerJsCode = (this.onClick as OneWayBinder_EventHandler).jsCode;
                    let onClick = eval("(" + handlerJsCode + ")");
                    props.onClick = () => {
                        let event = this.createEvent();
                        onClick(event);
                    };
                }
                resolve(props);
            });
    }

    getProps(): ButtonProps {

        let props: ButtonProps = {};

        let text: string;

        if (_.isString(this.text))
            props.text = this.text;
        else
            props.text = (this.text as OneWayBinder<string>).getValue(this);

        //let onClick: ((event: ControlEvent) => void) | undefined = undefined;

        if (this.onClick !== undefined) {
            let handlerJsCode: string;
            if (_.isString(this.onClick))
                handlerJsCode = this.onClick;
            else
                handlerJsCode = (this.onClick as OneWayBinder_EventHandler).jsCode;
            let onClick = eval("(" + handlerJsCode + ")");
            props.onClick = () => {
                let event = this.createEvent();
                onClick(event);
            };
        }

        return props;

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

registerControlType({
    name: "Button",
    group: "HTML",
    description: "Кнопка",
    type: ButtonControl
});

