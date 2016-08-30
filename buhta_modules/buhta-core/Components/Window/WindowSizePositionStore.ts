import {SelectStmt} from "../../../buhta-sql/SelectStmt";
import {SqlGuidValue, SqlStringValue} from "../../../buhta-sql/SqlCore";
import {getUserId} from "../../Auth";
import {getApplication} from "../../getApplication";
import {DataTable, DataRow, SqlBatch, SqlBatchItem} from "../../../buhta-sql/SqlDb";
import {UpsertStmt} from "../../../buhta-sql/UpsertStmt";


interface SizePositionStoreInfo {
    // делаем имена короче, чтобы JSON гонять по сети более компактный
    sH: number;  // screen Height
    sW: number;  // screen Width
    T: number;  // top
    L: number;  // left
    H: number;  // height
    W: number;  // width
}

let windowSizePositionStore: { [key: string]: SizePositionStoreInfo; };
let keysNeedToSave: string[];

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

            setInterval(saveWindowSizePositionStore, 120);

            console.log("loadWindowSizePositionStore - Ok");

        });
}

function saveWindowSizePositionStore() {

    if (keysNeedToSave.length === 0)
        return;

    let sqlBatch: SqlBatchItem[] = [];

    keysNeedToSave.forEach((key: string)=> {

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
