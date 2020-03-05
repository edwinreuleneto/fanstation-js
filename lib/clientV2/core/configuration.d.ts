import { AxiosInstance, AxiosRequestConfig, Method } from "axios";
export interface Result<T> {
    ok: boolean;
    headers?: any;
    data: T;
}
export interface Failure {
    code: string;
    message?: string;
    fault: string;
}
export declare class ApiRequestConfiguration<T = any> {
    readonly api: AxiosInstance;
    readonly method: Method;
    readonly route: string;
    private _headers?;
    private _queryParams?;
    private _configuration?;
    private _payload?;
    private _payloadTransformer?;
    private _signed?;
    constructor(api: AxiosInstance, method: Method, route: string);
    setHeaders(headers: any): ApiRequestConfiguration<T>;
    setHttpBasicAuth(login: string, password: string): ApiRequestConfiguration<T>;
    setQuery(queryParams: object): ApiRequestConfiguration<T>;
    setConfiguration(configuration: AxiosRequestConfig): ApiRequestConfiguration<T>;
    setPayload(payload: any): ApiRequestConfiguration<T>;
    setPayloadTransformer(payloadTransformer: (payload: any) => any): this;
    setBoundary(): ApiRequestConfiguration<T>;
    signed(): ApiRequestConfiguration<T>;
    unsigned(): ApiRequestConfiguration<T>;
    sign(token: string): ApiRequestConfiguration<T>;
    readonly execute: () => Promise<Result<T>>;
}
export declare const createRequest: (api: AxiosInstance, method: Method, route: string) => ApiRequestConfiguration<any>;
