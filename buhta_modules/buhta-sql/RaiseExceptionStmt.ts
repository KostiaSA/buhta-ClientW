import * as _ from "lodash";
import {SqlDataType, SqlDialect, SqlStringValue} from "./SqlCore";
import {SqlEmitter} from "./SqlEmitter";
import {throwError} from "../buhta-core/Error";
import {SqlBatch} from "./SqlDb";


export class RaiseExceptionStmt {
    constructor(private error: string) {

    }

    message(msg: string): RaiseExceptionStmt {
        this.error = msg;
        return this;
    }

    toSql(dialect: SqlDialect): SqlBatch {

        if (dialect === "mssql")
            return "THROW 51000," + new SqlStringValue(this.error).toSql(dialect) + ",1";
        else        if (dialect === "pg")
            return "DO $$BEGIN RAISE EXCEPTION " + new SqlStringValue(this.error).toSql(dialect) + "; END$$";
        else if (dialect === "mysql")
            return "SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = " + new SqlStringValue(this.error).toSql(dialect);
        else {
            throwError("SqlEmitter: invalid sql dialect '" + dialect + "'");
        }
        throw  "fake";
    }

}