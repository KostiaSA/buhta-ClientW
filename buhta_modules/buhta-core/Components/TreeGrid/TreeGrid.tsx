import * as React from "react";
import * as ReactVirtualized from "react-virtualized";
import * as _ from "lodash";

import shallowCompare = require("react-addons-shallow-compare");

//import {executeSQL} from "../buhta-core/SQL";
import {ComponentProps, Component, ComponentState} from "../Component";
import {TreeGridColumns} from "./TreeGridColumns";
import {TreeGridColumnProps, TreeGridColumn} from "./TreeGridColumn";
import {Keycode} from "../../Keycode";
import {Movable, MoveStartEvent, MoveEndEvent} from "../Movable/Movable";
import {getScrollbarWidth} from "../../getScrollBarWidth";
import {Button} from "../Button/Button";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {ObjectDesigner} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {OpenWindowParams} from "../Desktop/Desktop";
import {appInstance} from "../App/App";
import {TreeGridDataSource} from "./TreeGridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {throwError} from "../../Error";
import {numberCompare} from "../../numberCompare";

export type TreeMode = "flat" | "parentKey" | "delimiterChar" | "childrenList";

export type TreeGreedEvent<T> =  (state: TreeGridState<T>) => any;

export interface TreeGridProps<T> extends ComponentProps<TreeGridState<T>> {
    dataSource: TreeGridDataSource<T>;
    rowHeight?: number;

    treeMode?: TreeMode;

    keyFieldName?: string; // key для treeMode parentKey
    parentKeyFieldName?: string; // parentKey для treeMode parentKey
    positionFieldName?: string;  // sort для treeMode parentKey

    hierarchyFieldName?: string;  // для "delimiterChar"
    hierarchyDelimiters?: string;

    autoExpandNodesToLevel?: number;

    editable?: boolean;
    denyInsert?: boolean;
    denyUpdate?: boolean;
    denyDelete?: boolean;

    dragDropNodes?: boolean;

    onCreateNewRecord?: () => any;
    onChangeFocusedRow?: TreeGreedEvent<T>;

}

export class TreeGridState<T> extends ComponentState<TreeGridProps<T>> {
    constructor(private treeGrid: TreeGrid) {
        super(treeGrid);
    }

    columns: InternalColumn[];
    pageLength: number;
    rows: InternalRow<T>[];
    nodes: InternalTreeNode<T>[];
    focusedRowIndex: number;
    focusedCellIndex: number;
    dataSource: TreeGridDataSource<T>;

    headerFakeRow: HTMLElement;
    footerFakeRow: HTMLElement;
    headerWrapperElement: HTMLElement;
    bodyWrapperElement: HTMLElement;
    footerWrapperElement: HTMLElement;

    headerTableElement: HTMLElement;
    bodyTableElement: HTMLElement;

    gridElement: HTMLElement;
    gridReactComponent: React.Component<any,any>;

    footerTableElement: HTMLElement;

    isCellDragging: boolean;
    draggingRowSourceIndex: number;
    draggingMode: "move" | "copy";

    getFocusedRow(): T {
        return this.dataSource.getRow(this.focusedRowIndex);
    }

    refreshRow(rowIndex: number) {
        this.treeGrid.refreshRow(rowIndex);
    }

    refreshFocusedRow() {
        this.treeGrid.refreshRow(this.focusedRowIndex);
    }
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

export class InternalRow<T> {
    constructor(public gridState: TreeGridState<T>) {

    }

    element: HTMLElement;
//    sourceRow: any;
//    sourceIndex: number;
    cellElements: HTMLElement[] = [];
    node: InternalTreeNode<T>;

    getSourceObject(): any {
        return this.gridState.dataSource.getRow(this.node.sourceIndex);
        //
        // if (this.node.sourceRow === undefined)
        //     return this.gridState.dataSource.getDataRows()[this.node.sourceIndex];
        // else
        //     return this.node.sourceRow;
    }

}

export class InternalTreeNode<T> {
    constructor(public gridState: TreeGridState<T>) {

    }

    element: HTMLElement;
    //sourceObject: any;
    sourceIndex: number;
    key: string;
    parentKey: string;
    //sourceRow: any;
    //sourceRowContainer: any;  // массив children, в котором сидит sourceRow, используется в DragDrop
    cellElements: HTMLElement[] = [];

    // для treeMode;
    parent: InternalTreeNode<T>;
    children: InternalTreeNode<T>[] = [];
    expanded: boolean;
    level: number;

