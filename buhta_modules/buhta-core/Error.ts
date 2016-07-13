
export function throwError(error: string | Error) {
    console.error(error);
    if (error instanceof Error)
        throw error;
    else
        throw new Error(error);
}

