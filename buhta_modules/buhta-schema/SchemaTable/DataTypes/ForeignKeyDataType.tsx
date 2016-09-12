import * as React from "react";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {SchemaTableColumn} from "../SchemaTableColumn";
import {throwAbstractError} from "../../../buhta-core/Error";
import {CreateColumn} from "../../../buhta-sql/CreateTableStmt";
import {BaseDataType} from "./BaseDataType";
import {
    STRING_DATA_TYPE_NAME, STRING_DATA_TYPE_DESCRIPTION, GUID_DATA_TYPE_NAME,
    GUID_DATA_TYPE_DESCRIPTION, FOREIGN_KEY_DATA_TYPE_NAME, FOREIGN_KEY_DATA_TYPE_DESCRIPTION
} from "../../../buhta-core/Constants";
import {registerDataType} from "./DataTypeInfo";
import {InputType, Input} from "../../../buhta-core/Components/Input/Input";
import {SelectStmt} from "../../../buhta-sql/SelectStmt";
import {
    GridTreeDataSourceFromSqlTableParams,
    GridTreeDataSourceFromSqlTable
} from "../../../buhta-core/Components/Grid/GridTreeDataSourceFromSqlTable";
import {SchemaObject} from "../../SchemaObject";
import {DataRow} from "../../../buhta-sql/SqlDb";
import {registeredSchemaObjectTypes} from "../../SchemaObjectTypeInfo";
import {LookupInput} from "../../../buhta-core/Components/LookupInput/LookupInput";

export class ForeignKeyDataType extends BaseDataType {
    constructor(column: SchemaTableColumn) {
        super(column);
    }

    getName(): string {
        return GUID_DATA_TYPE_NAME;
    }

    getNameEx(): string {
        return this.getName();
    }

    toString(): string {
        return this.getNameEx();
    }

    foreignTableId: string;

    getDesignerEditor(): JSX.Element | null {
        return (
            <p className="control">
                <span className="caption" style={{marginRight:10}}>ссылка на таблицу</span>
                <LookupInput
                    multiSelect={false}
                    bindObject={this}
                    bindPropName="foreignTableId"
                    lookupDataSource={this.getLookupDataSource()}
                >
                </LookupInput>
            </p>
        )
    }

    getEditor(): JSX.Element {
        throwAbstractError();
        throw "fake";
    }

    getCreateTableColumns(): CreateColumn[] {
        let col: CreateColumn = {
            column: this.column.getSqlName(),
            dataType: "guid",
            notNull: this.column.notNull,
            //primaryKey: this.column.primaryKey,
        }
        return [col];
    }

    getIsNumeric(): boolean {
        return false;
    }

    getLookupDataSource = (): GridTreeDataSourceFromSqlTable<SchemaObject> => {
        let select = new SelectStmt();
        select.table("SchemaObject");
        select.column("id", "parentObjectId", "name", "typeId", "position", "description");


        let dsParams: GridTreeDataSourceFromSqlTableParams<SchemaObject> = {
            db: this.column.table.schema.db,
            select: select,
            tableName: "SchemaObject",
            keyFieldName: "id",
            parentKeyFieldName: "parentObjectId",
            positionFieldName: "position",
            autoExpandNodesToLevel: 100,
            onGetDataValue: (rowData: DataRow, propertyName: string) => {
                if (propertyName === "icon")
                    return registeredSchemaObjectTypes[rowData["typeId"]].icon;
                else
                    return rowData[propertyName];
            },
        };

        return new GridTreeDataSourceFromSqlTable<SchemaObject>(dsParams);
    }

}

registerDataType({
    name: FOREIGN_KEY_DATA_TYPE_NAME,
    description: FOREIGN_KEY_DATA_TYPE_DESCRIPTION,
    type: ForeignKeyDataType
});