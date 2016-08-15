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
    eGridCell: HTMLElement;
    eParentOfValue: HTMLElement;
    node: AgGrid.RowNode;
    addRenderedRowListener: Function;
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
        let col2: AgGrid.ColDef = {headerName: "колонка2", field: "f1", width: 150};

        this.state.agGrid.columnDefs = [col1, col2, col1, col2];
        //this.state.agGrid.rowData = [{f1: "жопа1", f2: "------"}, {f1: "жопа2", f2: "--2---"}];

        let data: any[] = [];
        for (let i = 0; i < 100; i++) {
            data.push({f1: "жопа" + i, f2: "---" + i + "---"});
        }
        this.state.agGrid.rowData = data;
        this.state.dataSource = data;


        //(this.state.agGrid as any).groupHeaders = true;
        this.state.agGrid.enableColResize = true;

    }

    private cellRenderer(params: CellRendererParams): any {
        //console.log(params);

        let dnd = "";
        if (this.state.dragRow.isDragging)
            dnd = "+dnd+";

        let cellElement: Element;

        let cell = <div ref={ (e) => { cellElement = e; } }>{dnd} жопа див {params.data.f2}</div>;

        let dragOver = () => {

            let $row = $(cellElement).parents(".ag-row").first();
            let $tbody = $(cellElement).parents(".ag-body-container").first();

            let $arrow = $tbody.find(".drag-drop-arrow");
            if ($arrow.length === 0) {
                $("<div class='drag-drop-arrow' style='position:absolute; width:10px; height:10px; border:2px solid red'></div>").appendTo($tbody);
                $arrow = $tbody.find(".drag-drop-arrow");
                console.log("CREATE ----------- drag-drop-arrow");
                console.log($arrow);
            }


            // $tbody.find(".drop-allow-after-cell").removeClass("drop-allow-after-cell");
            // $tbody.find(".drop-deny-after-cell").removeClass("drop-deny-after-cell");
            // $tbody
            //     .find(".drop-arrow")
            //     .addClass("is-hidden")
            //     .removeClass("drop-deny-into-cell")
            //     .removeClass("drop-allow-into-cell");
            //
            //
            //     console.log("dragover1");
            // console.log(params.data);
        };

        if (this.state.dragRow.isDragging)
            $(params.eParentOfValue).on("mousemove", dragOver);

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

    private handleDragMouseUpViewPort(e: any) {
        console.log("handleDragMouseUp");
        this.state.dragRow.isMouseDown = false;
        if (this.state.dragRow.isDragging) {
            console.log("STOP-DRAG");
            this.state.dragRow.isDragging = false;
            this.state.agGrid.api!.refreshView();
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

        let viewPort = $(this.nativeElement).find(".ag-body-viewport").first();
//        $(viewPort).on("mousedown", "drag", this.handleDragMouseDownViewPort);
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
        let viewPort = $(this.nativeElement).find(".ag-body-viewport").first();
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

