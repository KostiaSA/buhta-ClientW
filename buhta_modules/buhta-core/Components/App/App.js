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
var Component_1 = require("../Component");
var AppErrorBar_1 = require("./AppErrorBar");
var AppWindow = (function () {
    function AppWindow() {
        this.id = Math.random().toString(36).slice(2, 12);
    }
    return AppWindow;
}());
exports.AppWindow = AppWindow;
var AppState = (function (_super) {
    __extends(AppState, _super);
    function AppState() {
        _super.apply(this, arguments);
        this.windows = []; // последнее активно
    }
    return AppState;
}(Component_1.ComponentState));
exports.AppState = AppState;
var App = (function (_super) {
    __extends(App, _super);
    function App(props, context) {
        _super.call(this, props, context);
        this.props = props;
        this.state = new AppState(this);
    }
    App.prototype.willMount = function () {
        _super.prototype.willMount.call(this);
        exports.appInstance = this;
    };
    App.prototype.render = function () {
        this.addClassName("app");
        if (this.props.sizeTo === "parent")
            this.addStyles({ height: "100%" });
        return (React.createElement("div", __assign({}, this.getRenderProps()), 
            React.createElement(AppErrorBar_1.AppErrorBar, null), 
            this.props.children));
    };
    return App;
}(Component_1.Component));
exports.App = App;
//# sourceMappingURL=App.js.map