import * as React from "react";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {SchemaTableColumn} from "../SchemaTableColumn";
import {throwAbstractError} from "../../../buhta-core/Error";
import {CreateColumn} from "../../../buhta-sql/CreateTableStmt";

export class BaseDataType extends DesignedObject {
    constructor(public column: SchemaTableColumn) {
        super();
    }

    getName(): string {
        throwAbstractError();
        throw "fake";
    }

    getNameEx(): string {
        throwAbstractError();
        throw "fake";
    }

    toString(): string {
        return this.getNameEx();
    }

    getDesignerEditor(): JSX.Element | null {
        throwAbstractError();
        throw "fake";
    }

    getEditor(): JSX.Element {
        throwAbstractError();
        throw "fake";
    }

    getCreateTableColumns(): CreateColumn[] {
        throwAbstractError();
        throw "fake";
    }

    getIsNumeric(): boolean {
        return false;
    }

    getIsAllowedInIndex(): boolean {
        return true;
    }
}