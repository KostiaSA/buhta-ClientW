
export function removeFromArray<T>(array: T[], object: T) {
    if (array.indexOf(object) >= 0) {
        array.splice(array.indexOf(object), 1);
    }
}

export function insertIntoArray<T>(array: T[], object: T, toIndex: number) {
    array.splice(toIndex, 0, object);
}
