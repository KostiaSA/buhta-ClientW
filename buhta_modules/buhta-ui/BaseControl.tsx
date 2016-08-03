import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";

export class BaseControl extends DesignedObject {
//    name: string;
//    parent: BaseControl;
    children: (BaseControl | string)[] = [];
//    reactElement: Component<any, any>;

    getProps(): ComponentProps<any> {
        throwAbstractError();
        throw  "fake";
    }

    getComponent(): Function {
        throwAbstractError();
        throw  "fake";
    }

    beforeRender() {
    }

    render(): JSX.Element {
        this.beforeRender();
        let children = this.children.map((child: BaseControl| string) => {
            if (_.isString(child))
                return child;
            else
                return child.render();
        });
        return React.createElement(this.getComponent() as any, this.getProps(), children);
    }

}
