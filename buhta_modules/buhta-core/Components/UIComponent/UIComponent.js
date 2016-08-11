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
var UIComponent = (function (_super) {
    __extends(UIComponent, _super);
    function UIComponent() {
        _super.apply(this, arguments);
    }
    UIComponent.prototype.didMount = function () {
        _super.prototype.didMount.call(this);
        this.nativeElement["$$uiComponent"] = this;
    };
    UIComponent.prototype.willMount = function () {
        _super.prototype.willMount.call(this);
        if (this.$$runtimeContext === undefined) {
            this.$$runtimeContext = new UIComponentRuntimeContext(this);
        }
    };
    UIComponent.prototype.getChildContext = function () {
        return { uiComponent: this };
    };
    UIComponent.prototype.render = function () {
        var _this = this;
        if (this.asyncChildren === undefined) {
            this.asyncChildren = [];
            _.assign(this.$$runtimeContext.$$props, this.props.userProps);
            Promise
                .map(this.props.schemaComponent.children, function (child, index, length) {
                return child.renderAsync(_this, index, null);
            })
                .then(function (children) {
                _this.asyncChildren = children;
                _this.forceUpdate();
            });
        }
        this.clearStyles();
        return (React.createElement("div", __assign({}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }}), this.asyncChildren));
    };
    UIComponent.childContextTypes = {
        uiComponent: React.PropTypes.any
    };
    return UIComponent;
}(Component_1.Component));
exports.UIComponent = UIComponent;
var UIComponentRuntimeContext = (function () {
    function UIComponentRuntimeContext(component) {
        this.component = component;
        this.$$props = {};
        this.$$vars = {};
        this.$$varsForceUpdate = {};
    }
    UIComponentRuntimeContext.prototype.forceUpdate = function () {
        this.component.forceUpdate();
    };
    UIComponentRuntimeContext.prototype.setVar = function (varName, value, forceUpdate) {
        this.$$vars[varName] = value;
        if (forceUpdate === true || this.$$varsForceUpdate[varName] === true)
            this.forceUpdate();
    };
    UIComponentRuntimeContext.prototype.getVar = function (varName) {
        return this.$$vars[varName];
    };
    UIComponentRuntimeContext.prototype.getProp = function (propName) {
        return this.$$props[propName];
    };
    return UIComponentRuntimeContext;
}());
exports.UIComponentRuntimeContext = UIComponentRuntimeContext;
//# sourceMappingURL=UIComponent.js.map