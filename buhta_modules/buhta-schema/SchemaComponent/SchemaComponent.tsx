import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {StringEditor, StringPropertyEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {throwAbstractError} from "../../buhta-core/Error";
import {ComponentContext, ComponentProps, Component} from "../../buhta-core/Components/Component";
import {
    SchemaComponentDesigner,
    SchemaComponentDesignerProps
} from "../../buhta-app-designer/SchemaComponentDesigner/SchemaComponentDesigner";
import {PropertyEditorInfo} from "../../buhta-app-designer/PropertyEditors/BasePropertyEditor";
import {PropertyControl} from "../../buhta-ui/PropertyControl";
import {ComponentControl} from "../../buhta-ui/ComponentControl";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {SCHEMA_COMPONENT_ICON} from "../../buhta-core/Constants";

export class SchemaComponent extends SchemaObject {
    children: (BaseControl)[] = [];
    //props: any = {};
    //reactElement: React.ReactElement<any>;

    // get context(): ComponentContext {
    //     return (this.reactElement as any).context;
    // }

    $$runtimeContext: SchemaComponentRuntimeContext;
    $$renderedComponent: Component<any, any>;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function {
        throwAbstractError();
        throw  "fake";
    }


    private collectPropertyControlsRecursive(control: BaseControl, props: PropertyControl[]) {
        if (control instanceof PropertyControl)
            props.push(control as PropertyControl);

        control.children.forEach((child: BaseControl, index: number) => {
            this.collectPropertyControlsRecursive(child, props);
        }, this);
    }

    $$getPropertyEditors(): Promise<PropertyEditorInfo[]> {
        return new Promise(
            (resolve: (obj: PropertyEditorInfo[]) => void, reject: (error: string) => void) => {
                let props: PropertyControl[] = [];
                this.children.forEach((child: BaseControl, index: number) => {
                    this.collectPropertyControlsRecursive(child, props);
                }, this);

                let editors: PropertyEditorInfo[] = props.map<PropertyEditorInfo>((control: PropertyControl) => {
                    return {
                        propertyName: control.propertyName,
                        objectType: ComponentControl,
                        editorType: StringPropertyEditor,
                        propertyType: String,
                        isComponentProperty: true
                    };
                });

                resolve(editors);
            });
    }


    $$getPropNames(): string[] {
        let props: PropertyControl[] = [];
        this.children.forEach((child: BaseControl, index: number) => {
            this.collectPropertyControlsRecursive(child, props);
        }, this);

        return props.map((prop: PropertyControl) => {
            return prop.propertyName;
        });

    }

    xxx: any;


    // render(): JSX.Element {
    //     let props: ComponentProps<any> = this.getProps();
    //     props.$$schemaComponent = this;
    //
    //     if (this.$$runtimeContext === undefined)
    //         this.$$runtimeContext = new SchemaComponentRuntimeContext(this);
    //
    //     let children = this.children.map((child: BaseControl| string) => {
    //         if (_.isString(child))
    //             return child;
    //         else
    //             return child.render(this, null);
    //     });
    //
    //     let xxx = React.createElement(this.getComponent() as any, props, children);
    //     //console.log("xxx");
    //     //console.log(xxx);
    //     return xxx;
    // }

    $$getDesigner(props: SchemaComponentDesignerProps): JSX.Element {
        return (
            <SchemaComponentDesigner
                {...props}
            >
            </SchemaComponentDesigner>
        );

    }

    // @StringEditor({
    //     inputCaption: "Имя",
    //     inputTab: "Главная",
    //     inputGroup: "Основная",
    //     inputDescription: "Имя таблицы"
    // })
    // name: string;
    //
    //
    // @ListEditor({
    //     inputTab: "Колонки",
    //     getNewListItem: (table: SchemaTable) => {
    //         return new SchemaTableColumn(table);
    //     }
    // })
    // children: SchemaTableColumn[] = [];
    //
    // addColumn(initCallback?: (newColumn: SchemaTableColumn) => void): SchemaTableColumn {
    //     let col = new SchemaTableColumn(this);
    //     if (initCallback)
    //         initCallback(col);
    //     this.columns.push(col);
    //     return col;
    // }


}

export class SchemaComponentRuntimeContext {
    constructor(public component: SchemaComponent) {

    }

    forceUpdate() {
        if (this.component.$$renderedComponent !== undefined)
            this.component.$$renderedComponent.forceUpdate();
    }

    $$vars: any = {};
    $$varsForceUpdate: any = {};

    setVar(varName: string, value: any, forceUpdate?: boolean) {
        this.$$vars[varName] = value;
        if (forceUpdate === true || this.$$varsForceUpdate[varName] === true)
            this.forceUpdate();
    }

    getVar(varName: string): any {
        return this.$$vars[varName];
    }
}

registerSchemaObjectType({
    id: "23772048-abea-4a53-889f-b77022ac04d7",
    name: "Компонент формы",
    description: "Компонент экранной формы",
    type: SchemaComponent,
    icon: SCHEMA_COMPONENT_ICON
});

