import * as React from "react";
import * as _ from "lodash";
import {Component, ComponentProps} from "../Component";
import {SchemaForm} from "../../../buhta-schema/SchemaForm/SchemaForm";
import {BaseControl} from "../../../buhta-ui/BaseControl";
import {SchemaComponent} from "../../../buhta-schema/SchemaComponent/SchemaComponent";
import {UIForm} from "../UIForm/UIForm";
import {getRandomString} from "../../getRandomString";


export interface UIComponentProps extends ComponentProps<any> {
    schemaComponent: SchemaComponent;
    userProps?: any;
}

export class UIComponent<T extends UIComponentProps> extends Component<T, any> {
    $$runtimeContext: UIComponentRuntimeContext;

    protected didMount() {
        super.didMount();
        (this.nativeElement as any)["$$uiComponent"] = this;
    }

    protected willMount() {
        super.willMount();
        if (this.$$runtimeContext === undefined) {
            this.$$runtimeContext = new UIComponentRuntimeContext(this);
        }
    }

    static childContextTypes = {
        uiComponent: React.PropTypes.any
    };

    getChildContext() {
        return {uiComponent: this};
    }


    asyncChildren: JSX.Element[];

    render(): JSX.Element {

        if (this.asyncChildren === undefined) {
            this.asyncChildren = [];

            _.assign(this.$$runtimeContext.$$props, this.props.userProps);

            Promise
                .map(this.props.schemaComponent.children, (child: BaseControl, index: number, length: number) => {
                    return child.renderAsync(this, index, null);
                })
                .then((children: JSX.Element[]) => {
                    this.asyncChildren = children;
                    this.forceUpdate();
                });

            // let children = this.props.schemaComponent.children.map((child: BaseControl, index: number) => {
            //     return child.render(this, index, null);
            // });

        }

        this.clearStyles();

        return (
            <div {...this.getRenderProps()} ref={ (e) => { this.nativeElement = e; }}>
                {this.asyncChildren}
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

    $$props: any = {};
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

    getProp(propName: string): any {
        return this.$$props[propName];
    }

}