import * as _ from "lodash";
import {SelectStmt} from "../buhta-sql/SelectStmt";
import {SqlGuidValue, SqlStringValue} from "../buhta-sql/SqlCore";
import {getUserId} from "./Auth";
import {getApplication} from "./getApplication";
import {DataTable, DataRow, SqlBatch, SqlBatchItem} from "../buhta-sql/SqlDb";
import {UpsertStmt} from "../buhta-sql/UpsertStmt";
import {USER_SETTINGS_TABLE_NAME} from "./Constants";

let userSettingsStore: { [key: string]: any; };
let keysNeedToSave: string[] = [];


export function saveUserSettings(key: string, data:any) {
    userSettingsStore[key] = data;
    keysNeedToSave.push(key);
//    console.log("saveWindowSizePosition " + fullKey);
//    console.log({T: top, L: left, H: height, W: width});
}

export function getUserSettings(key: string): any {
    return userSettingsStore[key];
}

// вызывать только один раз после успешного логина!
export function loadUserSettingsStore(): Promise<void> {

    let sql = new SelectStmt()
        .table(USER_SETTINGS_TABLE_NAME)
        .column("storeKey")
        .column("settingsJson")
        .where("userId", "=", new SqlGuidValue(getUserId()));

    return getApplication().getUserSettingsDb().executeSQL(sql)
        .then((tables: DataTable[])=> {
            userSettingsStore = {};
            tables[0].rows.forEach((row: DataRow, index: number)=> {
                userSettingsStore[row["storeKey"]] = JSON.parse(row["settingsJson"]);
            });

            // сохраняемся раз в минуту
            setInterval(saveUserSettingsStore, 60 * 1000);

            console.log("saveUserSettingsStore - Ok");

        });
}

function saveUserSettingsStore() {

    if (keysNeedToSave.length === 0)
        return;

    let sqlBatch: SqlBatchItem[] = [];

    _.uniq(keysNeedToSave).forEach((key: string)=> {

        let sql = new UpsertStmt(USER_SETTINGS_TABLE_NAME)
            .column("userId", new SqlGuidValue(getUserId()))
            .column("storeKey", new SqlStringValue(key))
            .column("settingsJson", new SqlStringValue(JSON.stringify(userSettingsStore[key])))
            .where("userId", "=", new SqlGuidValue(getUserId()))
            .where("storeKey", "=", new SqlStringValue(key));

        sqlBatch.push(sql);

    });

    keysNeedToSave.length = 0;


    getApplication().getUserSettingsDb().executeSQL(sqlBatch)

        .then(()=> {
            console.log("saveUserSettingsStore: Ok");
        })

        .catch((error)=> {
            console.error("saveUserSettingsStore: " + error);
        });
}
