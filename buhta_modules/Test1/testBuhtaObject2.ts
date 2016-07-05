
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";
import {testBuhtaObject1} from "./testBuhtaObject1";

export class testBuhtaObject2 extends testBuhtaObject1{
    constructor(){
        super();
    }

    @StringEditor("Пол","Главная","Основная","Пол")
    sex:string;


}

