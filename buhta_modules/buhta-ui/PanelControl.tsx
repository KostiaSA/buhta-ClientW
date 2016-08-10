import * as React from "react";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {Panel, PanelProps} from "../buhta-core/Components/Panel/Panel";

export class PanelControl extends BaseControl {

    visible: boolean;
    sizeTo: "parent" | "content";

    beforeRender() {
        super.beforeRender();
    }

    getProps(): PanelProps {
        return {sizeTo: this.sizeTo};
    }

    getPropsAsync(): Promise<PanelProps> {
        return new Promise(
            (resolve: (obj: PanelProps) => void, reject: (error: string) => void) => {
                resolve({sizeTo: this.sizeTo});
            });
    }

    getComponent(): Function | undefined {
        return Panel;
    }

    get $$controlName(): JSX.Element | string {
        let tag = "<Panel>";
        return (
            <span className="html-tag">
              {tag}
            </span>
        );
    }

}
