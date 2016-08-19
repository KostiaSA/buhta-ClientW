import * as React from "react";
import {SchemaComponent} from "../SchemaComponent/SchemaComponent";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../../buhta-core/Components/Component";
import {PanelProps, Panel} from "../../buhta-core/Components/Panel/Panel";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";

export class SchemaForm extends SchemaComponent {

    @StringEditor({
        inputCaption: "Имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя формы"
    })
    name: string;

    sizeTo: "parent" | "content";

    getProps(): PanelProps {
        return {
            sizeTo: "parent"
        };
    }

    getComponent(): Function {
        return Panel;
        // let children = this.children.map((child) => {
        //     return child.getComponent();
        // });
        //
        // this.reactElement = <Panel sizeTo = "parent" > {children} </Panel>;
        // return this.reactElement;
        // let props: PanelProps = {
        //     sizeTo: this.sizeTo
        // };
        //
        // //if (this.children.length > 0) {
        //     let children = this.children.map((child) => {
        //         return child.getComponent();
        //     });
        // //}
        // return React.createElement(Panel, props, children);
        // //return new Panel(props, null);

    }
}

registerSchemaObjectType({
    id: "23e1230f-6f7c-461b-84c3-3dac6916398d",
    name: "Форма",
    description: "Экранная форма",
    type: SchemaForm
});

