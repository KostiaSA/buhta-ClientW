import * as React from "react";

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
import {SchemaTableIndex} from "./SchemaTableIndex";
import {GridDataSourceRow} from "../../buhta-core/Components/Grid/GridDataSource";

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
        onRenderInputTab: (designedObject?: SchemaTable): React.ReactNode => {
            if (designedObject !== undefined && designedObject.columns.length > 0)
                return "Колонки(" + designedObject.columns.length + ")";
            else
                return "Колонки";
        },
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

    @ListEditor({
        inputTab: "Индексы",
        onRenderInputTab: (designedObject?: SchemaTable): React.ReactNode => {
            if (designedObject !== undefined && designedObject.indexes.length > 0)
                return "Индексы(" + designedObject.indexes.length + ")";
            else
                return "Индексы";
        },
        enableDragDrop: true,
        gridColumns: [
            {caption: "Имя индекса", propertyName: "name"},
            {
                caption: "Состав индекса",
                onGetPropertyValue: (rowData: SchemaTableIndex) => {
                    return rowData.getColumnsList();
                }
            },
            {caption: "PK", propertyName: "isPrimaryKey", booleanTrueLabel: "PK", booleanFalseLabel: ""},
            {caption: "Кластерный", propertyName: "isClustered", booleanTrueLabel: "кластерный", booleanFalseLabel: ""},
            {caption: "Уникальный", propertyName: "isUnique", booleanTrueLabel: "уникальный", booleanFalseLabel: ""},
            {caption: "Описание", propertyName: "description"}
        ],
        getNewListItem: (table: SchemaTable, parentItem?: SchemaTableIndex) => {
            let index = new SchemaTableIndex(table);
            index.name = "Новый индекс";
            return getInstantPromise<DesignedObject>(index);
        }
    })
    indexes: SchemaTableIndex[] = [];

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

