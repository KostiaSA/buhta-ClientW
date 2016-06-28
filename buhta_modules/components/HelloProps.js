"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Button_1 = require("../buhta-core/Components/Button");
var SQL_1 = require("../buhta-core/SQL");
var SplitPane_1 = require("../buhta-core/Components/SplitPane/SplitPane");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
        this.but2visible = false;
    }
    Hello.prototype.handleClick = function () {
        console.log("Ok");
        SQL_1.executeSQL("select TOP 50 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
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
    Hello.prototype.clickHanler = function () {
        console.log("click1");
        this.but2visible = true;
        this.forceUpdate();
    };
    Hello.prototype.render = function () {
        return React.createElement("div", null, React.createElement("button", {onClick: this.clickHanler.bind(this)}, "Кнопка 1"), React.createElement(Button_1.Button, {visible: this.but2visible, onClick: function (e) { return alert("Ok1"); }}, "Кнопка 2"), React.createElement(SplitPane_1.default, {split: "vertical", minSize: 50, defaultSize: 100}, React.createElement("div", null, "3костяee333===w==444==33====333"), React.createElement("div", null)));
        // return <div>
        //     <button onClick={ this.handleClick }>get sql</button>
        //     Hello 3++44=66332===22o3m {this.props.compiler} and {this.props.framework}!
        //     <SplitPane split="vertical" minSize={50} defaultSize={100}>
        //         <div>3костя333=====444==33====333</div>
        //         <div></div>
        //     </SplitPane>
        // </div>;
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=HelloProps.js.map