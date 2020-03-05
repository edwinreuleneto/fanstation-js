import {Config} from "../config";
import axios, {AxiosInstance, Method} from "axios";

import {default as LegacyClient} from "../client";

import {IdolClientModule} from "./idol";
import {BackofficeClientModule} from "./backoffice";

import {FailureInterface, ViolationInterface} from "../values";
import {createRequest} from "./core";
import {AuthClientModule} from "./auth";
import {FinancialClientModule} from "./financial";
import {LegalClientModule} from "./legal";

export * from "./core";

export default class Client {

    static i18n: { violation: ViolationInterface, failure: FailureInterface };

    readonly config: Config;
    readonly api: AxiosInstance;

    readonly auth: AuthClientModule;
    readonly idol: IdolClientModule;
    readonly backoffice: BackofficeClientModule;
    readonly financial: FinancialClientModule;
    readonly legal: LegalClientModule;

    private constructor(config: Config, api: AxiosInstance) {
        this.config = config;
        this.api = api;

        this.auth = new AuthClientModule(api);
        this.idol = new IdolClientModule(api);
        this.backoffice = new BackofficeClientModule(api);
        this.financial = new FinancialClientModule(api);
        this.legal = new LegalClientModule(api);
    }

    static applyI18n(violation: ViolationInterface, failure: FailureInterface): object {
        Client.i18n = {violation, failure};
        return {init: Client.init};
    }

    static init(
        config: Config = {
            locale: "EN_US",
            env: "development",
            legacy: false,
        }): Client | LegacyClient {

        if(config.legacy) return LegacyClient.init(config);

        const api = axios.create({
            baseURL: config.url || process.env.REACT_APP_URL_API,
            timeout: 15000,
            validateStatus: (status) => status === 200
        });

        console.log(config.url, api.defaults.baseURL);

        return new Client(config, api);
    }

    getAxiosInstance() {
        return this.api;
    }

    createRequest(method: Method, route: string) {
        return createRequest(this.api, method, route);
    }
}
