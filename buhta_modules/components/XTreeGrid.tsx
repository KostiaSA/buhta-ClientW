import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";

//import {XComponent, XComponentProps, XVisibleProps, XOnClickProps} from "./XComponent";
//import {XTreeGridColumnProps} from "./XTreeGridColumn";

import * as X from "./X";

export interface XTreeGridProps extends X.XComponentProps, X.XVisibleProps, X.XOnClickProps {
    // style?: React.CSSProperties;
    // className?: string;
    dataSource?: any;
    rowHeight?: number;
    keyFieldName?: string;
    parentKeyFieldName?: string;
    hierarchyFieldName?: string;
    hierarchyDelimiters?: string;
    treeMode?: boolean;
    autoExpandNodesToLevel?: number;
}


export interface XTreeGridState {
}


class InternalColumn {
    props: X.XTreeGridColumnProps;
    width: number;
    caption: string;
    fieldName: string;
    footer: string;
}

class InternalRow {
    element: Element;
    ///   sourceObject: any;
    sourceIndex: number;
    cellElements: Element[] = [];
    node: InternalTreeNode;

}

class InternalTreeNode {
    element: Element;
    sourceObject: any;
    sourceIndex: number;
    cellElements: Element[] = [];

    // для treeMode;
    parent: InternalTreeNode;
    children: InternalTreeNode[] = [];
    expanded: boolean;
    level: number;

    pushRowRecursive(rows: InternalRow[], maxPageLength: number) {

        if (rows.length >= maxPageLength)
            return;

        let row = new InternalRow();
        row.sourceIndex = this.sourceIndex;
        row.node = this;
        rows.push(row);

        if (this.expanded) {
            this.children.forEach((child: InternalTreeNode) => {
                child.pushRowRecursive(rows, maxPageLength);
            });
        }


    }
}


//export class XTreeGrid<P extends XTreeGridProps, S extends XTreeGridState> extends XComponent<P, S> {
export class XTreeGrid extends X.XComponent<XTreeGridProps, XTreeGridState> {

    constructor(props: XTreeGridProps, context) {
        super(props, context);
        //this.state.columns=[];
    }

    private columns: InternalColumn[];
    private pageLength: number;
    private rows: InternalRow[];
    private nodes: InternalTreeNode[];
    private focusedRowIndex: number;
    private focusedCellIndex: number;
    private dataSource: any[];


    private createColumns() {
        this.columns = [];

        console.log("1");
        let columnsTag = this.getChildren("XTreeGridColumns");

        columnsTag.forEach((tag: JSX.Element) => {
            let columnTagList = this.getChildrenOfProps(tag.props, "XTreeGridColumn");

            columnTagList.forEach((propCol: JSX.Element) => {

                let col = new InternalColumn();
                col.props = propCol.props;
                col.width = propCol.props.width || 150;
                col.caption = propCol.props.caption;
                col.fieldName = propCol.props.fieldName;
                col.caption = propCol.props.caption || col.fieldName;
                this.columns.push(col);
            });
        });


    }

    private initFocused() {
        this.focusedRowIndex = 0;
        this.focusedCellIndex = 0;
    }


    private createNodes() {
        if (!this.props.treeMode)
            return;

        if (this.props.hierarchyFieldName) {
            this.createNodesFromHierarchyField();
        }
        else
            console.error("unknown hierarchy mode");
    }


    private createNodesFromHierarchyField() {


        if (!this.dataSource)
            return;


        if (!this.props.hierarchyDelimiters) {
            console.error("XTreeGrid: hierarchyDelimiters is undefined");
            return;
        }


        interface ISorted {
            hierarchyStr: string;
            objIndex: number;
        }

        let sorted: ISorted[] = this.dataSource.map((obj, index) => {
            return {
                hierarchyStr: obj[this.props.hierarchyFieldName].toString(),
                objIndex: index
            };
        });

        sorted = _.sortBy(sorted, ["hierarchyStr"]);

        let cache: { [hierarchyId: string]: InternalTreeNode; } = {};

        this.nodes = [];

        sorted.forEach((s, index) => {

            let splitted = s.hierarchyStr.split(this.props.hierarchyDelimiters);
            let parentId;
            let nodeId;
            if (splitted.length === 1)
                nodeId = s.hierarchyStr;
            else {
                nodeId = _.last(splitted);
                parentId = splitted.slice(0, splitted.length - 1).join(this.props.hierarchyDelimiters.slice(0, 1));
            }

            if (!parentId) {
                if (cache[nodeId])
                    console.error("XTreeGrid: nodeId '" + nodeId + "' is duplicated");
                else {
                    let node = new InternalTreeNode();
                    node.sourceIndex = s.objIndex;
                    node.level = 0;
                    node.expanded = node.level < this.props.autoExpandNodesToLevel;
                    cache[nodeId] = node;
                    this.nodes.push(node);
                }
            }
            else {
                let parentNode = cache[parentId];

                let node = new InternalTreeNode();
                node.sourceIndex = s.objIndex;
                node.level = parentNode.level + 1;
                node.expanded = node.level < this.props.autoExpandNodesToLevel;
                cache[s.hierarchyStr] = node;
                parentNode.children.push(node);
            }


            // console.log({str: s.hierarchyStr, parentId, nodeId});


        });

    }

