import { AxiosInstance } from "axios";
import { ApiRequestConfiguration } from "./core";
import { Agency, ExperienceType, Idol, Order } from "../domain";
import { DealFile } from "../domain/financial/dealFile";
import { Commissions } from "../domain/financial/commissions";
import { CategoryList } from "../domain/idol/category";
export declare class BackofficeClientModule {
    private readonly api;
    constructor(api: AxiosInstance);
    get: () => ApiRequestConfiguration<Agency>;
    getIdol: (artistId: number) => ApiRequestConfiguration<Idol>;
    getIdols: (name: string, category: string, page: number, size: number) => ApiRequestConfiguration<Idol[]>;
    uploadWelcomeVideo: (artistId: number, video: any) => ApiRequestConfiguration<undefined>;
    uploadMinicopy: (artistId: number, experienceType: ExperienceType, minicopy: any) => ApiRequestConfiguration<undefined>;
    createIdol: (idol: Idol) => ApiRequestConfiguration<Idol>;
    updateIdol: (idol: Idol) => ApiRequestConfiguration<Idol>;
    createIdolCategory: (categories: CategoryList) => ApiRequestConfiguration<CategoryList>;
    searchOrders: (page: number, size: number) => ApiRequestConfiguration<Order>;
    uploadOrder: (file: any, orderId: number) => ApiRequestConfiguration<undefined>;
    toggleIdolFeatured: (artistId: number, featured: boolean) => ApiRequestConfiguration<undefined>;
    togglePurchaseStatementApproval: (orderId: number) => ApiRequestConfiguration<undefined>;
    togglePurchaseReactionApproval: (orderId: number) => ApiRequestConfiguration<undefined>;
    updateCommercialDeal: (artistId: number, commercialDeal: any) => ApiRequestConfiguration<DealFile>;
    updateCommercialDealStatus: (artistId: number) => ApiRequestConfiguration<DealFile>;
    updateCommissions: (commissions: Commissions) => ApiRequestConfiguration<any>;
}
