import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";

export class testBuhtaObject1 extends DesignedObject{

    @StringEditor("Фамилия","Главная","Основная","Имя")
    firstName:string;

    @StringEditor("Имя","Главная","Основная","Фамилия")
    lastName:string;

    @StringEditor("Отчество","Главная","Основная","Отчество")
    surName:string;
}

