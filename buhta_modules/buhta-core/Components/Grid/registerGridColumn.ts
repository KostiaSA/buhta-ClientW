import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {TreeGridColumnProps} from "../TreeGrid/TreeGridColumn";
import {GridColumnProps} from "./GridColumn";
import {GridColumnGroupProps} from "./GridColumnGroup";

export interface GridColumnInfo extends GridColumnProps {
    objectType: typeof DesignedObject;
    isPositionField?: boolean;
}


export function registerGridColumn(columnInfo: GridColumnInfo) {

    let objType: any = columnInfo.objectType;

    if (!objType.$$gridColumnInfos)
        objType.$$gridColumnInfos = [];

    objType.$$gridColumnInfos.push(columnInfo);

    //console.log("registerPropertyEditor " + editor.propertyName);
    //console.log(editor);

}

