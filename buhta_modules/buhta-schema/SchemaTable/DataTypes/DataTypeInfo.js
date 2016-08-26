"use strict";
var Error_1 = require("../../../buhta-core/Error");
var DataTypeInfo = (function () {
    function DataTypeInfo() {
    }
    return DataTypeInfo;
}());
exports.DataTypeInfo = DataTypeInfo;
exports.registeredDataTypes = [];
function registerDataType(info) {
    if (exports.registeredDataTypes.filter(function (_info) { return _info.name === info.name; }).length > 0) {
        Error_1.throwError("registerDataType(): duplicated name '" + info.name);
    }
    exports.registeredDataTypes.push(info);
    info.type.$$DataTypeTypeInfo = info;
}
exports.registerDataType = registerDataType;
//# sourceMappingURL=DataTypeInfo.js.map