"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormData = require("form-data");
const class_transformer_validator_1 = require("class-transformer-validator");
const routes_1 = require("./routes");
const core_1 = require("./core");
const domain_1 = require("../domain");
const transformers_1 = require("./transformers");
const commissions_1 = require("../domain/financial/commissions");
const groups_1 = require("../utils/validators/groups");
const category_1 = require("../domain/idol/category");
class BackofficeClientModule {
    constructor(api) {
        // logout = (token: string): Promise<Result<null>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.delete(routes.logout, {
        //                 headers: {
        //                     "Authorization": token
        //                 }
        //             });
        //             resolve({
        //                 ok: true,
        //                 data,
        //                 headers
        //             })
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     })
        // };
        this.get = () => core_1.createRequest(this.api, "GET", routes_1.routes.backoffice.get);
        // get = (token?: string[]): Promise<Result<Agency>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.get(routes.get, {
        //                 headers: {"Authorization": token || ""},
        //             });
        //             resolve({ok: true, data, headers})
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // create = (agency: Agency): Promise<Result<Agency>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const validated = validate(Agency, agency, {
        //                 validator: {groups: [Groups.CREATE]}
        //             });
        //             const {headers, data} = await this.api.post(routes.create, validated);
        //             resolve({ok: true, headers, data})
        //         } catch (e) {
        //             if (e instanceof Array) reject(transformValidationError(e));
        //             reject(transformApiError(e));
        //         }
        //     })
        // };
        // update = (agency: Agency, token?: string): Promise<Result<Agency>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const validated = validate(Agency, agency, {
        //                 validator: {groups: [Groups.UPDATE]}
        //             });
        //             const {data, headers} = await this.api.put(routes.update, validated, {
        //                 headers: {"Authorization": token || ""}
        //             });
        //             resolve({ok: true, headers, data})
        //         } catch (e) {
        //             if (e instanceof Array) reject(transformValidationError(e));
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // savePicture = (file: any, token?: string): Promise<Result<Agency>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const form = new FormData();
        //             form.append("picture", file);
        //             const {data, headers} = await this.api.put(routes.savePicture, form, {
        //                 headers: {
        //                     "Authorization": token || "",
        //                     ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
        //                 }
        //             });
        //             resolve({ok: true, headers, data})
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // getPicture = (pictureId: number, token?: string): Promise<Result<Int8Array>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.get(routes.getPicture(pictureId), {
        //                 headers: {"Authorization": token || ""}
        //             });
        //             resolve({ok: true, data, headers})
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // confirmRegistration = (token: string): Promise<Result<undefined>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.post(routes.confirmRegistration, token);
        //             resolve({ok: true, data, headers});
        //         } catch (e) {
        //             reject(transformApiError(e))
        //         }
        //     });
        // };
        // requestResetPassword = (email: string): Promise<Result<undefined>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.post(routes.requestResetPassword, null, {
        //                 params: {email}
        //             });
        //             resolve({ok: true, data, headers})
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // resetPassword = (token: string, newPassword: string): Promise<Result<string>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.post(routes.resetPassword, {
        //                 token,
        //                 newPassword
        //             });
        //             resolve({ok: true, data, headers})
        //         } catch (e) {
        //             reject(transformApiError(e));
        //         }
        //     });
        // };
        // verifyToken = (token: string): Promise<Result<undefined>> => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const {data, headers} = await this.api.post(routes.verifyToken, token);
        //             resolve({ok: true, data, headers});
        //         } catch (e) {
        //             reject(transformApiError(e))
        //         }
        //     });
        // };
        this.getIdol = (artistId) => core_1.createRequest(this.api, "GET", routes_1.routes.backoffice.getIdol(artistId));
        this.getIdols = (name, category, page, size) => core_1.createRequest(this.api, "GET", routes_1.routes.backoffice.getIdols)
            .setQuery({ name, category, page, size });
        this.uploadWelcomeVideo = (artistId, video) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.uploadWelcomeVideo(artistId))
            .setPayload(video)
            .setPayloadTransformer(payload => {
            const form = new FormData();
            form.append("welcomeVideo", payload);
            return form;
        })
            .setBoundary();
        this.uploadMinicopy = (artistId, experienceType, minicopy) => core_1.createRequest(this.api, "POST", routes_1.routes.backoffice.uploadMinicopy(artistId))
            .setPayload({ experienceType, minicopy })
            .setPayloadTransformer(({ experienceType, minicopy }) => {
            const form = new FormData();
            form.append("experienceType", experienceType);
            form.append("minicopy", minicopy);
            return form;
        })
            .setBoundary();
        this.createIdol = (idol) => core_1.createRequest(this.api, "POST", routes_1.routes.backoffice.createIdol)
            .setPayload(idol)
            .setPayloadTransformer(payload => {
            const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Idol, payload, {
                validator: { groups: [groups_1.Groups.CREATE] }
            });
            return transformers_1.jsonToFormData(validated);
        })
            .setBoundary();
        this.updateIdol = (idol) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.updateIdol)
            .setPayload(idol)
            .setPayloadTransformer(payload => {
            const validated = class_transformer_validator_1.transformAndValidateSync(domain_1.Idol, payload, {
                validator: { groups: [groups_1.Groups.UPDATE] }
            });
            return transformers_1.jsonToFormData(validated);
        })
            .setBoundary();
        this.createIdolCategory = (categories) => core_1.createRequest(this.api, "POST", routes_1.routes.backoffice.createIdolCategory)
            .setPayload(categories)
            .setPayloadTransformer((payload) => class_transformer_validator_1.transformAndValidateSync(category_1.CategoryList, payload).categoryList);
        this.searchOrders = (page, size) => core_1.createRequest(this.api, "GET", routes_1.routes.backoffice.searchOrders)
            .setQuery({ page, size });
        this.uploadOrder = (file, orderId) => core_1.createRequest(this.api, "POST", routes_1.routes.backoffice.uploadOrder)
            .setQuery({ orderId })
            .setPayload(file)
            .setPayloadTransformer(payload => {
            const form = new FormData();
            form.append("order", payload);
            return form;
        })
            .setBoundary();
        this.toggleIdolFeatured = (artistId, featured) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.setArtistAsFeatured(artistId))
            .setQuery({ isFeatured: featured });
        this.togglePurchaseStatementApproval = (orderId) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.togglePurchaseStatementApproval(orderId));
        this.togglePurchaseReactionApproval = (orderId) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.togglePurchaseReactionApproval(orderId));
        this.updateCommercialDeal = (artistId, commercialDeal) => core_1.createRequest(this.api, "POST", routes_1.routes.backoffice.updateCommercialDeal)
            .setQuery({ artistId })
            .setPayload(commercialDeal)
            .setPayloadTransformer(payload => {
            const form = new FormData();
            form.append("commercialDealFile", payload);
            return form;
        })
            .setBoundary();
        this.updateCommercialDealStatus = (artistId) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.updateCommercialDealStatus)
            .setQuery({ artistId });
        this.updateCommissions = (commissions) => core_1.createRequest(this.api, "PUT", routes_1.routes.backoffice.updateCommissions)
            .setPayload(commissions)
            .setPayloadTransformer(payload => class_transformer_validator_1.transformAndValidateSync(commissions_1.Commissions, payload, {
            validator: {
                groups: [groups_1.Groups.UPDATE]
            }
        }));
        this.api = api;
    }
}
exports.BackofficeClientModule = BackofficeClientModule;
//# sourceMappingURL=backoffice.js.map