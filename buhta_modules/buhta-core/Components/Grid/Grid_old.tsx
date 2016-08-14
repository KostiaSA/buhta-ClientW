// import * as React from "react";
// import * as ReactVirtualized from "react-virtualized";
// // import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox'
// // import AutoSizer from '../AutoSizer'
// // import Grid from '../Grid'
// // import ScrollSync from './ScrollSync'
// // import shallowCompare from 'react-addons-shallow-compare'
// // import cn from 'classnames'
// // import styles from './ScrollSync.example.css'
// // import scrollbarSize from 'dom-helpers/util/scrollbarSize'
//
// import {ComponentProps, ComponentState, Component} from "../Component";
// import {getScrollbarWidth} from "../../getScrollBarWidth";
// // const LEFT_COLOR_FROM = hexToRgb('#471061')
// // const LEFT_COLOR_TO = hexToRgb('#BC3959')
// // const TOP_COLOR_FROM = hexToRgb('#000000')
// // const TOP_COLOR_TO = hexToRgb('#333333')
//
// export interface GridProps extends ComponentProps<GridState> {
//
//     // dataSource: TreeGridDataSource<T>;
//     // rowHeight?: number;
//     //
//     // treeMode?: TreeMode;
//     //
//     // keyFieldName?: string; // key для treeMode parentKey
//     // parentKeyFieldName?: string; // parentKey для treeMode parentKey
//     // positionFieldName?: string;  // sort для treeMode parentKey
//     //
//     // hierarchyFieldName?: string;  // для "delimiterChar"
//     // hierarchyDelimiters?: string;
//     //
//     // autoExpandNodesToLevel?: number;
//     //
//     // editable?: boolean;
//     // denyInsert?: boolean;
//     // denyUpdate?: boolean;
//     // denyDelete?: boolean;
//     //
//     // dragDropNodes?: boolean;
//     //
//     // onCreateNewRecord?: () => any;
//     // onChangeFocusedRow?: TreeGreedEvent<T>;
//
// }
//
// export class GridState extends ComponentState<GridProps> {
//     constructor(private grid: Grid) {
//         super(grid);
//     }
//
//     columnCount: number;
//     columnWidth: number;
//     height: number;
//     overscanColumnCount: number;
//     overscanRowCount: number;
//     rowHeight: number;
//     rowCount: number;
//
//     // columns: InternalColumn[];
//     // pageLength: number;
//     // rows: InternalRow<T>[];
//     // nodes: InternalTreeNode<T>[];
//     // focusedRowIndex: number;
//     // focusedCellIndex: number;
//     // dataSource: TreeGridDataSource<T>;
//     //
//     // headerFakeRow: HTMLElement;
//     // footerFakeRow: HTMLElement;
//     // headerWrapperElement: HTMLElement;
//     // bodyWrapperElement: HTMLElement;
//     // footerWrapperElement: HTMLElement;
//     //
//     // headerTableElement: HTMLElement;
//     // bodyTableElement: HTMLElement;
//     //
//     // gridElement: HTMLElement;
//     // gridReactComponent: React.Component<any,any>;
//     //
//     // footerTableElement: HTMLElement;
//     //
//     // isCellDragging: boolean;
//     // draggingRowSourceIndex: number;
//     // draggingMode: "move" | "copy";
//     //
//     // getFocusedRow(): T {
//     //     return this.dataSource.getRow(this.focusedRowIndex);
//     // }
//     //
//     // refreshRow(rowIndex: number) {
//     //     this.treeGrid.refreshRow(rowIndex);
//     // }
//     //
//     // refreshFocusedRow() {
//     //     this.treeGrid.refreshRow(this.focusedRowIndex);
//     // }
// }
//
// export default class Grid extends Component<GridProps,GridState> {
//     constructor(props: GridProps, context: any) {
//         super(props, context)
//
//         this.state = new GridState(this);
//         this.state.columnWidth = 75;
//         this.state.columnCount = 50;
//         this.state.height = 300;
//         this.state.overscanColumnCount = 0;
//         this.state.overscanRowCount = 5;
//         this.state.rowHeight = 40;
//         this.state.rowCount = 100;
//
//         this._renderBodyCell = this._renderBodyCell.bind(this)
//         this._renderHeaderCell = this._renderHeaderCell.bind(this)
//         this._renderLeftSideCell = this._renderLeftSideCell.bind(this)
//     }
//
//     render() {
//         const {
//             columnCount,
//             columnWidth,
//             //    height,
//             overscanColumnCount,
//             overscanRowCount,
//             rowHeight,
//             rowCount
//         } = this.state;
//
//         let headerHeight=rowHeight;
//
// //        <ReactVirtualized.AutoSizer>
//         //          {(auto1: {widthXX: number, heightXX: number}) => (
//         return (
//             <div style={{height:"100%", border:"0px solid red" }}>
//                 <ReactVirtualized.AutoSizer disableWidth>
//                     {(auto1: {height: number}) => (
//                         <ReactVirtualized.ScrollSync>
//                             {(param: {clientHeight: number, clientWidth: number, onScroll: any, scrollHeight: number, scrollLeft: number, scrollTop: number, scrollWidth: number}) => {
//                                 const {
//                                     clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth
//                                 }
//                                     = param;
//
//                                 const x = scrollLeft / (scrollWidth - clientWidth);
//                                 const y = scrollTop / (scrollHeight - clientHeight);
//
//                                 return (
//                                     <div className="grid-row">
//                                         <div
//                                             className="left-side-grid-container"
//                                             style={{
//                                             position: 'absolute',
//                                             left: 0,
//                                             top: 0,
//                                             color: "blue",
//                                             backgroundColor: "silver"
//                                           }}
//                                         >
//                                             <ReactVirtualized.Grid
//                                                 cellRenderer={this._renderLeftHeaderCell}
//                                                 className="header-grid"
//                                                 width={columnWidth}
//                                                 height={rowHeight}
//                                                 rowHeight={rowHeight}
//                                                 columnWidth={columnWidth}
//                                                 rowCount={1}
//                                                 columnCount={1}
//                                             />
//                                         </div>
//                                         <div
//                                             className="left-side-grid-container"
//                                             style={{
//                                             position: 'absolute',
//                                             left: 0,
//                                             top: rowHeight,
//                                             color: "blue",
//                                             backgroundColor: "silver"
//                                           }}
//                                         >
//                                             <ReactVirtualized.Grid
//                                                 overscanColumnCount={overscanColumnCount}
//                                                 overscanRowCount={overscanRowCount}
//                                                 cellRenderer={this._renderLeftSideCell}
//                                                 columnWidth={columnWidth}
//                                                 columnCount={1}
//                                                 className="left-side-grid"
//                                                 height={auto1.height - getScrollbarWidth()-headerHeight}
//
//                                                 rowHeight={rowHeight}
//                                                 rowCount={rowCount}
//                                                 scrollTop={scrollTop}
//                                                 width={columnWidth}
//                                             />
//                                         </div>
//                                         <div className="grid-column">
//                                             <ReactVirtualized.AutoSizer disableHeight>
//                                                 {(auto: {width: number}) => (
//                                                     <div>
//                                                         <div style={{
//                                                           backgroundColor: "silver",
//                                                           color: "red",
//                                                           height: rowHeight,
//                                                           width: auto.width - getScrollbarWidth()
//                                                         }}>
//                                                             <ReactVirtualized.Grid
//                                                                 className="header-grid"
//                                                                 columnWidth={columnWidth}
//                                                                 columnCount={columnCount}
//                                                                 height={rowHeight}
//                                                                 overscanColumnCount={overscanColumnCount}
//                                                                 cellRenderer={this._renderHeaderCell}
//                                                                 rowHeight={rowHeight}
//                                                                 rowCount={1}
//                                                                 scrollLeft={scrollLeft}
//                                                                 width={auto.width - getScrollbarWidth()}
//                                                             />
//                                                         </div>
//                                                         <div
//                                                             style={{
//                                                             backgroundColor: "silver",
//                                                             color: "black",
//                                                             height:auto1.height-headerHeight,
//                                                             width: auto.width
//                                                           }}
//                                                         >
//                                                             <ReactVirtualized.Grid
//                                                                 className="body-grid"
//                                                                 columnWidth={columnWidth}
//                                                                 columnCount={columnCount}
//                                                                 height={auto1.height-headerHeight}
//                                                                 onScroll={onScroll}
//                                                                 overscanColumnCount={overscanColumnCount}
//                                                                 overscanRowCount={overscanRowCount}
//                                                                 cellRenderer={this._renderBodyCell}
//                                                                 rowHeight={rowHeight}
//                                                                 rowCount={rowCount}
//                                                                 width={ auto.width}
//
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </ReactVirtualized.AutoSizer>
//                                         </div>
//                                     </div>
//                                 )
//                             }}
//                         </ReactVirtualized.ScrollSync>
//                     )}
//                 </ReactVirtualized.AutoSizer>
//             </div>
//         )
//     }
//
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return shallowCompare(this, nextProps, nextState)
//     // }
//
//     _renderBodyCell(param: {columnIndex: number, rowIndex: number}) {
//         if (param.columnIndex < 1) {
//             return
//         }
//
//         return this._renderLeftSideCell(param)
//     }
//
//     _renderHeaderCell(param: {columnIndex: number, rowIndex: number}) {
//         if (param.columnIndex < 1) {
//             return
//         }
//
//         return this._renderLeftHeaderCell(param)
//     }
//
//     _renderLeftHeaderCell(param: {columnIndex: number, rowIndex: number}) {
//         return (
//             <div className="header-cell">
//                 {`C${param.columnIndex}`}
//             </div>
//         )
//     }
//
//     _renderLeftSideCell(param: {columnIndex: number, rowIndex: number}) {
//         return (
//             <div className="left-side-cell">
//                 {`R${param.rowIndex}, C${param.columnIndex}`}
//             </div>
//         )
//     }
// }
//
