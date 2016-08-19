"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GridTreeDataSourceFromArray_1 = require("./GridTreeDataSourceFromArray");
var GridTreeDataSourceFromSqlTable = (function (_super) {
    __extends(GridTreeDataSourceFromSqlTable, _super);
    function GridTreeDataSourceFromSqlTable(params) {
        _super.call(this, [], params);
        this.params = params;
        this.isLoaded = false;
    }
    GridTreeDataSourceFromSqlTable.prototype.getIsAsync = function () {
        return true;
    };
    ;
    GridTreeDataSourceFromSqlTable.prototype.getRowsAsync = function () {
        var _this = this;
        if (this.isLoaded) {
            return new Promise(function (resolve, reject) {
                resolve(_this.getRows());
            });
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