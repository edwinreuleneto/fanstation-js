import { Address, Picture } from "../common";
import { CreditCard } from "./credit-card";
import { UserDocument } from "./document";
export declare class User {
    readonly id?: number;
    email: string;
    userName: string;
    readonly password?: string;
    readonly enabled?: boolean;
    phoneNumber: string;
    fixedLineNumber?: string;
    billingAddress: Address;
    userDocument: UserDocument;
    readonly picture?: Picture;
    readonly creditCard?: CreditCard;
}
