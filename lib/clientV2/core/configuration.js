"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transformers_1 = require("../transformers");
const browser_or_node_1 = require("browser-or-node");
class ApiRequestConfiguration {
    constructor(api, method, route) {
        this._headers = {};
        this._queryParams = {};
        this._configuration = {};
        this._payload = null;
        this._payloadTransformer = (payload) => payload;
        this._signed = true;
        this.execute = () => {
            if (browser_or_node_1.isNode && this._payload && this._payload.getHeaders && !this._headers["Content-Type"].includes("boundary"))
                throw new Error("multipart/form-data boundary not set. Please, consider using .setBoundary() in your ApiRequestConfiguration.");
            if (this._signed && !this._headers["Authorization"])
                throw new Error("This ApiRequestConfiguration is marked as signed. Consider using .unsigned() if your intention is to make an unsigned request.");
            const axiosRequest = this.api[this.method.toLowerCase()];
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const payload = this._payloadTransformer(this._payload);
                    const args = ["POST", "PUT"].includes(this.method) ? [
                        this.route, payload,
                        Object.assign({ headers: this._headers, params: this._queryParams }, this._configuration)
                    ] : [
                        this.route,
                        Object.assign({ headers: this._headers, params: this._queryParams }, this._configuration)
                    ];
                    const { data, headers } = yield axiosRequest(...args);
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    console.log("FanstationJS", e);
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.api = api;
        this.method = method;
        this.route = route;
    }
    setHeaders(headers) {
        this._headers = headers;
        return this;
    }
    setHttpBasicAuth(login, password) {
        this._headers["Authorization"] = btoa(`Basic ${btoa(login + ":" + password)}`);
        return this;
    }
    setQuery(queryParams) {
        this._queryParams = queryParams;
        return this;
    }
    setConfiguration(configuration) {
        this._configuration = configuration;
        return this;
    }
    setPayload(payload) {
        this._payload = payload;
        return this;
    }
    setPayloadTransformer(payloadTransformer) {
        this._payloadTransformer = payloadTransformer;
        return this;
    }
    setBoundary() {
        if (!this._payload)
            throw new Error("Payload is undefined");
        if (!this._payload.getHeaders)
            throw Error("Payload is is not FormData");
        if (!browser_or_node_1.isNode)
            return this;
        this._headers["Content-Type"] = this._payload.getHeaders()['content-type'];
        return this;
    }
    signed() {
        this._signed = true;
        return this;
    }
    unsigned() {
        this._signed = false;
        return this;
    }
    sign(token) {
        this._headers["Authorization"] = token;
        return this;
    }
}
exports.ApiRequestConfiguration = ApiRequestConfiguration;
exports.createRequest = (api, method, route) => new ApiRequestConfiguration(api, method, route);
//# sourceMappingURL=configuration.js.map