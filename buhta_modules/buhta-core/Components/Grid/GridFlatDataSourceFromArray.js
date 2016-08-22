"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require("lodash");
var Error_1 = require("../../Error");
var getGridColumnInfos_1 = require("./getGridColumnInfos");
var arrayUtils_1 = require("../../arrayUtils");
var GridBaseDataSource_1 = require("./GridBaseDataSource");
var GridFlatDataSourceFromArray = (function (_super) {
    __extends(GridFlatDataSourceFromArray, _super);
    function GridFlatDataSourceFromArray(params) {
        _super.call(this, params);
        this.params = params;
        this.arrayObj = params.arrayObj.filter(function (item) { return item !== undefined; });
    }
    GridFlatDataSourceFromArray.prototype.getIsAsync = function () {
        return false;
    };
    ;
    GridFlatDataSourceFromArray.prototype.getRowsAsync = function () {
        Error_1.throwAbstractError();
        throw "fake";
    };
    GridFlatDataSourceFromArray.prototype.getGridColumns = function () {
        var _this = this;
        if (this.params.gridColumns !== undefined)
            return this.params.gridColumns;
        else if (this.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos_1.getGridColumnInfos(this.arrayObj[0]).map(function (col) {
                if (col.isPositionField === true)
                    _this.params.positionFieldName = col.propertyName;
                var ret = {};
                _.assign(ret, col);
                return ret;
            });
    };
    GridFlatDataSourceFromArray.prototype.getRows = function () {
        return this.arrayObj;
    };
    GridFlatDataSourceFromArray.prototype.getNewRow = function () {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            Error_1.throwError("TreeGridArrayDataSource: method getNewRow() not defined");
            throw ""; // fake typescript 2
        }
    };
    GridFlatDataSourceFromArray.prototype.addRow = function (row) {
        this.arrayObj.push(row);
    };
    GridFlatDataSourceFromArray.prototype.deleteRow = function (rowData) {
        arrayUtils_1.removeFromArray(this.arrayObj, rowData);
    };
    return GridFlatDataSourceFromArray;
}(GridBaseDataSource_1.GridBaseDataSource));
exports.GridFlatDataSourceFromArray = GridFlatDataSourceFromArray;
//# sourceMappingURL=GridFlatDataSourceFromArray.js.map