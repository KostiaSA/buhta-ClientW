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
function throwUnderConstruction() {
    // todo: отключить в production режиме
    console.error("under construction error");
    var err;
    err = new Error("under construction error");
    err.$$isThrowError = true;
    throw err;
}
exports.throwUnderConstruction = throwUnderConstruction;
//# sourceMappingURL=Error.js.map