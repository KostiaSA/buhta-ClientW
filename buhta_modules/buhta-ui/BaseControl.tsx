import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";

export class BaseControl extends DesignedObject {
//    name: string;
//    parent: BaseControl;

    $$flatIndex: number; // используется в TreeGridComponentChildrenDataSourceParams
    $$flatParent: BaseControl | null; // используется в TreeGridComponentChildrenDataSourceParams

    children: BaseControl[] = [];
//    reactElement: Component<any, any>;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function | undefined {
        return undefined;
    }

    beforeRender() {
    }

    render(): JSX.Element | undefined {
        this.beforeRender();
        let children = this.children.map((child: BaseControl) => {
            // if (_.isString(child))
            //     return child;
            // else
            return child.render();
        });
        let comp = this.getComponent();
        if (comp !== undefined)
            return React.createElement(this.getComponent() as any, this.getProps(), children);
        else
            return undefined;
    }

    get $$controlName() {
        return "<baseControl>";
    }

    get $$controlMainProps(): JSX.Element {
        return <div></div>;
    }
}
