import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {ComponentProps, ComponentState, Component} from "../Component";
import {GridColumn, GridColumnDef} from "./GridColumn";
import {TreeGridColumn} from "../TreeGrid/TreeGridColumn";
import {GridColumnGroup} from "./GridColumnGroup";
import {GridDataSource} from "./GridDataSource";

///////////// ВНИМАНИЕ !  //////////////////
// ag-grid.noStyle.js был запатчен, иначе содержимое ячейки для tree-column будет вставляться перед иконками плюс/минус
// 1. ищем строку:   resultFromRenderer = cellRendererFunc(params);
// 2. перед ней вставляем: params.eTarget=eTarget;
// надо будет вставить в исходник ag-grid: ag-grid-master\src\ts\rendering\cellRendererService.ts, строка 52


export interface GridProps extends ComponentProps<GridState> {

    dragDropNodes?: boolean;
    dataSource: GridDataSource<any>;


    // dataSource: TreeGridDataSource<T>;
    // rowHeight?: number;
    //
    // treeMode?: TreeMode;
    //
    // keyFieldName?: string; // key для treeMode parentKey
    // parentKeyFieldName?: string; // parentKey для treeMode parentKey
    // positionFieldName?: string;  // sort для treeMode parentKey
    //
    // hierarchyFieldName?: string;  // для "delimiterChar"
    // hierarchyDelimiters?: string;
    //
    // autoExpandNodesToLevel?: number;
    //
    // editable?: boolean;
    // denyInsert?: boolean;
    // denyUpdate?: boolean;
    // denyDelete?: boolean;
    //
    //
    // onCreateNewRecord?: () => any;
    // onChangeFocusedRow?: TreeGreedEvent<T>;

}


class DragRowState {
    isDragging: boolean;
    isMouseDown: boolean;
    draggingRow: AgGrid.GridRow;

    dragOverRowData: any;
    dropPlace: "deny" | "insertBefore" |  "insertAfter" |  "insertInto";
    dropAllowed: boolean;

}

export class GridState extends ComponentState<GridProps> {
    constructor(private grid: Grid) {
        super(grid);
    }

    agGrid: AgGrid.GridOptions = {};
    dataSource: GridDataSource<any>;
    dragRow: DragRowState = new DragRowState();

    // getFocusedRowData(): any {
    //     let focusedCell = this.agGrid.api!.getFocusedCell();
    //     if (focusedCell)
    //         return this.dataSource [focusedCell.rowIndex];
    //     else
    //         return undefined;
    // }


    // columns: InternalColumn[];
    // pageLength: number;
    // rows: InternalRow<T>[];
    // nodes: InternalTreeNode<T>[];
    // focusedRowIndex: number;
    // focusedCellIndex: number;
    // dataSource: TreeGridDataSource<T>;
    //
    // headerFakeRow: HTMLElement;
    // footerFakeRow: HTMLElement;
    // headerWrapperElement: HTMLElement;
    // bodyWrapperElement: HTMLElement;
    // footerWrapperElement: HTMLElement;
    //
    // headerTableElement: HTMLElement;
    // bodyTableElement: HTMLElement;
    //
    // gridElement: HTMLElement;
    // gridReactComponent: React.Component<any,any>;
    //
    // footerTableElement: HTMLElement;
    //
    // isCellDragging: boolean;
    // draggingRowSourceIndex: number;
    // draggingMode: "move" | "copy";
    //
    // getFocusedRow(): T {
    //     return this.dataSource.getRow(this.focusedRowIndex);
    // }
    //
    // refreshRow(rowIndex: number) {
    //     this.treeGrid.refreshRow(rowIndex);
    // }
    //
    // refreshFocusedRow() {
    //     this.treeGrid.refreshRow(this.focusedRowIndex);
    // }
}


// это взято из исходников ag-grid
export interface AgCellRendererParams {
    api: AgGrid.GridApi;
    columnApi: AgGrid.ColumnApi;
    data: any;
    column: AgGrid.Column;
    eGridCell: HTMLElement;
    eParentOfValue: HTMLElement;
    eTarget: HTMLElement;
    node: AgGrid.RowNode;
    addRenderedRowListener: Function;
    context: any;
    value: any;
    rowIndex: number;
}