    private createRows() {

        this.rows = [];

        if (this.props.treeMode) {
            if (this.nodes) {
                this.nodes.forEach((node: InternalTreeNode) => {
                    node.pushRowRecursive(this.rows, this.pageLength);
                });
            }
        }
        else {

            if (!this.dataSource)
                return;

            this.dataSource.forEach((obj, index) => {
                let row = new InternalRow();
                row.sourceIndex = index;
                //row.sourceObject = obj;
                this.rows.push(row);
            });

            this.initFocused();
        }

        if (this.columns && this.columns.length > 0 && this.dataSource)
            this.columns[0].footer = this.dataSource.length + " поз.";
    }

    private filterData() {

//            if (this.props.dataSource) {
//                this.state.data = this.props.dataSource.map((row) => row);
//            }
        this.rows = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);

    }

    protected didMount() {
        this.handleChangeFocused();
    }


    protected willMount() {
        super.willMount();
        this.createColumns();
        this.createNodes();
        this.createRows();
        this.pageLength = 500;
    }

    protected refreshDataSource() {
        this.dataSource = this.props.dataSource;
        this.createColumns();
        this.createNodes();
        this.createRows();
        this.forceUpdate();
    }


    private testLoad500() {

        // executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
        //     .done((table) => {
        //
        //         this.dataSource = table.rows.map((r) => {
        //             return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
        //         });
        //         this.createColumns();
        //         this.createNodes();
        //         this.createRows();
        //         this.forceUpdate();
        //
        //
        //         console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
        //     })
        //     .fail((err) => {
        //         alert(err.message);
        //     });

    }

    protected willUnmount() {
    }


    protected willReceiveProps(nextProps: XTreeGridProps) {
    }


    protected didUpdate(prevProps: XTreeGridProps, prevState: XTreeGridState, prevContext: any) {
        this.handleChangeFocused();
    }


    private renderRows(): JSX.Element[] {
        //console.log("renderRows-start()");
        let ret: JSX.Element[] = [];
        if (!this.rows)
            return ret;

        this.rows.forEach((row, index) => {
            ret.push(this.renderRow(row, index));
        });

        //console.log("renderRows-end()");
        return ret;
    }

    private renderRow(row: InternalRow, rowIndex: number): JSX.Element {
        return (
            <tr
                key={rowIndex}
                ref={ (e) => { row.element = e;}}
            >
                { this.renderCells(row, rowIndex)}
            </tr>
        );
    }

    private renderCells(row: InternalRow, rowIndex: number): JSX.Element[] {
        let ret: JSX.Element[] = [];
        this.columns.forEach((col, colIndex) => {
            ret.push(this.renderCell(row, rowIndex, col, colIndex));
        });
        return ret;
    }

    private renderCell(row: InternalRow, rowIndex: number, col: InternalColumn, colIndex: number): JSX.Element {

        let objIndex = row.sourceIndex;
        let str = this.dataSource[objIndex][col.props.fieldName].toString();
        //let str = this.rows[rowIndex].sourceObject[col.props.fieldName].toString();
        // return <td key={colIndex}>
        //     <div style={{height:16, overflow:"hidden"}}>{str}</div>
        // </td>;

        let node = row.node;

        let hierarchyPaddingDiv: JSX.Element;
        if (this.props.treeMode && (col.props.showHierarchyPadding || col.props.showHierarchyTree)) {
            hierarchyPaddingDiv = <span style={{width:node.level * 20, display: "inline-block"}}></span>;
        }

        let tdStyle: any = {overflow: "hidden"};
        if (this.props.treeMode && col.props.showHierarchyTree) {
            tdStyle.borderBottomColor = "rgba(255, 0, 0, 0)";
        }

        let strSpanStyle: any = {
            lineHeight: "100%",
            display: "inline-block"
        };
        if (this.props.treeMode && col.props.showHierarchyTree && node.expanded && node.children.length > 0) {
            strSpanStyle.fontWeight = "bold";
        }
        let strSpan = <span style={ strSpanStyle}>{str}</span>;


        let collapseIconDiv;

        if (this.props.treeMode && col.props.showHierarchyTree) {
            if (node.children.length > 0) {
                if (node.expanded) {
                    collapseIconDiv = (
                        <div
                            className="row-collapse-icon"
                            style={{ width:20, flex: "0 0 auto"}}
                        >
                                <span
                                    className="icon is-small"
                                    style={{cursor: "pointer"}}
                                    onClick={ (e) => {node.expanded = false; this.createRows(); this.forceUpdate();} }
                                >
                                  <i className="fa fa-caret-down"></i>
                            </span>
                        </div>);
                }
                else {

                    collapseIconDiv = (
                        <div className="row-collapse-icon" style={{ width:20, flex: "0 0 auto"}}>
                                <span
                                    className="icon is-small"
                                    style={{cursor: "pointer"}}
                                    onClick={ (e) => {node.expanded = true; this.createRows(); this.forceUpdate();} }
                                >
                                  <i className="fa fa-caret-right"></i>
                                </span>
                        </div>);

                }

            }
            else {
                collapseIconDiv = (
                    <div className="row-collapse-icon" style={{ width:20, flex: "0 0 auto"}}>
                    </div>);

            }
            ;

        }
        ;

        return (
            <td
                key={colIndex}
                style={tdStyle}
                ref={ (e) => row.cellElements[colIndex] = e}
                onClick={ (e) => { this.setFocusedCell(rowIndex,colIndex);} }
            >
                <div style={{ display:"flex", flexDirection: "row", alignItems:"center" }}>
                    <div className="row-checkbox" style={{ flex: "0 0 auto"}}>

                    </div>

                    <div className="row-padding" style={{ flex: "0 0 auto"}}>
                        {hierarchyPaddingDiv}
                    </div>

                    {collapseIconDiv}

                    <div className="row-icon" style={{ flex: "0 0 auto"}}>

                    </div>
                    <div className="row-str" style={{ flex: "0 1 auto"}}>
                        {strSpan}
                    </div>
                </div>
            </td>
        );
    }

    private setFocusedCell(rowIndex: number, cellIndex: number) {

        this.focusedRowIndex = rowIndex;
        this.focusedCellIndex = cellIndex;
        this.handleChangeFocused();
    }


    private handleTableWheel(e: WheelEvent) {
        // if (e.deltaY > 0)
        //     this.incPageStartIndex(3);
        // else if (e.deltaY < 0)
        //     this.decPageStartIndex(3);
        // console.log(e.deltaY);
        // this.forceUpdate();
    }

    private handleScroll(e: UIEvent) {
        $(this.headerElement).css({top: this.bodyWrapperElement.scrollTop});

        let pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight() - 0;
        $(this.footerElement).css({top: pos});

        $(this.headerFakeRow).css({height: $(this.headerElement).outerHeight()});
        $(this.footerFakeRow).css({height: $(this.footerElement).outerHeight()});

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
    }


    private handleChangeFocused() {
        if (!this.rows)
            return;

        this.rows.forEach((row) => {
            if (row.element)
                $(row.element).removeClass("tree-grid-focused-row");

            row.cellElements.forEach((cell) => {
                if (cell)
                    $(cell).removeClass("tree-grid-focused-cell");

            });
        });

        let focusedRow = this.rows[this.focusedRowIndex];
        if (focusedRow && focusedRow.element) {
            $(focusedRow.element).addClass("tree-grid-focused-row");

            let focusedCellElement = focusedRow.cellElements[this.focusedCellIndex];
            if (focusedCellElement) {
                $(focusedCellElement).addClass("tree-grid-focused-cell");
            }
        }


    }

    private getFocusedCellElement(): Element {
        return this.rows[this.focusedRowIndex].cellElements[this.focusedCellIndex];
    }

    private getFocusedRowElement(): Element {
        return this.rows[this.focusedRowIndex].element;
    }

    private moveFocusedCellDown() {
        if (!this.rows)
            return;

        if (this.focusedRowIndex < this.rows.length - 1) {
            this.focusedRowIndex++;
            this.handleChangeFocused();

            let rowEl = $(this.getFocusedRowElement());

            // ушло за пределы видимости
            if (rowEl.position().top + rowEl.height() >
                this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
                    this.bodyWrapperElement.clientHeight + $(this.footerElement).outerHeight();
            }

        }
    }

    private moveFocusedCellLeft() {
        if (!this.rows)
            return;

        if (this.focusedCellIndex > 0) {
            this.focusedCellIndex--;
            this.handleChangeFocused();

        }
    }

    private moveFocusedCellRight() {
        if (!this.rows)
            return;

        if (this.focusedCellIndex < this.columns.length - 1) {
            this.focusedCellIndex++;
            this.handleChangeFocused();

        }
    }


    private moveFocusedCellUp() {
        if (!this.rows)
            return;

        if (this.focusedRowIndex > 0) {
            this.focusedRowIndex--;
            this.handleChangeFocused();

            let rowEl = $(this.getFocusedRowElement());

            // ушло за пределы видимости
            if (rowEl.position().top < this.bodyWrapperElement.scrollTop + $(this.headerElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.headerElement).outerHeight();
            }
        }
    }


    handleBodyKeyDown(e: React.KeyboardEvent) {
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
    }


    renderColumnHeaders(): JSX.Element {

        let colWidths: JSX.Element[] = [];
        let colHeaders: JSX.Element[] = [];

        this.columns.forEach((col) => {
            colWidths.push(<col width={ col.width.toString() + "px" }/>);

            let tdStyle: any = {overflow: "hidden"};

            colHeaders.push(<td style={tdStyle}>{col.caption}</td>);
        });

        return (
            <div
                ref={ (e) => this.headerElement = e}
                style={{ position:"absolute", border:"0px solid red" }}>
                <table
                    className="tree-grid-header"
                    style={{tableLayout: "fixed",borderCollapse: "collapse"}}
                >
                    <colgroup>
                        {colWidths}
                    </colgroup>
                    <tbody>
                    <tr>
                        {colHeaders}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderColumnFooters(): JSX.Element {

        let colWidths: JSX.Element[] = [];
        let colFooters: JSX.Element[] = [];

        let isFooterEmpty = true;
        this.columns.forEach((col) => {
            colWidths.push(<col width={ col.width.toString() + "px" }/>);
            if (col.footer)
                isFooterEmpty = false;
            let tdStyle: any = {overflow: "hidden"};
            colFooters.push(<td style={tdStyle}>{col.footer}</td>);
        });

        if (!isFooterEmpty)

            return (
                <div
                    ref={ (e) => this.footerElement = e}
                    style={{ position:"absolute", border:"0px solid blue"}}
                >
                    <table
                        className="tree-grid-footer"
                        style={{tableLayout: "fixed",borderCollapse: "collapse"}}
                    >
                        <colgroup>
                            {colWidths}
                        </colgroup>
                        <tbody>
                        <tr>
                            {colFooters}
                        </tr>
                        </tbody>
                    </table>

                </div>
            );
        else
            return undefined;
    }

    renderGridBody(): JSX.Element {

        let colWidths: JSX.Element[] = [];
        this.columns.forEach((col) => {
            colWidths.push(<col width={ col.width.toString() + "px" }/>);
        });

        return (
            <table
                className="tree-grid-body"
                tabIndex={0}
                onKeyDown={ (e) => {  this.handleBodyKeyDown(e); } }
                style={{ tableLayout: "fixed", borderCollapse: "collapse", position: "relative"}}
            >
                <colgroup>
                    {colWidths}
                </colgroup>
                <tbody>
                <tr>
                    <td ref={ (e) => this.headerFakeRow = e}></td>
                </tr>
                {this.renderRows()}
                <tr>
                    <td ref={ (e) => this.footerFakeRow = e}></td>
                </tr>
                </tbody>
            </table>
        );
    }

//bodyTopFakeHeigth: number = 1;
    bodyWrapperElement: any;
    headerFakeRow: any;
    footerFakeRow: any;
    headerElement: any;
    footerElement: any;

    render() {
        //this.addClassName("button");
        console.log("2");

        return (
            <div className="tree-grid" style={{ display: "flex", flexDirection: "column"}}>
                <div className="tree-grid-header-wrapper" style={{ flex: "0 0 auto" }}>
                    <button onClick={ () => { this.testLoad500(); }}>
                        refresh 500
                    </button>
                    <button onClick={ () => { this.filterData(); this.forceUpdate(); console.log("forceUpdate"); }}>
                        filter
                    </button>
                    заголовок и т.д.
                </div>
                <div className="tree-grid-body-wrapper"
                     style={{ position:"relative", overflow:"auto", flex: "0 1 auto"}}
                     onWheel={ this.handleTableWheel.bind(this)}
                     onScroll={ this.handleScroll.bind(this)}
                     ref={ (e) => this.bodyWrapperElement = e}

                >
                    <div>
                        {this.renderGridBody()}
                        {this.renderColumnHeaders()}
                        {this.renderColumnFooters()}
                    </div>
                </div>
                <div className="tree-grid-footer-wrapper" style={{ flex: "0 1 auto" }}>
                    футер и тд
                </div >
            </div >
        )
            ;
    }
}

