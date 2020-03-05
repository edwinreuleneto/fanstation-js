import {AxiosInstance} from "axios";
import {routes} from "./routes";
import {Idol} from "../domain";
import {Category} from "../domain/idol/category";
import * as FormData from "form-data";
import {ApiRequestConfiguration, createRequest} from "./core";

export class FinancialClientModule {

    private readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    getFinancialReports = (startDate: string, endDate: string) =>
        createRequest(this.api, "GET", "/financial/artist-report")
            .setQuery({startDate, endDate});

}

