

import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SchemaTable} from "./SchemaTable";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SqlDataType} from "../../buhta-sql/SqlCore";
import {GridColumn} from "../../buhta-core/Components/Grid/GridColumn";

export class SchemaTableColumn extends DesignedObject {
    constructor(public $$table: SchemaTable) {
        super();
    }

    // get table(): SchemaTable {
    //     return this.$$table;
    // }

    @StringEditor({
        inputCaption: "Имя колонки",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя колонки"
    })
    @GridColumn({caption: "Имя колонки"})
    name: string;

    @StringEditor({
        inputCaption: "тип",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "sql тип колонки"
    })
    @GridColumn({caption: "Тип"})
    dataType: SqlDataType;

    dataLen: number;
    decimals: number;
    notNull: boolean;
    primaryKey: boolean;

    toString() {
        return this.name + " of (" + this.$$table.name + ")";
    }

}

