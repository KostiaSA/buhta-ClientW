
import {GridColumnInfo} from "../Grid/registerGridColumn";
import {DesignedObject} from "../../../buhta-app-designer/DesignedObject";

export function getGridColumnInfos(obj: DesignedObject): GridColumnInfo[] {

    let infos = (obj.constructor as any).$$gridColumnInfos as GridColumnInfo[];

    if (!infos)
        return [];

    infos = infos.filter((edt) => obj instanceof edt.objectType);

    //console.log("getPropertyEditors") ;
    //console.log(editors);
    return infos;

}

