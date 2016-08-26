"use strict";
var _ = require("lodash");
var getRandomString_1 = require("./getRandomString");
// $$deepEqualId
function isDeepEqual(obj1, obj2, compared) {
    if (_.isUndefined(obj1)) {
        if (!_.isUndefined(obj2))
            return false;
    }
    if (_.isNull(obj1)) {
        if (!_.isNull(obj2))
            return false;
    }
    if (_.isNumber(obj1)) {
        if (obj1 !== obj2)
            return false;
    }
    if (_.isArrayBuffer(obj1)) {
        if (!_.isArrayBuffer(obj2))
            return false;
        if (obj1 !== obj2)
            return false;
    }
    if (_.isString(obj1)) {
        if (!_.isString(obj2))
            return false;
        if (obj1 !== obj2)
            return false;
    }
    if (_.isDate(obj1)) {
        if (!_.isDate(obj2))
            return false;
        if (obj1.getTime() !== obj2.getTime())
            return false;
    }
    if (compared === undefined)
        compared = {};
    if (_.isArray(obj1)) {
        if (!_.isArray(obj2))
            return false;
        if (obj1.length !== obj2.length)
            return false;
        for (var i = 0; i < obj1.length; i++) {
            if (!isDeepEqual(obj1[i], obj2[i], compared))
                return false;
        }
    }
    if (_.isObject(obj1)) {
        if (!_.isObject(obj2))
            return false;
        if (obj1.$$deepEqualId === undefined)
            obj1.$$deepEqualId = getRandomString_1.getRandomString();
        if (obj2.$$deepEqualId === undefined)
            obj2.$$deepEqualId = getRandomString_1.getRandomString();
        // через compared избавляемся от зацикливания реккурсии
        var comparedValue = compared[obj1.$$deepEqualId + obj2.$$deepEqualId];
        if (comparedValue === undefined)
            compared[obj1.$$deepEqualId + obj2.$$deepEqualId] = 1;
        else if (comparedValue > 3)
            return true;
        else
            compared[obj1.$$deepEqualId + obj2.$$deepEqualId] += 1;
        for (var propName in obj1) {
            if (obj1.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
                if (!isDeepEqual(obj1[propName], obj2[propName], compared)) {
                    return false;
                }
            }
        }
        for (var propName in obj2) {
            if (obj2.hasOwnProperty(propName) && propName.substring(0, 2) !== "$$") {
                if (!isDeepEqual(obj1[propName], obj2[propName], compared)) {
                    return false;
                }
            }
        }
        compared[obj1.$$deepEqualId + obj2.$$deepEqualId] = 100;
    }
    return true;
}
exports.isDeepEqual = isDeepEqual;
//# sourceMappingURL=isDeepEqual.js.map