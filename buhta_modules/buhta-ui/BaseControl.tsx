import * as React from "react";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {Component} from "../buhta-core/Components/Component";
import {throwAbstractError} from "../buhta-core/Error";

export class BaseControl extends DesignedObject {
    name: string;
    parent: BaseControl;
    children: BaseControl[] = [];
    reactElement: Component<any, any>;

    getComponent(): React.ReactElement<any> {
        throwAbstractError();
        throw  "fake";
    }
}
