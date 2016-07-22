"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var moment = require("moment");
var Error_1 = require("../buhta-core/Error");
var SqlValue = (function () {
    function SqlValue() {
    }
    SqlValue.prototype.toSql = function () {
        console.log("toSql1");
        Error_1.throwAbstractError();
        throw "fake";
    };
    return SqlValue;
}());
exports.SqlValue = SqlValue;
var SqlString = (function (_super) {
    __extends(SqlString, _super);
    function SqlString(value, dialect) {
        _super.call(this);
        this.value = value;
        this.dialect = dialect;
    }
    SqlString.prototype.toSql = function () {
        if (this.dialect === "mssql")
            return "N'" + this.value.replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
        else if (this.dialect === "pg")
            // симол с кодом 0 запрещен в postgresql, поэтому стираем его
            return "'" + this.value.replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
        else if (this.dialect === "mysql")
            return "'" + mysql_escape_string(this.value) + "'";
        else {
            Error_1.throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }
    };
    return SqlString;
}(SqlValue));
exports.SqlString = SqlString;
var SqlDate = (function (_super) {
    __extends(SqlDate, _super);
    function SqlDate(value, dialect) {
        _super.call(this);
        this.value = value;
        this.dialect = dialect;
    }
    SqlDate.prototype.toSql = function () {
        if (this.dialect === "mssql")
            return "CONVERT(DATE,'" + moment(this.value).format("YYYYMMDD") + "')";
        else if (this.dialect === "pg")
            return "DATE '" + moment(this.value).format("YYYY-MM-DD") + "'";
        else if (this.dialect === "mysql")
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD") + "','%Y-%c-%d')";
        else {
            Error_1.throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }
    };
    return SqlDate;
}(SqlValue));
exports.SqlDate = SqlDate;
var SqlDateTime = (function (_super) {
    __extends(SqlDateTime, _super);
    function SqlDateTime(value, dialect) {
        _super.call(this);
        this.value = value;
        this.dialect = dialect;
    }
    SqlDateTime.prototype.toSql = function () {
        if (this.dialect === "mssql")
            return "CONVERT(DATETIMEOFFSET,'" + moment(this.value).format("YYYYMMDD HH:mm:ss.SSS Z") + "')";
        else if (this.dialect === "pg")
            return "TIMESTAMP(3) WITH TIME ZONE '" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS ZZ") + "'";
        else if (this.dialect === "mysql")
            // timezone не воспринимает
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "','%Y-%c-%d %k:%i:%s.%f')";
        else {
            Error_1.throwError("invalid sql dialect " + this.dialect);
            throw "fake";
        }
    };
    return SqlDateTime;
}(SqlValue));
exports.SqlDateTime = SqlDateTime;
function mysql_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\Z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
                return "\\" + char;
            default:
                throw "mysql_escape_string?";
        }
    });
}
// export function asSqlString(str: any, dialect: SqlDialect) {
//     if (dialect === "mssql")
//         return "N'" + str.toString().replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
//     else if (dialect === "pg")
//     // симол с кодом 0 запрещен в postgresql, поэтому стираем его
//         return "'" + str.toString().replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
//     else if (dialect === "mysql")
//         return "'" + mysql_escape_string(str) + "'";
//     else {
//         throwError("invalid sql dialect " + dialect);
//         throw "fake";
//     }
// }
// export function asSqlDate(date: Date, dialect: SqlDialect) {
//     if (dialect === "mssql")
//         return "CONVERT(DATETIME,'" + moment(date).format("YYYYMMDD HH:mm:ss.SSS") + "')";
//     else if (dialect === "pg")
//         return "'" + moment(date).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
//     else if (dialect === "mysql")
//         return "'" + moment(date).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
//     else {
//         throwError("invalid sql dialect " + dialect);
//         throw "fake";
//     }
// }
//# sourceMappingURL=SqlCore.js.map