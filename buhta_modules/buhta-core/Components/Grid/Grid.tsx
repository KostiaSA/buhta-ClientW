import * as React from "react";
import * as ReactDOM from "react-dom";
import * as AgGrid from "ag-grid";

import {ComponentProps, ComponentState, Component} from "../Component";

export interface GridProps extends ComponentProps<GridState> {

    dragDropNodes?: boolean;
    dataSource: any[];


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
    dataSource: any[];
    dragRow: DragRowState = new DragRowState();

    getFocusedRowData(): any {
        let focusedCell = this.agGrid.api!.getFocusedCell();
        if (focusedCell)
            return this.dataSource[focusedCell.rowIndex];
        else
            return undefined;
    }


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
interface CellRendererParams {
    api: AgGrid.GridApi;
    columnApi: AgGrid.ColumnApi;
    data: any;
    column: AgGrid.Column;
    eGridCell: HTMLElement;
    eParentOfValue: HTMLElement;
    node: AgGrid.RowNode;
    addRenderedRowListener: Function;
    context: any;
    value: any;
    rowIndex: number;
}

// это взято из исходников ag-grid
interface GetRowHeightParams {
    api: AgGrid.GridApi;
    data: any;
    node: AgGrid.RowNode;
    context: any;
}


export default class Grid extends Component<GridProps, GridState> {
    constructor(props: GridProps, context: any) {
        super(props, context);

        this.state = new GridState(this);

        let col1: AgGrid.ColDef = {
            headerName: "колонка1",
            field: "f2",
            width: 150,
            cellRenderer: this.cellRenderer.bind(this)
        };
        let col2: AgGrid.ColDef = {
            headerName: "колонка2",
            field: "f1",
            width: 150,
            cellRenderer: this.cellRenderer.bind(this)
        };

        this.state.agGrid.columnDefs = [col1, col2, col1, col2];
        //this.state.agGrid.rowData = [{f1: "жопа1", f2: "------"}, {f1: "жопа2", f2: "--2---"}];

        let data: any[] = [];
        for (let i = 0; i < 100; i++) {
            data.push({f1: "жопа" + i, f2: "---" + i + "---"});
        }
        this.state.agGrid.rowData = data;
        this.state.agGrid.rowHeight = undefined;
        this.state.dataSource = data;

        this.state.agGrid.getRowHeight = this.handleGetRowHeight.bind(this);


        //(this.state.agGrid as any).groupHeaders = true;
        this.state.agGrid.enableColResize = true;

    }

    private handleGetRowHeight(param: GetRowHeightParams): number {
        //console.log("handleGetRowHeight");
        //console.log(param);

        return 30;
    }


    private renderCell(column: AgGrid.Column, rowNode: AgGrid.RowNode, data: any): JSX.Element {

        let cell = <div>жопа+див {data.f2}</div>;
        return cell;

    };


    private cellRenderer(params: CellRendererParams): any {
        //console.log(params);

        //let dnd = "";
        //if (this.state.dragRow.isDragging)
        //  dnd = "+dnd+";

        //let cellElement: Element;

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

        ReactDOM.render(cell, params.eParentOfValue);

        return null;
    }

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

