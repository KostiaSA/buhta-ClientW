import * as _ from "lodash";
import {Operand, WhereClause} from "./SqlCore";
import {SqlDialect} from "./SqlCore";
import {throwError} from "../buhta-core/Error";

export class SqlEmitter {
    private sql: string[] = [];
    dialect: SqlDialect;
    noLevels: boolean;

    emit(str: string): SqlEmitter {
        this.sql.push(str);
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

    emitOperand(operand: Operand): SqlEmitter {
        if (_.isNumber(operand))
            this.emit(operand.toString());
        else if (_.isString(operand))
            this.emitQuotedName(operand);
        else if (operand.raw || operand.column) {
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
            this.emit(where.oper!).emit(" ");
            this.emitOperand(where.operand2!);
        }
        this.emit(")");
    }

    toSql(): string {
        return this.sql.join("");
    }
}


