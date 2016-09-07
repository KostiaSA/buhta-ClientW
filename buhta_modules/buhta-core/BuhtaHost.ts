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
import {PropertyControl} from "../buhta-ui/PropertyControl";
import {SchemaComponent} from "../buhta-schema/SchemaComponent/SchemaComponent";
import {ComponentControl} from "../buhta-ui/ComponentControl";
import {registerSchemaObjectType, registeredSchemaObjectTypes} from "../buhta-schema/SchemaObjectTypeInfo";
import {SchemaDatabase} from "../buhta-schema/SchemaDatabase";
import {SchemaFolder} from "../buhta-schema/SchemaFolder/SchemaFolder";
import {registeredDataTypes} from "../buhta-schema/SchemaTable/DataTypes/DataTypeInfo";
import {getObjectInstanceOfType} from "./getObjectInstanceOfType";
import {BaseDataType} from "../buhta-schema/SchemaTable/DataTypes/BaseDataType";
import {StringDataType} from "../buhta-schema/SchemaTable/DataTypes/StringDataType";
import {GuidDataType} from "../buhta-schema/SchemaTable/DataTypes/GuidDataType";
import {SchemaApplication} from "../buhta-schema/SchemaApplication/SchemaApplication";
import {SchemaQuery, QueryColumn, QueryJoinColumn, QueryTable} from "../buhta-schema/SchemaQuery/SchemaQuery";
import {SchemaTableIndex} from "../buhta-schema/SchemaTable/SchemaTableIndex";

export let buhtaHost: any = {};

buhtaHost.registeredSchemaObjectTypes = registeredSchemaObjectTypes;
buhtaHost.registeredDataTypes = registeredDataTypes;
buhtaHost.getObjectInstanceOfType = getObjectInstanceOfType;

buhtaHost.SchemaObject = SchemaObject;

buhtaHost.SchemaTable = SchemaTable;
buhtaHost.SchemaTableColumn = SchemaTableColumn;
buhtaHost.SchemaTableIndex = SchemaTableIndex;

buhtaHost.BaseDataType = BaseDataType;
buhtaHost.StringDataType = StringDataType;
buhtaHost.GuidDataType = GuidDataType;

buhtaHost.SchemaQuery = SchemaQuery;
buhtaHost.QueryTable = QueryTable;
buhtaHost.QueryColumn = QueryColumn;
buhtaHost.QueryJoinColumn = QueryJoinColumn;

buhtaHost.SchemaApplication = SchemaApplication;
buhtaHost.SchemaForm = SchemaForm;
buhtaHost.SchemaComponent = SchemaComponent;
buhtaHost.SchemaDatabase = SchemaDatabase;
buhtaHost.SchemaFolder = SchemaFolder;


buhtaHost.ButtonControl = ButtonControl;
buhtaHost.PanelControl = PanelControl;
buhtaHost.LocalVariableControl = LocalVariableControl;
buhtaHost.PropertyControl = PropertyControl;
buhtaHost.ComponentControl = ComponentControl;

buhtaHost.OneWayBinder_NumberValue = OneWayBinder_NumberValue;
buhtaHost.OneWayBinder_StringValue = OneWayBinder_StringValue;
buhtaHost.OneWayBinder_Variable = OneWayBinder_Variable;
buhtaHost.OneWayBinder_undefined = OneWayBinder_undefined;
buhtaHost.OneWayBinder_EventHandler = OneWayBinder_EventHandler;
buhtaHost.OneWayBinder_JsCode = OneWayBinder_JsCode;


(window as any).buhta = buhtaHost;