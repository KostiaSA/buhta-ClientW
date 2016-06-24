"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SplitPane = require("react-split-pane");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null, "Hello 3++44=66332===22o3m ", this.props.compiler, " and ", this.props.framework, "!", React.createElement(SplitPane, {split: "vertical", minSize: 50, defaultSize: 100}, React.createElement("div", null, "3333=====444==33====333"), React.createElement("div", null)));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=HelloProps.js.map