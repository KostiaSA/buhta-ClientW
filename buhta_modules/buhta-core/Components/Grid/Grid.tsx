import * as React from "react";
import * as ReactDOM from "react-dom";
import * as _ from "lodash";
import * as AgGrid from "ag-grid";

import {ComponentProps, ComponentState, Component} from "../Component";
import {GridColumn, GridColumnDef, GridColumnProps} from "./GridColumn";
import {TreeGridColumn} from "../TreeGrid/TreeGridColumn";
import {GridColumnGroup} from "./GridColumnGroup";
import {GridDataSource, GridDataSourceRow} from "./GridDataSource";
import {InMemoryRowModel} from "ag-grid/main";
import {throwError} from "../../Error";

///////////// ВНИМАНИЕ !  //////////////////
// ag-grid.noStyle.js был запатчен, иначе содержимое ячейки для tree-column будет вставляться перед иконками плюс/минус
// 1. ищем строку:   resultFromRenderer = cellRendererFunc(params);
// 2. перед ней вставляем: params.eTarget=eTarget;
// надо будет вставить в исходник ag-grid: ag-grid-master\src\ts\rendering\cellRendererService.ts, строка 52


export interface GridProps extends ComponentProps<GridState> {

    dragDropNodes?: boolean;
    dataSource: GridDataSource;

    enableDragDrop?: boolean;

    editable?: boolean;

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
    // denyInsert?: boolean;
    // denyUpdate?: boolean;
    // denyDelete?: boolean;
    //
    //
    // onCreateNewRecord?: () => any;
    // onChangeFocusedRow?: TreeGreedEvent<T>;

}

class DragDropState {
    constructor(public gridState: GridState) {

    }

    isDragging: boolean;
    isMouseDown: boolean;
    mouseDownY: number;
    dragRowData: GridDataSourceRow;

    // todo "copy" не работает нигде
    mode: "move" | "copy";

    dropRowData: GridDataSourceRow;
    dropPlace: "insertBefore" |  "insertAfter" |  "insertInto";
    dropAllowed: boolean;

    doDrop() {
        this.isDragging = false;

        if (this.dropAllowed) {
            if (this.dropPlace === "insertBefore") {
                this.gridState.dataSource.dropBefore(this.dragRowData, this.dropRowData, this.mode);
            }
            else if (this.dropPlace === "insertInto") {
                this.gridState.dataSource.dropInto(this.dragRowData, this.dropRowData, this.mode);
            }
            else if (this.dropPlace === "insertAfter") {
                this.gridState.dataSource.dropAfter(this.dragRowData, this.dropRowData, this.mode);
            }
            this.gridState.refresh();
            this.gridState.setFocusedRow(this.dragRowData);
        }
    }

}

export class GridState extends ComponentState<GridProps> {
    constructor(private grid: Grid) {
        super(grid);
    }

    agGrid: AgGrid.GridOptions = {};
    dataSource: GridDataSource;
    dragDropState: DragDropState = new DragDropState(this);

    refresh() {
        this.agGrid.api!.setRowData(this.dataSource.getRows());
    }

