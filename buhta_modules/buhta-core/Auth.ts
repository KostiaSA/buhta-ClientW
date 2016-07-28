import {AuthSocketRequest, AuthSocketAnswer} from "../buhta-sql/SqlDb";
import {getConnectionId} from "./getConnectionId";
import {socket} from "./Socket";

let authOk: boolean;

export function auth(login: string, password: string): Promise<string> {
    let promise: Promise<string> = new Promise(
        (resolve: (okStr: "ok") => void, reject: (error: string) => void) => {


            let queryId = "query-" + Math.random().toString(36).slice(2);
            let req: AuthSocketRequest = {
                connectionId: getConnectionId(),
                queryId: queryId,
                login: login,
                password: password
            };

            socket.emit("auth", req);

            //console.log("socket.emit");

            socket.once(queryId, (response: AuthSocketAnswer) => {
                //console.log("socket.emit.response");
                //console.log(response);

                if (response.error) {
                    authOk = false;
                    reject(response.error);
                }
                else {
                    authOk = true;
                    resolve("ok");
                }

            });


        }
    );

    return promise;

}

export function checkAuth(): Promise<string> {
    //console.log("checkAuth");
    if (authOk) {
      //  console.log("checkAuthOk");
        return new Promise(
            (resolve: (okStr: "ok") => void, reject: (error: string) => void) => {
                resolve("ok");
            }
        );

    }
    else {
        //console.log("checkAuth-req");

        return auth("admin", "admin");
    }

}

