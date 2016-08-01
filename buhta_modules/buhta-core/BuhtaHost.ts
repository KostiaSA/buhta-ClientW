import {SchemaObject} from "../buhta-schema/SchemaObject";
import {SchemaTable} from "../buhta-schema/SchemaTable/SchemaTable";
import {SchemaTableColumn} from "../buhta-schema/SchemaTable/SchemaTableColumn";

export let buhta: any = {};

buhta.SchemaObject = SchemaObject;
buhta.SchemaTable = SchemaTable;
buhta.SchemaTableColumn= SchemaTableColumn;

(window as any).buhta = buhta;