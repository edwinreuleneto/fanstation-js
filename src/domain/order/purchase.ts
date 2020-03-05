import {
    IsDecimal,
    IsInt,
    IsNotEmpty,
    IsOptional,
    MaxLength, ValidateIf,
    ValidateNested
} from "class-validator";

import {Violation} from "../../values";
import {UserMedia} from "../user";
import {PurchaseStatus} from "../common";
import {PurchaseConfirmation} from "./confirmation";
import {Transform, Type} from "class-transformer";
import {priceToNumber} from "../../utils/converters";

export class Purchase {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @Transform(value => (typeof value === "string" && parseInt(value)) || null)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @IsInt({message: Violation.INVALID_FIELD})
    installments: number | string = "";

    @Transform(value => priceToNumber(value))
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    totalAmount: number | string = "";

    @IsOptional()
    refundedAmount?: number;

    readonly clientReactionVideo?: UserMedia;

    readonly clientEvaluation?: number;

    readonly clientReaction?: string;

    readonly createdAt?: number; // timestamp

    readonly status?: PurchaseStatus;

    readonly purchaseConfirmation?: PurchaseConfirmation;

}