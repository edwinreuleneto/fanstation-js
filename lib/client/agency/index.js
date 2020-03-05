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
const domain_1 = require("../../domain");
const transformers_1 = require("../transformers");
const FormData = require("form-data");
const category_1 = require("../../domain/idol/category");
const commissions_1 = require("../../domain/financial/commissions");
const browser_or_node_1 = require("browser-or-node");
const class_transformer_validator_1 = require("class-transformer-validator");
const groups_1 = require("../../utils/validators/groups");
class default_1 {
    constructor(api) {
        this.authenticate = (login, password) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    // const form = new FormData();
                    // form.append("grant_type", "password");
                    // form.append("response_type", "token");
                    // form.append("client_id", "artists-service");
                    const { data, headers } = yield this.api.post(routes_1.agency.authenticate, { email: login, password }, {
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
                    const { data, headers } = yield this.api.delete(routes_1.agency.logout, {
                        headers: {
                            "Authorization": token
                        }
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
        this.get = (token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.agency.get, {
                        headers: { "Authorization": token || "" },
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.create = (agency) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Agency, agency, {
                        validator: { groups: [groups_1.Groups.CREATE] }
                    });
                    const { headers, data } = yield this.api.post(routes_1.agency.create, validated);
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.update = (agency, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Agency, agency, {
                        validator: { groups: [groups_1.Groups.UPDATE] }
                    });
                    const { data, headers } = yield this.api.put(routes_1.agency.update, validated, {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.savePicture = (file, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("picture", file);
                    const { data, headers } = yield this.api.put(routes_1.agency.savePicture, form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getPicture = (pictureId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.agency.getPicture(pictureId), {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.confirmRegistration = (token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.post(routes_1.agency.confirmRegistration, token);
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.requestResetPassword = (email) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.post(routes_1.agency.requestResetPassword, null, {
                        params: { email }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.resetPassword = (token, newPassword) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.post(routes_1.agency.resetPassword, {
                        token,
                        newPassword
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.verifyToken = (token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.post(routes_1.agency.verifyToken, token);
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getIdol = (artistId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.agency.getIdol(artistId), {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.getIdols = (name, category, page, size, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.agency.getIdols, {
                        params: { name, category, page, size },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.uploadWelcomeVideo = (artistId, video, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("welcomeVideo", video);
                    const { data, headers } = yield this.api.put(routes_1.agency.uploadWelcomeVideo(artistId), form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.uploadMinicopy = (artistId, experienceType, minicopy, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("experienceType", experienceType);
                    form.append("minicopy", minicopy);
                    const { data, headers } = yield this.api.post(routes_1.agency.uploadMinicopy(artistId), form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.createIdol = (idol, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Idol, idol, {
                        validator: { groups: [groups_1.Groups.CREATE] }
                    });
                    const form = transformers_1.jsonToFormData(validated);
                    const { data, headers } = yield this.api.post(routes_1.agency.createIdol, form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    else
                        reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.updateIdol = (idol, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Idol, idol, {
                        validator: { groups: [groups_1.Groups.UPDATE] }
                    });
                    const form = transformers_1.jsonToFormData(validated);
                    const { data, headers } = yield this.api.put(routes_1.agency.updateIdol, form, {
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    else
                        reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.createIdolCategory = (categories, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(category_1.CategoryList, categories);
                    const { data, headers } = yield this.api.post(routes_1.agency.createIdolCategory, validated.categoryList, {
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, headers, data });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.searchOrders = (page, size, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.get(routes_1.agency.searchOrders, {
                        params: { page, size },
                        headers: { "Authorization": token || "" }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.uploadOrder = (file, orderId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const form = new FormData();
                    form.append("order", file);
                    const { headers } = yield this.api.post(routes_1.agency.uploadOrder, form, {
                        params: { orderId },
                        timeout: 0,
                        headers: Object.assign({ "Authorization": token || "" }, (browser_or_node_1.isNode && { "Content-Type": form.getHeaders()['content-type'] }))
                    });
                    resolve({
                        ok: true,
                        headers,
                        data: undefined
                    });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.toggleIdolFeatured = (artistId, featured, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { headers, data } = yield this.api.put(routes_1.agency.setArtistAsFeatured(artistId), null, {
                        params: {
                            isFeatured: featured
                        },
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
        this.togglePurchaseStatementApproval = (orderId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.put(routes_1.agency.togglePurchaseStatementApproval(orderId), null, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.togglePurchaseReactionApproval = (orderId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.put(routes_1.agency.togglePurchaseReactionApproval(orderId), null, {
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.updateCommercialDealStatus = (artistId, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield this.api.put(routes_1.agency.updateCommercialDealStatus, null, {
                        params: { artistId },
                        headers: {
                            "Authorization": token || ""
                        }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.updateCommissions = (commissions, token) => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const validated = class_transformer_validator_1.transformAndValidateSync(commissions_1.Commissions, commissions, {
                        validator: { groups: [groups_1.Groups.UPDATE] }
                    });
                    const { data, headers } = yield this.api.put(routes_1.agency.updateCommissions, validated, {
                        headers: {
                            "Authorization": token || "",
                        }
                    });
                    resolve({ ok: true, data, headers });
                }
                catch (e) {
                    if (e instanceof Array)
                        reject(transformers_1.transformValidationError(e));
                    else
                        reject(transformers_1.transformApiError(e));
                }
            }));
        };
        this.api = api;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map