import { Config } from "../config";
import { AxiosInstance } from "axios";
import { AuthClientModule as AuthClientModuleInterface, AdministrativeClientModule as AdministrativeClientModuleInterface, AgencyClientModule as AgencyClientModuleInterface, ExternalClientModule as ExternalClientModuleInterface, FinancialClientModule as FinancialClientModuleInterface, IdolClientModule as IdolClientModuleInterface, OrderClientModule as OrderClientModuleInterface, Signable, UserClientModule as UserClientModuleInterface } from "./interface";
import { FailureInterface, ViolationInterface } from "../values";
export default class Client {
    static i18n: {
        violation: ViolationInterface;
        failure: FailureInterface;
    };
    readonly config: Config;
    readonly api: AxiosInstance;
    readonly auth: AuthClientModuleInterface;
    readonly admin: AdministrativeClientModuleInterface;
    readonly user: UserClientModuleInterface;
    readonly idol: IdolClientModuleInterface;
    readonly agency: AgencyClientModuleInterface;
    readonly order: OrderClientModuleInterface;
    readonly external: ExternalClientModuleInterface;
    readonly financial: FinancialClientModuleInterface;
    private constructor();
    static applyI18n(violation: ViolationInterface, failure: FailureInterface): object;
    static init(config?: Config): Client;
    getAxiosInstance(): AxiosInstance;
    _asSigned<T>(token: string, module: Signable<T>): T;
    signed(token: string): {
        agency: AgencyClientModuleInterface;
        user: UserClientModuleInterface;
        admin: AdministrativeClientModuleInterface;
        financial: FinancialClientModuleInterface;
    };
}
