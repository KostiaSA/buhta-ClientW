"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var OneWayBinder_1 = require("./OneWayBinder");
var Input_1 = require("../../buhta-core/Components/Input/Input");
var OneWayBinder_StringValue = (function (_super) {
    __extends(OneWayBinder_StringValue, _super);
    function OneWayBinder_StringValue(value) {
        _super.call(this);
        this.value = value;
    }
    OneWayBinder_StringValue.prototype.getValue = function () {
        if (this.value === undefined)
            return "<не определено>";
        else
            return this.value;
    };
    OneWayBinder_StringValue.prototype.renderValueEditor = function () {
        //onChange={this.handleOnChange}
        return (React.createElement(Input_1.Input, {type: Input_1.InputType.Text, bindObject: this, bindPropName: "value"}));
    };
    return OneWayBinder_StringValue;
}(OneWayBinder_1.OneWayBinder_base));
exports.OneWayBinder_StringValue = OneWayBinder_StringValue;
OneWayBinder_1.registerOneWayBinder("Строка", function () { return new OneWayBinder_StringValue(); });
//# sourceMappingURL=OneWayBinder_StringValue.js.map