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
const class_transformer_validator_1 = require("class-transformer-validator");
const routes_1 = require("../../routes");
const domain_1 = require("../../domain");
const transformers_1 = require("../transformers");
class default_1 {
    constructor(api) {
        this.create = (user) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.User, user);
                    const { data, headers } = yield this.api.post(routes_1.user.create, validated);
                    resolve({
                        ok: true,
                        headers,
                        data
                    });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.authenticate = (login, password) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    // const form = new FormData();
                    // form.append("grant_type", "password");
                    // form.append("response_type", "token");
                    // form.append("client_id", "artists-service");
                    const { data, headers } = yield this.api.post(routes_1.user.authenticate, { email: login, password }, {
                        headers: {
                        // "Content-Type": "application/x-www-form-urlencoded",
                        // "Authorization": `Basic ${btoa(login + ":" + password)}`
                        }
                    });
                    resolve({
                        ok: true,
                        headers,
                        data
                    });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.logout = (token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.delete(routes_1.user.logout, {
                        headers: { "Authorization": token }
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
                    });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.update = (user, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.User, user);
                    const { data, headers } = yield this.api.put(routes_1.user.update, validated, {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({
                        ok: true,
                        headers,
                        data
                    });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.api = api;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map