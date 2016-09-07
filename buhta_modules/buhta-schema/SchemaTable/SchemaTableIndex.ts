import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SchemaTable} from "./SchemaTable";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SqlDataType} from "../../buhta-sql/SqlCore";
import {BaseDataType} from "./DataTypes/BaseDataType";
import {DataTypeEditor} from "../../buhta-app-designer/PropertyEditors/DataTypePropertyEditor";
import {GridColumn} from "../../buhta-core/Components/Grid/GridColumn";
import {BooleanEditor} from "../../buhta-app-designer/PropertyEditors/BooleanPropertyEditor";

export class SchemaTableIndex extends DesignedObject {
    constructor(public table: SchemaTable) {
        super();
    }

    @StringEditor({
        inputCaption: "Имя индекса",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя индекса"
    })
    @GridColumn({caption: "Имя индекса"})
    name: string;


    @StringEditor({
        inputCaption: "Описание",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Описание колонки"
    })
    @GridColumn({caption: "Описание"})
    description: string;

    @BooleanEditor({
        inputCaption: "уникальный",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Уникальность инднкса"
    })
    @GridColumn({caption: "Уникальный"})
    isUnique: boolean;

    @BooleanEditor({
        inputCaption: "первичный ключ",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Это первичный ключ"
    })
    @GridColumn({caption: "PK"})
    isPrimaryKey: boolean;

    @BooleanEditor({
        inputCaption: "кластерный",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Индекс кластерный"
    })
    @GridColumn({caption: "Кластерный"})
    isClustered: boolean;

    toString() {
        return this.name + " of (" + this.table.name + ")";
    }

    getSqlName(): string {
        return this.name;
    }

}

