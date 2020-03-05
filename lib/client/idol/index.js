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
const browser_or_node_1 = require("browser-or-node");
const routes_1 = require("../../routes");
const transformers_1 = require("../transformers");
const FormData = require("form-data");
class default_1 {
    constructor(api) {
        this.get = (id) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.get(id));
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getByAlias = (alias) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.getByAlias(alias));
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.search = (name, category, page, size) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.search, {
                        params: { name, category, page, size }
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getFeatured = (page, size) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.getFeatured, {
                        params: { page, size }
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getMinicopy = (alias) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.getMinicopy(alias));
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getWelcomeVideo = (alias) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.getWelcomeVideo(alias));
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getCategories = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.idol.getAllCategories);
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.uploadOrder = (artistId, orderId, file) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("order", file);
                    const { data, headers } = yield this.api.post(routes_1.idol.uploadOrder, form, {
                        params: { artistId, orderId },
                        headers: Object.assign({}, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    console.log(e);
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.api = api;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map