"use strict";
var Error_1 = require("../buhta-core/Error");
var UUID_1 = require("UUID");
exports.registeredSchemaObjectTypes = {};
exports.registeredSchemaObjectTypesAsArray = [];
function registerSchemaObjectType(info) {
    if (exports.registeredSchemaObjectTypes[info.id] !== undefined) {
        Error_1.throwError("registerSchemaObjectType(): duplicated id '" + info.id + "' for '" + info.name +
            "' and '" + exports.registeredSchemaObjectTypes[info.id].name + "'");
    }
    if (UUID_1.parse(info.id) === null)
        Error_1.throwError("registerSchemaObjectType(): id '" + info.id + "' for '" + info.name + " must be GUID");
    exports.registeredSchemaObjectTypes[info.id] = info;
    exports.registeredSchemaObjectTypesAsArray.push(info);
    info.type.$$schemaObjectTypeInfo = info;
}
exports.registerSchemaObjectType = registerSchemaObjectType;
//# sourceMappingURL=SchemaObjectTypeInfo.js.map