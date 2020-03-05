import {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from "axios";
import {transformApiError, transformValidationError} from "../transformers";
import {isNode} from "browser-or-node";

export interface Result<T> {
    ok: boolean,
    headers?: any,
    data: T
}

export interface Failure {
    code: string;
    message?: string;
    fault: string;
}

export class ApiRequestConfiguration<T = any> {
    readonly api: AxiosInstance;
    readonly method: Method;
    readonly route: string;
    private _headers?: any = {};
    private _queryParams?: object = {};
    private _configuration?: AxiosRequestConfig = {};
    private _payload?: any = null;
    private _payloadTransformer?: (payload: any) => any = (payload: any) => payload;
    private _signed?: boolean = true;

    constructor(
        api: AxiosInstance,
        method: Method,
        route: string
    ) {
        this.api = api;
        this.method = method;
        this.route = route;
    }

    setHeaders(headers: any): ApiRequestConfiguration<T> {
        this._headers = headers;
        return this;
    }

    setHttpBasicAuth(login: string, password: string): ApiRequestConfiguration<T> {
        this._headers["Authorization"] = btoa(`Basic ${btoa(login + ":" + password)}`);
        return this;
    }

    setQuery(queryParams: object): ApiRequestConfiguration<T> {
        this._queryParams = queryParams;
        return this;
    }

    setConfiguration(configuration: AxiosRequestConfig): ApiRequestConfiguration<T> {
        this._configuration = configuration;
        return this;
    }

    setPayload(payload: any): ApiRequestConfiguration<T> {
        this._payload = payload;
        return this;
    }

    setPayloadTransformer(payloadTransformer: (payload: any) => any) {
        this._payloadTransformer = payloadTransformer;
        return this;
    }

    setBoundary(): ApiRequestConfiguration<T> {
        if (!this._payload) throw new Error("Payload is undefined");
        if (!this._payload.getHeaders) throw Error("Payload is is not FormData");
        if (!isNode) return this;
        this._headers["Content-Type"] = this._payload.getHeaders()['content-type'];
        return this;
    }

    signed(): ApiRequestConfiguration<T> {
        this._signed = true;
        return this;
    }

    unsigned(): ApiRequestConfiguration<T> {
        this._signed = false;
        return this;
    }

    sign(token: string): ApiRequestConfiguration<T> {
        this._headers["Authorization"] = token;
        return this;
    }

    readonly execute = (): Promise<Result<T>> => {
        if (isNode && this._payload && this._payload.getHeaders && !this._headers["Content-Type"].includes("boundary"))
            throw new Error("multipart/form-data boundary not set. Please, consider using .setBoundary() in your ApiRequestConfiguration.");

        if (this._signed && !this._headers["Authorization"])
            throw new Error("This ApiRequestConfiguration is marked as signed. Consider using .unsigned() if your intention is to make an unsigned request.");

        const axiosRequest: (...args) => Promise<AxiosResponse> = this.api[this.method.toLowerCase()];
        return new Promise(async (resolve, reject) => {
            try {
                const payload = this._payloadTransformer(this._payload);

                const args = ["POST", "PUT"].includes(this.method) ? [
                    this.route, payload, {
                        headers: this._headers,
                        params: this._queryParams,
                        ...this._configuration
                    }] : [
                    this.route, {
                        headers: this._headers,
                        params: this._queryParams,
                        ...this._configuration
                    }];

                const {data, headers} = await axiosRequest(...args);
                resolve({ok: true, data, headers})
            } catch (e) {
                console.log("FanstationJS", e);
                if (e instanceof Array) reject(transformValidationError(e));
                reject(transformApiError(e));
            }
        })
    }
}

export const createRequest = (api: AxiosInstance, method: Method, route: string): ApiRequestConfiguration => new ApiRequestConfiguration(api, method, route);
