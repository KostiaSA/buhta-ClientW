
import {GridColumnInfo} from "./registerGridColumn";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";
import {GridDataSourceRow} from "./GridDataSource";

export function getGridColumnInfos(obj: GridDataSourceRow): GridColumnInfo[] {

    let infos = (obj.constructor as any).$$gridColumnInfos as GridColumnInfo[];

    if (!infos)
        return [];

    infos = infos.filter((edt) => obj instanceof edt.objectType);

    //console.log("getPropertyEditors") ;
    //console.log(editors);
    return infos;

}