    pushRowRecursive(rows: InternalRow<T>[], maxPageLength: number) {

        if (rows.length >= maxPageLength)
            return;

        let row = new InternalRow(this.gridState);
        //row.node.sourceIndex = this.sourceIndex;
        //row.sourceRow = this.sourceRow;
        row.node = this;
        rows.push(row);

        if (this.expanded) {
            this.children.forEach((child: InternalTreeNode<T>) => {
                child.pushRowRecursive(rows, maxPageLength);
            });
        }


    }

    iterateRecursive(callback: (node: InternalTreeNode<T>) => void) {
        callback(this);
        this.children.forEach((child: InternalTreeNode<T>) => {
            child.iterateRecursive(callback);
        });

    }
}

//const vertScrollBarWidth = 30;

export class TreeGrid extends Component<TreeGridProps<any>, TreeGridState<any>> {

    constructor(props: TreeGridProps<any>, context: any) {
        super(props, context);
        this.state = new TreeGridState(this);
    }


    private iterateAllNodes(callback: (node: InternalTreeNode<any>) => void) {
        this.state.nodes.forEach((node: InternalTreeNode<any>) => {
            node.iterateRecursive(callback);
        });
    }

    private expandAll() {
        this.state.nodes.forEach((node: InternalTreeNode<any>) => {
            node.iterateRecursive((nod: InternalTreeNode<any>) => {
                nod.expanded = true;
            });
        });
        this.createRows();
        this.forceUpdate();
    }

    private collapseAll() {

        this.iterateAllNodes((nod: InternalTreeNode<any>) => {
            nod.expanded = false;
        });

        this.createRows();
        this.forceUpdate();
    }


