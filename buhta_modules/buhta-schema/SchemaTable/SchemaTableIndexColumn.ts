import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SchemaTable} from "./SchemaTable";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SqlDataType} from "../../buhta-sql/SqlCore";
import {GridColumn} from "../../buhta-core/Components/Grid/GridColumn";
import {BaseDataType} from "./DataTypes/BaseDataType";
import {DataTypeEditor} from "../../buhta-app-designer/PropertyEditors/DataTypePropertyEditor";
import {SchemaTableIndex} from "./SchemaTableIndex";

export class SchemaTableIndexColumn extends DesignedObject {
    constructor(public index: SchemaTableIndex) {
        super();
    }

    @StringEditor({
        inputCaption: "Имя колонки",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя колонки"
    })
    @GridColumn({caption: "Имя колонки"})
    name: string;

    toString() {
        return this.name;
    }

    getSqlName(): string {
        return this.name;
    }

}

