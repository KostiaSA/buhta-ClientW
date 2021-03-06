import * as _ from "lodash";
import {
    Operand, WhereClause, SqlValue, SqlDateValue, SqlNumberValue, SqlDateTimeValue,
    SqlStringValue, SqlNullValue, SqlGuidValue
} from "./SqlCore";
import {SqlDialect} from "./SqlCore";
import {throwError} from "../buhta-core/Error";

export class SqlEmitter {
    private sql: string[] = [];
    dialect: SqlDialect;
    noLevels: boolean;

    clear() {
        this.sql = [];
    }

    emit(str: string): SqlEmitter {
        this.sql.push(str);
        return this;
    }

    emitStringValue(str: string): SqlEmitter {
        this.sql.push(new SqlStringValue(str).toSql(this.dialect));
        return this;
    }

    emitLevel(level: string): SqlEmitter {
        if (!this.noLevels)
            this.sql.push(level);
        return this;
    }

    emitLine(): SqlEmitter {
        if (this.noLevels)
            this.sql.push(" ");
        else
            this.sql.push("\n");
        return this;
    }

    checkForInvalidChars(name: string, ...char: string[]) {
        char.forEach((char) => {
            if (name.indexOf(char) >= 0) throwError("invalid character '" + char + "' in the sql-identifier '" + name + "'");
        });
    }

    emitQuotedName(name: string): SqlEmitter {

        if (name.slice(0, 1) === "'" && name.slice(-1) === "'")
            this.sql.push(name); // строка живьем, когда в одиночных в кавычках
        else {
            this.checkForInvalidChars(name, "[", "]", "`", "\"");

            if (this.dialect === "mssql")
                this.sql.push("[" + name + "]");
            else if (this.dialect === "pg")
                this.sql.push("\"" + name + "\"");
            else if (this.dialect === "mysql")
                this.sql.push("`" + name + "`");
            else {
                throwError("SqlEmitter: invalid sql dialect '" + this.dialect + "'");
            }
        }
        return this;
    }

    emitBeginTransaction(): SqlEmitter {

        if (this.dialect === "mssql")
            this.sql.push("BEGIN TRAN");
        else if (this.dialect === "pg")
            this.sql.push("START TRANSACTION");
        else if (this.dialect === "mysql")
            this.sql.push("START TRANSACTION");
        else {
            throwError("SqlEmitter: invalid sql dialect '" + this.dialect + "'");
        }
        return this;
    }

    emitCommit(): SqlEmitter {

        if (this.dialect === "mssql")
            this.sql.push("COMMIT");
        else if (this.dialect === "pg")
            this.sql.push("COMMIT");
        else if (this.dialect === "mysql")
            this.sql.push("COMMIT");
        else {
            throwError("SqlEmitter: invalid sql dialect '" + this.dialect + "'");
        }
        return this;
    }

    emitRollback(): SqlEmitter {

        if (this.dialect === "mssql")
            this.sql.push("ROLLBACK");
        else if (this.dialect === "pg")
            this.sql.push("ROLLBACK");
        else if (this.dialect === "mysql")
            this.sql.push("ROLLBACK");
        else {
            throwError("SqlEmitter: invalid sql dialect '" + this.dialect + "'");
        }
        return this;
    }

    // emitQuotedName(nameOrValue: string | SqlValue): SqlEmitter {
    //     console.log(nameOrValue);
    //     if ((nameOrValue as SqlValue).toSql)
    //         this.sql.push((nameOrValue as SqlValue).toSql());
    //     else {
    //         let name = nameOrValue.toString();
    //         if ((name.slice(0, 1) === "'" || name.slice(0, 2) === "N'") && name.slice(-1) === "'")
    //             this.sql.push(name); // строка живьем, когда в одиночных в кавычках
    //         else {
    //             this.checkForInvalidChars(name, "[", "]", "`", "\"", "N'");
    //
    //             if (this.dialect === "mssql")
    //                 this.sql.push("[" + name + "]");
    //             else if (this.dialect === "pg")
    //                 this.sql.push("\"" + name + "\"");
    //             else if (this.dialect === "mysql")
    //                 this.sql.push("`" + name + "`");
    //             else {
    //                 throwError("SqlEmitter: invalid sql dialect '" + this.dialect + "'");
    //             }
    //         }
    //     }
    //     return this;
    // }

    emitOperand(operand: Operand): SqlEmitter {
        if (operand === null)
            this.emit(new SqlNullValue().toSql(this.dialect));
        else if (_.isNumber(operand))
            this.emit(operand.toString());
        else if (_.isString(operand))
            this.emitQuotedName(operand);
        else if (operand instanceof SqlValue)
            this.emit(operand.toSql(this.dialect));
        else if (_.isDate(operand))
            this.emit(new SqlDateTimeValue(operand).toSql(this.dialect));
        else if (_.isNumber(operand))
            this.emit(new SqlNumberValue(operand).toSql(this.dialect));
        else if (operand.raw || operand.colName) {
            //todo emitSelColumn(operand, "");
            //this.emitSelColumn(operand, "");
        }
        else
            throwError("SelectStmt.emitOperand(): invalid operand type");
        return this;
    }

    emitWhere(where: WhereClause, level: string) {
        this.emitLevel(level);
        this.emit("(");
        if (where.raw)
            this.emit(where.raw);
        else {
            this.emitOperand(where.operand1!).emit(" ");

            if (where.operand2 === null ||
                where.operand2 instanceof SqlNullValue ||
                (where.operand2 as any).value === null) {
                if (where.oper === "=")
                    this.emit("IS NULL");
                else if (where.oper === "<>")
                    this.emit("IS NOT NULL");
                else
                    throwError("SelectStmt.emitOperand(): invalid compare operation '" + where.oper + "' for NULL");
            }
            else {
                this.emit(where.oper!).emit(" ");
                this.emitOperand(where.operand2!);
            }
        }
        this.emit(")");
    }

    toSql(): string {
        return this.sql.join("");
    }
}


