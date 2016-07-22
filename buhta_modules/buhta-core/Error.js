"use strict";
function throwError(error) {
    // todo: отключить в production режиме
    console.error(error);
    var err;
    if (error instanceof Error)
        err = error;
    else
        err = new Error(error);
    err.$$isThrowError = true;
    throw err;
}
exports.throwError = throwError;
function throwAbstractError() {
    // todo: отключить в production режиме
    console.error("abstract error");
    var err;
    err = new Error("abstract error");
    err.$$isThrowError = true;
    throw err;
}
exports.throwAbstractError = throwAbstractError;
//# sourceMappingURL=Error.js.map