import * as React from "react";
import * as _ from "lodash";
import {Component, ComponentProps} from "../Component";
import {SchemaForm} from "../../../buhta-schema/SchemaForm/SchemaForm";
import {BaseControl} from "../../../buhta-ui/BaseControl";
import {SchemaComponent} from "../../../buhta-schema/SchemaComponent/SchemaComponent";
import {UIForm} from "../UIForm/UIForm";

export class UIComponent<T extends SchemaComponent> extends Component<T, any> {
    $$runtimeContext: UIComponentRuntimeContext;

    protected didMount() {
        super.didMount();
        (this.nativeElement as any)["$$uiComponent"] = this;
    }

    protected willMount() {
        super.willMount();
        if (this.$$runtimeContext === undefined)
            this.$$runtimeContext = new UIComponentRuntimeContext(this);
    }

    static childContextTypes = {
        uiComponent: React.PropTypes.any
    };

    getChildContext() {
        return {uiComponent: this};
    }

    render(): JSX.Element {

        this.clearStyles();

        //this.addClassName("Layout");
        //this.addStyles({display: "flex", position: "relative", flexDirection: this.props.type});
        //this.addProps({onClick: this.props.onClick});

        let children = this.props.children.map((child: BaseControl| string) => {
            if (_.isString(child))
                return child;
            else
                return child.render(this, null);
        });


        return (
            <div {...this.getRenderProps()} ref={ (e) => { this.nativeElement = e; }}>
                {children}
            </div>
        );
    }
}

export class UIComponentRuntimeContext {
    constructor(public component: UIComponent<any>) {

    }

    forceUpdate() {
        this.component.forceUpdate();
    }

    $$vars: any = {};
    $$varsForceUpdate: any = {};

    setVar(varName: string, value: any, forceUpdate?: boolean) {
        this.$$vars[varName] = value;
        if (forceUpdate === true || this.$$varsForceUpdate[varName] === true)
            this.forceUpdate();
    }

    getVar(varName: string): any {
        return this.$$vars[varName];
    }
}