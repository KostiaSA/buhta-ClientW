import * as React from "react";
import {Component, ComponentProps} from "../../buhta-core/Components/Component";
import {DesignedObject} from "../DesignedObject";

export interface PropertyEditorInfo {
    propertyCaption: string;
    propertyName: string;
    propertyPage: string;
    propertyGroup: string;
    propertyDescription: string;
    objectType: typeof DesignedObject;
    editorType: typeof BasePropertyEditor;
    propertyType: typeof Object | typeof String;
}

export interface BasePropertyEditorProps extends ComponentProps {
    designedObject: DesignedObject;
    propertyEditorInfo: PropertyEditorInfo;
    index: number;
    onChange?:()=>void;
}


export class BasePropertyEditor extends Component<BasePropertyEditorProps, any> {
    constructor(props: BasePropertyEditorProps, context) {
        super(props, context);
        this.props = props;
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


