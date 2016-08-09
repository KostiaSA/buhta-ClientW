import {BaseControl} from "./BaseControl";
import {Window} from "../buhta-core/Components/Window/Window";
import {Component} from "../buhta-core/Components/Component";
import {UIComponentRuntimeContext} from "../buhta-core/Components/UIComponent/UIComponent";

export interface ControlEvent {
    target: BaseControl;
    component: Component<any, any>;
    schemaComponent?: UIComponentRuntimeContext;
    window?: Window;
}
