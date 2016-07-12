import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {TreeGridColumnProps} from "./TreeGridColumn";

export interface GridColumnInfo extends TreeGridColumnProps {
    //propertyName: string;
    objectType: typeof DesignedObject;
}


export function registerGridColumn(columnInfo: GridColumnInfo) {

    let objType: any = columnInfo.objectType;

    if (!objType.$$gridColumnInfos)
        objType.$$gridColumnInfos = [];

    objType.$$gridColumnInfos.push(columnInfo);

    //console.log("registerPropertyEditor " + editor.propertyName);
    //console.log(editor);

}

