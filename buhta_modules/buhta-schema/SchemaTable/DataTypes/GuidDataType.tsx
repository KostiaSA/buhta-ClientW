import * as React from "react";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {SchemaTableColumn} from "../SchemaTableColumn";
import {throwAbstractError} from "../../../buhta-core/Error";
import {CreateColumn} from "../../../buhta-sql/CreateTableStmt";
import {BaseDataType} from "./BaseDataType";
import {
    STRING_DATA_TYPE_NAME, STRING_DATA_TYPE_DESCRIPTION, GUID_DATA_TYPE_NAME,
    GUID_DATA_TYPE_DESCRIPTION
} from "../../../buhta-core/Constants";
import {registerDataType} from "./DataTypeInfo";

export class GuidDataType extends BaseDataType {
    constructor(public column: SchemaTableColumn) {
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

    getDesignerEditor(): JSX.Element {
        throwAbstractError();
        throw "fake";
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
            primaryKey: this.column.primaryKey,
        }
        return [col];
    }

    getIsNumeric(): boolean {
        return false;
    }
}

registerDataType({
    name: GUID_DATA_TYPE_NAME,
    description: GUID_DATA_TYPE_DESCRIPTION,
    type: GuidDataType
});