import {SchemaObject} from "../buhta-schema/SchemaObject";
import {SchemaTable} from "../buhta-schema/SchemaTable/SchemaTable";
import {SchemaTableColumn} from "../buhta-schema/SchemaTable/SchemaTableColumn";
import {SchemaForm} from "../buhta-schema/SchemaForm/SchemaForm";
import {ButtonControl} from "../buhta-ui/ButtonControl";
import {PanelControl} from "../buhta-ui/PanelControl";
import {LocalVariableControl} from "../buhta-ui/LocalVariableControl";
import {OneWayBinder_NumberValue} from "../buhta-schema/OneWayBinder/OneWayBinder_NumberValue";
import {OneWayBinder_StringValue} from "../buhta-schema/OneWayBinder/OneWayBinder_StringValue";

export let buhtaHost: any = {};

buhtaHost.SchemaObject = SchemaObject;
buhtaHost.SchemaTable = SchemaTable;
buhtaHost.SchemaTableColumn = SchemaTableColumn;

buhtaHost.SchemaForm = SchemaForm;

buhtaHost.ButtonControl = ButtonControl;

buhtaHost.PanelControl = PanelControl;
buhtaHost.LocalVariableControl = LocalVariableControl;

buhtaHost.OneWayBinder_NumberValue = OneWayBinder_NumberValue;
buhtaHost.OneWayBinder_StringValue = OneWayBinder_StringValue;


(window as any).buhta = buhtaHost;