import { AxiosInstance } from "axios";
import { Idol } from "../../domain";
import { IdolClientModule, Result } from "../interface";
import { Category } from "../../domain/idol/category";
export default class implements IdolClientModule {
    private api;
    constructor(api: AxiosInstance);
    get: (id: number) => Promise<Result<Idol>>;
    getByAlias: (alias: string) => Promise<Result<Idol>>;
    search: (name: string, category: string, page: number, size: number) => Promise<Result<Idol[]>>;
    getFeatured: (page: number, size: number) => Promise<Result<Idol[]>>;
    getMinicopy: (alias: string) => Promise<Result<string>>;
    getWelcomeVideo: (alias: string) => Promise<Result<any>>;
    getCategories: () => Promise<Result<Category>>;
    uploadOrder: (artistId: number, orderId: number, file: any) => Promise<Result<undefined>>;
}
