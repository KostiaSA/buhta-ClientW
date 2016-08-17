"use strict";
function removeFromArray(array, object) {
    if (array.indexOf(object) >= 0) {
        array.splice(array.indexOf(object), 1);
    }
}
exports.removeFromArray = removeFromArray;
function insertIntoArray(array, object, toIndex) {
    array.splice(toIndex, 0, object);
}
exports.insertIntoArray = insertIntoArray;
//# sourceMappingURL=arrayUtils.js.map