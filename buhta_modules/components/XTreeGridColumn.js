"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//import {XComponent, XComponentProps, XComponentState} from "./XComponent";
var X = require("./X");
var XTreeGridColumn = (function (_super) {
    __extends(XTreeGridColumn, _super);
    function XTreeGridColumn(props, context) {
        _super.call(this, props, context);
        //this.state.disabled = false;
    }
    XTreeGridColumn.prototype.render = function () {
        //this.addClassName("btn");
        //this.toggleClassName(this.props.disabled, "disabled");
        return (null);
        //TreeGrid from {this.props.compiler} and {this.props.framework}!clickCount={this.state.clickCount}
    };
    return XTreeGridColumn;
}(X.XComponent));
exports.XTreeGridColumn = XTreeGridColumn;
//# sourceMappingURL=XTreeGridColumn.js.map