import { AxiosInstance } from "axios";
import { ApiRequestConfiguration } from "./core";
export declare class LegalClientModule {
    private readonly api;
    constructor(api: AxiosInstance);
    getLatestUseOfImageTerm: () => ApiRequestConfiguration<any>;
    getUseOfImageTermStatus: () => ApiRequestConfiguration<string>;
    toggleUseOfImageTermStatus: () => ApiRequestConfiguration<undefined>;
}
