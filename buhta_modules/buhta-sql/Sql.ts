import {throwError} from "../buhta-core/Error";
import * as _ from "lodash";

export type SqlDialect= "ms" | "pg";
export type WhereOperand = string;
export type BooleanOper=">" | "<" | ">=" | "<=" | "<>" | "!=" | "like";


export type FromTable= string | [string,string] | SelectTerm | [SelectTerm,string];
export type SelectField= string | SelectTerm;

export class Sql {
    private terms: any[] = [];

    static select(...fields: SelectField[]): ISelect {
        let select = new SelectTerm(null);
        select._selectFields = fields;
        return select;
    }
}

export interface IFrom {
    where(operand1: WhereOperand, oper: BooleanOper, operand2: WhereOperand): IWhere;
    toSql(dialect: SqlDialect): string;
}

export interface ISelect {
    from(fromTable: FromTable): IFrom;
}

export interface IWhere {
    toSql(dialect: SqlDialect): string;
    andWhere(operand1: WhereOperand, oper: BooleanOper, operand2: WhereOperand): IAndWhere;
}

export interface IAndWhere {
    toSql(dialect: SqlDialect): string;
    andWhere(operand1: WhereOperand, oper: BooleanOper, operand2: WhereOperand): IAndWhere;
}

class Term {
    constructor(public parentTerm: Term | null) {
    }

    _fromTable: FromTable;
    _selectFields: SelectField[];

    _operand1: WhereOperand;
    _oper: BooleanOper;
    _operand2: WhereOperand;
    
    quotedName(dialect: SqlDialect, name: string): string {
        if (dialect === "ms")
            return "[" + name + "]";
        else if (dialect == "pg")
            return "'" + name + "'";
        else {
            throwError("invalid sql dialect: " + dialect);
            throw "fake";
        }
    }

    booleanOperToSql(dialect: SqlDialect, oper: BooleanOper): string {
        if (oper === "!=")
            return "<>";
        else
            return oper.toString();
    }

    whereOperandToSql(dialect: SqlDialect, operand: WhereOperand): string {
        if (_.isString(operand))
            return this.quotedName(dialect, operand);
        else {
            throwError("invalid 'where' operand: " + operand.toString());
            throw "fake";
        }
    }

    fromTableToSql(dialect: SqlDialect, operand: FromTable): string {
        if (_.isString(operand))
            return this.quotedName(dialect, operand);
        else if (_.isArray(operand))
            return this.quotedName(dialect, (operand as any)[0]) + " as " + this.quotedName(dialect, operand[1]);
        else {
            throwError("invalid 'from' table operand: " + operand.toString());
            throw "fake";
        }
    }

    where(operand1: WhereOperand, oper: BooleanOper, operand2: WhereOperand): IWhere {
        let term = new WhereTerm(this);
        term._operand1 = operand1;
        term._oper = oper;
        term._operand2 = operand2;
        return term;
    }

    andWhere(operand1: WhereOperand, oper: BooleanOper, operand2: WhereOperand): IAndWhere {
        let term = new AndTerm(this);
        term._operand1 = operand1;
        term._oper = oper;
        term._operand2 = operand2;
        return term;
    }

    from(fromTable: FromTable): IFrom {
        let term = new FromTerm(this);
        term._fromTable = fromTable;
        return term;

    }

    toSql(dialect: SqlDialect): string {
        throwError("abstract");
        throw  "fake";
    }
}


class SelectTerm extends Term {

    toSql(dialect: SqlDialect): string {
        return "select " + this._selectFields.join(",");
    }
}


class FromTerm extends Term {

    toSql(dialect: SqlDialect): string {
        return this.parentTerm!.toSql(dialect) + " from " + this.fromTableToSql(dialect, this._fromTable);
    }

}

class WhereTerm extends Term {

    toSql(dialect: SqlDialect) {
        return this.parentTerm!.toSql(dialect) +
            " where " +
            this.whereOperandToSql(dialect, this._operand1) +
            this.booleanOperToSql(dialect, this._oper) +
            this.whereOperandToSql(dialect, this._operand2);
    }

}

class AndTerm extends Term {

    toSql(dialect: SqlDialect) {
        return this.parentTerm!.toSql(dialect) +
            " and " +
            this.whereOperandToSql(dialect, this._operand1) +
            this.booleanOperToSql(dialect, this._oper) +
            this.whereOperandToSql(dialect, this._operand2);
    }

}
