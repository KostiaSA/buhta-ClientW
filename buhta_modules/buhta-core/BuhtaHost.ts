import {SchemaObject} from "../buhta-schema/SchemaObject";
import {SchemaTable} from "../buhta-schema/SchemaTable/SchemaTable";
import {SchemaTableColumn} from "../buhta-schema/SchemaTable/SchemaTableColumn";
import {SchemaForm} from "../buhta-schema/SchemaForm/SchemaForm";
import {ButtonControl} from "../buhta-ui/ButtonControl";
import {PanelControl} from "../buhta-ui/PanelControl";
import {LocalVariableControl} from "../buhta-ui/LocalVariableControl";

export let buhta: any = {};

buhta.SchemaObject = SchemaObject;
buhta.SchemaTable = SchemaTable;
buhta.SchemaTableColumn = SchemaTableColumn;

buhta.SchemaForm = SchemaForm;

buhta.ButtonControl = ButtonControl;
buhta.PanelControl = PanelControl;
buhta.LocalVariableControl = LocalVariableControl;

(window as any).buhta = buhta;