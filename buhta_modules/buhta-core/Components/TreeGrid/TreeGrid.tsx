import * as React from "react";
import * as _ from "lodash";
import shallowCompare = require("react-addons-shallow-compare");

//import {executeSQL} from "../buhta-core/SQL";
import {ComponentProps, Component} from "../Component";
import {executeSQL} from "../../SQL";
import {TreeGridColumns} from "./TreeGridColumns";
import {TreeGridColumnProps, TreeGridColumn} from "./TreeGridColumn";
import {Keycode} from "../../Keycode";
import {Movable, MoveStartEvent} from "../Movable/Movable";
import {getScrollbarWidth} from "../../getScrollBarWidth";


export interface TreeGridProps extends ComponentProps<any> {
    dataSource?: any;
    rowHeight?: number;
    keyFieldName?: string;
    parentKeyFieldName?: string;
    hierarchyFieldName?: string;
    hierarchyDelimiters?: string;
    treeMode?: boolean;
    autoExpandNodesToLevel?: number;
}

class InternalColumn {
    props: TreeGridColumnProps;
    width: number;
    caption: string;
    fieldName: string;
    footer: string;
    hidden: boolean;
    headerWidthNativeElement: Element;
    bodyWidthNativeElement: Element;
    footerWidthNativeElement: Element;
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

//const vertScrollBarWidth = 30;

export class TreeGrid extends Component<TreeGridProps, any> {

    constructor(props: TreeGridProps, context: any) {
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

    headerFakeRow: any;
    footerFakeRow: any;
    headerWrapperElement: any;
    bodyWrapperElement: any;
    footerWrapperElement: any;

    headerTableElement: Element;
    bodyTableElement: Element;
    footerTableElement: Element;


    private createColumns() {
        this.columns = [];

        console.log("1");
        let columnsTag = this.getChildren(TreeGridColumns);

        columnsTag.forEach((tag: JSX.Element) => {
            let columnTagList = this.getChildrenOfProps(tag.props, TreeGridColumn);

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
            let parentId: any;
            let nodeId: any;
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
        //this.rows = window["xxx"].filter((row) => row["Название"].indexOf("Phil") > -1);

    }


    bodyWrapperElementInterval: number;
    lastBodyWrapperHeight = 0;
    lastBodyWrapperWidth = 0;

    handleBodyWrapperElementResize = () => {
        let newHeight = this.bodyWrapperElement.offsetHeight;
        if (newHeight !== this.lastBodyWrapperHeight) {
            this.lastBodyWrapperHeight = newHeight;
            this.handleScroll(null);
        }
        let newWidth = this.bodyWrapperElement.offsetWidth;
        if (newWidth !== this.lastBodyWrapperWidth) {
            this.lastBodyWrapperWidth = newWidth;
            this.handleScroll(null);
        }
    }

    protected didMount() {
        this.handleChangeFocused();
        this.handleScroll(null);
        this.bodyWrapperElementInterval = setInterval(this.handleBodyWrapperElementResize, 10);
    }

    protected willUnmount() {
        clearInterval(this.bodyWrapperElementInterval);
    }

    protected willMount() {
        super.willMount();
        this.dataSource = this.props.dataSource;
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


    // private testLoad500() {
    //
    //     executeSQL("select TOP 5000 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
    //         .done((table) => {
    //
    //             this.dataSource = table.rows.map((r) => {
    //                 return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
    //             });
    //             this.createColumns();
    //             this.createNodes();
    //             this.createRows();
    //             this.forceUpdate();
    //
    //
    //             console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
    //         })
    //         .fail((err) => {
    //             alert(err.message);
    //         });
    //
    // }


    protected willReceiveProps(nextProps: TreeGridProps) {
    }


    protected didUpdate(prevProps: TreeGridProps, prevState: any, prevContext: any) {
        this.handleChangeFocused();
        this.handleScroll(null);
    }


    private renderRows(): JSX.Element[] {
        //console.log("renderRows-start()");
        let ret: JSX.Element[] = [];
        if (!this.rows)
            return ret;

        console.log("render-rows: " + this.rows.length);
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


        let collapseIconDiv: JSX.Element;

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
        $(this.headerWrapperElement).css({top: this.bodyWrapperElement.scrollTop});

        let pos = this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerWrapperElement).outerHeight() - 0;
        $(this.footerWrapperElement).css({top: pos});

        $(this.headerFakeRow).css({height: $(this.headerWrapperElement).outerHeight()});
        $(this.footerFakeRow).css({height: $(this.footerWrapperElement).outerHeight()});
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
                this.bodyWrapperElement.scrollTop + this.bodyWrapperElement.clientHeight - $(this.footerWrapperElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
                    this.bodyWrapperElement.clientHeight + $(this.footerWrapperElement).outerHeight();
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
            if (rowEl.position().top < this.bodyWrapperElement.scrollTop + $(this.headerWrapperElement).outerHeight()) {
                this.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.headerWrapperElement).outerHeight();
            }
        }
    }


    handleBodyKeyDown(e: React.KeyboardEvent) {
        if (e.key === Keycode.Down) {
            this.moveFocusedCellDown();
            e.preventDefault();
        }
        else if (e.key === Keycode.Up) {
            this.moveFocusedCellUp();
            e.preventDefault();
        }
        else if (e.key === Keycode.Left) {
            this.moveFocusedCellLeft();
            e.preventDefault();
        }
        else if (e.key === Keycode.Right) {
            this.moveFocusedCellRight();
            e.preventDefault();
        }
    }

    columnResizeStart = (event: MoveStartEvent, col: InternalColumn): void => {
        event.bindX(col, "width", () => {
            $(col.headerWidthNativeElement).attr('width', col.width);
            $(col.bodyWidthNativeElement).attr('width', col.width);
            $(col.footerWidthNativeElement).attr('width', col.width);
            let tableWidth = this.calcTotalColumnsWidth();
            $(this.headerTableElement).css('width', tableWidth);
            $(this.bodyTableElement).css('width', tableWidth);
            $(this.footerTableElement).css('width', tableWidth);
            $(this.bodyWrapperElement).css('max-width', tableWidth + getScrollbarWidth() + 1);

        });
        // this.handleOnClick(null);
    };

    renderColumnHeaders(): JSX.Element {

        let colWidths: JSX.Element[] = [];
        let colHeaders: JSX.Element[] = [];

        this.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e)=> {col.headerWidthNativeElement=e;} }
                />);

