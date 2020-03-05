"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const core_1 = require("./core");
class AuthClientModule {
    constructor(api) {
        this.mobile = (realm, phone, code) => code ? core_1.createRequest(this.api, "POST", routes_1.routes.auth.mobile)
            .setHeaders({
            "X-Ancile-Mobile-Auth": "+55" + phone.replace(/\D/g, ""),
            "X-Ancile-Mobile-Auth-Code": code
        })
            .unsigned() :
            core_1.createRequest(this.api, "GET", routes_1.routes.auth.mobile)
                .setHeaders({
                "X-Ancile-Mobile-Auth": "+55" + phone.replace(/\D/g, ""),
            })
                .unsigned();
        this.authenticate = (realm, login, password) => core_1.createRequest(this.api, "POST", routes_1.routes.auth.login("basic", realm))
            .setHttpBasicAuth(login, password);
        this.logout = (authType, realm) => core_1.createRequest(this.api, "DELETE", routes_1.routes.auth.logout(authType, realm));
        this.api = api;
    }
}
exports.AuthClientModule = AuthClientModule;
//# sourceMappingURL=auth.js.map