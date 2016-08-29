/**
 * Created by Kostia on 29.08.2016.
 */

interface SizePositionStoreInfo {
    // делаем имена короче, чтобы JSON гонять по сети более компактный
    sH: number;  // screen Height
    sW: number;  // screen Width
    T: number;  // top
    L: number;  // left
    H: number;  // height
    W: number;  // width
}

let windowSizePositionStore: { [key: string]: SizePositionStoreInfo; } = {};
let keysNeedToSave: string[];

// вызывать только один раз после успешного логина!
export function loadWindowSizePositionStore(): Promise<void> {
   throw  "abstract"
}
