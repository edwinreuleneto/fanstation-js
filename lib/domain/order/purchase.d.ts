import { UserMedia } from "../user";
import { PurchaseStatus } from "../common";
import { PurchaseConfirmation } from "./confirmation";
export declare class Purchase {
    readonly id?: number;
    installments: number | string;
    totalAmount: number | string;
    refundedAmount?: number;
    readonly clientReactionVideo?: UserMedia;
    readonly clientEvaluation?: number;
    readonly clientReaction?: string;
    readonly createdAt?: number;
    readonly status?: PurchaseStatus;
    readonly purchaseConfirmation?: PurchaseConfirmation;
}
