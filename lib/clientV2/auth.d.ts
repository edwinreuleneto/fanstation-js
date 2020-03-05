import { AxiosInstance } from "axios";
import { ApiRequestConfiguration } from "./core";
export declare class AuthClientModule {
    private readonly api;
    constructor(api: AxiosInstance);
    mobile: (realm: string, phone: string, code?: string) => ApiRequestConfiguration<undefined>;
    authenticate: (realm: string, login: string, password: string) => ApiRequestConfiguration<undefined>;
    logout: (authType: string, realm: string) => ApiRequestConfiguration<undefined>;
}
