import {buhta} from "../buhta-core/BuhtaHost";  // не удалять
let fakeBuhtaHost = buhta; // не удалять


export * from "./sql/CheckDataTypes.test";
export * from "./sql/WorkLoad2000.test";
export * from "./sql/CreateTableStmt.test";
export * from "./sql/MultiSelect.test";
export * from "./sql/InvalidSyntax.test";
export * from "./sql/CheckTableExists.test";

export * from "./SchemaStorage/InitSchemaStorage.test";

