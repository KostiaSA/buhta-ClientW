import * as React from "react";
import * as _ from "lodash";

import {BaseControl} from "../../buhta-ui/BaseControl";
import {TreeGridDataSource} from "../../buhta-core/Components/TreeGrid/TreeGridDataSource";
import {TreeGridColumnProps} from "../../buhta-core/Components/TreeGrid/TreeGridColumn";
import {getGridColumnInfos} from "../../buhta-core/Components/TreeGrid/getGridColumnInfos";
import {throwError} from "../../buhta-core/Error";

export interface TreeGridComponentChildrenDataSourceParams<T> {

    getNewRow?: () => T;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class TreeGridComponentChildrenDataSource<T extends BaseControl | string> implements TreeGridDataSource {
    constructor(public componentChildren: T[], public params: TreeGridComponentChildrenDataSourceParams<T> = {}) {

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

    getDataRows(): T[] {
        return this.componentChildren;
    }

    getNewRow(): T {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else {
            throwError("TreeGridComponentChildrenDataSource: method getNewRow() not defined");
            throw  "";  // fake typescript 2
        }
    }

    addRow(row: T): number {
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
}