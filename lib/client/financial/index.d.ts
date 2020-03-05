import { AxiosInstance } from "axios";
import { FinancialClientModule, Result } from "../interface";
import { Deal } from "../../domain/financial/deal";
export default class implements FinancialClientModule {
    private api;
    constructor(api: AxiosInstance);
    getAllDeals: (token?: string) => Promise<Result<Deal[]>>;
    getReport: (userId: number, artistId: number, startDate: string, endDate: string, token?: string) => Promise<Result<any>>;
    getUsernames: (userId: number, token?: string) => Promise<Result<any>>;
    removeFile: (commercialDealFileId: number, token?: string) => Promise<Result<any>>;
    downloadCommercialDealFile: (commercialDealFileId: number, token?: string) => Promise<Result<any>>;
    uploadNewCommercialDealFile: (artistId: number, commercialDealFileId: number, filename: string, file: any, token?: string) => Promise<Result<any>>;
}
