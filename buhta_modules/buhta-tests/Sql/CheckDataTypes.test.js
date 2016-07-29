"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var uuid = require("UUID");
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
var SqlCore_1 = require("../../buhta-sql/SqlCore");
var SelectStmt_1 = require("../../buhta-sql/SelectStmt");
var SqlDb_1 = require("../../buhta-sql/SqlDb");
function getTestString() {
    var ret = [];
    for (var i = 1; i <= 20000; i++)
        ret.push(String.fromCharCode(i));
    return ret.join("");
}
function getLongTestString(mb) {
    var ret = [];
    for (var j = 1; j <= 1024 * mb; j++)
        for (var i = 200; i <= 1024 + 200; i++)
            ret.push(String.fromCharCode(i));
    return ret.join("");
}
function badCodes() {
    var socket = io.connect();
    var _loop_1 = function(i) {
        var str = String.fromCharCode(i);
        var strJson = JSON.stringify(str);
        var queryId = "query-" + Math.random().toString(36).slice(2);
        var req = {
            queryId: queryId,
            str: str
        };
        socket.emit("echo", req);
        socket.once(queryId, function (response) {
            if (str !== response.str)
                console.log({ i: i, str: str, strJson: strJson, response: response.str });
        });
    };
    for (var i = 0; i < 2560; i++) {
        _loop_1(i);
    }
    console.log("badCodes-end3");
}
function select_one_row(dialect, done) {
    var db = new SqlDb_1.SqlDb();
    db.dbName = "test-" + dialect;
    db.dialect = dialect;
    var testStr = getTestString() + getTestString() + getTestString();
    var testLongStr = getLongTestString(1);
    var testDate = new Date(2016, 11, 28);
    var testDateTime = new Date();
    var testNumber = 1.79E+308;
    var testNumber2 = 9007199254740991;
    var testNumber3 = 9.0071992547402233224;
    var testGuid = uuid.v1().toString();
    var select = new SelectStmt_1.SelectStmt();
    select.columnAs(new SqlCore_1.SqlStringValue(testStr), "testStr");
    //  select.addColumnAs(new SqlStringValue(testLongStr, dialect), "testLongStr");
    select.columnAs(new SqlCore_1.SqlDateValue(testDate), "testDate");
    select.columnAs(new SqlCore_1.SqlDateTimeValue(testDateTime), "testDateTime");
    select.columnAs(new SqlCore_1.SqlNumberValue(testNumber), "testNumber");
    select.columnAs(new SqlCore_1.SqlNumberValue(testNumber2), "testNumber2");
    select.columnAs(new SqlCore_1.SqlNumberValue(testNumber3), "testNumber3");
    select.columnAs(new SqlCore_1.SqlGuidValue(testGuid), "testGuid");
    db.selectToObject(select, {}, "assign").done(function (obj) {
        //console.log(testDate);
        //console.log(obj.testDate);
        chai_1.assert.equal(obj.testStr, testStr);
        // assert.equal(obj.testLongStr, testLongStr);
        chai_1.assert.equal(obj.testDate.getTime(), testDate.getTime());
        chai_1.assert.equal(obj.testDateTime.getTime(), testDateTime.getTime());
        chai_1.assert.equal(obj.testNumber, testNumber);
        chai_1.assert.equal(obj.testNumber2, testNumber2);
        chai_1.assert.equal(obj.testNumber3, testNumber3);
        chai_1.assert.equal(obj.testGuid, testGuid);
        done();
    });
}
function test_sql(dialect, done) {
    select_one_row(dialect, done);
}
var CheckDataTypes = (function () {
    function CheckDataTypes() {
    }
    // @test
    // @skip
    // //@only
    // first_test() {
    //     //badCodes();
    //     console.log(uuid.v1());
    // }
    CheckDataTypes.prototype.mssql = function (done) {
        var dialect = "mssql";
        test_sql(dialect, done);
    };
    CheckDataTypes.prototype.postgres = function (done) {
        var dialect = "pg";
        test_sql(dialect, done);
    };
    CheckDataTypes.prototype.mysql = function (done) {
        var dialect = "mysql";
        test_sql(dialect, done);
    };
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(5000)
    ], CheckDataTypes.prototype, "mssql", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(5000)
    ], CheckDataTypes.prototype, "postgres", null);
    __decorate([
        mocha_typescript_1.test,
        mocha_typescript_1.timeout(5000)
    ], CheckDataTypes.prototype, "mysql", null);
    CheckDataTypes = __decorate([
        mocha_typescript_1.suite("Sql CheckDataTypes")
    ], CheckDataTypes);
    return CheckDataTypes;
}());
exports.CheckDataTypes = CheckDataTypes;
//# sourceMappingURL=CheckDataTypes.test.js.map