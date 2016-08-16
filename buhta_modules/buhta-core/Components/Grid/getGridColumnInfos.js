"use strict";
function getGridColumnInfos(obj) {
    var infos = obj.constructor.$$gridColumnInfos;
    if (!infos)
        return [];
    infos = infos.filter(function (edt) { return obj instanceof edt.objectType; });
    //console.log("getPropertyEditors") ;
    //console.log(editors);
    return infos;
}
exports.getGridColumnInfos = getGridColumnInfos;
//# sourceMappingURL=getGridColumnInfos.js.map