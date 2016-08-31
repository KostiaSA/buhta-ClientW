import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {SchemaTableColumn} from "./SchemaTableColumn";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {SCHEMA_TABLE_ICON, SCHEMA_TABLE_TYPE_ID} from "../../buhta-core/Constants";
import {getInstantPromise} from "../../buhta-core/getInstantPromise";
import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {StringDataType} from "./DataTypes/StringDataType";
import {QuerySourceObject} from "../SchemaQuery/SchemaQuery";
import {SelectTable} from "../../buhta-sql/SelectStmt";

export class SchemaTable extends SchemaObject implements QuerySourceObject {

    @StringEditor({
        inputCaption: "Имя таблицы",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя таблицы"
    })
    name: string;

    @StringEditor({
        inputCaption: "Описание",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Описание таблицы"
    })
    description: string;

    @ListEditor({
        inputTab: "Колонки",
        enableDragDrop: true,
        gridColumns: [
            {caption: "Имя", propertyName: "name"},
            {caption: "Тип данных", propertyName: "dataType"},
            {caption: "Описание", propertyName: "description"}
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

    isQuerySourceObject(): boolean {
        return true;
    }

    getSelectTable(): Promise<SelectTable> {
        return getInstantPromise<SelectTable>({tableName: this.name});
    }

}

registerSchemaObjectType({
    id: SCHEMA_TABLE_TYPE_ID,
    name: "Таблица",
    description: "Sql таблица",
    type: SchemaTable,
    icon: SCHEMA_TABLE_ICON
});

