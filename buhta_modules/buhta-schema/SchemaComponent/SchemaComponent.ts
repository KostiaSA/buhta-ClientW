import * as React from "react";
import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {BaseControl} from "../../buhta-ui/BaseControl";
import {throwAbstractError} from "../../buhta-core/Error";
import {ComponentContext} from "../../buhta-core/Components/Component";

export class SchemaComponent extends SchemaObject {
    children: BaseControl[] = [];
    reactElement: React.ReactElement<any>;

    get context(): ComponentContext {
        return (this.reactElement as any).context;
    }

    getComponent(): React.ReactElement<any> {
        throwAbstractError();
        throw "fake";
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