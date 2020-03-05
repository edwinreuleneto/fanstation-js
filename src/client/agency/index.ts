import {AxiosInstance} from "axios";

import {agency as routes} from "../../routes";
import {Idol, Agency, Order, ExperienceType} from "../../domain";
import {AgencyClientModule, Authentication, Result} from "../interface";
import {jsonToFormData, transformApiError, transformValidationError} from "../transformers";

import * as FormData from "form-data";
import {CategoryList} from "../../domain/idol/category";
import {DealFile} from "../../domain/financial/dealFile";
import {Commissions} from "../../domain/financial/commissions";
import {isNode} from "browser-or-node";
import {transformAndValidateSync as validate} from "class-transformer-validator";
import {Groups} from "../../utils/validators/groups";

export default class implements AgencyClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    authenticate = (login: string, password: string): Promise<Result<Authentication>> => {
        return new Promise(async (resolve, reject) => {
            try {
                // const form = new FormData();
                // form.append("grant_type", "password");
                // form.append("response_type", "token");
                // form.append("client_id", "artists-service");
                const {data, headers} = await this.api.post(routes.authenticate, {email: login, password}, {
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
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    logout = (token: string): Promise<Result<null>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.delete(routes.logout, {
                    headers: {
                        "Authorization": token
                    }
                });
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch (e) {
                reject(transformApiError(e));
            }
        })
    };

    get = (token?: string[]): Promise<Result<Agency>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.get, {
                    headers: {"Authorization": token || ""},
                });
                resolve({ok: true, data, headers})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    create = (agency: Agency): Promise<Result<Agency>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Agency, agency,  {
                    validator: {groups: [Groups.CREATE]}
                });
                const {headers, data} = await this.api.post(routes.create, validated);
                resolve({ok: true, headers, data})
            } catch (e) {
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        })
    };

    update = (agency: Agency, token?: string): Promise<Result<Agency>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(Agency, agency,  {
                    validator: {groups: [Groups.UPDATE]}
                });
                const {data, headers} = await this.api.put(routes.update, validated, {
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, headers, data})
            } catch (e) {
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        });
    };

    savePicture = (file: any, token?: string): Promise<Result<Agency>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("picture", file);
                const {data, headers} = await this.api.put(routes.savePicture, form, {
                    headers: {
                        "Authorization": token || "",
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({ok: true, headers, data})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    getPicture = (pictureId: number, token?: string): Promise<Result<Int8Array>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getPicture(pictureId), {
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    confirmRegistration = (token: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.post(routes.confirmRegistration, token);
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    };

    requestResetPassword = (email: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.post(routes.requestResetPassword, null, {
                    params: {email}
                });
                resolve({ok: true, data, headers})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    resetPassword = (token: string, newPassword: string): Promise<Result<string>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.post(routes.resetPassword, {
                    token,
                    newPassword
                });
                resolve({ok: true, data, headers})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    verifyToken = (token: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.post(routes.verifyToken, token);
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    };

    getIdol = (artistId: number, token?: string): Promise<Result<Idol>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getIdol(artistId), {
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    };

    getIdols = (name: string, category: string, page: number, size: number, token?: string): Promise<Result<Idol[]>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.getIdols, {
                    params: {name, category, page, size},
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        });
    };

    uploadWelcomeVideo = (artistId: number, video: any, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("welcomeVideo", video);
                const {data, headers} = await this.api.put(routes.uploadWelcomeVideo(artistId), form, {
                    headers: {
                        "Authorization": token || "",
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({ok: true, headers, data})
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    uploadMinicopy = (artistId: number, experienceType: ExperienceType, minicopy: any, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("experienceType", experienceType);
                form.append("minicopy", minicopy);
                const {data, headers} = await this.api.post(routes.uploadMinicopy(artistId), form, {
                    headers: {
                        "Authorization": token || "",
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({ ok: true, data, headers })
            } catch(e) {
                reject(transformApiError(e))
            }
        })
    };

    createIdol = (idol: Idol, token?: string): Promise<Result<Idol>> => {
        return new Promise(async (resolve, reject) => {
                try {
                    const validated = validate(Idol, idol,  {
                        validator: {groups: [Groups.CREATE]}
                    });
                    const form = jsonToFormData(validated);
                    const {data, headers} = await this.api.post(routes.createIdol, form, {
                        headers: {
                            "Authorization": token || "",
                            ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                        }
                    });
                    resolve({ok: true, data, headers});
                } catch (e) {
                    if (e instanceof Array) reject(transformValidationError(e));
                    else reject(transformApiError(e));
                }
            }
        )
    };

    updateIdol = (idol: Idol, token?: string): Promise<Result<Idol>> => {
        return new Promise(async (resolve, reject) => {
                try {
                    const validated = validate(Idol, idol, {
                        validator: {groups: [Groups.UPDATE]}
                    });

                    const form = jsonToFormData(validated);
                    const {data, headers} = await this.api.put(routes.updateIdol, form, {
                        headers: {
                            "Authorization": token || "",
                            ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                        }
                    });
                    resolve({ok: true, data, headers});
                } catch (e) {
                    if (e instanceof Array) reject(transformValidationError(e));
                    else reject(transformApiError(e));
                }
            }
        )
    };


    createIdolCategory = (categories: CategoryList, token?: string): Promise<Result<CategoryList>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(CategoryList, categories);
                const {data, headers} = await this.api.post(routes.createIdolCategory, validated.categoryList, {
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, headers, data});
            } catch (e) {
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e))
            }
        })
    };

    searchOrders = (page: number, size: number, token?: string): Promise<Result<Order>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.get(routes.searchOrders, {
                    params: {page, size},
                    headers: {"Authorization": token || ""}
                });
                resolve({ok: true, data, headers});
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    uploadOrder = (file: any, orderId: number, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append("order", file);
                const {headers} = await this.api.post(routes.uploadOrder, form, {
                    params: {orderId},
                    timeout: 0,
                    headers: {
                        "Authorization": token || "",
                        ...(isNode && {"Content-Type": form.getHeaders()['content-type']})
                    }
                });
                resolve({
                    ok: true,
                    headers,
                    data: undefined
                })
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    };

    toggleIdolFeatured = (artistId: number, featured: boolean, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {headers, data} = await this.api.put(routes.setArtistAsFeatured(artistId),
                    null,
                    {
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
                })
            } catch (e) {
                reject(transformApiError(e))
            }
        })
    };

    togglePurchaseStatementApproval = (orderId: number, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.put(routes.togglePurchaseStatementApproval(orderId), null, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({ok: true, data, headers})
            } catch(e) {
                reject(transformApiError(e))
            }
        })
    };

    togglePurchaseReactionApproval = (orderId: number, token?: string): Promise<Result<undefined>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.put(routes.togglePurchaseReactionApproval(orderId), null, {
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({ok: true, data, headers})
            } catch(e) {
                reject(transformApiError(e))
            }
        })
    };

    updateCommercialDealStatus = (artistId: number, token?: string): Promise<Result<DealFile>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.put(routes.updateCommercialDealStatus, null, {
                    params: {artistId},
                    headers: {
                        "Authorization": token || ""
                    }
                });
                resolve({ok: true, data, headers})
            } catch(e) {
                reject(transformApiError(e))
            }
        })
    };


    updateCommissions = (commissions: Commissions, token?: string): Promise<Result<any>> => {
        return new Promise(async (resolve, reject) => {
                try {
                    const validated = validate(Commissions, commissions, {
                        validator: {groups: [Groups.UPDATE]}
                    });

                    const {data, headers} = await this.api.put(routes.updateCommissions, validated, {
                        headers: {
                            "Authorization": token || "",
                        }
                    });
                    resolve({ok: true, data, headers});
                } catch (e) {
                    if (e instanceof Array) reject(transformValidationError(e));
                    else reject(transformApiError(e));
                }
            }
        )
    }


}
