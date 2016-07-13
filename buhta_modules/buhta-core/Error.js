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
//# sourceMappingURL=Error.js.map