"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SplitPane = require("react-split-pane");
var Core = require("../buhta-core");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.handleClick = function () {
        console.log("Ok");
        Core.executeSQL("select TOP 50 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
            .done(function (table) {
            // this.dataSource = table.rows.map((r) => {
            //     return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
            // });
            console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
        })
            .fail(function (err) {
            alert(err.message);
        });
    };
    Hello.prototype.render = function () {
        return React.createElement("div", null, React.createElement("button", {onClick: this.handleClick}, "get sql"), "Hello 3++44=66332===22o3m ", this.props.compiler, " and ", this.props.framework, "!", React.createElement(SplitPane, {split: "vertical", minSize: 50, defaultSize: 100}, React.createElement("div", null, "3костя333=====444==33====333"), React.createElement("div", null)));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=HelloProps.js.map