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
const domain_1 = require("../../domain");
const routes_1 = require("../../routes");
const class_transformer_validator_1 = require("class-transformer-validator");
class default_1 {
    constructor(api) {
        this.signed = (token) => {
            return Object.keys(this).reduce((acc, key) => {
                if (typeof this[key] === "function") {
                    acc[key] = (...args) => this[key](...args, token);
                    return acc;
                }
            }, {});
        };
        this.createCelebrationReason = (celebrationReasons, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.CelebrationReasonList, celebrationReasons);
                    const { data, headers } = yield this.api.post(routes_1.order.createCelebrationReason, validated.celebrationReasons, {
                        headers: {
                            "Authorization": token || ""
                        }
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
        this.getCelebrationReasons = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.order.getCelebrationReasons);
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
        this.getOrderDownload = (nonce, purchaseId, userId) => {
            throw new Error("Method not implemented.");
        };
        this.getDownloadNonce = (purchaseId, userId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { headers, data } = yield this.api.get(routes_1.order.getDownloadNonce, {
                        params: { purchaseId, userId },
                        headers: { "Authorization": token || "" }
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
        this.getOrdersByUser = (userId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.order.getOrdersByUser, {
                        params: { userId },
                        headers: {
                            "Authorization": token || ""
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
        this.getAllReactions = (page, size) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.order.getAllReactions, {
                        params: { page, size }
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
        this.getAllStatements = (page, size) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.order.getAllStatements, {
                        params: { page, size }
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
        this.scheduleOrder = (userId, order) => {
            throw new Error("Method not implemented.");
        };
        this.scheduleUnregisteredOrder = (experienceId, installments, order, user) => {
            throw new Error("Method not implemented.");
        };
        this.processPurchase = (purchaseId, token) => {
            throw new Error("Method not implemented.");
        };
        this.evaluateOrder = (userId) => {
            throw new Error("Method not implemented.");
        };
        this.getEvaluationsBy = () => {
            throw new Error("Method not implemented.");
        };
        this.getReactionVideo = () => {
            throw new Error("Method not implemented.");
        };
        this.api = api;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map