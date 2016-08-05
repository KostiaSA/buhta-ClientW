import * as React from "react";
import {BaseControl} from "./BaseControl";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {Component} from "../buhta-core/Components/Component";
import {ButtonProps, Button} from "../buhta-core/Components/Button/Button";
import {OneWayBinder} from "../buhta-schema/OneWayBinder";

export type LocalVariableType = "number" | "string" | "date" | "guid";

export class LocalVariableControl extends BaseControl {
    @StringEditor({
        inputCaption: "Имя переменной"
    })
    variableName: string;

    @StringEditor({
        inputCaption: "Тип переменной"
    })
    variableType: LocalVariableType;

    @StringEditor({
        inputCaption: "значение"
    })
    initValue: OneWayBinder;

    get $$controlName() {
        return "var " + this.variableName;
    }


}
