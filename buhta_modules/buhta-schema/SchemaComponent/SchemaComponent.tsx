import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {throwAbstractError} from "../../buhta-core/Error";
import {ComponentContext, ComponentProps} from "../../buhta-core/Components/Component";
import {SchemaComponentDesigner} from "../../buhta-app-designer/SchemaComponentDesigner/SchemaComponentDesigner";

export class SchemaComponent extends SchemaObject {
    children: (BaseControl)[] = [];
    //reactElement: React.ReactElement<any>;

    // get context(): ComponentContext {
    //     return (this.reactElement as any).context;
    // }

    $$runtimeContext: SchemaComponentRuntimeContext;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function {
        throwAbstractError();
        throw  "fake";
    }

    render(): JSX.Element {
        let children = this.children.map((child: BaseControl| string) => {
            if (_.isString(child))
                return child;
            else
                return child.render();
        });

        let props: ComponentProps<any> = this.getProps();
        props.$$schemaComponent = this;

        if (this.$$runtimeContext === undefined)
            this.$$runtimeContext = new SchemaComponentRuntimeContext(this);

        return React.createElement(this.getComponent() as any, props, children);
    }

    getDesigner(): JSX.Element {
        return (
            <SchemaComponentDesigner
                designedObject={this}
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

    $$vars: any = {};

    setVar(varName: string, value: any) {
        this.$$vars[varName] = value;
    }

    getVar(varName: string): any {
        return this.$$vars[varName];
    }
}