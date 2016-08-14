import * as React from "react";
//import * as AgGrid from "ag-grid";

import {ComponentProps, ComponentState, Component} from "../Component";
import {GridOptions as AgGridOptions, ColDef as AgColDef, Grid as AgGrid} from "ag-grid";


export interface GridProps extends ComponentProps<GridState> {


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
    // dragDropNodes?: boolean;
    //
    // onCreateNewRecord?: () => any;
    // onChangeFocusedRow?: TreeGreedEvent<T>;

}

export class GridState extends ComponentState<GridProps> {
    constructor(private grid: Grid) {
        super(grid);
    }

    agGrid: AgGridOptions = {};

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

export default class Grid extends Component<GridProps,GridState> {
    constructor(props: GridProps, context: any) {
        super(props, context);

        this.state = new GridState(this);

        let col1: AgColDef = {headerName: "колонка1", field: "f2", width: 150};
        let col2: AgColDef = {headerName: "колонка2", field: "f1", width: 150};

        this.state.agGrid.columnDefs = [col1, col2, col1, col2];
        //this.state.agGrid.rowData = [{f1: "жопа1", f2: "------"}, {f1: "жопа2", f2: "--2---"}];

        let data:any[]=[];
        for (let i=0; i<100; i++){
            data.push({f1: "жопа"+i, f2: "---"+i+"---"});
        }
        this.state.agGrid.rowData=data;

        //(this.state.agGrid as any).groupHeaders = true;
        this.state.agGrid.enableColResize = true;


    }

    protected didMount() {
        super.didMount();

//        var domNode = ReactDOM.findDOMNode(this);
        //this.gridOptions = AgGrid.ComponentUtil.copyAttributesToGridOptions(this.props.gridOptions, this.props);
        new AgGrid(this.nativeElement, this.state.agGrid);
        this.state.agGrid.api!.refreshView();

        //this.api = this.gridOptions.api;
        //this.columnApi = this.gridOptions.columnApi;

    }

    protected willUnmount() {
        super.willUnmount();
        this.state.agGrid.api!.destroy();
    }


    render() {
        return (
            <div
                className="ag-fresh"
                ref={ (e)=>{ this.nativeElement=e; }}
                style={{height:"100%" }}
            >

            </div>
        )
    }

}

