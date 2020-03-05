import { PriceConsultation } from "./price-consultation";
import { Idol } from "./idol";
import { Minicopy } from "./minicopy";
export declare class Experience {
    readonly id?: number;
    readonly artist?: Idol;
    enabled: boolean;
    minicopy?: Minicopy;
    description: string;
    businessPrice: number | string;
    consumerPrice: number | string;
    businessPriceConsultation: PriceConsultation;
    consumerPriceConsultation: PriceConsultation;
}
