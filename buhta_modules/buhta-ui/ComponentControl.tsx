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
import {UIComponent, UIComponentProps} from "../buhta-core/Components/UIComponent/UIComponent";
import {SchemaComponent} from "../buhta-schema/SchemaComponent/SchemaComponent";
import {ComponentProps} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";
import {getSchema} from "../buhta-schema/Schema";

export class ComponentControl extends BaseControl {
    @StringEditor({
        inputCaption: "id"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    id: string;

    name: string;

    beforeRender() {
        super.beforeRender();
    }

    getPropsAsync(): Promise<UIComponentProps> {
        let schema = getSchema();

        return schema
            .getObject<SchemaComponent>(this.id)
            .then((component: SchemaComponent) => {
                return {schemaComponent: component};
            });

        // return new Promise(
        //     (resolve: (obj: UIComponentProps) => void, reject: (error: string) => void) => {
        //
        //
        //         resolve({});
        //     });
    }


    // getProps(): SchemaComponent {
    //
    //     let props: SchemaComponent = {};
    //
    //     let text: string;
    //
    //     if (_.isString(this.text))
    //         props.text = this.text;
    //     else
    //         props.text = (this.text as OneWayBinder<string>).getValue(this);
    //
    //     //let onClick: ((event: ControlEvent) => void) | undefined = undefined;
    //
    //     return props;
    //
    // }

    getComponent(): Function | undefined {
        return UIComponent;
    }

    get $$controlName(): JSX.Element | string {
        let tag = "<" + this.name + ">";
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
