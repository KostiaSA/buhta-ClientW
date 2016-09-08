"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var _ = require("lodash");
var Component_1 = require("../Component");
var SelectInputDataSourceFromArray_1 = require("./SelectInputDataSourceFromArray");
var Error_1 = require("../../Error");
var SelectInput = (function (_super) {
    __extends(SelectInput, _super);
    function SelectInput(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.getValue = function () {
            for (var i = 0; i < _this.ds.getItems().length; i++) {
                if (_this.ds.getItems()[i].value === _this.props.bindObject[_this.props.bindPropName])
                    return i.toString();
            }
            return "-1";
        };
        this.handleOnChange = function (event) {
            if (_this.props.bindObject && _this.props.bindPropName)
                _this.props.bindObject[_this.props.bindPropName] = _this.ds.getItems()[event.target.value].value;
            //  console.log("select");
            //  console.log(this.ds.getItems()[(event.target as any).value].value);
            _this.forceUpdate();
            if (_this.props.onChange)
                _this.props.onChange();
        };
        this.props = props;
    }
    SelectInput.prototype.willMount = function () {
        _super.prototype.willMount.call(this);
    };
    SelectInput.prototype.renderOptions = function () {
        return this.ds.getItems().map(function (item, index) {
            return (React.createElement("option", {value: index, key: index, disabled: item.disabled}, item.label));
        });
    };
    SelectInput.prototype.render = function () {
        if (_.isArray(this.props.valuesDataSource))
            this.ds = new SelectInputDataSourceFromArray_1.SelectInputDataSourceFromArray(this.props.valuesDataSource);
        else
            this.ds = this.props.valuesDataSource;
        if (this.ds === undefined)
            Error_1.throwError("SelectInput: property 'valuesDataSource' is not defined");
        this.clearStyles();
        this.addClassName("select");
        this.addStyles(this.props.style);
        var errorOrEmptyOption = undefined;
        var value = this.getValue();
        if (this.props.bindObject[this.props.bindPropName] === undefined) {
            errorOrEmptyOption = (React.createElement("option", {value: "-1", key: -1, disabled: true, selected: true}));
        }
        else if (value === "-1") {
            errorOrEmptyOption = (React.createElement("option", {value: "-1", key: -1, disabled: true, selected: true}, "<error>"));
        }
        return (React.createElement("span", __assign({}, this.getRenderProps()), 
            React.createElement("select", {type: "text", value: this.getValue(), onChange: this.handleOnChange}, 
                errorOrEmptyOption, 
                this.renderOptions())
        ));
    };
    return SelectInput;
}(Component_1.Component));
exports.SelectInput = SelectInput;
//# sourceMappingURL=SelectInput.js.map