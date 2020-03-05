"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const auth_1 = require("./auth");
const admin_1 = require("./admin");
const user_1 = require("./user");
const idol_1 = require("./idol");
const agency_1 = require("./agency");
const order_1 = require("./order");
const external_1 = require("./external");
const financial_1 = require("./financial");
class Client {
    constructor(config, api) {
        this.config = config;
        this.api = api;
        this.auth = new auth_1.default(api);
        this.admin = new admin_1.default(api);
        this.user = new user_1.default(api);
        this.idol = new idol_1.default(api);
        this.agency = new agency_1.default(api);
        this.order = new order_1.default(api);
        this.financial = new financial_1.default(api);
        this.external = new external_1.default();
    }
    static applyI18n(violation, failure) {
        Client.i18n = { violation, failure };
        return { init: Client.init };
    }
    static init(config = {
        locale: "EN_US",
    }) {
        const api = axios_1.default.create({
            baseURL: process.env.REACT_APP_URL_API,
            timeout: 15000,
            validateStatus: (status) => status === 200
        });
        return new Client(config, api);
    }
    getAxiosInstance() {
        return this.api;
    }
    _asSigned(token, module) {
        return Object.keys(module).reduce((acc, key) => {
            if (typeof module[key] === "function") {
                acc[key] = (...args) => module[key](...args, token);
                return acc;
            }
        }, {});
    }
    signed(token) {
        return {
            agency: this._asSigned(token, this.agency),
            user: this._asSigned(token, this.user),
            admin: this._asSigned(token, this.admin),
            financial: this._asSigned(token, this.financial)
        };
    }
}
exports.default = Client;
//# sourceMappingURL=index.js.map