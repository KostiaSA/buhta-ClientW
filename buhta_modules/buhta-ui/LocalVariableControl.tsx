import * as React from "react";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder_base} from "../buhta-schema/OneWayBinder/OneWayBinder";
import {SelectEditor} from "../buhta-app-designer/PropertyEditors/SelectPropertyEditor";

export type LocalVariableType = "number" | "string" | "date" | "guid";

export class LocalVariableControl extends BaseControl {
    @StringEditor({
        inputCaption: "Имя переменной"
    })
    variableName: string;

    @SelectEditor({
        inputCaption: "Тип переменной",
        selectValues: ["number", ["string","Строка"], "date", "guid"]
    })
    variableType: LocalVariableType;

    @StringEditor({
        inputCaption: "значение"
    })
    initValue: OneWayBinder_base<any>;

    get $$controlName() {
        return "var " + this.variableName;
    }


}
