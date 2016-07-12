import * as React from "react";
import * as _ from "lodash";
import shallowCompare = require("react-addons-shallow-compare");

//import {executeSQL} from "../buhta-core/SQL";
import {ComponentProps, Component, ComponentState} from "../Component";
import {executeSQL} from "../../SQL";
import {TreeGridColumns} from "./TreeGridColumns";
import {TreeGridColumnProps, TreeGridColumn} from "./TreeGridColumn";
import {Keycode} from "../../Keycode";
import {Movable, MoveStartEvent} from "../Movable/Movable";
import {getScrollbarWidth} from "../../getScrollBarWidth";
import {Button} from "../Button";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {ObjectDesigner} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {OpenWindowParams} from "../Desktop/Desktop";
import {appInstance} from "../App";
import {TreeGridDataSource} from "./TreeGridDataSource";


export interface TreeGridProps extends ComponentProps<TreeGridState> {
    dataSource: TreeGridDataSource;
    rowHeight?: number;
    keyFieldName?: string;
    parentKeyFieldName?: string;
    hierarchyFieldName?: string;
    hierarchyDelimiters?: string;
    treeMode?: boolean;
    autoExpandNodesToLevel?: number;

    editable?: boolean;
    denyInsert?: boolean;
    denyUpdate?: boolean;
    denyDelete?: boolean;

    onCreateNewRecord?: () => any;

}

export class TreeGridState extends ComponentState<TreeGridProps> {
    columns: InternalColumn[];
    pageLength: number;
    rows: InternalRow[];
    nodes: InternalTreeNode[];
    focusedRowIndex: number;
    focusedCellIndex: number;
    dataSource: TreeGridDataSource;

    headerFakeRow: HTMLElement;
    footerFakeRow: HTMLElement;
    headerWrapperElement: HTMLElement;
    bodyWrapperElement: HTMLElement;
    footerWrapperElement: HTMLElement;

    headerTableElement: HTMLElement;
    bodyTableElement: HTMLElement;
    footerTableElement: HTMLElement;
}

export class InternalColumn {
    props: TreeGridColumnProps;
    width: number;
    caption: string;
    fieldName: string;
    footer: string;
    hidden: boolean;
    headerWidthNativeElement: HTMLElement;
    bodyWidthNativeElement: HTMLElement;
    footerWidthNativeElement: HTMLElement;
}

export class InternalRow {
    element: HTMLElement;
    ///   sourceObject: any;
    sourceIndex: number;
    cellElements: HTMLElement[] = [];
    node: InternalTreeNode;

}

export class InternalTreeNode {
    element: HTMLElement;
    sourceObject: any;
    sourceIndex: number;
    cellElements: HTMLElement[] = [];

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

    iterateRecursive(callback: (node: InternalTreeNode) => void) {
        callback(this);
        this.children.forEach((child: InternalTreeNode) => {
            child.iterateRecursive(callback);
        });

    }
}

//const vertScrollBarWidth = 30;

export class TreeGrid extends Component<TreeGridProps, TreeGridState> {

    constructor(props: TreeGridProps, context: any) {
        super(props, context);
        this.state = new TreeGridState(this);
    }


    private iterateAllNodes(callback: (node: InternalTreeNode) => void) {
        this.state.nodes.forEach((node: InternalTreeNode) => {
            node.iterateRecursive(callback);
        });
    }

    private expandAll() {
        this.state.nodes.forEach((node: InternalTreeNode) => {
            node.iterateRecursive((nod: InternalTreeNode) => {
                nod.expanded = true;
            });
        });
        this.createRows();
        this.forceUpdate();
    }

    private collapseAll() {

        this.iterateAllNodes((nod: InternalTreeNode) => {
            nod.expanded = false;
        });

        this.createRows();
        this.forceUpdate();
    }


    getRowIndex(sourceIndex: number): number {
        // TODO: сделать вариант для treeMode
        for (let i = 0; i < this.state.rows.length; i++) {
            if (this.state.rows[i].sourceIndex === sourceIndex)
                return i;
        }
        return -1;
    }

    refreshRow(sourceIndex: number) {
        this.createRows();
        let index = this.getRowIndex(sourceIndex);
        this.state.focusedRowIndex = index;
        this.forceUpdate();
        // TODO: сделать прокрутку, если focused не видна на экране
    }

