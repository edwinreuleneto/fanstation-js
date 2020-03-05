import {AxiosInstance} from "axios";
import {ApiRequestConfiguration, createRequest} from "./core";

export class LegalClientModule {

    private readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    getLatestUseOfImageTerm = (): ApiRequestConfiguration<any> =>
        createRequest(this.api, "GET", "/term_of_use_image/latest")
            .unsigned();

    getUseOfImageTermStatus = (): ApiRequestConfiguration<string> =>
        createRequest(this.api,"GET", "/financial/use-of-image-deal-status");

    toggleUseOfImageTermStatus = (): ApiRequestConfiguration<undefined> =>
        createRequest(this.api,"PUT", "/financial/use-of-image-deal-status");


}

