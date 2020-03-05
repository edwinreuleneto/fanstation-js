import {AxiosInstance} from "axios";
import {isNode} from "browser-or-node";
import {idol as routes} from "../../routes";
import {Idol} from "../../domain";
import {IdolClientModule, Result} from "../interface";
import {jsonToFormData, transformApiError, transformValidationError} from "../transformers";
import {Category} from "../../domain/idol/category";
import {transformAndValidateSync as validate} from "class-transformer-validator";
import {Groups} from "../../utils/validators/groups";
import * as FormData from "form-data";

export default class implements IdolClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    get = (id: number): Promise<Result<Idol>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.get(id));
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e));
            }
        })
    };

    getByAlias = (alias: string): Promise<Result<Idol>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getByAlias(alias));
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    search = (name: string, category: string, page: number, size: number): Promise<Result<Idol[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.search, {
                    params: {name, category, page, size}
                });
                resolve({ok: true, headers, data});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    getFeatured = (page: number, size: number): Promise<Result<Idol[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getFeatured, {
                    params: {page, size}
                });
                resolve({ok: true, headers, data});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    getMinicopy = (alias: string): Promise<Result<string>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getMinicopy(alias));
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    getWelcomeVideo = (alias: string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getWelcomeVideo(alias));
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    getCategories = (): Promise<Result<Category>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getAllCategories);
                resolve({ok: true, data, headers})
            } catch (e) {
                reject(transformApiError(e));
            }
        })
    };

    uploadOrder = (artistId: number, orderId: number, file: any): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("order", file);
                const {data, headers} = await this.api.post(routes.uploadOrder, form, {
                    params: { artistId, orderId },
                    headers: {
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({ok: true, headers, data})
            } catch (e) {
                console.log(e)
                reject(transformApiError(e));
            }
        });
    }
}
