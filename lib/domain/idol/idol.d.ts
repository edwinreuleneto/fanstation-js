import { SocialNetwork } from "../common";
import { Experience, IdolConfirmation, IdolFinancial } from "./";
import { Category } from "./category";
import { Phone } from "../common/phone";
export declare class Idol {
    readonly categories?: string[];
    readonly score?: number;
    readonly confirmation?: IdolConfirmation;
    readonly pictures?: object;
    readonly reactions?: string[];
    readonly id?: number;
    alias: string;
    name: string;
    description: string;
    email: string;
    fullPhoneNumber: string;
    phone: Phone;
    website?: string;
    featuredPictures?: any;
    detailPictures?: any;
    commercialDealFile?: any;
    category?: Category[];
    socialNetwork?: SocialNetwork;
    shotsperience?: Experience;
    voicesperience?: Experience;
    textsperience?: Experience;
    chatsperience?: Experience;
    financial?: IdolFinancial;
}
