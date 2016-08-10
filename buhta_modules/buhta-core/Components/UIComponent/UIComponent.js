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
            console.log("UIComponent-willMount");
        }
    };
    UIComponent.prototype.getChildContext = function () {
        return { uiComponent: this };
    };
    UIComponent.prototype.render = function () {
        var _this = this;
        this.clearStyles();
        //this.addClassName("Layout");
        //this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});
        //this.addProps({onClick: this.props.onClick});
        var children = this.props.children.map(function (child, index) {
            if (_.isString(child))
                return child;
            else
                return child.render(_this, index, null);
        });
        return (React.createElement("div", __assign({}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }}), children));
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
    return UIComponentRuntimeContext;
}());
exports.UIComponentRuntimeContext = UIComponentRuntimeContext;
//# sourceMappingURL=UIComponent.js.map