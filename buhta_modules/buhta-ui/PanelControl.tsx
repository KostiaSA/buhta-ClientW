import * as React from "react";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {Panel, PanelProps} from "../buhta-core/Components/Panel/Panel";

export class PanelControl extends BaseControl {
    visible: boolean;

    beforeRender() {
        super.beforeRender();
    }

    getProps(): PanelProps {
        return {sizeTo: "parent"};
    }

    getComponent(): Function {
        return Panel;
    }

    get $$controlName(){
        return "<Panel>";
    }

}
