import { AxiosInstance } from "axios";
import { Idol } from "../domain";
import { Category } from "../domain/idol/category";
import { ApiRequestConfiguration } from "./core";
export declare class IdolClientModule {
    private readonly api;
    constructor(api: AxiosInstance);
    getIdolProfile: () => ApiRequestConfiguration<Idol>;
    getDetailedCategories: (page: number, size: number, sortBy: string) => ApiRequestConfiguration<any>;
    get: (id: number) => ApiRequestConfiguration<Idol>;
    getByAlias: (alias: string) => ApiRequestConfiguration<Idol>;
    getMinicopy: (alias: string) => ApiRequestConfiguration<string>;
    getWelcomeVideo: (alias: string) => ApiRequestConfiguration<any>;
    getCategories: () => ApiRequestConfiguration<Category>;
    getFeatured: (page: number, size: number) => ApiRequestConfiguration<Idol[]>;
    search: (name: string, category: string, page: number, size: number) => ApiRequestConfiguration<Idol[]>;
    uploadOrder: (orderId: number, file: any) => ApiRequestConfiguration<undefined>;
}
