import {AxiosInstance} from "axios";
import {AuthClientModule, Result} from "../interface";
import {auth as routes} from "../../routes";
import {transformApiError} from "../transformers";

export default class implements AuthClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    asBackoffice(login: string, password: string): Promise<Result<any>> {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await this.api.post(routes.agency, null, {
                    headers: {"Authorization": `Basic ${btoa(login + ":" + password)}`}
                });
                resolve({ok: true, headers, data});
            } catch (e) {
                reject(transformApiError(e));
            }
        });
    }


}