    handleUpdateButtonClick = () => {
        this.openEditForm(this.state.rows[this.state.focusedRowIndex]);

    }

    handleInsertButtonClick = () => {
        this.openInsertForm();
    }

    handleDeleteButtonClick = () => {
        //this.openEditForm(this.state.rows[this.state.focusedRowIndex]);

    }

    openInsertForm() {

        let designedObject = this.state.dataSource.getNewRow();

        if (designedObject) {
            let win =
                <ObjectDesigner
                    designedObject={designedObject}
                    onSaveChanges={ () => {
                       let index = this.state.dataSource.addRow(designedObject);
                       if (this.state.dataSource.getDataRows().length === 1)
                         this.refreshDataSource();
                       else
                         this.refreshRow(index);
                    }}
                >

                </ObjectDesigner>;

            let openParam: OpenWindowParams = {
                title: "добавление",
                top: 50,
                left: 50,
                parentWindowId: this.getParentWindowId()
            };

            this.getParentDesktop().openWindow(win, openParam);
        }
    }

    openEditForm(row: InternalRow) {

        let designedObject = this.state.dataSource.getDataRows()[row.sourceIndex];

        let win =
            <ObjectDesigner
                designedObject={designedObject}
                onSaveChanges={ () => { this.refreshRow(row.sourceIndex); }}
            >

            </ObjectDesigner>;

        let openParam: OpenWindowParams = {
            title: "редактирование",
            top: 50,
            left: 50,
            parentWindowId: this.getParentWindowId()
        };

        this.getParentDesktop().openWindow(win, openParam);

    }

    private createColumns() {
        this.state.columns = [];

        // сначала колонки заполняем из тегов <TreeGridColumn>
        let columnsTag = this.getChildren(TreeGridColumns);
        columnsTag.forEach((tag: JSX.Element) => {
            let columnTagList = this.getChildrenOfProps(tag.props, TreeGridColumn);

            columnTagList = columnTagList.sort((a: JSX.Element, b: JSX.Element) => {
                let A = a.props as TreeGridColumnProps;
                let B = b.props as TreeGridColumnProps;
                return A.order - B.order;
            });

            columnTagList.forEach((propCol: JSX.Element) => {

                let col = new InternalColumn();
                col.props = propCol.props;
                col.width = propCol.props.width || 150;
                col.caption = propCol.props.caption;
                col.fieldName = propCol.props.propertyName;
                col.caption = propCol.props.caption || col.fieldName;
                this.state.columns.push(col);
            });
        });

        // если тегов <TreeGridColumn> нет, то заполняем из DataSource
        if (this.state.columns.length === 0) {
            if (this.state.dataSource.isTreeGridDataSource) {
                let ds = this.state.dataSource as TreeGridDataSource;

                let columns = ds.getTreeGridColumns().sort((a: TreeGridColumnProps, b: TreeGridColumnProps) => {
                    return a.order - b.order;
                });

                columns.forEach((propCol: TreeGridColumnProps) => {

                    let col = new InternalColumn();
                    col.props = propCol;
                    col.width = propCol.width || 150;
                    col.caption = propCol.caption;
                    col.fieldName = propCol.propertyName;
                    col.caption = propCol.caption || col.fieldName;
                    this.state.columns.push(col);
                });
            }
        }

        if (this.state.columns.length === 0)
            console.error("TreeGrid: список колонок не определен.");

    }

