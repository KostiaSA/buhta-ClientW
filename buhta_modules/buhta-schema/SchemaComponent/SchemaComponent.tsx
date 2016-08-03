import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {throwAbstractError} from "../../buhta-core/Error";
import {ComponentContext, ComponentProps} from "../../buhta-core/Components/Component";
import {SchemaComponentDesigner} from "../../buhta-app-designer/SchemaComponentDesigner/SchemaComponenttDesigner";

export class SchemaComponent extends SchemaObject {
    children: (BaseControl | string)[] = [];
    //reactElement: React.ReactElement<any>;

    // get context(): ComponentContext {
    //     return (this.reactElement as any).context;
    // }

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
        return React.createElement(this.getComponent() as any, this.getProps(), children);
    }

    getDesigner(): JSX.Element {
        return (
            <SchemaComponentDesigner
                designedObject = {this}
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