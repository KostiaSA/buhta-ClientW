export type SelectField= string | SelectTerm;

export class Sql {
    private terms: any[] = [];

    static select(fields: SelectField[]): SelectTerm {
        let select = new SelectTerm(fields);
        return select;
    }
}

class Term {

}


export type FromParam= string | SelectTerm;

class SelectTerm {
    constructor(public _fields: SelectField[]) {
    }

    _from: FromTerm;

    from(fromTable: FromParam): FromTerm {
        this._from = new FromTerm(fromTable, this);
        return this._from;
    }

    toSql() {
        return "select " + this._fields.join(".") + " from " + this._from.emit();
    }
}

class FromTerm {
    constructor(public _fromParam: FromParam, public _select: SelectTerm) {
    }

    toSql() {
        return this._select.toSql();
    }

    emit() {
        return this._fromParam.toString();
    }

}

// function toSql(terms: any[]) {
//     return "select * from user";
// }