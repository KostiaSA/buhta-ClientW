import {BaseControl} from "./BaseControl";
import {SchemaComponent, SchemaComponentRuntimeContext} from "../buhta-schema/SchemaComponent/SchemaComponent";
import {Window} from "../buhta-core/Components/Window/Window";
import {Component} from "../buhta-core/Components/Component";

export interface ControlEvent {
    target: BaseControl;
    component: Component<any, any>;
    schemaComponent?: SchemaComponentRuntimeContext;
    window?: Window;
}
