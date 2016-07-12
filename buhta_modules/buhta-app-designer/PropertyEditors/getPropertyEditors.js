"use strict";
function getPropertyEditors(obj) {
    var editors = obj.constructor.$$propertyEditors;
    editors = editors.filter(function (edt) { return obj instanceof edt.objectType; });
    //console.log("getPropertyEditors") ;
    //console.log(editors);
    return editors;
}
exports.getPropertyEditors = getPropertyEditors;
//# sourceMappingURL=getPropertyEditors.js.map