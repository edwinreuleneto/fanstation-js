import {AdministrativeClientModule, AgencyClientModule, Result} from "../interface";
import {AxiosInstance} from "axios";
import {transformApiError, transformValidationError} from "../transformers";
import {administrative as routes} from "../../routes";
import {Term} from "../../domain/admin/term";
import {transformAndValidateSync as validate} from "class-transformer-validator";

export default class implements AdministrativeClientModule {

    readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    getTermOfUse = (): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.termOfUse);
                resolve({
                    ok: true,
                    data,
                    headers
                });
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getUseOfImageTerm = (): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.useOfImage);
                resolve({
                    ok: true,
                    data,
                    headers
                });
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getLatestUseOfImageTerm = (): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.latestUseOfImage);
                resolve({
                    ok: true,
                    data,
                    headers
                });
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getPrivacyPolicy = (): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.privacyPolicy);
                resolve({
                    ok: true,
                    data,
                    headers
                });
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    getPurchaseTerm = (): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.purchaseTerm);
                resolve({
                    ok: true,
                    data,
                    headers
                });
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    }

    saveTermOfUse = (term: Term, token?: string): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Term, term);
                const {data, headers} = await this.api.post(routes.termOfUse, validated, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch (e) {
                if(e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e))
            }
        })
    }

    savePrivacyPolicy = (term: Term, token?: string): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Term, term);
                const {data, headers} = await this.api.post(routes.privacyPolicy, validated, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch (e) {
                if(e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e))
            }
        })
    }

    savePurchaseTerm = (term: Term, token?: string): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Term, term);
                const {data, headers} = await this.api.post(routes.purchaseTerm, validated, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch (e) {
                if(e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e))
            }
        })
    }


    saveUseOfImageTerm = (term: Term, token?: string): Promise<Result<Term>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Term, term);
                const {data, headers} = await this.api.post(routes.useOfImage, validated, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch (e) {
                if(e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e))
            }
        })
    }
}
