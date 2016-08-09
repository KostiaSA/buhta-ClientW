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
var UIComponent_1 = require("../UIComponent/UIComponent");
var UIForm = (function (_super) {
    __extends(UIForm, _super);
    function UIForm() {
        _super.apply(this, arguments);
    }
    UIForm.prototype.render = function () {
        var _this = this;
        this.clearStyles();
        //this.addClassName("Layout");
        //this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});
        if (this.props.sizeTo === "parent") {
            this.addStyles({ height: "100%" });
        }
        //      this.addProps({onClick: this.props.onClick});
        var children = this.props.children.map(function (child) {
            if (_.isString(child))
                return child;
            else
                return child.render(_this, null);
        });
        return (React.createElement("div", __assign({}, this.getRenderProps(), {ref: function (e) { _this.nativeElement = e; }}), children));
    };
    return UIForm;
}(UIComponent_1.UIComponent));
exports.UIForm = UIForm;
//# sourceMappingURL=UIForm.js.map