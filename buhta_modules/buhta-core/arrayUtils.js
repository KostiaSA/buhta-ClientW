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
function moveInArray(array, objectsToMove, toIndex) {
    var _this = this;
    objectsToMove.forEach(function (obj) {
        _this.removeFromArray(array, obj);
    });
    objectsToMove.slice().reverse().forEach(function (obj) {
        _this.insertIntoArray(array, obj, toIndex);
    });
}
exports.moveInArray = moveInArray;
//# sourceMappingURL=arrayUtils.js.map