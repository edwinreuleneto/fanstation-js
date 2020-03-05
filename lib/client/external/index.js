"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const values_1 = require("../../values");
class default_1 {
    constructor() {
        this.getMinicopy = () => {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { data, headers } = yield axios_1.default.request({
                        method: "GET",
                        baseURL: "https://fanstation-media-public.s3-sa-east-1.amazonaws.com",
                        url: `minicopy/teste/index.html`
                    });
                    resolve({
                        ok: true,
                        data,
                        headers
                    });
                }
                catch (e) {
                    console.log(e);
                }
            }));
        };
    }
    getBrazilianStates() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, headers } = yield axios_1.default.request({
                    method: "GET",
                    baseURL: "http://ddd.pricez.com.br",
                    url: "/estados.json"
                });
                resolve({
                    ok: true,
                    headers,
                    data: data.payload
                });
            }
            catch (e) {
                reject({
                    ok: false,
                    data: {
                        code: values_1.Failure.CONNECTION_FAILURE,
                        fault: "getBrazilianStates"
                    }
                });
            }
        }));
    }
    searchCEP(postalCode) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, headers } = yield axios_1.default.request({
                    method: "GET",
                    baseURL: "https://viacep.com.br",
                    url: `ws/${postalCode.replace(/\D/g, "")}/json`
                });
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
            }
            catch (e) {
                reject({
                    ok: false,
                    data: {
                        code: values_1.Failure.CONNECTION_FAILURE,
                        fault: "getBrazilianStates"
                    }
                });
            }
        }));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map