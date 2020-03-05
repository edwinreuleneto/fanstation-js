import {AxiosInstance} from "axios";
import * as FormData from "form-data";
import {transformAndValidateSync as validate} from "class-transformer-validator";

import {routes} from "./routes";
import {ApiRequestConfiguration, createRequest} from "./core";
import {Agency, ExperienceType, Idol, Order} from "../domain";
import {jsonToFormData} from "./transformers";
import {DealFile} from "../domain/financial/dealFile";
import {Commissions} from "../domain/financial/commissions";
import {Groups} from "../utils/validators/groups";
import {CategoryList} from "../domain/idol/category";

export class BackofficeClientModule {

    private readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

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

    get = (): ApiRequestConfiguration<Agency> =>
        createRequest(this.api, "GET", routes.backoffice.get);

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

    getIdol = (artistId: number): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "GET", routes.backoffice.getIdol(artistId));

    getIdols = (name: string, category: string, page: number, size: number): ApiRequestConfiguration<Idol[]> =>
        createRequest(this.api, "GET", routes.backoffice.getIdols)
            .setQuery({name, category, page, size});

    uploadWelcomeVideo = (artistId: number, video: any): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "PUT", routes.backoffice.uploadWelcomeVideo(artistId))
            .setPayload(video)
            .setPayloadTransformer(payload => {
                const form = new FormData();
                form.append("welcomeVideo", payload);
                return form;
            })
            .setBoundary();


    uploadMinicopy = (artistId: number, experienceType: ExperienceType, minicopy: any): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "POST", routes.backoffice.uploadMinicopy(artistId))
            .setPayload({experienceType, minicopy})
            .setPayloadTransformer(({experienceType, minicopy}) => {
                const form = new FormData();
                form.append("experienceType", experienceType);
                form.append("minicopy", minicopy);
                return form;
            })
            .setBoundary();

    createIdol = (idol: Idol): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "POST", routes.backoffice.createIdol)
            .setPayload(idol)
            .setPayloadTransformer(payload => {
                const validated = validate(Idol, payload, {
                    validator: {groups: [Groups.CREATE]}
                });
                return jsonToFormData(validated);
            })
            .setBoundary();

    updateIdol = (idol: Idol): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "PUT", routes.backoffice.updateIdol)
            .setPayload(idol)
            .setPayloadTransformer(payload => {
                const validated = validate(Idol, payload, {
                    validator: {groups: [Groups.UPDATE]}
                });
                return jsonToFormData(validated);
            })
            .setBoundary();

    createIdolCategory = (categories: CategoryList): ApiRequestConfiguration<CategoryList> =>
        createRequest(this.api, "POST", routes.backoffice.createIdolCategory)
            .setPayload(categories)
            .setPayloadTransformer((payload: CategoryList) => validate(CategoryList, payload).categoryList);

    searchOrders = (page: number, size: number): ApiRequestConfiguration<Order> =>
        createRequest(this.api, "GET", routes.backoffice.searchOrders)
            .setQuery({page, size});

    uploadOrder = (file: any, orderId: number): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "POST", routes.backoffice.uploadOrder)
            .setQuery({orderId})
            .setPayload(file)
            .setPayloadTransformer(payload => {
                const form = new FormData();
                form.append("order", payload);
                return form;
            })
            .setBoundary();

    toggleIdolFeatured = (artistId: number, featured: boolean): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "PUT", routes.backoffice.setArtistAsFeatured(artistId))
            .setQuery({isFeatured: featured});

    togglePurchaseStatementApproval = (orderId: number): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "PUT", routes.backoffice.togglePurchaseStatementApproval(orderId));

    togglePurchaseReactionApproval = (orderId: number): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "PUT", routes.backoffice.togglePurchaseReactionApproval(orderId));

    updateCommercialDeal = (artistId: number, commercialDeal: any): ApiRequestConfiguration<DealFile> =>
        createRequest(this.api, "POST", routes.backoffice.updateCommercialDeal)
            .setQuery({artistId})
            .setPayload(commercialDeal)
            .setPayloadTransformer(payload => {
                const form = new FormData();
                form.append("commercialDealFile", payload);
                return form;
            })
            .setBoundary();

    updateCommercialDealStatus = (artistId: number): ApiRequestConfiguration<DealFile> =>
        createRequest(this.api, "PUT", routes.backoffice.updateCommercialDealStatus)
            .setQuery({artistId});

    updateCommissions = (commissions: Commissions): ApiRequestConfiguration<any> =>
        createRequest(this.api, "PUT", routes.backoffice.updateCommissions)
            .setPayload(commissions)
            .setPayloadTransformer(payload => validate(Commissions, payload, {
                validator: {
                    groups: [Groups.UPDATE]
                }
            }));

}
