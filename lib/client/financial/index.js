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
const FormData = require("form-data");
const browser_or_node_1 = require("browser-or-node");
class default_1 {
    constructor(api) {
        this.getAllDeals = (token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.financial.getAllDeals, {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getReport = (userId, artistId, startDate, endDate, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.financial.getReport, {
                        params: { userId, artistId, startDate, endDate },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getUsernames = (userId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.financial.getUsernames, {
                        params: { userId },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.removeFile = (commercialDealFileId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.delete(routes_1.financial.removeFile, {
                        params: { commercialDealFileId },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.downloadCommercialDealFile = (commercialDealFileId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.financial.downloadCommercialDealFile, {
                        responseType: 'arraybuffer',
                        params: { commercialDealFileId },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.uploadNewCommercialDealFile = (artistId, commercialDealFileId, filename, file, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("filename", filename);
                    form.append("file", file);
                    form.append("artistId", artistId);
                    form.append("commercialDealFileId", commercialDealFileId);
                    const { data, headers } = yield this.api.post(routes_1.financial.uploadNewCommercialDealFile, form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.api = api;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map