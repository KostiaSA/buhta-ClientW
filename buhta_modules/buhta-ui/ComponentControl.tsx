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
import {PropertyEditorInfo} from "../buhta-app-designer/PropertyEditors/BasePropertyEditor";

export class ComponentControl extends BaseControl {
    // todo сделать, чтобы при добавлении нового property в дизайнере компонента не добавлялись property c именами "id", "name"
    @StringEditor({
        inputCaption: "id"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    id: string;

    name: string;

    beforeRender() {
        super.beforeRender();
    }

    $$getPropertyEditors(): Promise<PropertyEditorInfo[]> {
        let schema = getSchema();

        return schema
            .getObject<SchemaComponent>(this.id)
            .then((component: SchemaComponent) => {
                return component.$$getPropertyEditors();
            })
            .then((infos: PropertyEditorInfo[]) => {

                return super.$$getPropertyEditors()
                    .then((superInfos: PropertyEditorInfo[]) => {
                        return superInfos.concat(infos);
                    });

            });

    }


    getPropsAsync(): Promise<UIComponentProps> {
        let schema = getSchema();

        return schema
            .getObject<SchemaComponent>(this.id)
            .then((component: SchemaComponent) => {

                let userProps: any = {};
                // копируем свойства
                component.$$getPropNames().forEach((propName: string) => {
                    if (this[propName] !== undefined)
                        userProps[propName] = this[propName];
                }, this);

                return {schemaComponent: component, userProps: userProps};
            });

    }

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


}
