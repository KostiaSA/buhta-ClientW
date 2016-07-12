import * as React from "react";
import * as _ from "lodash";

import {TreeGridColumnProps} from "./TreeGridColumn";
import {TreeGridDataSource} from "./TreeGridDataSource";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {getGridColumnInfos} from "./getGridColumnInfos";

export interface TreeGridArrayDataSourceParams<T> {

    getNewRow?: () => T;
    getEmptyDataSourceMessage?: () => React.ReactNode;
    getDeleteRowMessage?: () => React.ReactNode;

}

export class TreeGridArrayDataSource<T extends DesignedObject> implements TreeGridDataSource {
    constructor(public arrayObj: T[], public params: TreeGridArrayDataSourceParams<T> = {}) {

    }


    get isTreeGridDataSource() {
        return true;
    }

    getTreeGridColumns(): TreeGridColumnProps[] {
        if (this.arrayObj.length === 0)
            return [];
        else
            return getGridColumnInfos(this.arrayObj[0]).map<TreeGridColumnProps>((col) => {

                let ret: any = {};
                _.assign(ret, col);
                return ret;

                // return ({
                //     caption: col.caption,
                //     width: col.width,
                //     order: col.order,
                //     propertyName: col.propertyName,
                //     showHierarchyTree: col.showHierarchyTree,
                //     showHierarchyPadding: col.showHierarchyPadding
                // });
            });

    }

    getDataRows(): T[] {
        return this.arrayObj;
    }

    getNewRow(): T {
        if (this.params.getNewRow)
            return this.params.getNewRow();
        else
            throw "TreeGridArrayDataSource: method getNewRow() not defined";
    }

    addRow(row: T): number {
        this.arrayObj.push(row);
        return this.arrayObj.length - 1;
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