import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SchemaTable} from "./SchemaTable";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SqlDataType} from "../../buhta-sql/SqlCore";
import {GridColumn} from "../../buhta-core/Components/Grid/GridColumn";
import {BaseDataType} from "./DataTypes/BaseDataType";
import {DataTypeEditor} from "../../buhta-app-designer/PropertyEditors/DataTypePropertyEditor";

export class SchemaTableColumn extends DesignedObject {
    constructor(public table: SchemaTable) {
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

    @DataTypeEditor({
        inputCaption: "Тип данных",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Тип данных колонки"
    })
    @GridColumn({caption: "Тип"})
    dataType: BaseDataType;

    @StringEditor({
        inputCaption: "Описание",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Описание колонки"
    })
    @GridColumn({caption: "Описание"})
    description: string;

    notNull: boolean;
    //primaryKey: boolean;

    toString() {
        return this.name + " : " + this.dataType.toString();
    }

    getSqlName(): string {
        return this.name;
    }
    
    $$validate(errors: string[]) {
        let errTitle = "Ошибка в колонке '" + this.name + "': ";

        this.name=this.name.trim();

        if (this.name.length===0)
            errors.push(errTitle + "'имя колонки' не может быть пустым");

        if (this.name.startsWith("$$"))
            errors.push(errTitle + "'имя колонки' не может начинаться с $$");

    }

}

