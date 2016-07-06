import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";

export class SqlTable extends DesignedObject {

    @StringEditor({
        inputCaption: "Имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя таблицы"
    })
    name: string;

    @StringEditor({
        inputCaption: "sql имя",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "sql имя таблицы"
    })
    sqlname: string;

    columns: SqlTableColumn[];

    addColumn(initCallback: (newColumn: SqlTableColumn) => void) {
        let col = new SqlTableColumn();
        col.table = this;
        this.columns.push(col);
        initCallback(col);
    }


}

export class SqlTableColumn extends DesignedObject {

    @StringEditor({
        inputCaption: "Имя колонки",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "Имя колонки"
    })
    name: string;

    @StringEditor({
        inputCaption: "тип",
        inputTab: "Главная",
        inputGroup: "Основная",
        inputDescription: "sql тип колонки"
    })
    dataType: string;

    table: SqlTable;

}

