"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DesignedObject_1 = require("../buhta-app-designer/DesignedObject");
var StringPropertyEditor_1 = require("../buhta-app-designer/PropertyEditors/StringPropertyEditor");
var ListPropertyEditor_1 = require("../buhta-app-designer/PropertyEditors/ListPropertyEditor");
var TreeGridColumn_1 = require("../buhta-core/Components/TreeGrid/TreeGridColumn");
var SqlTable = (function (_super) {
    __extends(SqlTable, _super);
    function SqlTable() {
        _super.apply(this, arguments);
        this.columns = [];
        this.testProc2 = function () {
        };
    }
    SqlTable.prototype.addColumn = function (initCallback) {
        var col = new SqlTableColumn(this);
        this.columns.push(col);
        initCallback(col);
        this.testProc2();
    };
    SqlTable.prototype.getClassName = function () {
        return "sql-таблица";
    };
    SqlTable.prototype.toString = function () {
        return this.name;
    };
    __decorate([
        StringPropertyEditor_1.StringEditor({
            inputCaption: "Имя",
            inputTab: "Главная",
            inputGroup: "Основная",
            inputDescription: "Имя таблицы"
        })
    ], SqlTable.prototype, "name", void 0);
    __decorate([
        StringPropertyEditor_1.StringEditor({
            inputCaption: "sql имя",
            inputTab: "Главная",
            inputGroup: "Основная",
            inputDescription: "sql имя таблицы"
        })
    ], SqlTable.prototype, "sqlname", void 0);
    __decorate([
        ListPropertyEditor_1.ListEditor({
            inputTab: "Колонки"
        })
    ], SqlTable.prototype, "columns", void 0);
    return SqlTable;
}(DesignedObject_1.DesignedObject));
exports.SqlTable = SqlTable;
var SqlTableColumn = (function (_super) {
    __extends(SqlTableColumn, _super);
    function SqlTableColumn($$table) {
        _super.call(this);
        this.$$table = $$table;
    }
    Object.defineProperty(SqlTableColumn.prototype, "table", {
        get: function () {
            return this.$$table;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SqlTableColumn.prototype, "testColumn", {
        get: function () {
            return this.name + "+" + this.dataType + "->" + this.table.name + this.table.$$uniqueObjectId;
        },
        enumerable: true,
        configurable: true
    });
    ;
    SqlTableColumn.prototype.getClassName = function () {
        return "sql-колонка";
    };
    SqlTableColumn.prototype.toString = function () {
        return this.name + " of (" + this.table.name + ")";
    };
    __decorate([
        StringPropertyEditor_1.StringEditor({
            inputCaption: "Имя колонки",
            inputTab: "Главная",
            inputGroup: "Основная",
            inputDescription: "Имя колонки"
        }),
        TreeGridColumn_1.GridColumn({ caption: "Имя колонки" })
    ], SqlTableColumn.prototype, "name", void 0);
    __decorate([
        StringPropertyEditor_1.StringEditor({
            inputCaption: "тип",
            inputTab: "Главная",
            inputGroup: "Основная",
            inputDescription: "sql тип колонки"
        }),
        TreeGridColumn_1.GridColumn({ caption: "Тип" })
    ], SqlTableColumn.prototype, "dataType", void 0);
    __decorate([
        TreeGridColumn_1.GridColumn({ caption: "test", order: -1 })
    ], SqlTableColumn.prototype, "testColumn", null);
    return SqlTableColumn;
}(DesignedObject_1.DesignedObject));
exports.SqlTableColumn = SqlTableColumn;
//# sourceMappingURL=SqlTable.js.map