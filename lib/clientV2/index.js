"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const client_1 = require("../client");
const idol_1 = require("./idol");
const backoffice_1 = require("./backoffice");
const core_1 = require("./core");
const auth_1 = require("./auth");
const financial_1 = require("./financial");
const legal_1 = require("./legal");
__export(require("./core"));
class Client {
    constructor(config, api) {
        this.config = config;
        this.api = api;
        this.auth = new auth_1.AuthClientModule(api);
        this.idol = new idol_1.IdolClientModule(api);
        this.backoffice = new backoffice_1.BackofficeClientModule(api);
        this.financial = new financial_1.FinancialClientModule(api);
        this.legal = new legal_1.LegalClientModule(api);
    }
    static applyI18n(violation, failure) {
        Client.i18n = { violation, failure };
        return { init: Client.init };
    }
    static init(config = {
        locale: "EN_US",
        env: "development",
        legacy: false,
    }) {
        if (config.legacy)
            return client_1.default.init(config);
        const api = axios_1.default.create({
            baseURL: config.url || process.env.REACT_APP_URL_API,
            timeout: 15000,
            validateStatus: (status) => status === 200
        });
        console.log(config.url, api.defaults.baseURL);
        return new Client(config, api);
    }
    getAxiosInstance() {
        return this.api;
    }
    createRequest(method, route) {
        return core_1.createRequest(this.api, method, route);
    }
}
exports.default = Client;
//# sourceMappingURL=index.js.map