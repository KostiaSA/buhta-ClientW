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
import {throwError, throwAbstractError, throwUnderConstruction} from "../../Error";
import {Layout} from "../LayoutPane/Layout";
import {Fixed} from "../LayoutPane/Fixed";
import {Flex} from "../LayoutPane/Flex";
import {Button} from "../Button/Button";
import {ObjectDesigner} from "../../../buhta-app-designer/ObjectDesigner/ObjectDesigner";
import {OpenWindowParams} from "../Desktop/Desktop";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {
    INSERT_BUTTON_TEXT, DELETE_BUTTON_TEXT, UPDATE_BUTTON_TEXT, INSERT_BUTTON_ICON,
    UPDATE_BUTTON_ICON, DELETE_BUTTON_ICON, SELECT_BUTTON_TEXT, REJECT_BUTTON_TEXT, CLOSE_BUTTON_TEXT,
    SELECT_BUTTON_ICON, CLOSE_BUTTON_ICON, REJECT_BUTTON_ICON, BOOLEAN_TRUE_TEXT, BOOLEAN_FALSE_TEXT
} from "../../Constants";
import {Icon} from "../Icon/Icon";
import {JQueryKeyCodeToReact} from "../../Keycode";


///////////// ВНИМАНИЕ !  //////////////////
// ag-grid.noStyle.js был запатчен, иначе содержимое ячейки для tree-column будет вставляться перед иконками плюс/минус
// 1. ищем строку:   resultFromRenderer = cellRendererFunc(params);
// 2. перед ней вставляем: params.eTarget=eTarget;
// todo надо будет вставить в исходник ag-grid: ag-grid-master\src\ts\rendering\cellRendererService.ts, строка 52

const MIN_ROW_HEIGHT = 24;
const MAX_ROW_HEIGHT = 350;

export type GridStateType = GridState<GridDataSourceRow,DesignedObject>;

// GridDataSourceRow - тип объекта для показа
// DesignedObject - тип объекта для редактирования
export interface GridProps extends ComponentProps<GridStateType> {

    dragDropNodes?: boolean;
    dataSource: GridDataSource<GridDataSourceRow,DesignedObject>;

    columnDefs?: (GridColumnDef | GridColumnGroup)[];

    enableDragDrop?: boolean;

    editable?: boolean;

    denyInsert?: boolean;
    denyUpdate?: boolean;
    denyDelete?: boolean;

    lookupMode?: "none" | "listbox" | "single" | "multi";
    showCloseButton?: boolean;
    onLookupOk?: (selectedRows: GridDataSourceRow[]) => any;
    onLookupCancel?: () => any;

    sizeColumnsToFit?: boolean; // The columns will scale (growing or shrinking) to fit the available width.
    onGridSizeChanged?: (grid: GridStateType) => void; // The grid had to lay out again because it changed size.
    noBorder?: boolean;  // .ag-root стираем внешний border
    hideColumnsHeaders?: boolean;  //
    onGetGridState?: (grid: GridStateType) => void; // получить доступ к GridState
    onFirstRender?: (grid: GridStateType) => void; // после первого рендеринга
    onKeyDown?: (grid: GridStateType, keyCode: string, rowData: GridDataSourceRow)=>void;
    onClick?: (grid: GridStateType, rowData: GridDataSourceRow)=>void;
    onDblClick?: (grid: GridStateType, rowData: GridDataSourceRow)=>void;
    onExternalFilter?: (grid: GridStateType, rowData: GridDataSourceRow)=>boolean;

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
    //
    //
    // onCreateNewRecord?: () => any;
    // onChangeFocusedRow?: TreeGreedEvent<T>;

}