    private initFocused() {
        this.state.focusedRowIndex = 0;
        this.state.focusedCellIndex = 0;
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


        if (!this.state.dataSource)
            return;


        if (!this.props.hierarchyDelimiters) {
            console.error("XTreeGrid: hierarchyDelimiters is undefined");
            return;
        }


        interface ISorted {
            hierarchyStr: string;
            objIndex: number;
        }

        let sorted: ISorted[] = this.state.dataSource.getDataRows().map((obj: any, index: number) => {
            return {
                hierarchyStr: obj[this.props.hierarchyFieldName].toString(),
                objIndex: index
            };
        });

        sorted = _.sortBy(sorted, ["hierarchyStr"]);

        let cache: { [hierarchyId: string]: InternalTreeNode; } = {};

        this.state.nodes = [];

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
                    this.state.nodes.push(node);
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

        this.state.rows = [];

        if (this.props.treeMode) {
            if (this.state.nodes) {
                this.state.nodes.forEach((node: InternalTreeNode) => {
                    node.pushRowRecursive(this.state.rows, this.state.pageLength);
                });
            }
        }
        else {

            if (!this.state.dataSource)
                return;

            if (this.state.dataSource.isTreeGridDataSource) {
                let ds = this.state.dataSource as TreeGridDataSource;
                ds.getDataRows().forEach((obj: any, index: number) => {
                    let row = new InternalRow();
                    row.sourceIndex = index;
                    this.state.rows.push(row);
                });
            }
            else {
                this.state.dataSource.getDataRows().forEach((obj: any, index: number) => {
                    let row = new InternalRow();
                    row.sourceIndex = index;
                    this.state.rows.push(row);
                });
            }
            this.initFocused();
        }

        if (this.state.columns && this.state.columns.length > 0 && this.state.dataSource)
            this.state.columns[0].footer = this.state.dataSource.getDataRows().length + " поз.";
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
        let newHeight = this.state.bodyWrapperElement.offsetHeight;
        if (newHeight !== this.lastBodyWrapperHeight) {
            this.lastBodyWrapperHeight = newHeight;
            this.handleScroll(null);
        }
        let newWidth = this.state.bodyWrapperElement.offsetWidth;
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
        this.state.dataSource = this.props.dataSource;
        this.createColumns();
        this.createNodes();
        this.createRows();
        this.state.pageLength = 500;
    }

