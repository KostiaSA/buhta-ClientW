import {DesignedObject} from "../buhta-app-designer/DesignedObject";
import {StringEditor} from "../buhta-app-designer/PropertyEditors/StringPropertyEditor";

export class testBuhtaObject1 extends DesignedObject {

    @StringEditor({inputCaption: "Фамилия", inputTab: "Главная", inputGroup: "Основная", inputDescription: "Фамилия абонента"})
    firstName: string;

    @StringEditor({inputCaption: "Имя", inputTab: "Главная", inputGroup: "Основная", inputDescription: "Имя"})
    lastName: string;

    @StringEditor({inputCaption: "Отчество", inputTab: "Главная", inputGroup: "Основная", inputDescription: "Отчество абонента"})
    surName: string;
}

