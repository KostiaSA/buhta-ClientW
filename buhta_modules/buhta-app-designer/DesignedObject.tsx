import {PropertyEditorInfo, BasePropertyEditor} from "./PropertyEditors/BasePropertyEditor";

export class DesignedObject {
    constructor() {
    }

    $$unwatchedProps: string[] = ["propertyEditors", "$$unwatchedProps"];

    // id: string;
    // name: string;
    // className: string;
    // inheritFrom: string;
    // moduleName: string;
    // references: Array<string> = [];

    private static propertyEditors: { [propertyName: string]: PropertyEditorInfo; } = {};

    static registerPropertyEditor(propertyName: string,
                                  propertyPage: string,
                                  propertyGroup: string,
                                  propertyDescription: string,
                                  editorType: typeof BasePropertyEditor,
                                  propertyType: typeof Object | typeof String) {

        let info: PropertyEditorInfo = {
            propertyName: propertyName,
            propertyPage: propertyPage,
            propertyGroup: propertyGroup,
            propertyDescription: propertyDescription,
            editorType: editorType,
            propertyType: propertyType,
        }

        DesignedObject.propertyEditors[propertyName] = info;

        console.log("registerPropertyEditor " + propertyName);
        console.log(info);

    }

    get propertyEditors():{ [propertyName: string]: PropertyEditorInfo; }{
        return DesignedObject.propertyEditors;
    }

    // registerPropertyEditors() {
    //     this.propertyEditors.length = 0;
    // }
    //
    //
    // registerPropertyEditor(propertyName: string, propertyEditor: BasePropertyEditor) {
    //     propertyEditor.designedObject = this;
    //     propertyEditor.propertyName = propertyName;
    //     this.propertyEditors.push(propertyEditor);
    // }

    // emitTsCode(): string {
    //
    //     this.registerPropertyEditors();
    //
    //     let tsCode = new TsCode(this.moduleName, this.className, this.inheritFrom, this.references);
    //
    //     this.propertyEditors.forEach((editor) => {
    //         editor.designedObject = this;
    //         editor.emitTsCode(tsCode);
    //     });
    //
    //     return tsCode.getCode();
    // }

}

