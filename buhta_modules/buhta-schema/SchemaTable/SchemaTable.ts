import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {SchemaTableColumn} from "./SchemaTableColumn";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {SCHEMA_TABLE_ICON} from "../../buhta-core/Constants";
import {getInstantPromise} from "../../buhta-core/getInstantPromise";
import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {StringDataType} from "./DataTypes/StringDataType";

export class SchemaTable extends SchemaObject {

    @StringEditor({
        inputCaption: "Имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя таблицы"
    })
    name: string;


    @ListEditor({
        inputTab: "Колонки",
        enableDragDrop: true,
        gridColumns: [
            {caption: "Имя", propertyName: "name"}
        ],
        getNewListItem: (table: SchemaTable, parentItem?: SchemaTableColumn) => {
            let column = new SchemaTableColumn(table);
            column.name = "Новая колонка";
            column.dataType = new StringDataType(column, 50);
            return getInstantPromise<DesignedObject>(column);
        }
    })
    columns: SchemaTableColumn[] = [];

    addColumn(initCallback?: (newColumn: SchemaTableColumn) => void): SchemaTableColumn {
        let col = new SchemaTableColumn(this);
        if (initCallback)
            initCallback(col);
        this.columns.push(col);
        return col;
    }


}

registerSchemaObjectType({
    id: "1d702193-8801-4a72-971b-4095aeaab247",
    name: "Таблица",
    description: "Sql таблица",
    type: SchemaTable,
    icon: SCHEMA_TABLE_ICON
});

