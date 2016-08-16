"use strict";
function registerGridColumn(columnInfo) {
    var objType = columnInfo.objectType;
    if (!objType.$$gridColumnInfos)
        objType.$$gridColumnInfos = [];
    objType.$$gridColumnInfos.push(columnInfo);
    //console.log("registerPropertyEditor " + editor.propertyName);
    //console.log(editor);
}
exports.registerGridColumn = registerGridColumn;
//# sourceMappingURL=registerGridColumn.js.map