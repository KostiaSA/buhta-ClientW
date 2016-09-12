import {AuthSocketRequest, AuthSocketAnswer} from "../buhta-sql/SqlDb";
import {getConnectionId} from "./getConnectionId";
import {socket} from "./Socket";
import {throwError} from "./Error";
import {SelectStmt} from "../buhta-sql/SelectStmt";
import {SqlGuidValue} from "../buhta-sql/SqlCore";
import {SCHEMA_APPLICATION_TYPE_ID} from "./Constants";
//import {SchemaApplication} from "../buhta-schema/SchemaApplication/SchemaApplication";
import {loadUserSettingsStore} from "./userSettingsStore";
import {OpenWindowParams, getDesktop} from "./Components/Desktop/Desktop";
import {SchemaObject} from "../buhta-schema/SchemaObject";
import {SchemaApplication} from "../buhta-schema/SchemaApplication/SchemaApplication";
//import {SchemaObjectDesignerProps} from "../buhta-app-designer/SchemaObjectDesigner/SchemaObjectDesigner";
//import {loadWindowSizePositionStore} from "./Components/Window/WindowSizePositionStore";
import {getSchema} from "../buhta-schema/Schema";
import {setApplication} from "./getApplication";
import {DesignedObject} from "../buhta-app-designer/DesignedObject";

let authOk: boolean;
let userId: string | null = null;

export function getAuthOk(): boolean {
    return authOk;
}


export function getUserId(): string {
    if (userId !== null)
        return userId;
    else {
        throwError("userId is null");
        throw "fake";
    }
}

// export function auth(login: string, password: string): Promise<string> {
//     let promise: Promise<string> = new Promise(
//         (resolve: (okStr: "ok") => void, reject: (error: string) => void) => {
//
//
//             let queryId = "query-" + Math.random().toString(36).slice(2);
//             let req: AuthSocketRequest = {
//                 connectionId: getConnectionId(),
//                 queryId: queryId,
//                 login: login,
//                 password: password
//             };
//
//             socket.emit("auth", req);
//
//             socket.once(queryId, (response: AuthSocketAnswer) => {
//                 //console.log("socket.emit.response");
//                 //console.log(response);
//
//                 if (response.error) {
//                     authOk = false;
//                     userId = null;
//                     reject(response.error);
//                 }
//                 else {
//                     authOk = true;
//                     userId = response.userId!;
//
//                     // todo сделать выбор app, вместо top 1
//                     let sql = new SelectStmt().table("SchemaObject").column("id").where("typeId", "=", new SqlGuidValue(SCHEMA_APPLICATION_TYPE_ID));
//                     getSchema().db.selectToString(sql)
//                         .then((id: string)=> {
//
//                             getSchema().getObject<SchemaApplication>(id)
//                                 .then((app: SchemaApplication) => {
//                                     setApplication(app);
//                                     resolve("ok");
//                                 })
//                                 .catch((error)=> {
//                                     reject(error);
//                                 });
//
//
//                         })
//                         .catch((error)=> {
//                             reject(error);
//                         });
//
//
//                 }
//
//             });
//
//
//         }
//     );
//
//     return promise;
//
// }

export function auth(login: string, password: string): Promise<void> {
    let promise: Promise<void> = new Promise(
        (resolve: () => void, reject: (error: string) => void) => {


            let queryId = "query-" + Math.random().toString(36).slice(2);
            let req: AuthSocketRequest = {
                connectionId: getConnectionId(),
                queryId: queryId,
                login: login,
                password: password
            };

            socket.emit("auth", req);

            socket.once(queryId, (response: AuthSocketAnswer) => {
                //console.log("socket.emit.response");
                //console.log(response);

                if (response.error) {
                    authOk = false;
                    userId = null;
                    reject(response.error);
                }
                else {
                    authOk = true;
                    userId = response.userId!;
                    resolve();
                }
            });


        }
    )
        .then(()=> {
            // проверка на наличие хотя бы одного SchemaApplication
            let sql = new SelectStmt().table("SchemaObject").column({
                raw: "count(*)",
                as: "appsCount"
            }).where("typeId", "=", new SqlGuidValue(SCHEMA_APPLICATION_TYPE_ID));

            return getSchema().db.selectToNumber(sql).then((count)=> {
                if (count > 0)
                    return;
                else {
                    // вызываем форму на добавление нового SchemaApplication

                    //let app2=new DesignedObject();
                    //let app1=new SchemaObject(getSchema());
                    //let app=new SchemaApplication(getSchema());
                    //app.name="Новое приложение";

                    // let openParam: OpenWindowParams = {
                    //     title: "Новое приложение",
                    //     autoPosition: "desktop-center",
                    //     theme: "blue",
                    //
                    // };

                    // let props: SchemaObjectDesignerProps = {
                    //     designedObject: app,
                    // };
                    //
                    // return getDesktop().openModalWindow(app.$$getDesigner(props), openParam);
                }
            });

        })
        .then(()=> {
            // ищем первый попавщийся SchemaApplication, берем его id
            // todo сделать выбор app, вместо top 1
            let sql = new SelectStmt().table("SchemaObject").column("id").where("typeId", "=", new SqlGuidValue(SCHEMA_APPLICATION_TYPE_ID));
            return getSchema().db.selectToString(sql)
        })
        .then((id: string)=> {
            // загружаем SchemaApplication
            return getSchema().getObject<SchemaApplication>(id)
        })
        .then((app: SchemaApplication) => {
            setApplication(app);
        })
        .then(()=> {
            // загружаем настройки пользователя
            return loadUserSettingsStore();
        })
        .catch((error) => {
            alert("Ошибка загрузки приложения: " + error);
        });

    return promise;

}

export function checkAuth(): Promise<void> {
    //console.log("checkAuth");
    if (authOk) {
        //  console.log("checkAuthOk");
        return new Promise<void>(
            (resolve: () => void, reject: (error: string) => void) => {
                resolve();
            }
        );

    }
    else {
        //console.log("checkAuth-req");
        return auth("admin", "admin");
    }

}

