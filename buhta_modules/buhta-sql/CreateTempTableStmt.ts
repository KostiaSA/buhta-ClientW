import {CreateTableStmt} from "./CreateTableStmt";

export class CreateTempTableStmt extends CreateTableStmt {
    constructor() {
        super();
        this.isTempTable = true;
    }
}

