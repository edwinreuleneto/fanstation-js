import {AxiosInstance} from "axios";

import {OrderClientModule, Result} from "../interface";
import {transformApiError, transformValidationError} from "../transformers";
import {CelebrationReason, CelebrationReasonList, Order, User} from "../../domain";
import {order as routes} from "../../routes";

import {transformAndValidateSync as validate} from "class-transformer-validator";

export default class implements OrderClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    signed = (token): OrderClientModule => {
        return Object.keys(this).reduce((acc, key) => {
            if (typeof this[key] === "function") {
                acc[key] = (...args) => this[key](...args, token);
                return acc;
            }
        }, {}) as OrderClientModule
    };

    createCelebrationReason = (celebrationReasons: CelebrationReasonList, token?: string): Promise<Result<CelebrationReason[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(CelebrationReasonList, celebrationReasons);
                const {data, headers} = await this.api.post(routes.createCelebrationReason, validated.celebrationReasons, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        })
    };

    getCelebrationReasons = (): Promise<Result<CelebrationReason[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getCelebrationReasons);
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    };

    getOrderDownload = (nonce: string, purchaseId: number, userId: number): Promise<Result<Int8Array>> => {
        throw new Error("Method not implemented.");
    };

    getDownloadNonce = (purchaseId: number, userId: number, token?: string): Promise<Result<string>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {headers, data} = await this.api.get(routes.getDownloadNonce, {
                    params: {purchaseId, userId},
                    headers: {"Authorization": token || ""}
                });
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    getOrdersByUser = (userId: number, token?: string): Promise<Result<Order[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getOrdersByUser, {
                    params: {userId},
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    getAllReactions = (page: number, size: number): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getAllReactions, {
                    params: {page, size}
                });
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    getAllStatements = (page: number, size: number): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getAllStatements, {
                    params: {page, size}
                });
                resolve({
                    ok: true,
                    headers,
                    data
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    scheduleOrder = (userId: number, order: Order): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };

    scheduleUnregisteredOrder = (experienceId: number, installments: number, order: Order, user: User): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };

    processPurchase = (purchaseId: number, token: string): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };

    evaluateOrder = (userId: number): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };

    getEvaluationsBy = (): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };

    getReactionVideo = (): Promise<Result<any>> => {
        throw new Error("Method not implemented.");
    };
}
