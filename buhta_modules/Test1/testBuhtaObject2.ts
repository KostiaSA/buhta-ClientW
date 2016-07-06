import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {testBuhtaObject1} from "./testBuhtaObject1";

export class testBuhtaObject2 extends testBuhtaObject1 {
    constructor() {
        super();
    }

    @StringEditor({
        inputCaption: "Пол/sex",
        inputTab: "Дополнительно",
        inputGroup: "Основная",
        inputDescription: "Потолок абонента"
    })
    sex: string;


}

