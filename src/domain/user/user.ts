import {
    IsInt,
    IsEmail,
    MaxLength,
    IsNotEmpty,
    IsOptional,
    ValidateNested, ValidateIf
} from 'class-validator';

import {
    IsValidPassword,
    IsPhoneNumber,
    IsCellphoneNumber
} from "../../utils/validators";

import {Violation} from "../../values";
import {Address, Picture} from "../common";
import {CreditCard} from "./credit-card";
import {UserDocument} from "./document";
import {Type} from "class-transformer";

export class User {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @IsEmail(undefined, {message: Violation.INVALID_EMAIL_FORMAT})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    email: string;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    userName: string;

    @ValidateIf((value: User) => !["", null, undefined].includes(value.password))
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    @IsValidPassword({message: Violation.INVALID_PASSWORD})
    readonly password?: string;

    readonly enabled?: boolean;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT})
    phoneNumber: string;

    @ValidateIf((value: User) => !["", null, undefined].includes(value.fixedLineNumber))
    @IsOptional()
    @IsPhoneNumber({message: Violation.INVALID_PHONE_FORMAT})
    fixedLineNumber?: string;

    @Type(() => Address)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @ValidateNested()
    billingAddress: Address;

    @Type(() => UserDocument)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @ValidateNested()
    userDocument: UserDocument;

    readonly picture?: Picture;

    readonly creditCard?: CreditCard;
}