// это взято из исходников ag-grid
export interface AgGetRowHeightParams {
    api: AgGrid.GridApi;
    data: any;
    node: AgGrid.RowNode;
    context: any;
}

// это взято из исходников ag-grid
export interface AgCellClassRuleParams {
    value: any;
    data: any;
    node: AgGrid.RowNode;
    colDef: AgGrid.ColDef;
    rowIndex: number;
    api: AgGrid.GridApi;
    context: any;
}

type AgCellClassRuleFunction = (params: AgCellClassRuleParams) => boolean;

export interface AgCellClassRules {
    [cssClassName: string]: AgCellClassRuleFunction;
}


export default class Grid extends Component<GridProps, GridState> {
    constructor(props: GridProps, context: any) {
        super(props, context);

        this.state = new GridState(this);

        this.state.agGrid.rowHeight = undefined;
        this.state.dataSource = props.dataSource;
        this.state.agGrid.getNodeChildDetails = props.dataSource.getNodeChildDetails.bind(props.dataSource);

        this.state.agGrid.rowData = this.state.dataSource.getRows();

        this.state.agGrid.getRowHeight = this.handleGetRowHeight.bind(this);

        this.state.agGrid.onRowGroupOpened = this.handleAgRowGroupOpened.bind(this);


        //(this.state.agGrid as any).groupHeaders = true;
        this.state.agGrid.enableColResize = true;

    }

    handleAgRowGroupOpened(params: { node: AgGrid.RowNode}) {
        this.state.agGrid.api!.refreshRows([params.node]);
    }


    private rowHeightCache: { [id: string]: number };
    private avgRowHeight = 0;

    // private calculateRowHeights(rowsLimit: number = 10000) {
    //
    //     let cells: JSX.Element[] = [];
    //
    //     let handleRef = (e: HTMLElement, node: AgGrid.RowNode) => {
    //         if (e) {
    //             let oldHeight = this.rowHeightCache[node.id];
    //             if (oldHeight === undefined || e.clientHeight > oldHeight)
    //                 this.rowHeightCache[node.id] = e.clientHeight;
    //         }
    //     };
    //
    //
    //     this.state.agGrid.api!.forEachNode((node: AgGrid.RowNode) => {
    //         if (rowsLimit > 0 && this.rowHeightCache[node.id] === undefined) {
    //             this.state.agGrid.columnApi!.getAllColumns().forEach((col: AgGrid.Column, colIndex: number) => {
    //                 let cell = (
    //                     <div
    //                         key={node.id + ":" + colIndex}
    //                         ref={(e:HTMLElement) => {handleRef(e, node); }}
    //                         style={{display: "inline-block", position: "absolute", visibility: "hidden", zIndex: -1, width: col.getActualWidth()}}
    //                     >
    //                         {this.renderCell(col, node, node.data)}
    //                     </div>
    //                 );
    //                 cells.push(cell);
    //             }, this);
    //             rowsLimit--;
    //         }
    //     });
    //
    //
    //     let div = document.createElement("div");
    //     document.body.appendChild(div);
    //     ReactDOM.render(<div>{cells}</div>, div);
    //     ReactDOM.unmountComponentAtNode(div);
    //     document.body.removeChild(div);
    //
    // }

