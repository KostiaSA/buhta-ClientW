// import {DesignedObject} from "../buhta-app-designer/DesignedObject";
// import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
// import {ListEditor} from "../buhta-app-designer/PropertyEditors/ListPropertyEditor";
// import {GridColumn} from "../buhta-core/Components/Grid/GridColumn";
//
//
// export class SqlTable extends DesignedObject {
//
//     @StringEditor({
//         inputCaption: "Имя",
//         inputTab: "Главная",
//         inputGroup: "Основная",
//         inputDescription: "Имя таблицы"
//     })
//     name: string;
//
//     @StringEditor({
//         inputCaption: "sql имя",
//         inputTab: "Главная",
//         inputGroup: "Основная",
//         inputDescription: "sql имя таблицы"
//     })
//
//     sqlname: string;
//
//     @ListEditor({
//         inputTab: "Колонки",
//         // getNewListItem: (table: SqlTable) => {
//         //     return new SqlTableColumn(table);
//         // }
//     })
//     columns: SqlTableColumn[] = [];
//
//     addColumn(initCallback?: (newColumn: SqlTableColumn) => void): SqlTableColumn {
//         let col = new SqlTableColumn(this);
//         if (initCallback)
//             initCallback(col);
//         this.columns.push(col);
//         return col;
//     }
//
//
//     getClassName() {
//         return "sql-таблица";
//     }
//
//     toString() {
//         return this.name;
//     }
//
//
// }
//
// export class SqlTableColumn extends DesignedObject {
//     constructor(private $$table: SqlTable) {
//         super();
//     }
//
//     get table(): SqlTable {
//         return this.$$table;
//     }
//
//     @StringEditor({
//         inputCaption: "Имя колонки",
//         inputTab: "Главная",
//         inputGroup: "Основная",
//         inputDescription: "Имя колонки"
//     })
//     @GridColumn({caption: "Имя колонки"})
//     name: string;
//
//     @StringEditor({
//         inputCaption: "тип",
//         inputTab: "Главная",
//         inputGroup: "Основная",
//         inputDescription: "sql тип колонки"
//     })
//     @GridColumn({caption: "Тип"})
//     dataType: string;
//
//     @GridColumn({caption: "test", order: -1})
//     get testColumn(): string {
//         return this.name + "+" + this.dataType + "->" + this.table.name + (this.table as any).$$uniqueObjectId;
//     };
//
//     $$testObject: any;
//
//     getClassName() {
//         return "sql-колонка";
//     }
//
//     toString() {
//         return this.name + " of (" + this.table.name + ")";
//     }
//
// }
//
