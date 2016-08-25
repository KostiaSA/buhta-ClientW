"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GridTreeDataSourceFromArray_1 = require("./GridTreeDataSourceFromArray");
var getInstantPromise_1 = require("../../getInstantPromise");
var UpdateStmt_1 = require("../../../buhta-sql/UpdateStmt");
var SqlCore_1 = require("../../../buhta-sql/SqlCore");
var GridTreeDataSourceFromSqlTable = (function (_super) {
    __extends(GridTreeDataSourceFromSqlTable, _super);
    function GridTreeDataSourceFromSqlTable(params) {
        var _this = this;
        _super.call(this, params);
        this.params = params;
        // стандартная обработка подразумевает, что id и parent - это Guid, а position - number
        this.onDragDropUpdate = function (rowKey, rowFieldName, newFieldValue) {
            var sql;
            if (rowFieldName === _this.params.positionFieldName) {
                sql = new UpdateStmt_1.UpdateStmt(_this.params.tableName)
                    .column(rowFieldName, new SqlCore_1.SqlNumberValue(newFieldValue))
                    .where(_this.params.keyFieldName, "=", new SqlCore_1.SqlGuidValue(rowKey));
            }
            else {
                sql = new UpdateStmt_1.UpdateStmt(_this.params.tableName)
                    .column(rowFieldName, new SqlCore_1.SqlGuidValue(newFieldValue))
                    .where(_this.params.keyFieldName, "=", new SqlCore_1.SqlGuidValue(rowKey));
            }
            _this.params.db.executeSQL(sql)
                .catch(function (error) {
                alert("Ошибка DragDrop: " + error);
            });
        };
        this.isLoaded = false;
        if (params.onDragDropUpdate === undefined)
            params.onDragDropUpdate = this.onDragDropUpdate;
    }
    GridTreeDataSourceFromSqlTable.prototype.getIsAsync = function () {
        return true;
    };
    ;
    GridTreeDataSourceFromSqlTable.prototype.refreshFromSql = function () {
        this.isLoaded = false;
        return this.getRowsAsync().then(function () {
            return "Ok";
        });
    };
    GridTreeDataSourceFromSqlTable.prototype.getRowsAsync = function () {
        var _this = this;
        if (this.isLoaded) {
            return getInstantPromise_1.getInstantPromise(this.getRows());
        }
        else {
            return this.params.db.executeSQL(this.params.select)
                .then(function (tables) {
                _this.arrayObj = tables[0].rows;
                _this.createNodesFromParentKey();
                return _this.getRows();
            });
        }
    };
    return GridTreeDataSourceFromSqlTable;
}(GridTreeDataSourceFromArray_1.GridTreeDataSourceFromArray));
exports.GridTreeDataSourceFromSqlTable = GridTreeDataSourceFromSqlTable;
//# sourceMappingURL=GridTreeDataSourceFromSqlTable.js.map