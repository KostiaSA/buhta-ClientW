import * as React from "react";
import {BaseControl, ShowInDesignerGrid} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component, ComponentProps} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {SelectEditor} from "../buhta-app-designer/PropertyEditors/SelectPropertyEditor";

export type LocalVariableType = "number" | "string" | "date" | "guid";

export class LocalVariableControl extends BaseControl {
    @StringEditor({
        inputCaption: "Имя переменной"
    })
    variableName: string;

    @SelectEditor({
        inputCaption: "Тип переменной",
        selectValues: ["number", ["string", "Строка"], "date", "guid"]
    })
    @ShowInDesignerGrid({column: "main-properties"})
    variableType: LocalVariableType;

    @StringEditor({
        inputCaption: "значение"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    initValue: OneWayBinder<any>;

    @StringEditor({
        inputCaption: "отрисовка"
    })
    @ShowInDesignerGrid({column: "main-properties"})
    forceUpdate: boolean;

    beforeRender() {
        super.beforeRender();
        if (this.initValue !== undefined && this.$$ownerComponent.$$runtimeContext.$$vars[this.variableName] === undefined)
           this.$$ownerComponent.$$runtimeContext.$$vars[this.variableName] = this.initValue.getValue(this);
    }

    getProps(): ComponentProps<any> {
        return {};
    }

    // get $$controlName() {
    //     return "var " + this.variableName;
    // }

    get $$controlName(): JSX.Element | string {
        return (
            <span className="keyword">
                var
               <span className="variable">{" " + this.variableName}</span>
            </span>
        );
    }


}
