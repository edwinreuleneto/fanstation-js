import {AxiosInstance} from "axios";
import {transformAndValidateSync as validate} from "class-transformer-validator";
import {user as routes} from "../../routes";
import {User} from "../../domain";
import {Authentication, Result, UserClientModule} from "../interface";
import {transformApiError, transformValidationError} from "../transformers";

export default class implements UserClientModule {

    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    create = (user: User): Promise<Result<User>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(User, user);
                const {data, headers} = await this.api.post(routes.create, validated);
                resolve({
                    ok: true,
                    headers,
                    data
                });
            } catch (e) {
                if(e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        });
    };

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
                    headers: {"Authorization": token}
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

    update = (user: User, token?: string): Promise<Result<User>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const validated = validate(User, user);
                const {data, headers} = await this.api.put(routes.update, validated, {
                    headers: {"Authorization": token || ""}
                });
                resolve({
                    ok: true,
                    headers,
                    data
                });
            } catch (e) {
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        });
    }
}
