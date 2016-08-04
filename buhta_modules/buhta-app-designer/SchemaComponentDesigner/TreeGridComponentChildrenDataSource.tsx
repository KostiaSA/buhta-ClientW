import * as React from "react";
import * as _ from "lodash";

import {BaseControl} from "../../buhta-ui/BaseControl";
import {TreeGridDataSource} from "../../buhta-core/Components/TreeGrid/TreeGridDataSource";
import {TreeGridColumnProps} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {getGridColumnInfos} from "../../buhta-core/Components/TreeGrid/getGridColumnInfos";
import {throwError} from "../../buhta-core/Error";

export interface TreeGridComponentChildrenDataSourceParams {

    getNewRow?: () => BaseControl;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class TreeGridComponentChildrenDataSource implements TreeGridDataSource<BaseControl> {
    constructor(public componentChildren: BaseControl[], public params: TreeGridComponentChildrenDataSourceParams = {}) {
        this.refresh();
    }

    private flat: BaseControl[];

    private pushFlatRecursive(item: BaseControl, parent: BaseControl | null) {
        item.$$flatIndex = this.flat.length;
        item.$$flatParent = parent;
        this.flat.push(item);
        item.children.forEach((child: BaseControl) => {
            this.pushFlatRecursive(child, item);
        });
    }


    refresh() {
        this.flat = [];
        this.componentChildren.forEach((child: BaseControl) => {
            this.pushFlatRecursive(child, null);
        });
    }


    get isTreeGridDataSource() {
        return true;
    }

    getTreeGridColumns(): TreeGridColumnProps[] {
        return [];
        // if (this.componentChildren.length === 0)
        //     return [];
        // else
        //     return getGridColumnInfos(this.componentChildren[0]).map<TreeGridColumnProps>((col) => {
        //
        //         let ret: any = {};
        //         _.assign(ret, col);
        //         return ret;
        //
        //         // return ({
        //         //     caption: col.caption,
        //         //     width: col.width,
        //         //     order: col.order,
        //         //     propertyName: col.propertyName,
        //         //     showHierarchyTree: col.showHierarchyTree,
        //         //     showHierarchyPadding: col.showHierarchyPadding
        //         // });
        //     });

    }

    getDataRows(): BaseControl[] {
        return this.componentChildren;
    }

    getDataRow(rowIndex: number): BaseControl {
        return this.flat[rowIndex];
    }

    getRowChildren(rowIndex: number): BaseControl[] {
        return this.flat[rowIndex].children;
    }

    getNewRow(): BaseControl {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridComponentChildrenDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: BaseControl): number {
        this.componentChildren.push(row);
        return this.componentChildren.length - 1;
    }

    deleteRow(rowIndex: number) {
        let deletedItems = _.pullAt(this.componentChildren, rowIndex);
        if (deletedItems.length === 0)
            throwError("TreeGridComponentChildrenDataSource.deleteRow(): invalid rowIndex (" + rowIndex + ")");
    }

    getEmptyDataSourceMessage(): React.ReactNode {
        if (this.params.getEmptyDataSourceMessage)
            return this.params.getEmptyDataSourceMessage();
        else
            return "Пустой список.";
    }

    getDeleteRowMessage(): React.ReactNode {
        if (this.params.getDeleteRowMessage)
            return this.params.getDeleteRowMessage();
        else
            return "Удалить запись!";
    }

    canDragRow(rowIndex: number, mode: "move" | "copy"): boolean {
        if (this.flat[rowIndex] === undefined)
            return false;

        return true;
    }


    private hasParent(rowIndex: number, parentIndex: number): boolean {
        let parentRow = this.flat[rowIndex].$$flatParent;
        if (parentRow && parentRow.$$flatIndex === parentIndex)
            return true;
        while (parentRow) {
            parentRow = parentRow.$$flatParent;
            if (parentRow && parentRow.$$flatIndex === parentIndex)
                return true;
        }
        return false;
    }

    canDropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean {
        if (this.flat[dragRowIndex] === undefined || this.flat[targetRowIndex] === undefined)
            return false;

        if (targetRowIndex === dragRowIndex || this.hasParent(targetRowIndex, dragRowIndex))
            return false;

        return true;
    }

    canDropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy"): boolean {
        if (this.flat[dragRowIndex] === undefined || this.flat[targetRowIndex] === undefined)
            return false;

        if (targetRowIndex === dragRowIndex || this.hasParent(targetRowIndex, dragRowIndex))
            return false;

        return true;
    }

    dropInto(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {

    }

    dropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {

    }

}