    protected refreshDataSource() {
        this.state.dataSource = this.props.dataSource;
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
        if (!this.state.rows)
            return ret;

        console.log("render-rows: " + this.state.rows.length);
        this.state.rows.forEach((row: InternalRow, index: number) => {
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
        this.state.columns.forEach((col: InternalColumn, colIndex: number) => {
            ret.push(this.renderCell(row, rowIndex, col, colIndex));
        });
        return ret;
    }

    private renderCell(row: InternalRow, rowIndex: number, col: InternalColumn, colIndex: number): JSX.Element {

        let objIndex = row.sourceIndex;
        let str = this.state.dataSource.getDataRows()[objIndex][col.props.propertyName].toString();
        //let str = this.rows[rowIndex].sourceObject[col.props.propertyName].toString();
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


        }


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

        this.state.focusedRowIndex = rowIndex;
        this.state.focusedCellIndex = cellIndex;
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
        $(this.state.headerWrapperElement).css({top: this.state.bodyWrapperElement.scrollTop});

        let pos = this.state.bodyWrapperElement.scrollTop + this.state.bodyWrapperElement.clientHeight - $(this.state.footerWrapperElement).outerHeight() - 0;
        $(this.state.footerWrapperElement).css({top: pos});

        $(this.state.headerFakeRow).css({height: $(this.state.headerWrapperElement).outerHeight()});
        $(this.state.footerFakeRow).css({height: $(this.state.footerWrapperElement).outerHeight()});
    }


    private handleChangeFocused() {
        if (!this.state.rows)
            return;

        this.state.rows.forEach((row: InternalRow) => {
            if (row.element)
                $(row.element).removeClass("tree-grid-focused-row");

            row.cellElements.forEach((cell) => {
                if (cell)
                    $(cell).removeClass("tree-grid-focused-cell");

            });
        });

        let focusedRow = this.state.rows[this.state.focusedRowIndex];
        if (focusedRow && focusedRow.element) {
            $(focusedRow.element).addClass("tree-grid-focused-row");

            let focusedCellElement = focusedRow.cellElements[this.state.focusedCellIndex];
            if (focusedCellElement) {
                $(focusedCellElement).addClass("tree-grid-focused-cell");
            }
        }


    }

    private getFocusedCellElement(): HTMLElement {
        return this.state.rows[this.state.focusedRowIndex].cellElements[this.state.focusedCellIndex];
    }

    private getFocusedRowElement(): HTMLElement {
        return this.state.rows[this.state.focusedRowIndex].element;
    }

    private moveFocusedCellDown() {
        if (!this.state.rows)
            return;

        if (this.state.focusedRowIndex < this.state.rows.length - 1) {
            this.state.focusedRowIndex++;
            this.handleChangeFocused();

            let rowEl = $(this.getFocusedRowElement());

            // ушло за пределы видимости
            if (rowEl.position().top + rowEl.height() >
                this.state.bodyWrapperElement.scrollTop + this.state.bodyWrapperElement.clientHeight - $(this.state.footerWrapperElement).outerHeight()) {
                this.state.bodyWrapperElement.scrollTop = rowEl.position().top + rowEl.height() -
                    this.state.bodyWrapperElement.clientHeight + $(this.state.footerWrapperElement).outerHeight();
            }

        }
    }

    private moveFocusedCellLeft() {
        if (!this.state.rows)
            return;

        if (this.state.focusedCellIndex > 0) {
            this.state.focusedCellIndex--;
            this.handleChangeFocused();

        }
    }

    private moveFocusedCellRight() {
        if (!this.state.rows)
            return;

        if (this.state.focusedCellIndex < this.state.columns.length - 1) {
            this.state.focusedCellIndex++;
            this.handleChangeFocused();

        }
    }


    private moveFocusedCellUp() {
        if (!this.state.rows)
            return;

        if (this.state.focusedRowIndex > 0) {
            this.state.focusedRowIndex--;
            this.handleChangeFocused();

            let rowEl = $(this.getFocusedRowElement());

            // ушло за пределы видимости
            if (rowEl.position().top < this.state.bodyWrapperElement.scrollTop + $(this.state.headerWrapperElement).outerHeight()) {
                this.state.bodyWrapperElement.scrollTop = rowEl.position().top - $(this.state.headerWrapperElement).outerHeight();
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
            $(col.headerWidthNativeElement).attr("width", col.width);
            $(col.bodyWidthNativeElement).attr("width", col.width);
            $(col.footerWidthNativeElement).attr("width", col.width);
            let tableWidth = this.calcTotalColumnsWidth();
            $(this.state.headerTableElement).css("width", tableWidth);
            $(this.state.bodyTableElement).css("width", tableWidth);
            $(this.state.footerTableElement).css("width", tableWidth);
            $(this.state.bodyWrapperElement).css("max-width", tableWidth + getScrollbarWidth() + 1);

        });
        // this.handleOnClick(null);
    };

    renderColumnHeaders(): JSX.Element {
        if (this.state.dataSource.getDataRows().length === 0)
            return null;

        let colWidths: JSX.Element[] = [];
        let colHeaders: JSX.Element[] = [];

        this.state.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e) => {col.headerWidthNativeElement = e;} }
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
                        onMoveStart={ (event: MoveStartEvent) => { this.columnResizeStart(event, col); console.log("MoveStart"); }}
                    >
                    </Movable>
                    <Movable
                        style={{position:"absolute", top:0, width: index === 0 ? 0 : 5, left:0, bottom:0, cursor:"col-resize"}}
                        onMoveStart={ (event: MoveStartEvent) => {
                           // ресайзим предыдущую колонку
                           this.columnResizeStart(event, this.state.columns[index - 1]);
                        }}
                    >
                    </Movable>

