import { AxiosInstance } from "axios";
import { ApiRequestConfiguration } from "./core";
export declare class FinancialClientModule {
    private readonly api;
    constructor(api: AxiosInstance);
    getFinancialReports: (startDate: string, endDate: string) => ApiRequestConfiguration<any>;
}
