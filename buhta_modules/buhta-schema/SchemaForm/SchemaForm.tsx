import * as React from "react";
import {SchemaComponent} from "../SchemaComponent/SchemaComponent";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../../buhta-core/Components/Component";
import {PanelProps, Panel} from "../../buhta-core/Components/Panel/Panel";

export class SchemaForm extends SchemaComponent {

    @StringEditor({
        inputCaption: "Имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя формы"
    })
    name: string;

    sizeTo: "parent" | "content";

    getComponent(): React.ReactElement<any> {
        let children = this.children.map((child) => {
            return child.getComponent();
        });

        this.reactElement = <Panel sizeTo = "parent" > {children} </Panel>;
        return this.reactElement;
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