                </td>);
        });

        return (
            <div
                ref={ (e) => this.state.headerWrapperElement = e}
                style={{ position:"absolute" }}>
                <table
                    className="tree-grid-header"
                    style={{tableLayout: "fixed",borderCollapse: "collapse", width:this.calcTotalColumnsWidth()}}
                    ref={ (e) => this.state.headerTableElement = e}

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

        if (this.state.dataSource.getDataRows().length === 0)
            return null;

        let colWidths: JSX.Element[] = [];
        let colFooters: JSX.Element[] = [];

        let isFooterEmpty = true;
        this.state.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e) => {col.footerWidthNativeElement = e;} }
                />);
            if (col.footer)
                isFooterEmpty = false;
            let tdStyle: any = {overflow: "hidden"};
            colFooters.push(<td key={index} style={tdStyle}>{col.footer}</td>);
        });

        if (!isFooterEmpty)

            return (
                <div
                    ref={ (e) => this.state.footerWrapperElement = e}
                    style={{ position:"absolute"}}
                >
                    <table
                        className="tree-grid-footer"
                        style={{tableLayout: "fixed",borderCollapse: "collapse", width:this.calcTotalColumnsWidth()}}
                        ref={ (e) => this.state.footerTableElement = e}

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

    renderEmptyDataSourceMessage(): JSX.Element {
        if (this.state.dataSource.getDataRows().length > 0)
            return null;

        let message: React.ReactNode = this.state.dataSource.getEmptyDataSourceMessage();

        return (<div className="tree-grid-empty-body">{message}</div>);
    }

    renderGridBody(): JSX.Element {

        if (this.state.dataSource.getDataRows().length === 0)
            return null;

        let colWidths: JSX.Element[] = [];
        this.state.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e) => {col.bodyWidthNativeElement = e;} }
                />);
        });

        return (
            <table
                className="tree-grid-body"
                tabIndex={0}
                onKeyDown={ (e) => {  this.handleBodyKeyDown(e); } }
                style={{ tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width:this.calcTotalColumnsWidth()}}
                ref={ (e) => this.state.bodyTableElement = e}
            >
                <colgroup>
                    {colWidths}
                </colgroup>
                <tbody>
                <tr>
                    <td ref={ (e) => this.state.headerFakeRow = e}></td>
                </tr>
                {this.renderRows()}
                <tr>
                    <td style={{ border:"none" }} ref={ (e) => this.state.footerFakeRow = e}></td>
                </tr>
                </tbody>
            </table>
        );
    }


    calcTotalColumnsWidth(): number {

        let ret = 0;
        this.state.columns.forEach((col: InternalColumn) => {
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

    renderEditableButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];

        if (this.props.editable) {
            if (this.props.denyInsert !== true)
                buttons.push(
                    <Button key="insert" className="is-smalln" onClick={this.handleInsertButtonClick}>
                        Добавить
                    </Button>
                );

            if (this.props.denyUpdate !== true)
                buttons.push(
                    <Button key="update" className="is-smalln" onClick={this.handleUpdateButtonClick}>
                        Изменить
                    </Button>
                );

            if (this.props.denyDelete !== true)
                buttons.push(
                    <Button key="delete" className="is-smalln" onClick={this.handleDeleteButtonClick}>
                        Удалить
                    </Button>
                );
        }
        return buttons;
    }


    render() {
        //this.addClassName("button");
        console.log("render-tree-grid");

        let maxBodyWrapperWidth = this.calcTotalColumnsWidth() + getScrollbarWidth() + 1;
        if (this.state.columns.length === 0)
            maxBodyWrapperWidth = null;

        return (
            <Layout className="tree-grid" type="column" sizeTo="parent" {...this.getRenderProps()}
            >
                <Fixed className="tree-grid-header-wrapper">
                    <button onClick={ () => {  }}>
                        refresh 5001
                    </button>
                    <button onClick={ () => { this.filterData(); this.forceUpdate(); console.log("forceUpdate"); }}>
                        filter
                    </button>
                    <button onClick={ () => { this.expandAll(); }}>
                        expand all
                    </button>
                    <button onClick={ () => { this.collapseAll(); }}>
                        collapse all
                    </button>
                    заголовок и т.д.
                </Fixed>
                <div
                    className="tree-grid-body-wrapper"
                    style={{ position:"relative", overflow:"auto", flex:"1", maxWidth: maxBodyWrapperWidth }}
                    onScroll={ this.handleScroll.bind(this)}
                    ref={ (e:any) => {this.state.bodyWrapperElement = e;}}
                >
                    {this.renderEmptyDataSourceMessage()}
                    {this.renderGridBody()}
                    {this.renderColumnHeaders()}
                    {this.renderColumnFooters()}
                </div>
                <Fixed className="tree-grid-footer-wrapper">

                    <Layout type="row" sizeTo="content">
                        <Fixed>
                            {this.renderEditableButtons()}
                        </Fixed>
                        <Flex>
                        </Flex>
                        <Fixed>
                            <Button className="is-smalln">
                                Выбрать
                            </Button>
                            <Button className="is-smalln">
                                Отмена
                            </Button>

                        </Fixed>
                    </Layout>

                </Fixed >
            </Layout >
        );
    }
}

