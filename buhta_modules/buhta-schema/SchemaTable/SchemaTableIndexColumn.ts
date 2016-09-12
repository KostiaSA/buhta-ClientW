import {DesignedObject} from "../../buhta-app-designer/DesignedObject";
import {SchemaTable} from "./SchemaTable";
import {StringEditor} from "../../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {SqlDataType} from "../../buhta-sql/SqlCore";
import {GridColumn} from "../../buhta-core/Components/Grid/GridColumn";
import {BaseDataType} from "./DataTypes/BaseDataType";
import {DataTypeEditor} from "../../buhta-app-designer/PropertyEditors/DataTypePropertyEditor";
import {SchemaTableIndex} from "./SchemaTableIndex";
import {SelectEditor} from "../../buhta-app-designer/PropertyEditors/SelectPropertyEditor";
import {stringCompare} from "../../buhta-core/stringCompare";
import {SchemaTableColumn} from "./SchemaTableColumn";

export class SchemaTableIndexColumn extends DesignedObject {
    constructor(index: SchemaTableIndex) {
        super();
    }

    get index(): SchemaTableIndex {
        return this.$$owner as SchemaTableIndex;
    }

    @SelectEditor({
        inputCaption: "Имя колонки",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя колонки",
        getSelectValues: (indexColumn: SchemaTableIndexColumn) => {
            let columns = indexColumn.index.table.columns
                .sort((colA: SchemaTableColumn, colB: SchemaTableColumn) => {
                    return stringCompare(colA.name, colB.name)
                })
                .filter((col: SchemaTableColumn) => {
                    return col.dataType.getIsAllowedInIndex();
                });

            return columns.map((col: SchemaTableColumn)=> {
                return [col.name, col.toString()];
            });
        }
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

