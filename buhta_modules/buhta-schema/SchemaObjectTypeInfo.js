"use strict";
var Error_1 = require("../buhta-core/Error");
var SchemaObjectTypeInfo = (function () {
    function SchemaObjectTypeInfo() {
    }
    return SchemaObjectTypeInfo;
}());
exports.SchemaObjectTypeInfo = SchemaObjectTypeInfo;
exports.registeredSchemaObjectTypes = {};
function registerSchemaObjectType(info) {
    if (exports.registeredSchemaObjectTypes[info.id] !== undefined) {
        Error_1.throwError("registerSchemaObjectType(): duplicated id '" + info.id + "' for '" + info.name +
            "' and '" + exports.registeredSchemaObjectTypes[info.id].name + "'");
    }
    exports.registeredSchemaObjectTypes[info.id] = info;
    info.type.$$schemaObjectTypeInfo = info;
}
exports.registerSchemaObjectType = registerSchemaObjectType;
//# sourceMappingURL=SchemaObjectTypeInfo.js.map