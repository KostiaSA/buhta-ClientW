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
        // this.arrayObj = params.arrayObj;//.filter((item) => item !== undefined);
    }
    // private arrayObj: TRow[];
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
        else if (this.params.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos_1.getGridColumnInfos(this.params.arrayObj[0]).map(function (col) {
                if (col.isPositionField === true)
                    _this.params.positionFieldName = col.propertyName;
                var ret = {};
                _.assign(ret, col);
                return ret;
            });
    };
    GridFlatDataSourceFromArray.prototype.getRows = function () {
        return this.params.arrayObj.filter(function (item) { return item !== undefined; });
        //return this.arrayObj;
    };
    // getNewRow(): Promise<TRow> {
    //     if (this.params.getNewRow)
    //         return this.params.getNewRow();
    //     else {
    //         throwError("GridFlatDataSourceFromArray: function 'getNewRow' is not defined");
    //         throw  "";  // fake typescript 2
    //     }
    // }
    GridFlatDataSourceFromArray.prototype.addRow = function (row) {
        this.params.arrayObj.push(row);
    };
    GridFlatDataSourceFromArray.prototype.deleteRow = function (rowData) {
        arrayUtils_1.removeFromArray(this.params.arrayObj, rowData);
    };
    GridFlatDataSourceFromArray.prototype.canDropInto = function (dragRowData, targetRowData, mode) {
        return false;
    };
    return GridFlatDataSourceFromArray;
}(GridBaseDataSource_1.GridBaseDataSource));
exports.GridFlatDataSourceFromArray = GridFlatDataSourceFromArray;
//# sourceMappingURL=GridFlatDataSourceFromArray.js.map