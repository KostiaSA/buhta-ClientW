"use strict";
var _ = require("lodash");
var Error_1 = require("../../Error");
var getGridColumnInfos_1 = require("./getGridColumnInfos");
var arrayUtils_1 = require("../../arrayUtils");
var GridFlatDataSourceFromArray = (function () {
    function GridFlatDataSourceFromArray(_arrayObj, params) {
        if (params === void 0) { params = {}; }
        this.params = params;
        this.arrayObj = _arrayObj.filter(function (item) { return item !== undefined; });
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
        // let deletedItems = _.pullAt(this.arrayObj, rowIndex);
        // if (deletedItems.length === 0)
        //     throwError("TreeGridArrayDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
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