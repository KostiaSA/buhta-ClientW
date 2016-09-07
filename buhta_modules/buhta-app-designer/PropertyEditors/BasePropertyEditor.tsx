import * as React from "react";
import {Component, ComponentProps} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";
import {AutoFormControlProps} from "../../buhta-core/Components/AutoForm/AutoForm";
import {ListEditorParams} from "./ListPropertyEditor";

export interface PropertyEditorInfo extends AutoFormControlProps {
    propertyName: string;
    objectType: typeof DesignedObject;
    editorType: typeof BasePropertyEditor;
    propertyType: typeof Object | typeof String | typeof Boolean | typeof Number | null;
    customParams?: any;
}

export interface BasePropertyEditorProps extends ComponentProps<any>, PropertyEditorInfo {
    designedObject: DesignedObject;
    index: number;
    onChange?: () => void;
}


export class BasePropertyEditor extends Component<BasePropertyEditorProps, any> {
    constructor(props: BasePropertyEditorProps, context: any) {
        super(props, context);
    }

    // propertyName: string;
    // designedObject: DesignedObject;

    // getPropertyType(): string {
    //     return "Object";
    // }

    // renderEditor(index: number): JSX.Element {
    //     return (<span>editor not defined</span>);
    // }

    render(): JSX.Element {
        return (<span>property editor not defined</span>);
    }

    //
    // emitTsCode(tsCode: TsCode, assignName: string) {
    //     tsCode.addProperty(assignName, this.propertyName, this.getPropertyType(), this.designedObject[this.propertyName]);
    // }

}


