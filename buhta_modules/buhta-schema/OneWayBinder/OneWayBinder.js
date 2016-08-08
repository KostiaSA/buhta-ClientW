"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DesignedObject_1 = require("../../buhta-app-designer/DesignedObject");
var Error_1 = require("../../buhta-core/Error");
var SelectInputDataSourceFromArray_1 = require("../../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray");
var stringCompare_1 = require("../../buhta-core/stringCompare");
function getOneWayBinderTypesDataSource(activeBinder) {
    return new SelectInputDataSourceFromArray_1.SelectInputDataSourceFromArray(registeredOneWayBinders
        .sort(function (a, b) { return stringCompare_1.stringCompare(a.binderName, b.binderName); })
        .map(function (binderInfo) {
        var retDataSourceItem = {
            label: binderInfo.binderName,
            value: binderInfo.createBinderCallback()
        };
        if (activeBinder !== undefined && activeBinder.constructor === retDataSourceItem.value.constructor)
            retDataSourceItem.value = activeBinder;
        return retDataSourceItem;
    }));
}
exports.getOneWayBinderTypesDataSource = getOneWayBinderTypesDataSource;
var registeredOneWayBinders = [];
function registerOneWayBinder(binderName, createBinderCallback) {
    var info = {
        binderName: binderName,
        createBinderCallback: createBinderCallback
    };
    registeredOneWayBinders.push(info);
}
exports.registerOneWayBinder = registerOneWayBinder;
var OneWayBinder = (function (_super) {
    __extends(OneWayBinder, _super);
    function OneWayBinder() {
        _super.apply(this, arguments);
    }
    OneWayBinder.prototype.getValue = function () {
        Error_1.throwAbstractError();
        throw "fake";
    };
    OneWayBinder.prototype.renderValueEditor = function (onChangeCallback) {
        Error_1.throwAbstractError();
        throw "fake";
    };
    return OneWayBinder;
}(DesignedObject_1.DesignedObject));
exports.OneWayBinder = OneWayBinder;
//# sourceMappingURL=OneWayBinder.js.map