import {SchemaObject} from "../buhta-schema/SchemaObject";
import {SchemaTable} from "../buhta-schema/SchemaTable/SchemaTable";
import {SchemaTableColumn} from "../buhta-schema/SchemaTable/SchemaTableColumn";
import {SchemaForm} from "../buhta-schema/SchemaForm/SchemaForm";
import {ButtonControl} from "../buhta-ui/ButtonControl";
import {PanelControl} from "../buhta-ui/PanelControl";
import {LocalVariableControl} from "../buhta-ui/LocalVariableControl";
import {OneWayBinder_NumberValue} from "../buhta-schema/OneWayBinder/OneWayBinder_NumberValue";
import {OneWayBinder_StringValue} from "../buhta-schema/OneWayBinder/OneWayBinder_StringValue";
import {OneWayBinder_Variable} from "../buhta-schema/OneWayBinder/OneWayBinder_Variable";
import {OneWayBinder_undefined} from "../buhta-schema/OneWayBinder/OneWayBinder_undefined";
import {OneWayBinder_EventHandler} from "../buhta-schema/OneWayBinder/OneWayBinder_EventHandler";
import {OneWayBinder_JsCode} from "../buhta-schema/OneWayBinder/OneWayBinder_JsCode";

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
buhtaHost.OneWayBinder_Variable = OneWayBinder_Variable;
buhtaHost.OneWayBinder_undefined = OneWayBinder_undefined;
buhtaHost.OneWayBinder_EventHandler = OneWayBinder_EventHandler;
buhtaHost.OneWayBinder_JsCode = OneWayBinder_JsCode;


(window as any).buhta = buhtaHost;