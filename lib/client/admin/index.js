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
const routes_1 = require("../../routes");
const term_1 = require("../../domain/admin/term");
const class_transformer_validator_1 = require("class-transformer-validator");
class default_1 {
    constructor(api) {
        this.getTermOfUse = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.administrative.termOfUse);
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
        this.getUseOfImageTerm = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.administrative.useOfImage);
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
        this.getLatestUseOfImageTerm = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.administrative.latestUseOfImage);
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
        this.getPrivacyPolicy = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.administrative.privacyPolicy);
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
        this.getPurchaseTerm = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.administrative.purchaseTerm);
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
        this.saveTermOfUse = (term, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(term_1.Term, term);
                    const { data, headers } = yield this.api.post(routes_1.administrative.termOfUse, validated, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
                    });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.savePrivacyPolicy = (term, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(term_1.Term, term);
                    const { data, headers } = yield this.api.post(routes_1.administrative.privacyPolicy, validated, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
                    });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.savePurchaseTerm = (term, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(term_1.Term, term);
                    const { data, headers } = yield this.api.post(routes_1.administrative.purchaseTerm, validated, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
                    });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.saveUseOfImageTerm = (term, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(term_1.Term, term);
                    const { data, headers } = yield this.api.post(routes_1.administrative.useOfImage, validated, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
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