import {AxiosInstance} from "axios";

import {routes} from "./routes";
import {ApiRequestConfiguration, createRequest} from "./core";

type AuthType = "basic" | "mobile";

type Realm = "backoffice" | "manager" | "hunter" | "artist" | "default";

export class AuthClientModule {

    private readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    mobile = (realm: Realm | string, phone: string, code?: string): ApiRequestConfiguration<undefined> =>
        code ? createRequest(this.api, "POST", routes.auth.mobile)
                .setHeaders({
                    "X-Ancile-Mobile-Auth": "+55" + phone.replace(/\D/g, ""),
                    "X-Ancile-Mobile-Auth-Code": code
                })
                .unsigned() :
            createRequest(this.api, "GET", routes.auth.mobile)
                .setHeaders({
                    "X-Ancile-Mobile-Auth": "+55" + phone.replace(/\D/g, ""),
                })
                .unsigned();

    authenticate = (realm: Realm | string, login: string, password: string): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "POST", routes.auth.login("basic", realm))
            .setHttpBasicAuth(login, password);

    logout = (authType: AuthType | string, realm: Realm | string): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "DELETE", routes.auth.logout(authType, realm));

}