class DragDropState {
    constructor(public gridState: GridStateType) {

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

export class GridState<TRow extends GridDataSourceRow,TDesignedObject extends DesignedObject> extends ComponentState<GridProps> {
    constructor(private grid: Grid) {
        super(grid);
    }

    filterWords: string[] | undefined;
    agGrid: AgGrid.GridOptions = {};
    dataSource: GridDataSource<TRow,TDesignedObject>;
    dragDropState: DragDropState = new DragDropState(this);

    isRowsToRender(): boolean {
        return this.agGrid.api!.getModel().isRowsToRender();
    }

    externalFilterChanged() {
        if (this.agGrid.api)
            this.agGrid.api!.onFilterChanged();
    }

    dataChanged() {
        let autoForm = this.grid.getParentAutoForm();
        if (autoForm)
            autoForm.forceUpdate();
        console.log("grid-dataChanged22");
    }

    refresh() {
        console.log("grid-refresh");
        (this.component as Grid).rowHeightCache = undefined;
        this.agGrid.api!.setRowData(this.dataSource.getRows());
        if (this.component.props.sizeColumnsToFit === true)
            this.agGrid.api!.sizeColumnsToFit();
    }

    expandRow(dataItem: TRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && !node.expanded) {
            node.expanded = true;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    collapseRow(dataItem: TRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && node.expanded) {
            node.expanded = false;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    expandRowParent(dataItem: TRow) {
        let node = this.findAgRowNodeOfData(dataItem);
        if (node && node.parent && !node.parent.expanded) {
            node.parent.expanded = true;
            (this.agGrid.api!.getModel() as InMemoryRowModel).refreshModel(AgGrid.Constants.STEP_MAP);
        }
    }

    setFocusedRow(dataItem: TRow) {
        this.expandRowParent(dataItem);
        let col = this.agGrid.columnApi!.getAllDisplayedColumns();
        let rowIndex = this.findAgNodeIndexOfData(dataItem);
        if (rowIndex >= 0)
            this.agGrid.api!.setFocusedCell(rowIndex, col[0]);
    }

    setFocusToFirstRow() {
        let col = this.agGrid.columnApi!.getAllDisplayedColumns();
        let rowIndex = 0;
        this.agGrid.api!.setFocusedCell(rowIndex, col[0]);
    }

    findAgRowNodeOfData(dataItem: TRow): AgGrid.RowNode | undefined {
        let ret: AgGrid.RowNode| undefined = undefined;
        this.agGrid.api!.forEachNode((node: AgGrid.RowNode) => {
            if (this.dataSource.getIsRowsDataEqual(node.data, dataItem))
                ret = node;
        });
        return ret;
    }

    findAgNodeIndexOfData(dataItem: TRow): number {
        let rowModel = this.agGrid.api!.getModel();

        for (let i = 0; i < rowModel.getRowCount(); i++) {
            if (this.dataSource.getIsRowsDataEqual(rowModel.getRow(i).data, dataItem))
                return i;
        }

        return -1;
    }

    getDataByAgRowIndex(rowIndex: number): TRow {
        return this.agGrid.api!.getModel().getRow(rowIndex).data;
    }

    getFocusedRowData(): TRow | undefined {
        if (!this.isRowsToRender())
            return undefined;
        let focusedCell = this.agGrid.api!.getFocusedCell();
        if (focusedCell)
            return this.getDataByAgRowIndex(focusedCell.getGridRow().rowIndex);
        else
            return undefined;
    }
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

export default class Grid extends Component<GridProps, GridState<GridDataSourceRow,DesignedObject>> {
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

        this.state.agGrid.onGridSizeChanged = (e: any)=> {
            if (this.props.onGridSizeChanged !== undefined) {
                this.props.onGridSizeChanged(this.state);
            }
            if (this.props.sizeColumnsToFit === true)
                this.state.agGrid.api!.sizeColumnsToFit();
        };


        if (this.props.hideColumnsHeaders === true)
            this.state.agGrid.headerHeight = 0;

        if (this.props.onExternalFilter !== undefined) {
            this.state.agGrid.isExternalFilterPresent = (): boolean => true;
            this.state.agGrid.doesExternalFilterPass = (node: AgGrid.RowNode): boolean => {
                return this.props.onExternalFilter!(this.state, node.data);
            };
        }


        if (this.props.onGetGridState !== undefined) {
            this.props.onGetGridState(this.state);
        }
    }


    handleAgRowGroupOpened(params: { node: AgGrid.RowNode}) {
        this.state.agGrid.api!.refreshRows([params.node]);
        if (params.node.data.$$dataSourceTreeNode)
            params.node.data.$$dataSourceTreeNode.expanded = params.node.expanded;
    }


    private agGridNativeElement: HTMLElement;
    rowHeightCache: { [id: string]: number } | undefined;
    avgRowHeight = 0;

    private calculateRowHeights(nodes: AgGrid.RowNode[]) {

        let avgOf100 = Math.min(100, nodes.length); // для рачета средней высоты row берутся первые 100 rows

        if (!this.state.agGrid.columnApi)  // окно с гридой было закрыто
            return;

        let cells: JSX.Element[] = [];

        let handleRef = (e: HTMLElement, node: AgGrid.RowNode) => {
            if (e) {
                let oldHeight = this.rowHeightCache![node.id];
                let clientHeight = Math.max(e.clientHeight, MIN_ROW_HEIGHT);
                clientHeight = Math.min(clientHeight, MAX_ROW_HEIGHT);
                if (oldHeight === undefined || clientHeight > oldHeight) {
                    this.rowHeightCache![node.id] = clientHeight;
                    if (node.data && node.data.$$gridRowHeight)
                        node.data.$$gridRowHeight = undefined;

                    //console.log("grid-calculateRowHeights-node.id '" + node.id + "': " + e.clientHeight)

                    if (this.avgRowHeight === 0 && Object.keys(this.rowHeightCache).length === avgOf100) {
                        // вычисляем среднюю высоту
                        let sum = 0;
                        let count = 0;
                        for (let property in this.rowHeightCache!) {
                            let value = this.rowHeightCache![property];
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
            if (this.rowHeightCache![node.id] === undefined) {
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
        //console.log("get row height " + param.node.id);

        const delay200ms = 200; // 1 раз в секунд запускается цикл расчета высот rows, чаще нельзя, браузер замирает
        const max2000 = 2000; // для первых 2000 строк делаем расчет, для остальных берем средний
        const first100 = 100; // после первых 100 рассчитанных строк, показываем гриду юзеру
        const refresh1000 = 1000; // раз в секунду запускаем refreshInMemoryRowModel()

        if (this.rowHeightCache === undefined) {
            //console.log("RECALC row heights");
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

            if (nodes.length < first100) {
                this.calculateRowHeights(nodes.slice(0));
            }
            else {
                setTimeout(() => {
                    this.calculateRowHeights(nodes.slice(0));
                    if (this.state.agGrid.api)
                        this.state.agGrid.api.refreshInMemoryRowModel();
                }, delay);
            }
        }

        if (param.data && param.data.$$gridRowHeight !== undefined) {
            return param.data.$$gridRowHeight;
        }
        else if (param.data && this.rowHeightCache[param.node.id] !== undefined) {
            param.data.$$gridRowHeight = this.rowHeightCache[param.node.id];
            return this.rowHeightCache[param.node.id];
        }
        else if (this.avgRowHeight > 0)
            return this.avgRowHeight;
        else
            return 25;
    }


    private highlightFilters(str: string): JSX.Element[] | string {

        if (this.state.filterWords === undefined || this.state.filterWords.length === 0)
            return str;

        let ret: any[] = [str];

        for (let i = 0; i < this.state.filterWords.length; i++) {
            let regexp = new RegExp(this.state.filterWords[i], "i");

            for (let retIndex = 0; retIndex < ret.length; retIndex++) {
                let str = ret[retIndex];
                if (_.isString(ret[retIndex])) {
                    let pos = str.search(regexp);
                    if (pos >= 0) {
                        let beforeStr = str.substring(0, pos);
                        let searchStr = str.substr(pos, this.state.filterWords[i].length);
                        let afterStr = str.substring(pos + this.state.filterWords[i].length);
                        let ret1 = ret.slice(0, retIndex);
                        let ret2 = [beforeStr,
                            <span key={i} className="grid-filter-highlight">{searchStr}</span>, afterStr];
                        let ret3 = ret.slice(retIndex + 1);
                        ret = ret1.concat(ret2, ret3);
                        break;
                    }
                }
            }

        }
        return ret;
    }

    private renderCell(column: AgGrid.Column, rowNode: AgGrid.RowNode, data: GridDataSourceRow): JSX.Element {

        let gridColumnProps = (column.getColDef() as any).$$gridColumnProps as GridColumnProps;

        let icon: JSX.Element | undefined = undefined;
        if (gridColumnProps.iconPropertyName !== undefined) {
            icon = (
                <Icon path={this.state.dataSource.getDataValue(data,gridColumnProps.iconPropertyName)}
                      style={{ marginRight:5 }}>
                </Icon>
            );
        }

        let dataValue: any = undefined;
        if (column.getColDef().field !== undefined)
            dataValue = this.state.dataSource.getDataValue(data, column.getColDef().field!);
        if (gridColumnProps.onGetPropertyValue !== undefined)
            dataValue = gridColumnProps.onGetPropertyValue(data);


        if (dataValue === undefined)
            dataValue = "";
        else if (dataValue === null)
            dataValue = "<null>";
        else if (dataValue === true) {
            if (gridColumnProps.booleanTrueLabel !== undefined)
                dataValue = gridColumnProps.booleanTrueLabel;
            else
                dataValue=BOOLEAN_TRUE_TEXT;
        }
        else if (dataValue === false) {
            if (gridColumnProps.booleanFalseLabel !== undefined)
                dataValue = gridColumnProps.booleanFalseLabel;
            else
                dataValue=BOOLEAN_FALSE_TEXT;
        }
        else if (_.isString(dataValue)) {
            // это строка, отставляем как есть, только подсвечиваем фильтрацию
            dataValue = this.highlightFilters(dataValue);
        }
        else if (dataValue.$$typeof !== undefined) {
            // это JSX.Element, отставляем как есть
        }
        else if (dataValue.toString !== undefined) {
            dataValue = dataValue.toString();
        }
        else if (_.isArray(dataValue))
            dataValue = "<array>";
        else
            dataValue = "<invalid type>";

        let cell = <span>{icon}{dataValue}</span>;
        return cell;
    };

    cellRenderer(params: AgCellRendererParams): any {

        let focusedDiv = params.eGridCell;
        if (this.props.onKeyDown !== undefined) {
            $(focusedDiv).on("keydown", (e: JQueryKeyEventObject)=> {
                this.props.onKeyDown!(this.state, JQueryKeyCodeToReact[e.keyCode.toString()], params.data);
            });
        }
        if (this.props.onClick !== undefined) {
            $(focusedDiv).on("click", (e: JQueryKeyEventObject)=> {
                this.props.onClick!(this.state, params.data);
            });
        }
        if (this.props.onDblClick !== undefined) {
            $(focusedDiv).on("dblclick", (e: JQueryKeyEventObject)=> {
                this.props.onDblClick!(this.state, params.data);
            });
        }
        if (this.props.lookupMode === "listbox")
            $(focusedDiv).addClass("grid-lookup-mode-listbox");
        else if (this.props.lookupMode === "single")
            $(focusedDiv).addClass("grid-lookup-mode-single");
        else if (this.props.lookupMode === "multi")
            $(focusedDiv).addClass("grid-lookup-mode-multi");


        let cell = this.renderCell(params.column, params.node, params.data);

        ////////////////// drag-over///////////////////
        // todo сделать сдвиг стрелки вправо, в соответствии с level
        let dragOver = (e: MouseEvent) => {
            if (!this.state.dragDropState.isDragging)
                return;

            let $row = $(e.target).parents(".ag-row").first();

            let $container = $(this.agGridNativeElement).find(".ag-pinned-left-cols-container").first();
            let $viewport = $(this.agGridNativeElement).find(".ag-pinned-left-cols-viewport").first();
            let $viewportScrollLeft: number = 0;

            if ($viewport.css("display") === "none") {
                $container = $(this.agGridNativeElement).find(".ag-body-container").first();
                $viewport = $(this.agGridNativeElement).find(".ag-body-viewport").first();
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
            let viewPort = $(this.agGridNativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
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
                this.state.dragDropState.dragRowData = this.state.getDataByAgRowIndex(focusedCell.getGridRow().rowIndex);
                this.state.agGrid.api!.refreshView();
            }
        }
    }

    private enableDragDrop() {
        let viewPort = $(this.agGridNativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport");
        $(viewPort).on("mousedown", this.handleDragMouseDownViewPort.bind(this));
        $(viewPort).on("mouseup", this.handleDragMouseUpViewPort.bind(this));
        $(viewPort).on("mousemove", this.handleDragMouseMoveViewPort.bind(this));
    }

    private disableDragDrop() {
        let viewPort = $(this.agGridNativeElement).find(".ag-body-viewport,.ag-pinned-left-cols-viewport").first();
        $(viewPort).off("mousedown");
        $(viewPort).off("mouseup");
        $(viewPort).off("mousemove");
    }


    protected didMount() {
        super.didMount();

        this.createColumns();
        new AgGrid.Grid(this.agGridNativeElement, this.state.agGrid);

        if (this.props.noBorder === true) {
            let agRoot = $(this.agGridNativeElement).find(".ag-root");
            agRoot.css("border", "1px solid transparent");
        }


        if (this.props.sizeColumnsToFit === true)
            this.state.agGrid.api!.sizeColumnsToFit();
        // else
        //     this.state.agGrid.columnApi!.autoSizeColumns(this.state.agGrid.columnApi!.getAllColumns());

        if (this.props.dataSource.getIsAsync()) {
            this.state.agGrid.api!.showLoadingOverlay();
            this.props.dataSource.getRowsAsync()
                .then((rows) => {
                    this.state.refresh();
                    if (this.props.onFirstRender !== undefined) {
                        this.props.onFirstRender(this.state);
                    }
                })
                .catch((error) => {
                    this.showErrorWindow(error);
                });
        }
        else {
            if (this.props.onFirstRender !== undefined) {
                this.props.onFirstRender(this.state);
            }
        }

        if (this.props.enableDragDrop === true) {
            this.enableDragDrop();
        }
    }

    protected didUpdate(prevProps: GridProps, prevState: GridStateType, prevContext: any) {
        super.didUpdate(prevProps, prevState, prevContext);
        this.disableDragDrop();
        if (this.props.enableDragDrop === true) {
            this.enableDragDrop();
        }
        if (this.props.sizeColumnsToFit === true)
            this.state.agGrid.api!.sizeColumnsToFit();
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

    handleUpdateButtonClick = () => {
        let rowData = this.state.getFocusedRowData();
        if (rowData)
            this.openEditForm(rowData!);
    }

    handleInsertButtonClick = () => {
        let rowData = this.state.getFocusedRowData();
        this.openInsertForm(rowData);
    }

    handleDeleteButtonClick = () => {
        let rowData = this.state.getFocusedRowData();
        if (rowData)
            this.openDeleteForm(rowData);

    }

    openDeleteForm(rowToDelete: GridDataSourceRow) {
        // todo сделать удаление нескольких отмеченных
        this.state.dataSource.openDeleteForm(this.state, [rowToDelete]);

        // if (!(rowToDelete instanceof DesignedObject))
        //     throwError("Grid:openDeleteForm(): rowToDelete must be 'DesignedObject'");
        // let row = rowToDelete as DesignedObject;
        // let objectClassName = "запись";
        // if (row.getClassName)
        //     objectClassName = row.getClassName();
        //
        // let objectName = "";
        // if (row.toString)
        //     objectName = row.toString();
        //
        // let message = <div className="color-red">Удалить "{objectClassName}"?<br/>{ objectName }</div>;
        //
        // this.showDeleteConfirmationWindow(message, (okResult) => {
        //     if (okResult) {
        //         this.state.dataSource.deleteRow(rowToDelete);
        //         this.state.refresh();
        //     }
        // });
    }

    openInsertForm(focusedRowData?: GridDataSourceRow) {

        this.state.dataSource.openInsertForm(this.state, focusedRowData);

        // this.state.dataSource.getNewRow().then((designedObject: DesignedObject)=> {
        //
        //     if (designedObject) {
        //         let win =
        //             <ObjectDesigner
        //                 designedObject={designedObject}
        //                 onSaveChanges={ () => {
        //                this.state.dataSource.addRow(designedObject);
        //                this.state.refresh();
        //                this.state.setFocusedRow(designedObject);
        //             }}
        //             >
        //
        //             </ObjectDesigner>;
        //
        //         let openParam: OpenWindowParams = {
        //             title: "добавление",
        //             autoPosition: "parent-center",
        //             parentWindowId: this.getParentWindowId()
        //         };
        //
        //         this.getParentDesktop().openWindow(win, openParam);
        //     }
        //
        // });


    }

    openEditForm(rowData: GridDataSourceRow) {

        this.state.dataSource.openEditForm(this.state, rowData);
        //
        // if (!(rowData instanceof DesignedObject))
        //     throwError("Grid:openDeleteForm(): rowData must be 'DesignedObject'");
        //
        // let designedObject = rowData as DesignedObject;
        //
        // let win =
        //     <ObjectDesigner
        //         designedObject={designedObject}
        //         onSaveChanges={ () => { this.state.refresh(); }}
        //     >
        //
        //     </ObjectDesigner>;
        //
        // let openParam: OpenWindowParams = {
        //     title: "редактирование",
        //     autoPosition: "parent-center",
        //     parentWindowId: this.getParentWindowId()
        // };
        //
        // this.getParentDesktop().openWindow(win, openParam);

    }

    renderEditableButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];

        if (this.props.editable) {
            if (this.props.denyInsert !== true)
                buttons.push(
                    <Button
                        key="insert"
                        icon={INSERT_BUTTON_ICON}
                        onClick={this.handleInsertButtonClick}>
                        { INSERT_BUTTON_TEXT}
                    </Button>
                );

            if (this.props.denyUpdate !== true)
                buttons.push(
                    <Button
                        key="update"
                        onClick={this.handleUpdateButtonClick}
                        icon={UPDATE_BUTTON_ICON}
                    >
                        { UPDATE_BUTTON_TEXT}
                    </Button>
                );

            if (this.props.denyDelete !== true)
                buttons.push(
                    <Button
                        key="delete"
                        onClick={this.handleDeleteButtonClick}
                        icon={DELETE_BUTTON_ICON}
                    >
                        { DELETE_BUTTON_TEXT}
                    </Button>
                );
        }
        return buttons;
    }

    handleSelectButtonClick = () => {
        // todo 'multi' mode
        if (this.props.lookupMode === "single") {
            let rowData = this.state.getFocusedRowData();
            if (rowData !== undefined) {
                if (this.props.onLookupOk !== undefined) {
                    this.props.onLookupOk([rowData]);
                }
                this.getParentWindow()!.close();
            }
        }
        else
            throwUnderConstruction();

    }

    handleCancelButtonClick = () => {
        if (this.props.onLookupCancel !== undefined) {
            this.props.onLookupCancel();
        }
        this.getParentWindow()!.close();
    }

    handleCloseButtonClick = () => {
        this.getParentWindow()!.close();
    }

    renderSelectCancelCloseButtons(): JSX.Element[] {
        let buttons: JSX.Element[] = [];
        if (this.props.lookupMode === "single" || this.props.lookupMode === "multi") {
            buttons.push(
                <Button
                    key="select"
                    onClick={this.handleSelectButtonClick}
                    icon={SELECT_BUTTON_ICON}
                >
                    { SELECT_BUTTON_TEXT }
                </Button>
            );
            buttons.push(
                <Button
                    key="cancel"
                    onClick={this.handleCancelButtonClick}
                    icon={REJECT_BUTTON_ICON}
                >
                    { REJECT_BUTTON_TEXT }
                </Button>
            );
        }
        else if (this.props.showCloseButton === true) {
            buttons.push(
                <Button
                    key="close"
                    onClick={this.handleCloseButtonClick}
                    icon={CLOSE_BUTTON_ICON}
                >
                    { CLOSE_BUTTON_TEXT }
                </Button>
            );
        }
        return buttons;
    }

    render() {
        return (
            <Layout className="grid???" type="column" sizeTo="parent" {...this.getRenderProps()}
            >
                <Flex className="grid-body" style={{ paddingBottom: 5 }}>
                    <div
                        className="ag-fresh"
                        ref={ (e) => { this.agGridNativeElement = e; }}
                        style={{height:"100%" }}
                    >
                    </div>
                </Flex>
                <Fixed className="grid-footer" style={{ paddingBottom: 5 }}>

                    <Layout type="row" sizeTo="content">
                        <Fixed>
                            {this.renderEditableButtons()}
                        </Fixed>
                        <Flex>
                        </Flex>
                        <Fixed>
                            {this.renderSelectCancelCloseButtons()}

                        </Fixed>
                    </Layout>

                </Fixed >
            </Layout >
        );

    }

}

