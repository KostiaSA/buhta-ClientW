import {SchemaObject} from "../SchemaObject";
import {ListEditor} from "../../buhta-app-designer/PropertyEditors/ListPropertyEditor";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {registerSchemaObjectType} from "../SchemaObjectTypeInfo";
import {
    SCHEMA_QUERY_ICON,
    SCHEMA_QUERY_TYPE_ID
} from "../../buhta-core/Constants";
import {getInstantPromise} from "../../buhta-core/getInstantPromise";
import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SqlBatch, SqlBatchItem} from "../../buhta-sql/SqlDb";
import {SelectStmt, SelectTable, SelectColumn} from "../../buhta-sql/SelectStmt";
import {throwError} from "../../buhta-core/Error";

export interface QuerySourceObject {
    isQuerySourceObject(): boolean;
    getSelectTable(): Promise<SelectTable>;

}

export class SchemaQuery extends SchemaObject implements QuerySourceObject {

    name: string;
    description: string;

    rootTable: QueryTable = new QueryTable();

    isQuerySourceObject(): boolean {
        return true;
    }

    getSelectTable(): Promise<SelectTable> {
        return getInstantPromise<SelectTable>({tableName: this.name});
    }


    getSelectStmt(): Promise<SqlBatch> {
        let batch: SqlBatchItem[] = [];
        let select = new SelectStmt();

        return this.rootTable.getSelectTable()
            .then((selectTable: SelectTable)=> {
                select.table(selectTable);

                let columns: SelectColumn[] = [];
                this.rootTable.emitSelectColumnsRecursive(columns);
                columns.forEach((column: SelectColumn)=> {
                    select.column(column);
                }, this);


                batch.push(select);
                return batch;
            });

    }


}

export class QueryTable extends DesignedObject {
    parentSchemaQuery: SchemaQuery;
    parentColumn: QueryColumn;
    sourceObjectId: string;
    tableAlias: string;
    columns: QueryColumn[] = [];

    getSourceObject(id: string): Promise<QuerySourceObject> {
        return this.getParentSchemaQuery().schema.getObject(id).then((obj: any)=> {
            if (obj.isQuerySourceObject() !== true)
                throwError("schema object with id '" + id + "' must implements 'QuerySourceObject' interface")
            return obj as QuerySourceObject;
        });
    }

    emitSelectColumnsRecursive(columns: SelectColumn[]) {
        this.columns.forEach((column: QueryColumn) => {
            column.emitSelectColumnRecursive(columns);
        });
    }

    getSelectTable(): Promise<SelectTable> {
        return this.getSourceObject(this.sourceObjectId).then((obj: QuerySourceObject)=> {
            return obj.getSelectTable();
        });

    }

    getParentSchemaQuery(): SchemaQuery {
        if (this.parentSchemaQuery !== undefined)
            return this.parentSchemaQuery;
        else
            return this.parentColumn.getParentSchemaQuery();
    }
}

export class QueryColumn extends DesignedObject {
    parentTable: QueryTable;
    columnName: string;
    columnAlias: string;

    getParentSchemaQuery(): SchemaQuery {
        return this.parentTable.getParentSchemaQuery();
    }

    emitSelectColumnRecursive(columns: SelectColumn[]) {
        columns.push({colName: this.columnName, as: this.getColumnAlias()});
    }

    private getColumnAlias() {
        if (this.columnAlias !== undefined)
            return this.columnAlias;
        else
            return this.columnName;
    }
}

export class QueryJoinColumn extends QueryColumn {
    joinTable: QueryTable;
}


registerSchemaObjectType({
    id: SCHEMA_QUERY_TYPE_ID,
    name: "Запрос",
    description: "Sql запрос",
    type: SchemaQuery,
    icon: SCHEMA_QUERY_ICON
});

