import {AxiosInstance} from "axios";
import {FinancialClientModule, Result} from "../interface";
import {Deal} from "../../domain/financial/deal";
import {financial as routes} from "../../routes";
import {transformApiError} from "../transformers";
import * as FormData from "form-data";
import {isNode} from "browser-or-node";

export default class implements FinancialClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    getAllDeals = (token?: string): Promise<Result<Deal[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getAllDeals, {
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getReport = (userId: number, artistId : number, startDate : string, endDate : string, token? : string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getReport, {
                    params : { userId, artistId, startDate, endDate},
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getUsernames = (userId: number, token? : string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getUsernames, {
                    params : { userId },
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }


    removeFile = (commercialDealFileId: number, token? : string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.delete(routes.removeFile, {
                    params : { commercialDealFileId },
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    downloadCommercialDealFile = (commercialDealFileId: number, token? : string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.downloadCommercialDealFile, {
                    responseType: 'arraybuffer',
                    params : { commercialDealFileId },
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    uploadNewCommercialDealFile = (artistId: number, commercialDealFileId : number, filename : string, file : any, token? : string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("filename", filename);
                form.append("file", file);
                form.append("artistId", artistId);
                form.append("commercialDealFileId", commercialDealFileId);

                const {data, headers} = await this.api.post(routes.uploadNewCommercialDealFile, form, {
                    headers: {
                        "Authorization": token || "",
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

}
