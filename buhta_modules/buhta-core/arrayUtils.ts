
export function removeFromArray<T>(array: T[], object: T) {
    if (array.indexOf(object) >= 0) {
        array.splice(array.indexOf(object), 1);
    }
}

export function insertIntoArray<T>(array: T[], object: T, toIndex: number) {
    array.splice(toIndex, 0, object);
}

export function moveInArray<T>(array: T[], objectsToMove: T[], toIndex: number) {
    objectsToMove.forEach( (obj)=> {
        this.removeFromArray(array, obj);
    });
    
    objectsToMove.slice().reverse().forEach( (obj)=> {
        this.insertIntoArray(array, obj, toIndex);
    });
}