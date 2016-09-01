"use strict";
var _ = require("lodash");
var Error_1 = require("../../Error");
var isDeepEqual_1 = require("../../isDeepEqual");
var SelectInputDataSourceFromArray = (function () {
    function SelectInputDataSourceFromArray(arr) {
        this.arr = arr;
    }
    SelectInputDataSourceFromArray.prototype.getItems = function () {
        if (!this.cachedItems) {
            this.cachedItems = this.arr.map(function (item, index) {
                if (_.isString(item) || _.isNumber(item) || _.isDate(item))
                    return { label: item.toString(), value: item, disabled: false };
                else if (_.isArray(item))
                    return { label: item[1], value: item[0], disabled: item[3] };
                else if (_.isObject(item)) {
                    var value = item.value;
                    if (value === undefined)
                        value = item;
                    var label = item.label;
                    if (label === undefined && item.label.toString())
                        label = item.toString();
                    if (label === undefined)
                        label = "?";
                    var disabled = item.disabled;
                    if (disabled === undefined)
                        disabled = false;
                    return { label: label, value: value, disabled: disabled };
                }
                else {
                    Error_1.throwError("SelectInputDataSourceFromArray: invalid select item type");
                    throw "fake";
                }
            });
        }
        return this.cachedItems;
    };
    SelectInputDataSourceFromArray.prototype.isValuesEqual = function (a, b) {
        return isDeepEqual_1.isDeepEqual(a, b);
    };
    SelectInputDataSourceFromArray.prototype.getLabel = function (value) {
        if (!value)
            return "";
        for (var i = 0; i < this.getItems().length; i++) {
            if (this.isValuesEqual(value, this.getItems()[i].value)) {
                return this.getItems()[i].label;
            }
        }
        return "<error>";
    };
    return SelectInputDataSourceFromArray;
}());
exports.SelectInputDataSourceFromArray = SelectInputDataSourceFromArray;
//# sourceMappingURL=SelectInputDataSourceFromArray.js.map