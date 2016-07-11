import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {ListEditor} from "../buhta-app-designer/PropertyEditors/ListPropertyEditor";

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

    @ListEditor({
        inputTab: "Колонки"
    })
    columns: SqlTableColumn[] = [];

    addColumn(initCallback: (newColumn: SqlTableColumn) => void) {
        let col = new SqlTableColumn();
        col.table = this;
        this.columns.push(col);
        initCallback(col);

        this.testProc2();
    }

    testProc2 = () => {

    };

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

    $$testObject: any;

}

