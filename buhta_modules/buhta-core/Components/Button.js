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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var VisiblePlugin_1 = require("../Plugins/VisiblePlugin");
var OnClickPlugin_1 = require("../Plugins/OnClickPlugin");
var Component_1 = require("./Component");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props, context) {
        _super.call(this, props, context);
        this.props = props;
    }
    Button.prototype.render = function () {
        this.addClassName("button");
        return (React.createElement("button", __assign({}, this.getRenderProps()), this.props.children));
    };
    Button = __decorate([
        VisiblePlugin_1.VisiblePlugin,
        OnClickPlugin_1.OnClickPlugin
    ], Button);
    return Button;
}(Component_1.Component));
exports.Button = Button;
//# sourceMappingURL=Button.js.map