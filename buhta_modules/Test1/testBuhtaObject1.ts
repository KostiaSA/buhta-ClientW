import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";

export class testBuhtaObject1 extends DesignedObject{

    @StringEditor("Главная","Основная","имя объекта")
    name:string;
}

