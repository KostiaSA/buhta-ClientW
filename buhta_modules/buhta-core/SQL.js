// import * as io from "socket.io-client";
// import {DataTable, DataColumn, DataRow} from "../buhta-sql/SqlDb";
//
// let socket = io.connect();
//
// export function executeSQL( sql: string): JQueryPromise<DataTable|string> {
//     //console.log("call SQL.sql.execute");
//     //return signalR.executeSQL(sql);
//
//
//     let promise: JQueryDeferred<DataTable>;
//     promise = $.Deferred<DataTable>();
//
//     //  socket.once('connect',() => {
//     let queryId = "query-" + Math.random().toString(36).slice(2);
//     socket.emit("executeSQL", {queryId, sql});
//     socket.once(queryId, (response: any) => {
//         if (response.error) {
//             promise.reject(response.error);
//         }
//         else {
//             let dataTable = new DataTable();
//
//             for (let i = 0; i < response.columns.length; i++) {
//                 let dataColumn = new DataColumn(dataTable, response.columns[i].name);
//                 dataTable.columns.push(dataColumn);
//             }
//
//             response.rows.forEach((row: any) => {
//
//                 let dataRow = new DataRow(dataTable);
//
//                 for (let i = 0; i < dataTable.columns.length; i++) {
//                     if (response.columns[i].parse === "D")
//                         dataRow[dataTable.columns[i].name] = new Date(row[i]);
//                     else
//                         dataRow[dataTable.columns[i].name] = row[i];
//                     //dataRow[i] = row[i];
//                 }
//
//                 dataTable.rows.push(dataRow);
//             });
//
//
//             promise.resolve(dataTable);
//         }
//     });
//
//     //   });
//
//
//     //signalR.executeSQL(sql).
//     //    done((result) => {
//
//     //        let res = eval(result);
//
//     //        if (res.error) {
//     //            promise.reject(res.error);
//     //        }
//     //        else {
//     //            let ds = new Dataset();
//
//     //            res.tables.forEach((table) => {
//     //                let dataTable = new DataTable(ds);
//     //                dataTable.name = table.name;
//     //                ds.tables.push(dataTable);
//
//     //                for (var i = 0; i < table.columns.length; i++) {
//     //                    let dataColumn = new DataColumn(dataTable, table.columns[i].name);
//     //                    dataTable.columns.push(dataColumn);
//     //                }
//
//     //                table.rows.forEach((row) => {
//
//     //                    let dataRow = new DataRow();
//
//     //                    for (var i = 0; i < table.columns.length; i++) {
//     //                        dataRow[table.columns[i].name] = row[i];
//     //                        dataRow[i] = row[i];
//     //                    }
//
//     //                    dataTable.rows.push(dataRow);
//     //                });
//
//     //            });
//     //            promise.resolve(ds)
//     //        }
//     //    }).
//     //    fail(() => {
//     //        promise.reject("ошибка connection signalR");
//     //    });
//
//     return promise;
//
// }
//
//export class SqlError extends Error {
//}
//export enum ColumnDataType { String, Number, Data }
//export type DataType = string | number;
//# sourceMappingURL=SQL.js.map