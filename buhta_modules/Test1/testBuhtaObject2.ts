import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {TestBuhtaObject1} from "./testBuhtaObject1";

export class testBuhtaObject2 extends TestBuhtaObject1 {


    @StringEditor({
        inputCaption: "Пол/sex",
        inputTab: "Дополнительно",
        inputGroup: "Основная",
        inputDescription: "Потолок абонента"
    })
    sex: string;


}

