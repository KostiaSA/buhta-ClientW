"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DesignedObject_1 = require("../../buhta-app-designer/DesignedObject");
var Error_1 = require("../../buhta-core/Error");
var SelectInputDataSourceFromArray_1 = require("../../buhta-core/Components/SelectInput/SelectInputDataSourceFromArray");
//export type OneWayBinderType = "value" | "variable" | "string" | "number";
var fake1;
var fake2;
function getOneWayBinderTypesDataSource(activeBinder) {
    return new SelectInputDataSourceFromArray_1.SelectInputDataSourceFromArray(registeredOneWayBinders.map(function (binderInfo) {
        var retDataSourceItem = {
            label: binderInfo.binderName,
            value: binderInfo.createBinderCallback()
        };
        if (activeBinder !== undefined && activeBinder.constructor === retDataSourceItem.value.constructor)
            retDataSourceItem.value = activeBinder;
        return retDataSourceItem;
    }));
    // [
    // ["value", "Значение?"],
    // [new OneWayBinderType_StringValue(), "Строка"],
    // ["number", "Число"],
    // ["date", "Дата"],
    // ["variable", "Переменная"]
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
var OneWayBinder_base = (function (_super) {
    __extends(OneWayBinder_base, _super);
    function OneWayBinder_base() {
        _super.apply(this, arguments);
    }
    //    binderType: OneWayBinderType;
    //    value: T | undefined;
    //    localVariable: any;
    // constructor(value?: T) {
    //     super();
    //     this.value = value;
    //     if (_.isString(value))
    //         this.binderType = "string";
    //     else if (_.isNumber(value))
    //         this.binderType = "number";
    //     else if (value !== undefined)
    //         this.binderType = "value";
    // }
    OneWayBinder_base.prototype.getValue = function () {
        Error_1.throwAbstractError();
        throw "fake";
        // if (this.binderType === "value")
        //     return this.value!;
        // else {
        //     throwAbstractError();
        //     throw  "fake";
        // }
    };
    OneWayBinder_base.prototype.renderValueEditor = function (onChangeCallback) {
        Error_1.throwAbstractError();
        throw "fake";
    };
    return OneWayBinder_base;
}(DesignedObject_1.DesignedObject));
exports.OneWayBinder_base = OneWayBinder_base;
//# sourceMappingURL=OneWayBinder.js.map