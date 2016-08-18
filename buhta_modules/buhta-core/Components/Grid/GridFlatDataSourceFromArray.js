"use strict";
var _ = require("lodash");
var Error_1 = require("../../Error");
var getGridColumnInfos_1 = require("./getGridColumnInfos");
var GridFlatDataSourceFromArray = (function () {
    function GridFlatDataSourceFromArray(arrayObj, params) {
        if (params === void 0) { params = {}; }
        this.arrayObj = arrayObj;
        this.params = params;
    }
    GridFlatDataSourceFromArray.prototype.getGridColumns = function () {
        var _this = this;
        if (this.arrayObj.length === 0)
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
        return this.arrayObj.length - 1;
    };
    GridFlatDataSourceFromArray.prototype.deleteRow = function (rowIndex) {
        var deletedItems = _.pullAt(this.arrayObj, rowIndex);
        if (deletedItems.length === 0)
            Error_1.throwError("TreeGridArrayDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
    };
    GridFlatDataSourceFromArray.prototype.getEmptyDataSourceMessage = function () {
        if (this.params.getEmptyDataSourceMessage)
            return this.params.getEmptyDataSourceMessage();
        else
            return "Пустой список.";
    };
    GridFlatDataSourceFromArray.prototype.getDeleteRowMessage = function () {
        if (this.params.getDeleteRowMessage)
            return this.params.getDeleteRowMessage();
        else
            return "Удалить запись!";
    };
    GridFlatDataSourceFromArray.prototype.canDragRow = function (rowIndex, mode) {
        return true;
    };
    GridFlatDataSourceFromArray.prototype.canDropInto = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridFlatDataSourceFromArray.prototype.canDropAfter = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridFlatDataSourceFromArray.prototype.canDropBefore = function (dragRowIndex, targetRowIndex, mode) {
        return false;
    };
    GridFlatDataSourceFromArray.prototype.dropBefore = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridFlatDataSourceFromArray.prototype.dropInto = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridFlatDataSourceFromArray.prototype.dropAfter = function (dragRowIndex, targetRowIndex, mode) {
    };
    GridFlatDataSourceFromArray.prototype.refresh = function () {
    };
    GridFlatDataSourceFromArray.prototype.getNodeChildDetails = function (dataItem) {
        return { group: false };
    };
    return GridFlatDataSourceFromArray;
}());
exports.GridFlatDataSourceFromArray = GridFlatDataSourceFromArray;
//# sourceMappingURL=GridFlatDataSourceFromArray.js.map