    private calculateRowHeights(nodes: AgGrid.RowNode[]) {

        const avgOf100 = 100; // для рачета средней высоты row берутся первые 100 rows

        if (!this.state.agGrid.columnApi)  // окно с гридой было закрыто
            return;

        let cells: JSX.Element[] = [];

        let handleRef = (e: HTMLElement, node: AgGrid.RowNode) => {
            if (e) {
                let oldHeight = this.rowHeightCache[node.id];
                if (oldHeight === undefined || e.clientHeight > oldHeight) {
                    this.rowHeightCache[node.id] = e.clientHeight;

                    if (this.avgRowHeight === 0 && Object.keys(this.rowHeightCache).length === avgOf100) {
                        // вычисляем среднюю высоту
                        let sum = 0;
                        let count = 0;
                        for (let property in this.rowHeightCache) {
                            let value = this.rowHeightCache[property];
                            if (_.isNumber(value)) {
                                sum += value;
                                count++;
                            }
                        }
                        this.avgRowHeight = Math.round(sum / count);
                    }

                }
            }
        };


        nodes.forEach((node: AgGrid.RowNode) => {
            if (this.rowHeightCache[node.id] === undefined) {
                this.state.agGrid.columnApi!.getAllColumns().forEach((col: AgGrid.Column, colIndex: number) => {
                    let cell = (
                        <div
                            key={node.id + ":" + colIndex}
                            ref={(e:HTMLElement) => {handleRef(e, node); }}
                            style={{display: "inline-block", position: "absolute", visibility: "hidden", zIndex: -1, width: col.getActualWidth()}}
                        >
                            {this.renderCell(col, node, node.data)}
                        </div>
                    );
                    cells.push(cell);
                }, this);
            }
        });

        let div = document.createElement("div");
        document.body.appendChild(div);
        ReactDOM.render(<div>{cells}</div>, div);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);

    }

    private handleGetRowHeight(param: AgGetRowHeightParams): number {
        const delay200ms = 200; // 1 раз в секунд запускается цикл расчета высот rows, чаще нельзя, браузер замирает
        const max2000 = 2000; // для первых 2000 строк делаем расчет, для остальных берем средний
        const first100 = 100; // после первых 100 рассчитанных строк, показываем гриду юзеру
        const refresh1000 = 1000; // раз в секунду запускаем refreshInMemoryRowModel()

        if (this.rowHeightCache === undefined) {
            this.rowHeightCache = {};
            this.avgRowHeight = 0;

            let delay = delay200ms;

            let nodes: AgGrid.RowNode[] = [];
            let nodeCount = 0;
            this.state.agGrid.api!.forEachNode((node: AgGrid.RowNode) => {
                if (nodeCount < max2000) {
                    nodes.push(node);
                    nodeCount++;
                    if (nodes.length === first100) {
                        let nodesClone = nodes.slice(0);
                        if (nodeCount === first100) {
                            this.calculateRowHeights(nodesClone);
                        }
                        else {
                            setTimeout(() => {
                                this.calculateRowHeights(nodesClone);
                            }, delay);
                            if (delay % refresh1000 === 0) {
                                setTimeout(() => {
                                    if (this.state.agGrid.api)
                                        this.state.agGrid.api.refreshInMemoryRowModel();
                                    //console.log("refreshInMemoryRowModel");
                                }, delay);
                            }
                        }
                        delay += delay200ms;
                        nodes = [];
                    }
                }
            });

            setTimeout(() => {
                this.calculateRowHeights(nodes.slice(0));
                if (this.state.agGrid.api)
                    this.state.agGrid.api.refreshInMemoryRowModel();
            }, delay);
        }

        if (this.rowHeightCache[param.node.id] !== undefined)
            return this.rowHeightCache[param.node.id];
        else if (this.avgRowHeight > 0)
            return this.avgRowHeight;
        else
            return 25;
    }

    private renderCell(column: AgGrid.Column, rowNode: AgGrid.RowNode, data: any): JSX.Element {
        let cell = <span>{data[column.getColDef().field!]}</span>;
        return cell;
    };

    cellRenderer(params: AgCellRendererParams): any {

        let cell = this.renderCell(params.column, params.node, params.data);

        let dragOver = (e: MouseEvent) => {
            if (!this.state.dragRow.isDragging)
                return;

            let $row = $(e.target).parents(".ag-row").first();

            let $container = $(this.nativeElement).find(".ag-pinned-left-cols-container").first();
            let $viewport = $(this.nativeElement).find(".ag-pinned-left-cols-viewport").first();
            let $viewportScrollLeft: number = 0;

            if ($viewport.css("display") === "none") {
                $container = $(this.nativeElement).find(".ag-body-container").first();
                $viewport = $(this.nativeElement).find(".ag-body-viewport").first();
                $viewportScrollLeft = $viewport.scrollLeft();
            }

            let $arrow = $container.find(".drag-drop-arrow");

            if ($arrow.length === 0) {
                $(
                    `<div class='drag-drop-arrow' style='position:absolute; z-index: 1000; width:20px; height:20px'>
                       <i class="fa fa-arrow-right" style='vertical-align:middle; color:green'></i>
                    </div>`).appendTo($container);

                $arrow = $container.find(".drag-drop-arrow");
            }

            let arrowTop: number;
            let arrowLeft: number;
            let relativeY: number;

            let $cell = $(e.target).parents(".ag-cell").first();
            if ($cell.length > 0) {
                let parentOffset = $cell.offset();
                let Y = e.pageY - $cell.offset().top;
                relativeY = Y / $row.outerHeight();
            }
            else
                relativeY = e.offsetY / $row.outerHeight();

            if (relativeY < 0.33) {
                this.state.dragRow.dragOverRowData = params.data;
                this.state.dragRow.dropPlace = "insertBefore";
                this.state.dragRow.dropAllowed = true;
                arrowTop = $row.position().top - 10;
                arrowLeft = $viewportScrollLeft + 5;
            }
            else if (relativeY < 0.66) {
                this.state.dragRow.dragOverRowData = params.data;
                this.state.dragRow.dropPlace = "insertInto";
                this.state.dragRow.dropAllowed = true;
                arrowTop = $row.position().top + $row.outerHeight() / 2 - 10;
                arrowLeft = $viewportScrollLeft;
            }
            else {
                this.state.dragRow.dragOverRowData = params.data;
                this.state.dragRow.dropPlace = "insertAfter";
                this.state.dragRow.dropAllowed = true;
                arrowTop = $row.position().top + $row.outerHeight() - 10;
                arrowLeft = $viewportScrollLeft + 5;
            }

            $arrow.css("top", arrowTop);
            $arrow.css("left", arrowLeft);

        };

        if (this.state.dragRow.isDragging)
            $(params.eParentOfValue).on("mousemove", dragOver as any);

        params.addRenderedRowListener("renderedRowRemoved", () => {
            ReactDOM.unmountComponentAtNode(params.eParentOfValue);
            $(params.eParentOfValue).off("mousemove");
        });

        let renderContainer = params.eTarget || params.eParentOfValue;
        ReactDOM.render(cell, renderContainer);

        return null;
    }

    // getCellClassRules(): any {
    //
    // }

    private handleDragMouseDownViewPort(e: any) {
        console.log("handleDragMouseDown");
        this.state.dragRow.isMouseDown = true;
    }

    private handleDragMouseUpViewPort(e: MouseEvent) {
        console.log("handleDragMouseUp");
        this.state.dragRow.isMouseDown = false;
        if (this.state.dragRow.isDragging) {
            console.log("STOP-DRAG");

            let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
            viewPort.find(".drag-drop-arrow").remove();

            this.state.dragRow.isDragging = false;
            this.state.agGrid.api!.refreshView();
            this.state.agGrid.api!.refreshInMemoryRowModel(); // перезапрашивает RowHeight
        }
    }

    private handleDragMouseMoveViewPort(e: any) {
        //  console.log("handleDragMouseMove");

        if (!this.state.dragRow.isDragging && this.state.dragRow.isMouseDown) {

            let focusedCell = this.state.agGrid.api!.getFocusedCell();

            if (focusedCell && focusedCell.getGridRow().isNotFloating()) {
                this.state.dragRow.isDragging = true;
                this.state.dragRow.draggingRow = focusedCell.getGridRow();
                this.state.agGrid.api!.refreshView();
                console.log("START-DRAG");
                console.log(this.state.dragRow.draggingRow);
            }
        }
    }

    protected didMount() {
        super.didMount();

//        var domNode = ReactDOM.findDOMNode(this);
        //this.gridOptions = AgGrid.ComponentUtil.copyAttributesToGridOptions(this.props.gridOptions, this.props);
        this.createColumns();
        new AgGrid.Grid(this.nativeElement, this.state.agGrid);

        let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
        $(viewPort).on("mousedown", this.handleDragMouseDownViewPort.bind(this));
        $(viewPort).on("mouseup", this.handleDragMouseUpViewPort.bind(this));
        $(viewPort).on("mousemove", this.handleDragMouseMoveViewPort.bind(this));
        console.log(viewPort);

        //this.state.agGrid.api!.refreshView();

        //this.api = this.gridOptions.api;
        //this.columnApi = this.gridOptions.columnApi;

    }

    protected willUnmount() {
        super.willUnmount();
        let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport").first();
        $(viewPort).off("mousedown");
        $(viewPort).off("mouseup");
        $(viewPort).off("mousemove");
        this.state.agGrid.api!.destroy();
    }


    private createColumnFromReactElement(agColContainer: any[], gridChild: JSX.Element) {

    }

    private createColumns() {
        this.state.agGrid.columnDefs = [];
        // сначала колонки заполняем из тегов <TreeGridColumn>
        this.getChildren().forEach((tag: JSX.Element) => {
            if (tag.type === GridColumnDef) {
                this.state.agGrid.columnDefs!.push(new GridColumnDef(tag.props, null).getAgGridColDef(this));
            }
            if (tag.type === GridColumnGroup) {
                this.state.agGrid.columnDefs!.push(new GridColumnGroup(tag.props, null).getAgGridColGroupDef(this));
            }

        });


        // // this.state.columns = [];
        // this.state.agGrid.columnDefs = [col1, col2, col1, col2];
        //
        // // сначала колонки заполняем из тегов <TreeGridColumn>
        // let columnsTag = this.getChildren(TreeGridColumns);
        // columnsTag.forEach((tag: JSX.Element) => {
        //     let columnTagList = this.getChildrenOfProps(tag.props, TreeGridColumn);
        //
        //     columnTagList = columnTagList.sort((a: JSX.Element, b: JSX.Element) => {
        //         let A = a.props as TreeGridColumnProps;
        //         let B = b.props as TreeGridColumnProps;
        //         return A.order - B.order;
        //     });
        //
        //     columnTagList.forEach((propCol: JSX.Element) => {
        //
        //         let col = new InternalColumn();
        //         col.props = propCol.props;
        //         col.width = propCol.props.width || 150;
        //         col.caption = propCol.props.caption;
        //         col.fieldName = propCol.props.propertyName;
        //         col.caption = propCol.props.caption || col.fieldName;
        //         this.state.columns.push(col);
        //     });
        // });
        //
        // // если тегов <TreeGridColumn> нет, то заполняем из DataSource
        // if (this.state.columns.length === 0) {
        //     if (this.state.dataSource.isTreeGridDataSource) {
        //         let ds = this.state.dataSource as TreeGridDataSource<any>;
        //
        //         let columns = ds.getTreeGridColumns().sort((a: TreeGridColumnProps, b: TreeGridColumnProps) => {
        //             return a.order - b.order;
        //         });
        //
        //         columns.forEach((propCol: TreeGridColumnProps) => {
        //
        //             let col = new InternalColumn();
        //             col.props = propCol;
        //             col.width = propCol.width || 150;
        //             col.caption = propCol.caption || "";
        //             col.fieldName = propCol.propertyName || "";
        //             col.caption = propCol.caption || col.fieldName;
        //             this.state.columns.push(col);
        //         });
        //     }
        // }
        //
        // if (this.state.columns.length === 0)
        //     throwError("TreeGrid: список колонок не определен.");

    }

    render() {
        return (
            <div
                className="ag-fresh"
                ref={ (e) => { this.nativeElement = e; }}
                style={{height:"100%" }}
            >

            </div>
        )
    }

}

