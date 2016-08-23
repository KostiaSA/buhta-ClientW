"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var moment = require("moment");
var uuid = require("UUID");
var Error_1 = require("../buhta-core/Error");
var SqlValue = (function () {
    function SqlValue() {
    }
    SqlValue.prototype.toSql = function (dialect) {
        //   console.log("toSql1");
        Error_1.throwAbstractError();
        throw "fake";
    };
    return SqlValue;
}());
exports.SqlValue = SqlValue;
function getNewGuid() {
    return uuid.v1().toString();
}
exports.getNewGuid = getNewGuid;
function mssql_escape_string(str) {
    return str.replace(/./g, function (char) {
        switch (char) {
            case "'":
                return "''";
            // case "?":
            //     return "'+CHAR(63)+N'";
            default:
                return char;
        }
    });
}
function pg_escape_string(str) {
    return str.replace(/./g, function (char) {
        switch (char) {
            case "\0":
                return "";
            case "'":
                return "''";
            default:
                return char;
        }
    });
}
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
var SqlStringValue = (function (_super) {
    __extends(SqlStringValue, _super);
    function SqlStringValue(value) {
        _super.call(this);
        this.value = value;
    }
    SqlStringValue.prototype.toSql = function (dialect) {
        if (this.value === null)
            return new SqlNullValue().toSql(dialect);
        else {
            if (dialect === "mssql")
                //return "N'" + this.value.replace("'", "''").replace("?", "'+CHAR(63)+N'") + "'";
                return "N'" + mssql_escape_string(this.value) + "'";
            else if (dialect === "pg")
                // симол с кодом 0 запрещен в postgresql, поэтому стираем его
                //            return "'" + this.value.replace("'", "''").replace("?", "'||CHR(63)||'").replace("\0", "") + "'";
                return "'" + pg_escape_string(this.value) + "'";
            else if (dialect === "mysql")
                return "'" + mysql_escape_string(this.value) + "'";
            else {
                Error_1.throwError("invalid sql dialect " + dialect);
                throw "fake";
            }
        }
    };
    return SqlStringValue;
}(SqlValue));
exports.SqlStringValue = SqlStringValue;
var SqlNumberValue = (function (_super) {
    __extends(SqlNumberValue, _super);
    function SqlNumberValue(value) {
        _super.call(this);
        this.value = value;
    }
    SqlNumberValue.prototype.toSql = function (dialect) {
        return this.value.toString();
    };
    return SqlNumberValue;
}(SqlValue));
exports.SqlNumberValue = SqlNumberValue;
var SqlDateValue = (function (_super) {
    __extends(SqlDateValue, _super);
    function SqlDateValue(value) {
        _super.call(this);
        this.value = value;
    }
    SqlDateValue.prototype.toSql = function (dialect) {
        if (dialect === "mssql")
            return "CONVERT(DATE,'" + moment(this.value).format("YYYYMMDD") + "')";
        else if (dialect === "pg")
            return "DATE '" + moment(this.value).format("YYYY-MM-DD") + "'";
        else if (dialect === "mysql")
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD") + "','%Y-%c-%d')";
        else {
            Error_1.throwError("invalid sql dialect " + dialect);
            throw "fake";
        }
    };
    return SqlDateValue;
}(SqlValue));
exports.SqlDateValue = SqlDateValue;
function toHexString(bytes) {
    return bytes.map(function (byte) {
        return ("00" + (byte & 0xFF).toString(16)).slice(-2);
    }).join("");
}
function mysql_guid_to_str(guid) {
    return "0x" + toHexString(guid);
}
var SqlGuidValue = (function (_super) {
    __extends(SqlGuidValue, _super);
    function SqlGuidValue(value) {
        _super.call(this);
        this.value = value;
    }
    SqlGuidValue.prototype.toSql = function (dialect) {
        if (this.value === null)
            return new SqlNullValue().toSql(dialect);
        else {
            if (dialect === "mssql")
                return "CONVERT(UNIQUEIDENTIFIER,'" + this.value + "')";
            else if (dialect === "pg")
                return "UUID '" + this.value + "'";
            else if (dialect === "mysql")
                return "convert(" + mysql_guid_to_str(uuid.parse(this.value)) + ",binary(16))";
            else {
                Error_1.throwError("invalid sql dialect " + dialect);
                throw "fake";
            }
        }
    };
    return SqlGuidValue;
}(SqlValue));
exports.SqlGuidValue = SqlGuidValue;
var SqlNullValue = (function (_super) {
    __extends(SqlNullValue, _super);
    function SqlNullValue() {
        _super.call(this);
    }
    SqlNullValue.prototype.toSql = function (dialect) {
        if (dialect === "mssql")
            return "NULL";
        else if (dialect === "pg")
            return "NULL";
        else if (dialect === "mysql")
            return "NULL";
        else {
            Error_1.throwError("invalid sql dialect " + dialect);
            throw "fake";
        }
    };
    return SqlNullValue;
}(SqlValue));
exports.SqlNullValue = SqlNullValue;
var SqlNewGuidValue = (function (_super) {
    __extends(SqlNewGuidValue, _super);
    function SqlNewGuidValue() {
        _super.call(this);
    }
    SqlNewGuidValue.prototype.toSql = function (dialect) {
        if (!this.value)
            this.value = getNewGuid();
        if (dialect === "mssql")
            return "CONVERT(UNIQUEIDENTIFIER,'" + this.value + "')";
        else if (dialect === "pg")
            return "UUID '" + this.value + "'";
        else if (dialect === "mysql")
            return "convert(" + mysql_guid_to_str(uuid.parse(this.value)) + ",binary(16))";
        else {
            Error_1.throwError("invalid sql dialect " + dialect);
            throw "fake";
        }
    };
    return SqlNewGuidValue;
}(SqlValue));
exports.SqlNewGuidValue = SqlNewGuidValue;
var SqlDateTimeValue = (function (_super) {
    __extends(SqlDateTimeValue, _super);
    function SqlDateTimeValue(value) {
        _super.call(this);
        this.value = value;
    }
    SqlDateTimeValue.prototype.toSql = function (dialect) {
        if (dialect === "mssql")
            return "CONVERT(DATETIME2,'" + moment(this.value).format("YYYYMMDD HH:mm:ss.SSS") + "')";
        else if (dialect === "pg")
            return "TIMESTAMP(3)'" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "'";
        else if (dialect === "mysql")
            // timezone не воспринимает
            return "STR_TO_DATE('" + moment(this.value).format("YYYY-MM-DD HH:mm:ss.SSS") + "','%Y-%c-%d %k:%i:%s.%f')";
        else {
            Error_1.throwError("invalid sql dialect " + dialect);
            throw "fake";
        }
    };
    return SqlDateTimeValue;
}(SqlValue));
exports.SqlDateTimeValue = SqlDateTimeValue;
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