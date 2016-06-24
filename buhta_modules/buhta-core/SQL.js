"use strict";
var io = require("socket.io-client");
var socket = io.connect();
function executeSQL(sql) {
    //console.log("call SQL.sql.execute");
    //return signalR.executeSQL(sql);
    var promise;
    promise = $.Deferred();
    //  socket.once('connect',() => {
    var queryId = "query-" + Math.random().toString(36).slice(2);
    socket.emit("executeSQL", { queryId: queryId, sql: sql });
    socket.once(queryId, function (response) {
        if (response.error) {
            promise.reject(response.error);
        }
        else {
            var dataTable_1 = new DataTable();
            for (var i = 0; i < response.columns.length; i++) {
                var dataColumn = new DataColumn(dataTable_1, response.columns[i].name);
                dataTable_1.columns.push(dataColumn);
            }
            response.rows.forEach(function (row) {
                var dataRow = new DataRow(dataTable_1);
                for (var i = 0; i < dataTable_1.columns.length; i++) {
                    if (response.columns[i].parse === "D")
                        dataRow[dataTable_1.columns[i].name] = new Date(row[i]);
                    else
                        dataRow[dataTable_1.columns[i].name] = row[i];
                }
                dataTable_1.rows.push(dataRow);
            });
            promise.resolve(dataTable_1);
        }
    });
    //   });
    //signalR.executeSQL(sql).
    //    done((result) => {
    //        let res = eval(result);
    //        if (res.error) {
    //            promise.reject(res.error);
    //        }
    //        else {
    //            let ds = new Dataset();
    //            res.tables.forEach((table) => {
    //                let dataTable = new DataTable(ds);
    //                dataTable.name = table.name;
    //                ds.tables.push(dataTable);
    //                for (var i = 0; i < table.columns.length; i++) {
    //                    let dataColumn = new DataColumn(dataTable, table.columns[i].name);
    //                    dataTable.columns.push(dataColumn);
    //                }
    //                table.rows.forEach((row) => {
    //                    let dataRow = new DataRow();
    //                    for (var i = 0; i < table.columns.length; i++) {
    //                        dataRow[table.columns[i].name] = row[i];
    //                        dataRow[i] = row[i];
    //                    }
    //                    dataTable.rows.push(dataRow);
    //                });
    //            });
    //            promise.resolve(ds)
    //        }
    //    }).
    //    fail(() => {
    //        promise.reject("ошибка connection signalR");
    //    });
    return promise;
}
exports.executeSQL = executeSQL;
//export enum ColumnDataType { String, Number, Data }
//export type DataType = string | number;
var DataTable = (function () {
    function DataTable() {
        this.columns = [];
        this.rows = [];
    }
    return DataTable;
}());
exports.DataTable = DataTable;
var DataColumn = (function () {
    //dataType: ColumnDataType;
    function DataColumn(table, name) {
        this.table = table;
        this.name = name;
    }
    return DataColumn;
}());
exports.DataColumn = DataColumn;
var DataRow = (function () {
    function DataRow(table) {
        this.table = table;
    }
    DataRow.prototype.getValue = function (columnIndex) {
        if (columnIndex < 0 || columnIndex >= this.table.columns.length)
            throw "DataRow.getValue(" + columnIndex + "): columnIndex out of range";
        return [this.table.columns[columnIndex].name];
    };
    return DataRow;
}());
exports.DataRow = DataRow;
//# sourceMappingURL=SQL.js.map