import { Config } from "../config";
import { AxiosInstance, Method } from "axios";
import { default as LegacyClient } from "../client";
import { IdolClientModule } from "./idol";
import { BackofficeClientModule } from "./backoffice";
import { FailureInterface, ViolationInterface } from "../values";
import { AuthClientModule } from "./auth";
import { FinancialClientModule } from "./financial";
import { LegalClientModule } from "./legal";
export * from "./core";
export default class Client {
    static i18n: {
        violation: ViolationInterface;
        failure: FailureInterface;
    };
    readonly config: Config;
    readonly api: AxiosInstance;
    readonly auth: AuthClientModule;
    readonly idol: IdolClientModule;
    readonly backoffice: BackofficeClientModule;
    readonly financial: FinancialClientModule;
    readonly legal: LegalClientModule;
    private constructor();
    static applyI18n(violation: ViolationInterface, failure: FailureInterface): object;
    static init(config?: Config): Client | LegacyClient;
    getAxiosInstance(): AxiosInstance;
    createRequest(method: Method, route: string): import("./core").ApiRequestConfiguration<any>;
}
