import * as React from "react";
import * as _ from "lodash";

import {BaseControl} from "../../buhta-ui/BaseControl";
import {TreeGridDataSource} from "../../buhta-core/Components/TreeGrid/TreeGridDataSource";
import {TreeGridColumnProps} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {getGridColumnInfos} from "../../buhta-core/Components/Grid/getGridColumnInfos";
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
        //console.log({push: item.$$flatIndex, parent: item.$$flatParent});
        item.children.forEach((child: BaseControl) => {
            this.pushFlatRecursive(child, item);
        });
    }


    refresh() {
        //console.error("------refresh-----");
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

    getRows(): BaseControl[] {
        return this.componentChildren;
    }

    getRow(rowIndex: number): BaseControl {
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
        //console.log("drop-into");

        let dragParentChildren: BaseControl[];

        if (this.flat[dragRowIndex].$$flatParent !== null)
            dragParentChildren = this.flat[dragRowIndex].$$flatParent!.children;
        else
            dragParentChildren = this.componentChildren;

        let deleted = _.pullAt(dragParentChildren, dragParentChildren.indexOf(this.flat[dragRowIndex]));
        if (deleted[0] !== this.flat[dragRowIndex])
            throw "internal error 'deleted[0] !== this.flat[dragRowIndex]' 78";
//        console.log(deleted);
        this.flat[targetRowIndex].children.push(this.flat[dragRowIndex]);
        this.refresh();
        // todo copy пока не работает, надо делать deep copy ноды

    }

    dropAfter(dragRowIndex: number, targetRowIndex: number, mode: "move" | "copy") {
        //console.log("drop-after");
        let dragParentChildren: BaseControl[];
        if (this.flat[dragRowIndex].$$flatParent !== null)
            dragParentChildren = this.flat[dragRowIndex].$$flatParent!.children;
        else
            dragParentChildren = this.componentChildren;

        let targetParentChildren: BaseControl[];
        if (this.flat[targetRowIndex].$$flatParent !== null)
            targetParentChildren = this.flat[targetRowIndex].$$flatParent!.children;
        else
            targetParentChildren = this.componentChildren;

        // if (targetParentChildren === undefined || targetParentChildren === null)
        //     throw "internal error 'deleted[0] !== this.flat[dragRowIndex]' 99";
        // if (dragParentChildren === undefined || dragParentChildren === null)
        //     throw  "err";

        if (targetParentChildren !== dragParentChildren) {
            targetParentChildren.splice(targetParentChildren.indexOf(this.flat[targetRowIndex]) + 1, 0, this.flat[dragRowIndex]);
            let deleted = _.pullAt(dragParentChildren, dragParentChildren.indexOf(this.flat[dragRowIndex]));
            if (deleted[0] !== this.flat[dragRowIndex]) {
                throw "internal error 'deleted[0] !== this.flat[dragRowIndex]' 99";
            }
        }
        else {
            let toPos = targetParentChildren.indexOf(this.flat[targetRowIndex]);
            let fromPos = targetParentChildren.indexOf(this.flat[dragRowIndex]);
            if (toPos > fromPos)
                targetParentChildren.splice(toPos, 0, targetParentChildren.splice(fromPos, 1)[0]);
            else
                targetParentChildren.splice(toPos + 1, 0, targetParentChildren.splice(fromPos, 1)[0]);
        }

        this.refresh();
        // todo copy пока не работает, надо делать deep copy ноды
    }

}