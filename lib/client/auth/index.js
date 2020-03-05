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
const routes_1 = require("../../routes");
const transformers_1 = require("../transformers");
class default_1 {
    constructor(api) {
        this.api = api;
    }
    asBackoffice(login, password) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, headers } = yield this.api.post(routes_1.auth.agency, null, {
                    headers: { "Authorization": `Basic ${btoa(login + ":" + password)}` }
                });
                resolve({ ok: true, headers, data });
            }
            catch (e) {
                reject(transformers_1.transformApiError(e));
            }
        }));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map