    expandRow(dataItem: GridDataSourceRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && !node.expanded) {
            node.expanded = true;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    collapseRow(dataItem: GridDataSourceRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && node.expanded) {
            node.expanded = false;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    expandRowParent(dataItem: GridDataSourceRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && node.parent && !node.parent.expanded) {
            node.parent.expanded = true;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    setFocusedRow(dataItem: GridDataSourceRow) {
        this.expandRowParent(dataItem);
        let col = this.agGrid.columnApi!.getAllDisplayedColumns();
        let rowIndex = this.findAgNodeIndexOfData(dataItem);
        if (rowIndex >= 0)
            this.agGrid.api!.setFocusedCell(rowIndex, col[0]);
    }

    findAgRowNodeOfData(dataItem: GridDataSourceRow): AgGrid.RowNode | undefined {
        let ret: AgGrid.RowNode| undefined = undefined;
        this.agGrid.api!.forEachNode((node: AgGrid.RowNode) => {
            if (node.data === dataItem)
                ret = node;
        });
        return ret;
    }

    findAgNodeIndexOfData(dataItem: GridDataSourceRow): number {
        let rowModel = this.agGrid.api!.getModel();

        for (let i = 0; i < rowModel.getRowCount(); i++) {
            if (rowModel.getRow(i).data === dataItem)
                return i;
        }

        return -1;
    }


    // getFocusedRowData(): any {
    //     let focusedCell = this.agGrid.api!.getFocusedCell();
    //     if (focusedCell)
    //         return this.dataSource [focusedCell.rowIndex];
    //     else
    //         return undefined;
    // }
}


// это взято из исходников ag-grid
export interface AgCellRendererParams {
    api: AgGrid.GridApi;
    columnApi: AgGrid.ColumnApi;
    data: GridDataSourceRow;
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
    data: GridDataSourceRow;
    node: AgGrid.RowNode;
    context: any;
}

// это взято из исходников ag-grid
export interface AgCellClassRuleParams {
    value: any;
    data: GridDataSourceRow;
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
        // this.state.agGrid.onCellFocused = (e)=> {
        //     console.log(e);
        //     console.log(this.state.agGrid.api!.getModel().getRow(e.rowIndex))
        // };


        //(this.state.agGrid as any).groupHeaders = true;
        this.state.agGrid.enableColResize = true;

    }

    handleAgRowGroupOpened(params: { node: AgGrid.RowNode}) {
        this.state.agGrid.api!.refreshRows([params.node]);
        if (params.node.data.$$dataSourceTreeNode)
            params.node.data.$$dataSourceTreeNode.expanded = params.node.expanded;
    }

    getDataByAgRowIndex(rowIndex: number): GridDataSourceRow {
        return this.state.agGrid.api!.getModel().getRow(rowIndex).data;
    }

    private rowHeightCache: { [id: string]: number };
    private avgRowHeight = 0;

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

        if (param.data.$$gridRowHeight !== undefined) {
            return param.data.$$gridRowHeight;
        }
        else if (this.rowHeightCache[param.node.id] !== undefined) {
            param.data.$$gridRowHeight = this.rowHeightCache[param.node.id];
            return this.rowHeightCache[param.node.id];
        }
        else if (this.avgRowHeight > 0)
            return this.avgRowHeight;
        else
            return 25;
    }

    private renderCell(column: AgGrid.Column, rowNode: AgGrid.RowNode, data: GridDataSourceRow): JSX.Element {
        let cell = <span>{data[column.getColDef().field!]}</span>;
        return cell;
    };

    cellRenderer(params: AgCellRendererParams): any {

        let cell = this.renderCell(params.column, params.node, params.data);

        ////////////////// drag-over///////////////////
        // todo сделать сдвиг стрелки вправо, в соответствии с level
        let dragOver = (e: MouseEvent) => {
            if (!this.state.dragDropState.isDragging)
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
                    `<div class='drag-drop-arrow' style='position:absolute; z-index: 1000; width:20px; height:20px;'>
                       <i class="fa fa-arrow-right" style='vertical-align:middle; color:green; font-size: 16px'></i>
                       <i class="fa fa-ban" style='vertical-align:middle; color:red; font-size: 16px'></i>
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


            this.state.dragDropState.dropRowData = params.data;
            if (relativeY < 0.33) {
                this.state.dragDropState.dropPlace = "insertBefore";
                this.state.dragDropState.dropAllowed = this.state.dataSource.canDropBefore(this.state.dragDropState.dragRowData, params.data, "move");
                arrowTop = $row.position().top - 10;
                arrowLeft = $viewportScrollLeft + 5;
            }
            else if (relativeY < 0.66) {
                this.state.dragDropState.dropPlace = "insertInto";
                this.state.dragDropState.dropAllowed = this.state.dataSource.canDropInto(this.state.dragDropState.dragRowData, params.data, "move");
                arrowTop = $row.position().top + $row.outerHeight() / 2 - 10;
                arrowLeft = $viewportScrollLeft;
            }
            else {
                this.state.dragDropState.dropPlace = "insertAfter";
                this.state.dragDropState.dropAllowed = this.state.dataSource.canDropAfter(this.state.dragDropState.dragRowData, params.data, "move");
                arrowTop = $row.position().top + $row.outerHeight() - 10;
                arrowLeft = $viewportScrollLeft + 5;
            }

            if (this.state.dragDropState.dropAllowed) {
                $arrow.children(".fa-arrow-right").css("display", "initial");
                $arrow.children(".fa-ban").css("display", "none");
            }
            else {
                $arrow.children(".fa-arrow-right").css("display", "none");
                $arrow.children(".fa-ban").css("display", "initial");
            }

            $arrow.css("top", arrowTop);
            $arrow.css("left", arrowLeft);

        };

        if (this.state.dragDropState.isDragging)
            $(params.eParentOfValue).on("mousemove", dragOver as any);

        params.addRenderedRowListener("renderedRowRemoved", () => {
            ReactDOM.unmountComponentAtNode(params.eParentOfValue);
            $(params.eParentOfValue).off("mousemove");
        });

        let renderContainer = params.eTarget || params.eParentOfValue;
        ReactDOM.render(cell, renderContainer);

        return null;
    }


    private handleDragMouseDownViewPort(e: MouseEvent) {
        this.state.dragDropState.isMouseDown = true;
        this.state.dragDropState.mouseDownY = e.clientY;

    }

    private handleDragMouseUpViewPort(e: MouseEvent) {
        this.state.dragDropState.isMouseDown = false;
        if (this.state.dragDropState.isDragging) {
            let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
            viewPort.find(".drag-drop-arrow").remove();
            this.state.dragDropState.doDrop();
        }
    }

    private handleDragMouseMoveViewPort(e: MouseEvent) {

        if (!this.state.dragDropState.isDragging &&
            this.state.dragDropState.isMouseDown &&
            Math.abs(this.state.dragDropState.mouseDownY - e.clientY) > 3) {

            let focusedCell = this.state.agGrid.api!.getFocusedCell();

            if (focusedCell && focusedCell.getGridRow().isNotFloating()) {
                this.state.dragDropState.isDragging = true;
                this.state.dragDropState.mode = "move";
                this.state.dragDropState.dragRowData = this.getDataByAgRowIndex(focusedCell.getGridRow().rowIndex);
                this.state.agGrid.api!.refreshView();
            }
        }
    }

    private enableDragDrop() {
        let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
        $(viewPort).on("mousedown", this.handleDragMouseDownViewPort.bind(this));
        $(viewPort).on("mouseup", this.handleDragMouseUpViewPort.bind(this));
        $(viewPort).on("mousemove", this.handleDragMouseMoveViewPort.bind(this));
    }

    private disableDragDrop() {
        let viewPort = $(this.nativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport").first();
        $(viewPort).off("mousedown");
        $(viewPort).off("mouseup");
        $(viewPort).off("mousemove");
    }


    protected didMount() {
        super.didMount();

        this.createColumns();
        new AgGrid.Grid(this.nativeElement, this.state.agGrid);

        if (this.props.enableDragDrop === true) {
            this.enableDragDrop();
        }
    }

    protected didUpdate(prevProps: GridProps, prevState: GridState, prevContext: any) {
        super.didUpdate(prevProps, prevState, prevContext);
        this.disableDragDrop();
        if (this.props.enableDragDrop === true) {
            this.enableDragDrop();
        }
    }

    protected willUnmount() {
        super.willUnmount();
        this.disableDragDrop();
        this.state.agGrid.api!.destroy();
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

        if (this.state.agGrid.columnDefs.length === 0) {

            let ds = this.state.dataSource;

            // let columns = ds.getTreeGridColumns().sort((a: GridColumnProps, b: GridColumnProps) => {
            //     return a.order - b.order;
            // });

            let columns = ds.getGridColumns();

            columns.forEach((propCol: GridColumnProps) => {
                this.state.agGrid.columnDefs!.push(new GridColumnDef(propCol, null).getAgGridColDef(this));
            });

        }

        if (this.state.agGrid.columnDefs.length === 0)
            throwError("Grid: список колонок не определен.");

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

