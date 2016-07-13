export function throwError(error: string | Error) {

    // todo: отключить в production режиме
    console.error(error);

    let err: any;

    if (error instanceof Error)
        err = error;
    else
        err = new Error(error);
    
    err.$$isThrowError = true;
    throw err;
}

