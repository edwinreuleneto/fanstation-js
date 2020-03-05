import { Address, SocialNetwork } from "../common";
import { AgencyDocument } from "./document";
import { Phone } from "../common/phone";
export declare class Agency {
    readonly id?: number;
    name: string;
    email: string;
    readonly password?: string;
    phone: Phone;
    billingAddress: Address;
    document: AgencyDocument;
    website?: string;
    socialNetwork?: SocialNetwork;
}
