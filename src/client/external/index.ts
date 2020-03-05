import axios from "axios";

import {ExternalClientModule, Result} from "../interface";
import {Failure} from "../../values";
import {Address} from "../../domain";

export default class implements ExternalClientModule {

    getBrazilianStates(): Promise<Result<string[]>> {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await axios.request(
                    {
                        method: "GET",
                        baseURL: "http://ddd.pricez.com.br",
                        url: "/estados.json"
                    }
                );
                resolve({
                    ok: true,
                    headers,
                    data: data.payload
                });
            } catch (e) {
                reject({
                    ok: false,
                    data: {
                        code: Failure.CONNECTION_FAILURE,
                        fault: "getBrazilianStates"
                    }
                })
            }
        })
    }

    searchCEP(postalCode: string): Promise<Result<Address>> {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await axios.request(
                    {
                        method: "GET",
                        baseURL: "https://viacep.com.br",
                        url: `ws/${postalCode.replace(/\D/g, "")}/json`
                    }
                );
                resolve({
                    ok: true,
                    headers,
                    data: {
                        cityName: data["localidade"],
                        country: "br",
                        neighborhood: data["bairro"],
                        region: data["uf"],
                        streetAddress: data["logradouro"],
                    }
                });
            } catch (e) {
                reject({
                    ok: false,
                    data: {
                        code: Failure.CONNECTION_FAILURE,
                        fault: "getBrazilianStates"
                    }
                })
            }
        })
    }

    getMinicopy = (): Promise<Result<string>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const {data, headers} = await axios.request(
                    {
                        method: "GET",
                        baseURL: "https://fanstation-media-public.s3-sa-east-1.amazonaws.com",
                        url: `minicopy/teste/index.html`
                    }
                );
                resolve({
                    ok: true,
                    data,
                    headers
                })
            } catch(e) {
                console.log(e);
            }
        })
    }
}