import { IdolConfirmationStatus } from "../common";
export declare class IdolConfirmation {
    readonly id: number;
    readonly createdAt: Date;
    readonly confirmationDate: Date;
    readonly status: IdolConfirmationStatus;
}