    getRowIndex(sourceIndex: number): number {
        // TODO: сделать вариант для treeMode
        for (let i = 0; i < this.state.rows.length; i++) {
            if (this.state.rows[i].node.sourceIndex === sourceIndex)
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
        this.openDeleteForm(this.state.rows[this.state.focusedRowIndex]);

    }

    openDeleteForm(rowToDelete: InternalRow<any>) {
        //let rowToDelete = this.state.rows[this.state.focusedRowIndex];
        let row = rowToDelete.getSourceObject() as DesignedObject;
        let objectClassName = "запись";
        if (row.getClassName)
            objectClassName = row.getClassName();

        let objectName = "";
        if (row.toString)
            objectName = row.toString();

        let message = <div className="color-red">Удалить "{objectClassName}"?<br/>{ objectName }</div>;

        this.showDeleteConfirmationWindow(message, (okResult) => {
            console.log(okResult);
            if (okResult) {

                this.state.dataSource.deleteRow(rowToDelete.node.sourceIndex);

                if (this.state.dataSource.getRows().length === 0)
                    this.refreshDataSource();
                else {
                    let newFocusedIndex = this.state.rows.indexOf(rowToDelete);
                    if (newFocusedIndex > this.state.rows.length - 2)
                        newFocusedIndex = this.state.rows.length - 2;
                    this.refreshRow(this.state.rows[newFocusedIndex].node.sourceIndex);
                }
                this.forceUpdate();
            }
        });
    }

    openInsertForm() {

        let designedObject = this.state.dataSource.getNewRow();

        if (designedObject) {
            let win =
                <ObjectDesigner
                    designedObject={designedObject}
                    onSaveChanges={ () => {
                       let index = this.state.dataSource.addRow(designedObject);
                       if (this.state.dataSource.getRows().length === 1)
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

    openEditForm(row: InternalRow<any>) {

        let designedObject = this.state.dataSource.getRows()[row.node.sourceIndex];

        let win =
            <ObjectDesigner
                designedObject={designedObject}
                onSaveChanges={ () => { this.refreshRow(row.node.sourceIndex); }}
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
                let ds = this.state.dataSource as TreeGridDataSource<any>;

                let columns = ds.getTreeGridColumns().sort((a: TreeGridColumnProps, b: TreeGridColumnProps) => {
                    return a.order - b.order;
                });

                columns.forEach((propCol: TreeGridColumnProps) => {

                    let col = new InternalColumn();
                    col.props = propCol;
                    col.width = propCol.width || 150;
                    col.caption = propCol.caption || "";
                    col.fieldName = propCol.propertyName || "";
                    col.caption = propCol.caption || col.fieldName;
                    this.state.columns.push(col);
                });
            }
        }

        if (this.state.columns.length === 0)
            throwError("TreeGrid: список колонок не определен.");

    }

    private initFocused() {
        this.state.focusedRowIndex = 0;
        this.state.focusedCellIndex = 0;
    }


    private createNodes() {
        if (this.props.treeMode === "flat")
            this.createNodesFromFlat();
        else if (this.props.treeMode === "delimiterChar") {
            this.createNodesFromHierarchyField();
        }
        else if (this.props.treeMode === "childrenList") {
            this.createNodesFromChildrenList();
        }
        else if (this.props.treeMode === "parentKey") {
            this.createNodesFromParentKey();
        }
        else
            throwError("TreeGrid.createNodes(): unknown treeMode '" + this.props.treeMode + "'");
    }

    private createNodesFromFlat() {

        this.state.nodes = [];

        this.state.dataSource.getRows().forEach((dataRow: any, index: number) => {
            let node = new InternalTreeNode(this.state);
            node.sourceIndex = index;
            //node.sourceRow = dataRow;
            this.state.nodes.push(node);
        }, this);

    }

    private createNodesFromChildrenList() {
        //if (!this.props.hierarchyFieldName)
        //  throwError("TreeGrid: property 'hierarchyFieldName' is undefined");

        this.state.nodes = [];

        let addChildren = (toArray: InternalTreeNode<any>[], dataRow: any, level: number) => {

            let node = new InternalTreeNode(this.state);
            node.sourceIndex = dataRow.$$flatIndex;
            //node.sourceRow = dataRow;
            node.level = level;
            node.expanded = node.level < this.props.autoExpandNodesToLevel;
            toArray.push(node);


            let children = this.state.dataSource.getRowChildren(node.sourceIndex); //dataRow[this.props.hierarchyFieldName!];
            if (!children)
                throwError("TreeGrid: dataRow has no children list property '" + this.props.hierarchyFieldName + "'");
            if (!_.isArray(children))
                throwError("TreeGrid: children list property '" + this.props.hierarchyFieldName + "' should be array");

            children.forEach((dataRow: any, index: number) => {
                addChildren(node.children, dataRow, level + 1);
            });
        };

        this.state.dataSource.getRows().forEach((dataRow: any, index: number) => {
            addChildren(this.state.nodes, dataRow, 0);
        }, this);

    }

    private createNodesFromParentKey() {

        this.state.nodes = [];

        if (this.state.dataSource === undefined)
            return;

        if (this.props.keyFieldName === undefined)
            throwError("TreeGrid: property 'keyFieldName' is undefined");

        if (this.props.parentKeyFieldName === undefined)
            throwError("TreeGrid: property 'parentKeyFieldName' is undefined");

        let nodeList: any = {};

        this.state.dataSource.getRows().forEach((dataSourceItem: any, index: number) => {
            let node = new InternalTreeNode<any>(this.state);
            node.sourceIndex = index;
            node.key = dataSourceItem[this.props.keyFieldName!];

            if (node.key === undefined)
                throwError("TreeGrid: key column '" + this.props.keyFieldName + "' not found");

            if (node.key !== null && node.key.toString)
                node.key = node.key.toString();

            node.parentKey = dataSourceItem[this.props.parentKeyFieldName!];
            if (node.parentKey === undefined)
                throwError("TreeGrid: parent key column '" + this.props.parentKeyFieldName + "' not found");

            if (node.parentKey !== null && node.parentKey.toString)
                node.parentKey = node.parentKey.toString();

            nodeList[node.key] = node;
            //node.level = -1;
            //node.expanded = node.level < this.props.autoExpandNodesToLevel;

        }, this);

        for (let key in nodeList) {
            let node = nodeList[key];
            if (node.parentKey !== undefined) {
                let parentNode = nodeList[node.parentKey];
                if (parentNode !== undefined) {
                    if ((node  as InternalTreeNode<any>).parent !== undefined)
                        throwError("TreeGrid.createNodesFromParentKey(): internal error");
                    (node  as InternalTreeNode<any>).parent = parentNode;
                    (parentNode as InternalTreeNode<any>).children.push(node);
                }
            }
        }

        for (let key in nodeList) {
            let node = nodeList[key];
            if (node.parentKey === null) {
                this.state.nodes.push(node);
            }
        }

        // сортировка children и проставление level
        let sortNodes = (nodes: InternalTreeNode<any>[]): InternalTreeNode<any>[] => {
            if (this.props.positionFieldName !== undefined) {
                return nodes.sort((a: InternalTreeNode<any>, b: InternalTreeNode<any>) => {

                    let aa = a.gridState.dataSource.getRow(a.sourceIndex)[this.props.positionFieldName!];
                    if (aa === undefined)
                        throwError("TreeGrid: position column '" + this.props.positionFieldName + "' not found");
                    if (!_.isNumber(aa))
                        throwError("TreeGrid: position column '" + this.props.positionFieldName + "' must be a number");

                    let bb = b.gridState.dataSource.getRow(b.sourceIndex)[this.props.positionFieldName!];
                    if (bb === undefined)
                        throwError("TreeGrid: position column '" + this.props.positionFieldName + "' not found");
                    if (!_.isNumber(bb))
                        throwError("TreeGrid: position column '" + this.props.positionFieldName + "' must be a number");

                    return numberCompare(aa, bb);
                });
            }
            else {
                return nodes.sort((a: InternalTreeNode<any>, b: InternalTreeNode<any>) => numberCompare(a.sourceIndex, b.sourceIndex));
            }
        }


        let processNode = (node: InternalTreeNode<any>, level: number) => {
            node.level = level;
            node.expanded = node.level < this.props.autoExpandNodesToLevel;
            node.children = sortNodes(node.children);
            // if (this.props.positionFieldName !== undefined) {
            //     node.children = node.children.sort((a, b) => {
            //
            //         let aa = node.gridState.dataSource.getRow(a.sourceIndex)[this.props.positionFieldName!];
            //         if (aa === undefined)
            //             throwError("TreeGrid: position column '" + this.props.positionFieldName + "' not found");
            //         if (!_.isNumber(aa))
            //             throwError("TreeGrid: position column '" + this.props.positionFieldName + "' must be a number");
            //
            //         let bb = node.gridState.dataSource.getRow(b.sourceIndex)[this.props.positionFieldName!];
            //         if (bb === undefined)
            //             throwError("TreeGrid: position column '" + this.props.positionFieldName + "' not found");
            //         if (!_.isNumber(bb))
            //             throwError("TreeGrid: position column '" + this.props.positionFieldName + "' must be a number");
            //
            //         return numberCompare(aa, bb);
            //     });
            //
            // }
            // else {
            //     node.children = node.children.sort((a, b) => numberCompare(a.sourceIndex, b.sourceIndex));
            // }
            node.children.forEach((node: InternalTreeNode<any>) => {
                processNode(node, level + 1);
            }, this);
        };

        this.state.nodes.forEach((node: InternalTreeNode<any>) => {
            processNode(node, 0);
        }, this);

        this.state.nodes = sortNodes(this.state.nodes);
        //this.state.nodes = this.state.nodes.sort((a, b) => numberCompare(a.sourceIndex, b.sourceIndex));

    }


    private createNodesFromHierarchyField() {

        if (this.state.dataSource === undefined)
            return;

        if (this.props.hierarchyFieldName === undefined)
            throwError("TreeGrid: property 'hierarchyFieldName' (as parentKey) is undefined");

        if (this.props.hierarchyDelimiters === undefined) {
            throwError("TreeGrid: property 'hierarchyDelimiters' is undefined");
        }

        interface ISorted {
            hierarchyStr: string;
            objIndex: number;
        }

        let sorted: ISorted[] = this.state.dataSource.getRows().map((obj: any, index: number) => {
            return {
                hierarchyStr: obj[this.props.hierarchyFieldName || ""].toString(),  // todo this.props.hierarchyFieldName || ""  ???
                objIndex: index
            };
        });

        sorted = _.sortBy(sorted, ["hierarchyStr"]);

        let cache: { [hierarchyId: string]: InternalTreeNode<any>; } = {};

        this.state.nodes = [];

        sorted.forEach((s, index) => {

            let hierarchyDelimiters = this.props.hierarchyDelimiters || ".";

            let splitted = s.hierarchyStr.split(hierarchyDelimiters);
            let parentId: any;
            let nodeId: any;
            if (splitted.length === 1)
                nodeId = s.hierarchyStr;
            else {
                nodeId = _.last(splitted);
                parentId = splitted.slice(0, splitted.length - 1).join(hierarchyDelimiters.slice(0, 1));
            }

            if (!parentId) {
                if (cache[nodeId])
                    throwError("XTreeGrid: nodeId '" + nodeId + "' is duplicated");
                else {
                    let node = new InternalTreeNode(this.state);
                    node.sourceIndex = s.objIndex;
                    // todo fill node.sourceRow
                    node.level = 0;
                    node.expanded = node.level < this.props.autoExpandNodesToLevel;
                    cache[nodeId] = node;
                    this.state.nodes.push(node);
                }
            }
            else {
                let parentNode = cache[parentId];

                let node = new InternalTreeNode(this.state);
                node.sourceIndex = s.objIndex;
                // todo fill node.sourceRow
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

        //if (this.props.treeMode !== "flat") {
        if (this.state.nodes) {
            this.state.nodes.forEach((node: InternalTreeNode<any>) => {
                node.pushRowRecursive(this.state.rows, this.state.pageLength + 1000000);
            });
        }
        //}
        //else {
        //throwError("?");
        // if (!this.state.dataSource)
        //     return;
        //
        // if (this.state.dataSource.isTreeGridDataSource) {
        //     let ds = this.state.dataSource as TreeGridDataSource;
        //     ds.getDataRows().forEach((obj: any, index: number) => {
        //         let row = new InternalRow(this.state);
        //         row.sourceIndex = index;
        //         this.state.rows.push(row);
        //     });
        // }
        // else {
        //     this.state.dataSource.getDataRows().forEach((obj: any, index: number) => {
        //         let row = new InternalRow(this.state);
        //         row.sourceIndex = index;
        //         this.state.rows.push(row);
        //     });
        // }
        //this.initFocused();
        //}

        if (this.state.columns && this.state.columns.length > 0 && this.state.dataSource)
            this.state.columns[0].footer = this.state.dataSource.getRows().length + " поз.";
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
        // let newHeight = this.state.bodyWrapperElement.offsetHeight;
        // if (newHeight !== this.lastBodyWrapperHeight) {
        //     this.lastBodyWrapperHeight = newHeight;
        //     this.handleScroll();
        // }
        // let newWidth = this.state.bodyWrapperElement.offsetWidth;
        // if (newWidth !== this.lastBodyWrapperWidth) {
        //     this.lastBodyWrapperWidth = newWidth;
        //     this.handleScroll();
        // }
    }

    protected didMount() {
        this.handleChangeFocused();
        this.handleScroll();
        //    this.bodyWrapperElementInterval = setInterval(this.handleBodyWrapperElementResize, 10);
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


    protected willReceiveProps(nextProps: TreeGridProps<any>) {
    }


    protected didUpdate(prevProps: TreeGridProps<any>, prevState: any, prevContext: any) {
        this.handleChangeFocused();
        this.handleScroll();
    }


    private renderRows(): JSX.Element[] {
        //console.log("renderRows-start()");
        let ret: JSX.Element[] = [];
        if (!this.state.rows)
            return ret;

        console.log("render-rows: " + this.state.rows.length);
        this.state.rows.forEach((row: InternalRow<any>, index: number) => {
            ret.push(this.renderRow(row, index));
            // if (this.state.isCellDragging) {
            //     let fakeRow = (
            //         <tr>
            //             <td colspan="100">уроды</td>
            //         </tr>
            //     );
            //     ret.push(fakeRow);
            // }
        });

        //console.log("renderRows-end()");
        return ret;
    }

    private renderRow(row: InternalRow<any>, rowIndex: number): JSX.Element {
        return (
            <tr
                key={rowIndex}
                data-source-index={row.node.sourceIndex}
                ref={ (e) => { row.element = e;}}
            >
                { this.renderCells(row, rowIndex)}
            </tr>
        );
    }

    private renderCells(row: InternalRow<any>, rowIndex: number): JSX.Element[] {
        let ret: JSX.Element[] = [];
        this.state.columns.forEach((col: InternalColumn, colIndex: number) => {
            ret.push(this.renderCell(row, rowIndex, col, colIndex));
        });
        return ret;
    }

    private handleDragStart = (e: DragEvent) => {

        let $tr = $(e.target).parents("tr").first();

        let index = Number.parseInt($tr.attr("data-source-index"));
        let mode: "move"|"copy" = "move";
        if (e.ctrlKey)
            mode = "copy";

        if (this.state.dataSource.canDragRow(index, mode)) {
            this.state.isCellDragging = true;
            this.state.draggingRowSourceIndex = index;
            this.state.draggingMode = mode;
            e.dataTransfer.effectAllowed = mode;
            e.dataTransfer.setData("movable", "");
        }
        else
            this.state.isCellDragging = false;

    }


    private clearDragCssClasses(target: JQuery) {

    }

    private handleDragEnd = (e: DragEvent) => {
        this.state.isCellDragging = false;
        let $tbody = $(e.target).parents("tbody").first();
        $tbody.find(".drop-allow-after-cell").removeClass("drop-allow-after-cell");
        $tbody.find(".drop-deny-after-cell").removeClass("drop-deny-after-cell");
        $tbody
            .find(".drop-arrow")
            .addClass("is-hidden")
            .removeClass("drop-deny-into-cell")
            .removeClass("drop-allow-into-cell");
        this.forceUpdate();
    }

    private handleDrop = (e: DragEvent) => {

        // console.log("handleDrop");

        let $tr = $(e.target).parents("tr").first();
        let $tr_prev = $tr.prev();

        let index = Number.parseInt($tr.attr("data-source-index"));
        let index_prev = Number.parseInt($tr_prev.attr("data-source-index"));

        let relativeY = (e.clientY - $tr.offset().top) / $tr.outerHeight();


        if (relativeY < 0.33) {
            this.state.dataSource.dropAfter(this.state.draggingRowSourceIndex, index_prev, this.state.draggingMode);
        }
        else if (relativeY < 0.66) {
            this.state.dataSource.dropInto(this.state.draggingRowSourceIndex, index, this.state.draggingMode);
        }
        else {
            this.state.dataSource.dropAfter(this.state.draggingRowSourceIndex, index, this.state.draggingMode);
        }

        this.refreshDataSource();
        this.forceUpdate();
    }

    private handleDragOver = (e: DragEvent) => {

        let $tbody = $(e.target).parents("tbody").first();
        $tbody.find(".drop-allow-after-cell").removeClass("drop-allow-after-cell");
        $tbody.find(".drop-deny-after-cell").removeClass("drop-deny-after-cell");
        $tbody
            .find(".drop-arrow")
            .addClass("is-hidden")
            .removeClass("drop-deny-into-cell")
            .removeClass("drop-allow-into-cell");

        let $tr = $(e.target).parents("tr").first();
        let $tr_prev = $tr.prev();

        let index = Number.parseInt($tr.attr("data-source-index"));
        let index_prev = Number.parseInt($tr_prev.attr("data-source-index"));

        let relativeY = (e.clientY - $tr.offset().top) / $tr.outerHeight();

        if (relativeY < 0.33) {
            if (this.state.dataSource.canDropAfter(this.state.draggingRowSourceIndex, index_prev, this.state.draggingMode)) {
                $tr_prev.children("td").addClass("drop-allow-after-cell");
                e.preventDefault();
            }
            else {
                $tr_prev.children("td").addClass("drop-deny-after-cell");
            }
        }
        else if (relativeY < 0.66) {
            if (this.state.dataSource.canDropInto(this.state.draggingRowSourceIndex, index, this.state.draggingMode)) {
                $tr.children("td").find(".drop-arrow").removeClass("is-hidden").addClass("drop-allow-into-cell");
                e.preventDefault();
            }
            else {
                $tr.children("td").find(".drop-arrow").removeClass("is-hidden").addClass("drop-deny-into-cell");
            }
        }
        else {
            if (this.state.dataSource.canDropAfter(this.state.draggingRowSourceIndex, index, this.state.draggingMode)) {
                $tr.children("td").addClass("drop-allow-after-cell");
                e.preventDefault();
            }
            else {
                $tr.children("td").addClass("drop-deny-after-cell");
            }
        }
    }

    private renderCell(row: InternalRow < any >, rowIndex: number, col: InternalColumn, colIndex: number): JSX.Element {


        let sourceObject = row.getSourceObject();
        let cellContent: any = "";
        if (col.props.propertyName === undefined)
            cellContent = "'propertyName' undefined";
        else if (sourceObject[col.props.propertyName] === undefined)
            cellContent = "bad property '" + col.props.propertyName + "'";
        else
            cellContent = sourceObject[col.props.propertyName];  // todo col.props.propertyName || ""

        let node = row.node;

        let hierarchyPaddingDiv: React.ReactNode = [];
        if (this.props.treeMode !== "flat" && (col.props.showHierarchyPadding || col.props.showHierarchyTree)) {
            hierarchyPaddingDiv = <span style={{width:node.level * 20, display: "inline-block"}}></span>;
        }

        let tdStyle: any = {overflow: "hidden"};
        // if (this.props.treeMode !== "flat" && col.props.showHierarchyTree) {
        //     tdStyle.borderBottomColor = "rgba(255, 0, 0, 0)";
        // }

        let strSpanStyle: any = {
            lineHeight: "100%",
            display: "inline-block"
        };
        if (this.props.treeMode !== "flat" && col.props.showHierarchyTree && node.expanded && node.children.length > 0) {
            strSpanStyle.fontWeight = "bold";
        }


        let strSpanProps: any = {};

        if (this.props.dragDropNodes === true && col.props.showHierarchyTree === true) {
            strSpanProps.draggable = true;
            strSpanProps.className = "draggable";
            strSpanProps.onDragStart = this.handleDragStart;
            strSpanProps.onDragEnd = this.handleDragEnd;
        }

        let strSpan = <span style={ strSpanStyle} {...strSpanProps}>{cellContent}</span>;


        let collapseIconDiv: React.ReactNode = [];

        if (this.props.treeMode !== "flat" && col.props.showHierarchyTree) {
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

        let tdDragOver: any;
        let tdDrop: any;
        if (this.props.dragDropNodes === true) {
            tdDragOver = this.handleDragOver;
            tdDrop = this.handleDrop;
        }

        let dropArrowDiv: any;

        if (col.props.showHierarchyTree) {
            dropArrowDiv = (
                <div className="drop-arrow is-hidden" style={{ flex: "0 0 auto"}}>
                    <i className="fa fa-arrow-right" style={{verticalAlign: "middle"}}></i>
                </div>

            );
        }

//        console.log("Жопа11");


        return (
            <div
                key={colIndex}
                style={tdStyle}
                ref={ (e) => row.cellElements[colIndex] = e}
                onClick={ (e) => { this.setFocusedCell(rowIndex,colIndex);} }
                onDragOver={tdDragOver}
                onDrop={tdDrop}
            >
                <div style={{ display:"flex", flexDirection: "row", alignItems:"center" }}>
                    {dropArrowDiv}
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
            </div>
        );
    }

    private setFocusedCell(rowIndex: number, cellIndex: number) {

        this.state.focusedRowIndex = rowIndex;
        this.state.focusedCellIndex = cellIndex;
        this.handleChangeFocused();
    }


    private    handleTableWheel(e: WheelEvent) {
        // if (e.deltaY > 0)
        //     this.incPageStartIndex(3);
        // else if (e.deltaY < 0)
        //     this.decPageStartIndex(3);
        // console.log(e.deltaY);
        // this.forceUpdate();
    }

    private    handleScroll() {
        // $(this.state.headerWrapperElement).css({top: this.state.bodyWrapperElement.scrollTop});
        //
        // let pos = this.state.bodyWrapperElement.scrollTop + this.state.bodyWrapperElement.clientHeight - $(this.state.footerWrapperElement).outerHeight() - 0;
        // $(this.state.footerWrapperElement).css({top: pos});
        //
        // $(this.state.headerFakeRow).css({height: $(this.state.headerWrapperElement).outerHeight()});
        // $(this.state.footerFakeRow).css({height: $(this.state.footerWrapperElement).outerHeight()});
    }


    private handleChangeFocused() {
        if (!this.state.rows)
            return;

        this.state.rows.forEach((row: InternalRow<any>) => {
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

        if (this.props.onChangeFocusedRow !== undefined)
            this.props.onChangeFocusedRow(this.state);
    }

    private    getFocusedCellElement(): HTMLElement {
        return this.state.rows[this.state.focusedRowIndex].cellElements[this.state.focusedCellIndex];
    }

    private    getFocusedRowElement(): HTMLElement {
        return this.state.rows[this.state.focusedRowIndex].element;
    }

    private    moveFocusedCellDown() {
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

    private   moveFocusedCellLeft() {
        if (!this.state.rows)
            return;

        if (this.state.focusedCellIndex > 0) {
            this.state.focusedCellIndex--;
            this.handleChangeFocused();

        }
    }

    private    moveFocusedCellRight() {
        if (!this.state.rows)
            return;

        if (this.state.focusedCellIndex < this.state.columns.length - 1) {
            this.state.focusedCellIndex++;
            this.handleChangeFocused();

        }
    }


    private    moveFocusedCellUp() {
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

    columnResizeEnd = (event: MoveEndEvent, col: InternalColumn): void => {
        (this.state.gridElement as any).recomputeGridSize();
        this.forceUpdate();
    }

    renderColumnHeaders(): React.ReactNode {
        if (this.state.dataSource.getRows().length === 0)
            return [];

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
                        onMoveEnd={ (event: MoveEndEvent) => { this.columnResizeEnd(event, col); console.log("MoveEnd"); }}
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
                style={{ position:"absolutexx" }}>
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

    renderColumnFooters(): React.ReactNode {

        if (this.state.dataSource.getRows().length === 0)
            return [];

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
                    style={{ position:"absolutexx"}}
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
            return [];
    }

    renderEmptyDataSourceMessage(): React.ReactNode {
        if (this.state.dataSource.getRows().length > 0)
            return [];

        let message: React.ReactNode = this.state.dataSource.getEmptyDataSourceMessage();

        return (<div className="tree-grid-empty-body">{message}</div>);
    }

    renderGridBody(): React.ReactNode {

        console.log("renderGridBody");

        if (this.state.dataSource.getRows().length === 0)
            return [];

        let colWidths: React.ReactNode[] = [];
        this.state.columns.forEach((col: InternalColumn, index: number) => {
            colWidths.push(
                <col
                    key={index}
                    width={ col.width.toString() + "px" }
                    ref={ (e) => {col.bodyWidthNativeElement = e;} }
                />);
        });

        // return (
        //     <table
        //         className="tree-grid-body"
        //         tabIndex={0}
        //         onKeyDown={ (e) => {  this.handleBodyKeyDown(e); } }
        //         style={{ tableLayout: "fixed", borderCollapse: "collapse", position: "relative", width:this.calcTotalColumnsWidth()}}
        //         ref={ (e) => this.state.bodyTableElement = e}
        //     >
        //         <colgroup>
        //             {colWidths}
        //         </colgroup>
        //         <tbody>
        //         <tr>
        //             <td ref={ (e) => this.state.headerFakeRow = e}></td>
        //         </tr>
        //         {this.renderRows()}
        //         <tr>
        //             <td style={{ border:"none" }} ref={ (e) => this.state.footerFakeRow = e}></td>
        //         </tr>
        //         </tbody>
        //     </table>
        // );

        let cellRenderer = (param: any): JSX.Element => {
            //console.log("cellRenderer");
            //console.log(param);
            let row = this.state.rows[param.rowIndex];
            let col = this.state.columns[param.columnIndex];
            return this.renderCell(row, param.rowIndex, col, param.columnIndex);
            //return <span>Жопа {param.rowIndex}:{param.columnIndex}</span>;
        };

        let cellClassName = (param: any): string => {
            return "cell-col-" + param.columnIndex;//this.renderCell(row, param.rowIndex, col, param.columnIndex);
            //return <span>Жопа {param.rowIndex}:{param.columnIndex}</span>;
        };

        let getColumnWidth = (param: any): number => {
            //console.log("getColumnWidth "+colIndex);
            //console.log(colIndex);
            if (this.state.columns[param.index] !== undefined) {
              //  console.log(this.state.columns[param.index].width);
                return this.state.columns[param.index].width;

            }
            else
                return 0;
        };

        // this.state.columns.forEach((col: InternalColumn, colIndex: number) => {
        //     ret.push(this.renderCell(row, rowIndex, col, colIndex));
        // });


        return (
            <div style={{height:"100%"}}>
                <ReactVirtualized.AutoSizer>
                    {(param: any) => (
                        <ReactVirtualized.Grid
                            ref={ (e:any) => {this.state.gridElement = e; /*console.log(e.recomputeGridSize)*/;}}
                            style={{border:"1px solid red"}}
                            cellRenderer={cellRenderer}
                            cellClassName={cellClassName}
                            height={param.height}
                            rowHeight={30}
                            columnCount={this.state.columns.length}
                            columnWidth={getColumnWidth}
                            rowCount={this.state.rows.length}
                            overscanColumnCount={0}
                            overscanRowCount={0}
                            width={param.width}
                        />
                    )}
                </ReactVirtualized.AutoSizer>
            </div>
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

    protected  shallowCompare(nextProps: TreeGridProps < any >): boolean {
        console.log("shallow-tree-grid");
        //console.log("shallow-win -> isEqial = " + this.isPropsEqual(this.props, nextProps, ["children"]));
        return !this.isPropsEqual(this.props, nextProps, ["children", "dataSource"]);
    }

    renderEditableButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];

        if (this.props.editable) {
            if (this.props.denyInsert !== true)
                buttons.push(
                    <Button key="insert" className="is-outlined is-success" onClick={this.handleInsertButtonClick}>
                        Добавить
                    </Button>
                );

            if (this.props.denyUpdate !== true)
                buttons.push(
                    <Button key="update" className="is-outlined is-info" onClick={this.handleUpdateButtonClick}>
                        Изменить
                    </Button>
                );

            if (this.props.denyDelete !== true)
                buttons.push(
                    <Button key="delete" className="is-outlined is-danger" onClick={this.handleDeleteButtonClick}>
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
            maxBodyWrapperWidth = 0;

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
                <Flex
                    className="tree-grid-body-wrapper"
                    style={{ position:"relative", overflow:"none", flex:"1", maxWidth: maxBodyWrapperWidth }}
                    ref={ (e:any) => {this.state.bodyWrapperElement = e;}}
                >
                    <Layout type="column" sizeTo="parent">
                        <Fixed>
                            {this.renderColumnHeaders()}
                        </Fixed>
                        <Flex>
                            {this.renderGridBody()}
                            {this.renderEmptyDataSourceMessage()}
                        </Flex>
                        <Fixed>
                            {this.renderColumnFooters()}
                        </Fixed>
                    </Layout>
                </Flex>
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

