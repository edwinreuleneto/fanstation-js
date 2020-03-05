import {AxiosInstance} from "axios";
import {routes} from "./routes";
import {Idol} from "../domain";
import {Category} from "../domain/idol/category";
import * as FormData from "form-data";
import {ApiRequestConfiguration, createRequest} from "./core";

export class IdolClientModule {

    private readonly api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    getIdolProfile = (): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "GET", "/artists/informations");

    getDetailedCategories = (page: number, size: number, sortBy: string): ApiRequestConfiguration<any> =>
        createRequest(this.api, "GET", routes.idol.searchCategories)
            .setQuery({page, size, sortBy});

    get = (id: number): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "GET", routes.idol.get(id));

    getByAlias = (alias: string): ApiRequestConfiguration<Idol> =>
        createRequest(this.api, "GET", routes.idol.getByAlias(alias))
            .unsigned();

    getMinicopy = (alias: string): ApiRequestConfiguration<string> =>
        createRequest(this.api, "GET", routes.idol.getMinicopy(alias))
            .unsigned();

    getWelcomeVideo = (alias: string): ApiRequestConfiguration<any> =>
        createRequest(this.api, "GET", routes.idol.getWelcomeVideo(alias))
            .unsigned();

    getCategories = (): ApiRequestConfiguration<Category> =>
        createRequest(this.api, "GET", routes.idol.getAllCategories)
            .unsigned();

    getFeatured = (page: number, size: number): ApiRequestConfiguration<Idol[]> =>
        createRequest(this.api, "GET", routes.idol.getFeatured)
            .setQuery({page, size})
            .unsigned();

    search = (name: string, category: string, page: number, size: number): ApiRequestConfiguration<Idol[]> =>
        createRequest(this.api, "GET", routes.idol.search)
            .setQuery({name, category, page, size})
            .unsigned();

    uploadOrder = (orderId: number, file: any): ApiRequestConfiguration<undefined> =>
        createRequest(this.api, "POST", routes.idol.uploadOrder)
            .setQuery({orderId})
            .setPayload(file)
            .setPayloadTransformer(payload => {
                const form = new FormData();
                form.append("order", payload);
                return form;
            })
            .setBoundary();
}

