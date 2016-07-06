"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
//import * as _ from "lodash";
//import {XComponent, XComponentProps, XVisibleProps, XOnClickProps} from "./XComponent";
//import {XTreeGridColumnProps} from "./XTreeGridColumn";
var X = require("./X");
var _ = require("~lodash/index");
var SQL_1 = require("../buhta-core/SQL");
var InternalColumn = (function () {
    function InternalColumn() {
    }
    return InternalColumn;
}());
var InternalRow = (function () {
    function InternalRow() {
        this.cellElements = [];
    }
    return InternalRow;
}());
var InternalTreeNode = (function () {
    function InternalTreeNode() {
        this.cellElements = [];
        this.children = [];
    }
    InternalTreeNode.prototype.pushRowRecursive = function (rows, maxPageLength) {
        if (rows.length >= maxPageLength)
            return;
        var row = new InternalRow();
        row.sourceIndex = this.sourceIndex;
        row.node = this;
        rows.push(row);
        if (this.expanded) {
            this.children.forEach(function (child) {
                child.pushRowRecursive(rows, maxPageLength);
            });
        }
    };
    return InternalTreeNode;
}());
//export class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {
var XTreeGrid = (function (_super) {
    __extends(XTreeGrid, _super);
    function XTreeGrid(props, context) {
        _super.call(this, props, context);
        //this.state.columns=[];
    }
    XTreeGrid.prototype.createColumns = function () {
        var _this = this;
        this.columns = [];
        console.log("1");
        var columnsTag = this.getChildren("XTreeGridColumns");
        columnsTag.forEach(function (tag) {
            var columnTagList = _this.getChildrenOfProps(tag.props, "XTreeGridColumn");
            columnTagList.forEach(function (propCol) {
                var col = new InternalColumn();
                col.props = propCol.props;
                col.width = propCol.props.width || 150;
                col.caption = propCol.props.caption;
                col.fieldName = propCol.props.fieldName;
                col.caption = propCol.props.caption || col.fieldName;
                _this.columns.push(col);
            });
        });
    };
    XTreeGrid.prototype.initFocused = function () {
        this.focusedRowIndex = 0;
        this.focusedCellIndex = 0;
    };
    XTreeGrid.prototype.createNodes = function () {
        if (!this.props.treeMode)
            return;
        if (this.props.hierarchyFieldName) {
            this.createNodesFromHierarchyField();
        }
        else
            console.error("unknown hierarchy mode");
    };
    XTreeGrid.prototype.createNodesFromHierarchyField = function () {
        var _this = this;
        if (!this.dataSource)
            return;
        if (!this.props.hierarchyDelimiters) {
            console.error("XTreeGrid: hierarchyDelimiters is undefined");
            return;
        }
        var sorted = this.dataSource.map(function (obj, index) {
            return {
                hierarchyStr: obj[_this.props.hierarchyFieldName].toString(),
                objIndex: index
            };
        });
        sorted = _.sortBy(sorted, ["hierarchyStr"]);
        var cache = {};
        this.nodes = [];
        sorted.forEach(function (s, index) {
            var splitted = s.hierarchyStr.split(_this.props.hierarchyDelimiters);
            var parentId;
            var nodeId;
            if (splitted.length === 1)
                nodeId = s.hierarchyStr;
            else {
                nodeId = _.last(splitted);
                parentId = splitted.slice(0, splitted.length - 1).join(_this.props.hierarchyDelimiters.slice(0, 1));
            }
            if (!parentId) {
                if (cache[nodeId])
                    console.error("XTreeGrid: nodeId '" + nodeId + "' is duplicated");
                else {
                    var node = new InternalTreeNode();
                    node.sourceIndex = s.objIndex;
                    node.level = 0;
                    node.expanded = node.level < _this.props.autoExpandNodesToLevel;
                    cache[nodeId] = node;
                    _this.nodes.push(node);
                }
            }
            else {
                var parentNode = cache[parentId];
                var node = new InternalTreeNode();
                node.sourceIndex = s.objIndex;
                node.level = parentNode.level + 1;
                node.expanded = node.level < _this.props.autoExpandNodesToLevel;
                cache[s.hierarchyStr] = node;
                parentNode.children.push(node);
            }
            // console.log({str: s.hierarchyStr, parentId, nodeId});
        });
    };
    XTreeGrid.prototype.createRows = function () {
        var _this = this;
        this.rows = [];
        if (this.props.treeMode) {
            if (this.nodes) {
                this.nodes.forEach(function (node) {
                    node.pushRowRecursive(_this.rows, _this.pageLength);
                });
            }
        }
        else {
            if (!this.dataSource)
                return;
            this.dataSource.forEach(function (obj, index) {
                var row = new InternalRow();
                row.sourceIndex = index;
                //row.sourceObject = obj;
                _this.rows.push(row);
            });
            this.initFocused();
        }
        if (this.columns && this.columns.length > 0 && this.dataSource)
            this.columns[0].footer = this.dataSource.length + " поз.";
    };
    XTreeGrid.prototype.filterData = function () {
        //            if (this.props.dataSource) {
        //                this.state.data = this.props.dataSource.map((row) => row);
        //            }
        //this.rows = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);
    };
    XTreeGrid.prototype.didMount = function () {
        this.handleChangeFocused();
    };
    XTreeGrid.prototype.willMount = function () {
        _super.prototype.willMount.call(this);
        this.createColumns();
        this.createNodes();
        this.createRows();
        this.pageLength = 500;
    };
    XTreeGrid.prototype.refreshDataSource = function () {
        this.dataSource = this.props.dataSource;
        this.createColumns();
        this.createNodes();
        this.createRows();
        this.forceUpdate();
    };
    XTreeGrid.prototype.testLoad500 = function () {
        var _this = this;
        SQL_1.executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
            .done(function (table) {
            _this.dataSource = table.rows.map(function (r) {
                return { Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"] };
            });
            _this.createColumns();
            _this.createNodes();
            _this.createRows();
            _this.forceUpdate();
            console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
        })
            .fail(function (err) {
            alert(err.message);
        });
    };
    XTreeGrid.prototype.willUnmount = function () {
    };
    XTreeGrid.prototype.willReceiveProps = function (nextProps) {
    };
    XTreeGrid.prototype.didUpdate = function (prevProps, prevState, prevContext) {
        this.handleChangeFocused();
    };
    XTreeGrid.prototype.renderRows = function () {
        var _this = this;
        //console.log("renderRows-start()");
        var ret = [];
        if (!this.rows)
            return ret;
        this.rows.forEach(function (row, index) {
            ret.push(_this.renderRow(row, index));
        });
        //console.log("renderRows-end()");
        return ret;
    };
    XTreeGrid.prototype.renderRow = function (row, rowIndex) {
        return (React.createElement("tr", {key: rowIndex, ref: function (e) { row.element = e; }}, this.renderCells(row, rowIndex)));
    };
    XTreeGrid.prototype.renderCells = function (row, rowIndex) {
        var _this = this;
        var ret = [];
        this.columns.forEach(function (col, colIndex) {
            ret.push(_this.renderCell(row, rowIndex, col, colIndex));
        });
        return ret;
    };
    XTreeGrid.prototype.renderCell = function (row, rowIndex, col, colIndex) {
        var _this = this;
        var objIndex = row.sourceIndex;
        var str = this.dataSource[objIndex][col.props.fieldName].toString();
        //let str = this.rows[rowIndex].sourceObject[col.props.fieldName].toString();
        // return <td key={colIndex}>
        //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
        // </td>;
        var node = row.node;
        var hierarchyPaddingDiv;
        if (this.props.treeMode && (col.props.showHierarchyPadding || col.props.showHierarchyTree)) {
            hierarchyPaddingDiv = React.createElement("span", {style: { width: node.level * 20, display: "inline-block" }});
        }
        var tdStyle = { overflow: "hidden" };
        if (this.props.treeMode && col.props.showHierarchyTree) {
            tdStyle.borderBottomColor = "rgba(255, 0, 0, 0)";
        }
        var strSpanStyle = {
            lineHeight: "100%",
            display: "inline-block"
        };
        if (this.props.treeMode && col.props.showHierarchyTree && node.expanded && node.children.length > 0) {
            strSpanStyle.fontWeight = "bold";
        }
        var strSpan = React.createElement("span", {style: strSpanStyle}, str);
        var collapseIconDiv;
        if (this.props.treeMode && col.props.showHierarchyTree) {
            if (node.children.length > 0) {
                if (node.expanded) {
                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = false; _this.createRows(); _this.forceUpdate(); }}, React.createElement("i", {className: "fa fa-caret-down"}))));
                }
                else {
                    collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}, React.createElement("span", {className: "icon is-small", style: { cursor: "pointer" }, onClick: function (e) { node.expanded = true; _this.createRows(); _this.forceUpdate(); }}, React.createElement("i", {className: "fa fa-caret-right"}))));
                }
            }
            else {
                collapseIconDiv = (React.createElement("div", {className: "row-collapse-icon", style: { width: 20, flex: "0 0 auto" }}));
            }
            ;
        }
        ;
        return (React.createElement("td", {key: colIndex, style: tdStyle, ref: function (e) { return row.cellElements[colIndex] = e; }, onClick: function (e) { _this.setFocusedCell(rowIndex, colIndex); }}, React.createElement("div", {style: { display: "flex", flexDirection: "row", alignItems: "center" }}, React.createElement("div", {className: "row-checkbox", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-padding", style: { flex: "0 0 auto" }}, hierarchyPaddingDiv), collapseIconDiv, React.createElement("div", {className: "row-icon", style: { flex: "0 0 auto" }}), React.createElement("div", {className: "row-str", style: { flex: "0 1 auto" }}, strSpan))));
    };
    XTreeGrid.prototype.setFocusedCell = function (rowIndex, cellIndex) {
        this.focusedRowIndex = rowIndex;
        this.focusedCellIndex = cellIndex;
        this.handleChangeFocused();
    };
    XTreeGrid.prototype.handleTableWheel = function (e) {
        // if (e.deltaY > 0)
        //     this.incPageStartIndex(3);
        // else if (e.deltaY < 0)
        //     this.decPageStartIndex(3);
        // console.log(e.deltaY);
        // this.forceUpdate();
    };
    XTreeGrid.prototype.handleScroll = function (e) {
        $(this.headerElement).css({ top: this.bodyWrapperElement.scrollTop });
        var pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight() - 0;
        $(this.footerElement).css({ top: pos });
        $(this.headerFakeRow).css({ height: $(this.headerElement).outerHeight() });
        $(this.footerFakeRow).css({ height: $(this.footerElement).outerHeight() });
        //this.forceUpdate();
        //             //console.log(e);
        //             //window["eee"] = e;
        //             console.log(this.bodyWrapperElement.scrollTop);
        //             this.bodyTopFakeHeigth = this.bodyWrapperElement.scrollTop;
        //             console.log("-----------");
        //             console.log(this.bodyWrapperElement.scrollHeight);
        //             console.log(this.bodyWrapperElement.clientHeight);
        //             console.log(this.bodyWrapperElement.scrollTop);
        // //            this.bodyBottomFakeHeight = this.bodyWrapperElement.scrollHeight - this.bodyWrapperElement.clientHeight - this.bodyWrapperElement.scrollTop;
        //             this.bodyBottomFakeHeight = 1500 - this.bodyWrapperElement.clientHeight - this.bodyWrapperElement.scrollTop;
        //             console.log("bottom- " + this.bodyBottomFakeHeight);
        //
        //             this.state.pageStartIndex = 500 * this.bodyWrapperElement.scrollTop / 1500;
        //
        //             this.forceUpdate();
    };
    XTreeGrid.prototype.handleChangeFocused = function () {
        if (!this.rows)
            return;
        this.rows.forEach(function (row) {
            if (row.element)
                $(row.element).removeClass("tree-grid-focused-row");
            row.cellElements.forEach(function (cell) {
                if (cell)
                    $(cell).removeClass("tree-grid-focused-cell");
            });
        });
        var focusedRow = this.rows[this.focusedRowIndex];
        if (focusedRow && focusedRow.element) {
            $(focusedRow.element).addClass("tree-grid-focused-row");
            var focusedCellElement = focusedRow.cellElements[this.focusedCellIndex];
            if (focusedCellElement) {
                $(focusedCellElement).addClass("tree-grid-focused-cell");
            }
        }
    };
    XTreeGrid.prototype.getFocusedCellElement = function () {
        return this.rows[this.focusedRowIndex].cellElements[this.focusedCellIndex];
    };
    XTreeGrid.prototype.getFocusedRowElement = function () {
        return this.rows[this.focusedRowIndex].element;
    };
    XTreeGrid.prototype.moveFocusedCellDown = function () {
        if (!this.rows)
            return;
        if (this.focusedRowIndex < this.rows.length - 1) {
            this.focusedRowIndex++;
            this.handleChangeFocused();
            var rowEl = $(this.getFocusedRowElement());
            // ушло за пределы видимости
            if (rowEl.position().top + rowEl.height() >
                this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
                    this.bodyWrapperElement.clientHeight + $(this.footerElement).outerHeight();
            }
        }
    };
    XTreeGrid.prototype.moveFocusedCellLeft = function () {
        if (!this.rows)
            return;
        if (this.focusedCellIndex > 0) {
            this.focusedCellIndex--;
            this.handleChangeFocused();
        }
    };
    XTreeGrid.prototype.moveFocusedCellRight = function () {
        if (!this.rows)
            return;
        if (this.focusedCellIndex < this.columns.length - 1) {
            this.focusedCellIndex++;
            this.handleChangeFocused();
        }
    };
    XTreeGrid.prototype.moveFocusedCellUp = function () {
        if (!this.rows)
            return;
        if (this.focusedRowIndex > 0) {
            this.focusedRowIndex--;
            this.handleChangeFocused();
            var rowEl = $(this.getFocusedRowElement());
            // ушло за пределы видимости
            if (rowEl.position().top < this.bodyWrapperElement.scrollTop + $(this.headerElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.headerElement).outerHeight();
            }
        }
    };
    XTreeGrid.prototype.handleBodyKeyDown = function (e) {
        // if (e.key === Keycode.Down) {
        //     this.moveFocusedCellDown();
        //     e.preventDefault();
        // }
        // else if (e.key === Keycode.Up) {
        //     this.moveFocusedCellUp();
        //     e.preventDefault();
        // }
        // else if (e.key === Keycode.Left) {
        //     this.moveFocusedCellLeft();
        //     e.preventDefault();
        // }
        // else if (e.key === Keycode.Right) {
        //     this.moveFocusedCellRight();
        //     e.preventDefault();
        // }
    };
    XTreeGrid.prototype.renderColumnHeaders = function () {
        var _this = this;
        var colWidths = [];
        var colHeaders = [];
        this.columns.forEach(function (col) {
            colWidths.push(React.createElement("col", {width: col.width.toString() + "px"}));
            var tdStyle = { overflow: "hidden" };
            colHeaders.push(React.createElement("td", {style: tdStyle}, col.caption));
        });
        return (React.createElement("div", {ref: function (e) { return _this.headerElement = e; }, style: { position: "absolute", border: "0px solid red" }}, React.createElement("table", {className: "tree-grid-header", style: { tableLayout: "fixed", borderCollapse: "collapse" }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colHeaders)))));
    };
    XTreeGrid.prototype.renderColumnFooters = function () {
        var _this = this;
        var colWidths = [];
        var colFooters = [];
        var isFooterEmpty = true;
        this.columns.forEach(function (col) {
            colWidths.push(React.createElement("col", {width: col.width.toString() + "px"}));
            if (col.footer)
                isFooterEmpty = false;
            var tdStyle = { overflow: "hidden" };
            colFooters.push(React.createElement("td", {style: tdStyle}, col.footer));
        });
        if (!isFooterEmpty)
            return (React.createElement("div", {ref: function (e) { return _this.footerElement = e; }, style: { position: "absolute", border: "0px solid blue" }}, React.createElement("table", {className: "tree-grid-footer", style: { tableLayout: "fixed", borderCollapse: "collapse" }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, colFooters)))));
        else
            return undefined;
    };
    XTreeGrid.prototype.renderGridBody = function () {
        var _this = this;
        var colWidths = [];
        this.columns.forEach(function (col) {
            colWidths.push(React.createElement("col", {width: col.width.toString() + "px"}));
        });
        return (React.createElement("table", {className: "tree-grid-body", tabIndex: 0, onKeyDown: function (e) { _this.handleBodyKeyDown(e); }, style: { tableLayout: "fixed", borderCollapse: "collapse", position: "relative" }}, React.createElement("colgroup", null, colWidths), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.headerFakeRow = e; }})), this.renderRows(), React.createElement("tr", null, React.createElement("td", {ref: function (e) { return _this.footerFakeRow = e; }})))));
    };
    XTreeGrid.prototype.render = function () {
        var _this = this;
        //this.addClassName("button");
        console.log("2");
        return (React.createElement("div", {className: "tree-grid", style: { display: "flex", flexDirection: "column" }}, React.createElement("div", {className: "tree-grid-header-wrapper", style: { flex: "0 0 auto" }}, React.createElement("button", {onClick: function () { _this.testLoad500(); }}, "refresh 500"), React.createElement("button", {onClick: function () { _this.filterData(); _this.forceUpdate(); console.log("forceUpdate"); }}, "filter"), "заголовок и т.д."), React.createElement("div", {className: "tree-grid-body-wrapper", style: { position: "relative", overflow: "auto", flex: "0 1 auto" }, onWheel: this.handleTableWheel.bind(this), onScroll: this.handleScroll.bind(this), ref: function (e) { return _this.bodyWrapperElement = e; }}, React.createElement("div", null, this.renderGridBody(), this.renderColumnHeaders(), this.renderColumnFooters())), React.createElement("div", {className: "tree-grid-footer-wrapper", style: { flex: "0 1 auto" }}, "футер и тд")));
    };
    return XTreeGrid;
}(X.XComponent));
exports.XTreeGrid = XTreeGrid;
//# sourceMappingURL=XTreeGrid.js.map