            let tdStyle: any = {overflow: "hidden"};

            colHeaders.push(
                <td
                    key={index}
                    style={tdStyle}
                >
                    {col.caption}
                    <Movable
                        style={{position:"absolute", top:0, width:5, right:0, bottom:0, cursor:"col-resize"}}
                        onMoveStart={ (event: MoveStartEvent)=>{ this.columnResizeStart(event, col); console.log("MoveStart")}}
                    >
                    </Movable>
                    <Movable
                        style={{position:"absolute", top:0, width:index===0?0:5, left:0, bottom:0, cursor:"col-resize"}}
                        onMoveStart={ (event: MoveStartEvent)=>{
                           // ресайзим предыдущую колонку
                           this.columnResizeStart(event, this.columns[index-1]);
                        }}
                    >
                    </Movable>

                </td>);
        });

        return (
            <div
                ref={ (e) => this.headerWrapperElement = e}
                style={{ position:"absolute" }}>
                <table
                    className="tree-grid-header"
                    style={{tableLayout: "fixed",borderCollapse: "collapse", width:this.calcTotalColumnsWidth()}}
                    ref={ (e) => this.headerTableElement = e}

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
        this.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e)=> {col.footerWidthNativeElement=e;} }
                />);
            if (col.footer)
                isFooterEmpty = false;
            let tdStyle: any = {overflow: "hidden"};
            colFooters.push(<td key={index} style={tdStyle}>{col.footer}</td>);
        });

        if (!isFooterEmpty)

            return (
                <div
                    ref={ (e) => this.footerWrapperElement = e}
                    style={{ position:"absolute"}}
                >
                    <table
                        className="tree-grid-footer"
                        style={{tableLayout: "fixed",borderCollapse: "collapse", width:this.calcTotalColumnsWidth()}}
                        ref={ (e) => this.footerTableElement = e}

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
        this.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e)=> {col.bodyWidthNativeElement=e;} }
                />);
        });

        return (
            <table
                className="tree-grid-body"
                tabIndex={0}
                onKeyDown={ (e) => {  this.handleBodyKeyDown(e); } }
                style={{ tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width:this.calcTotalColumnsWidth()}}
                ref={ (e) => this.bodyTableElement = e}
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


    calcTotalColumnsWidth(): number {
        let ret = 0;
        this.columns.forEach((col: InternalColumn) => {
            if (!col.hidden)
                ret += col.width;
        });
        return ret;
    }

    protected shallowCompare(nextProps: TreeGridProps): boolean {
        console.log("shallow-tree-grid");
        //console.log("shallow-win -> isEqial = " + this.isPropsEqual(this.props, nextProps, ["children"]));
        return !this.isPropsEqual(this.props, nextProps, ["children", "dataSource"]);
    }


    render() {
        //this.addClassName("button");
        console.log("render-tree-grid");

        return (
            <div className="tree-grid"
                 style={{ display: "flex", flexDirection: "column", height: "100%"}}>
                <div className="tree-grid-header-wrapper" style={{ flex: "0 0 auto" }}>
                    <button onClick={ () => {  }}>
                        refresh 5001
                    </button>
                    <button onClick={ () => { this.filterData(); this.forceUpdate(); console.log("forceUpdate"); }}>
                        filter
                    </button>
                    заголовок и т.д.
                </div>
                <div className="tree-grid-body-wrapper"
                     style={{ position:"relative", overflow:"auto", flex: "0 1 auto", maxWidth:this.calcTotalColumnsWidth()+getScrollbarWidth()+1}}
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
        );
    }
}

