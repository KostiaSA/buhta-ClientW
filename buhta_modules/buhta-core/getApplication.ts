import {SchemaApplication} from "../buhta-schema/SchemaApplication/SchemaApplication";

let application: SchemaApplication;  // заполняется при аутентификации

export function getApplication(): SchemaApplication {
    return application;
}

export function setApplication(app:SchemaApplication) {
    application=app;
}