import {Config} from "../config";
import axios, {AxiosInstance} from "axios";

import {
    AuthClientModule as AuthClientModuleInterface,
    AdministrativeClientModule as AdministrativeClientModuleInterface,
    AgencyClientModule as AgencyClientModuleInterface,
    ExternalClientModule as ExternalClientModuleInterface,
    FinancialClientModule as FinancialClientModuleInterface,
    IdolClientModule as IdolClientModuleInterface,
    OrderClientModule as OrderClientModuleInterface,
    Signable,
    UserClientModule as UserClientModuleInterface
} from "./interface";

import AuthClientModule from "./auth";
import AdministrativeClientModule from "./admin";
import UserClientModule from "./user";
import IdolClientModule from "./idol";
import AgencyClientModule from "./agency";
import OrderClientModule from "./order";
import ExternalClientModule from "./external";
import FinancialClientModule from "./financial";

import {FailureInterface, ViolationInterface} from "../values";

export default class Client {

    static i18n: { violation: ViolationInterface, failure: FailureInterface };

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

    private constructor(
        config: Config,
        api: AxiosInstance) {
        this.config = config;
        this.api = api;

        this.auth = new AuthClientModule(api);
        this.admin = new AdministrativeClientModule(api);
        this.user = new UserClientModule(api);
        this.idol = new IdolClientModule(api);
        this.agency = new AgencyClientModule(api);
        this.order = new OrderClientModule(api);
        this.financial = new FinancialClientModule(api);
        this.external = new ExternalClientModule();
    }

    static applyI18n(violation: ViolationInterface, failure: FailureInterface): object {
        Client.i18n = {violation, failure};
        return {init: Client.init};
    }

    static init(
        config: Config = {
            locale: "EN_US",
        }): Client {

        const api = axios.create({
            baseURL: process.env.REACT_APP_URL_API,
            timeout: 15000,
            validateStatus: (status) => status === 200
        });

        return new Client(config, api);
    }

    getAxiosInstance() {
        return this.api;
    }

    _asSigned<T>(token: string, module: Signable<T>) {
        return Object.keys(module).reduce((acc, key) => {
            if (typeof module[key] === "function") {
                acc[key] = (...args) => module[key](...args, token);
                return acc;
            }
        }, {}) as T
    }

    signed(token: string): {
        agency: AgencyClientModuleInterface,
        user: UserClientModuleInterface,
        admin: AdministrativeClientModuleInterface,
        financial: FinancialClientModuleInterface
    } {
        return {
            agency: this._asSigned<AgencyClientModuleInterface>(token, this.agency),
            user: this._asSigned<UserClientModuleInterface>(token, this.user),
            admin: this._asSigned<AdministrativeClientModuleInterface>(token, this.admin),
            financial: this._asSigned<FinancialClientModuleInterface>(token, this.financial)
        }
    }
}
