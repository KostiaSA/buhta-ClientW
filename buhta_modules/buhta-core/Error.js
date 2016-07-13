"use strict";
function throwError(error) {
    console.error(error);
    if (error instanceof Error)
        throw error;
    else
        throw new Error(error);
}
exports.throwError = throwError;
//# sourceMappingURL=Error.js.map