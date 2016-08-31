import * as _ from "lodash";
import {SelectStmt} from "../../../buhta-sql/SelectStmt";
import {SqlGuidValue, SqlStringValue} from "../../../buhta-sql/SqlCore";
import {getUserId} from "../../Auth";
import {getApplication} from "../../getApplication";
import {DataTable, DataRow, SqlBatch, SqlBatchItem} from "../../../buhta-sql/SqlDb";
import {UpsertStmt} from "../../../buhta-sql/UpsertStmt";


interface SizePositionStoreInfo {
    // делаем имена короче, чтобы JSON гонять по сети более компактный
    // sH: number;  // screen Height
    // sW: number;  // screen Width
    T: number;  // top
    L: number;  // left
    H: number;  // height
    W: number;  // width
}

let windowSizePositionStore: { [key: string]: SizePositionStoreInfo; };
let keysNeedToSave: string[] = [];

export function saveWindowSizePosition(key: string, top: number, left: number, height: number, width: number) {
    let fullKey = getScreenSizePrefix() + "/" + key;
    windowSizePositionStore[fullKey] = {T: top, L: left, H: height, W: width};
    keysNeedToSave.push(fullKey);
    console.log("saveWindowSizePosition " + fullKey);
    console.log({T: top, L: left, H: height, W: width});
}

export function getWindowSizePosition(key: string): SizePositionStoreInfo | undefined {
    let fullKey = getScreenSizePrefix() + "/" + key;
    return windowSizePositionStore[fullKey];
}

function getScreenSizePrefix(): string {
    let w = screen.availWidth;
    if (w > 1700)
        w = 1920;
    else if (w > 1300)
        w = 1366;
    else if (w > 1100)
        w = 1280;
    else if (w > 900)
        w = 1024;
    else
        w = 800;

    let h = screen.availHeight;
    if (h > 1030)
        h = 1080;
    else if (h > 900)
        h = 1024;
    else if (h > 790)
        h = 800;
    else if (h > 700)
        h = 768;
    else
        h=600;

    return w + "x" + h;
}

// вызывать только один раз после успешного логина!
export function loadWindowSizePositionStore(): Promise<void> {

    let sql = new SelectStmt()
        .table("WindowSizePosition")
        .column("storeKey")
        .column("settingsJson")
        .where("userId", "=", new SqlGuidValue(getUserId()));

    return getApplication().getUserSettingsDb().executeSQL(sql)
        .then((tables: DataTable[])=> {
            windowSizePositionStore = {};
            tables[0].rows.forEach((row: DataRow, index: number)=> {
                windowSizePositionStore[row["storeKey"]] = JSON.parse(row["settingsJson"]);
            });

            // сохраняемся раз в минуту
            setInterval(saveWindowSizePositionStore, 60 * 1000);

            console.log("saveWindowSizePositionStore - Ok");

        });
}

function saveWindowSizePositionStore() {

    if (keysNeedToSave.length === 0)
        return;

    let sqlBatch: SqlBatchItem[] = [];

    _.uniq(keysNeedToSave).forEach((key: string)=> {

        let sql = new UpsertStmt("WindowSizePosition")
            .column("userId", new SqlGuidValue(getUserId()))
            .column("storeKey", new SqlStringValue(key))
            .column("settingsJson", new SqlStringValue(JSON.stringify(windowSizePositionStore[key])))
            .where("userId", "=", new SqlGuidValue(getUserId()))
            .where("storeKey", "=", new SqlStringValue(key));

        sqlBatch.push(sql);

    });

    keysNeedToSave.length = 0;


    getApplication().getUserSettingsDb().executeSQL(sqlBatch)

        .then(()=> {
            console.log("saveWindowSizePositionStore: Ok");
        })

        .catch((error)=> {
            console.error("saveWindowSizePositionStore: " + error);
        });
}
