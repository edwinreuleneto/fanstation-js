import {IsEmail, IsInt, IsNotEmpty, IsOptional, MaxLength} from "class-validator";

import {Violation} from "../../values";
import {IsCellphoneNumber} from "../../utils/validators";

export class AdministrativeUser {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    @IsEmail(undefined, {message: Violation.INVALID_EMAIL_FORMAT})
    email: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    userName: string = "";

    readonly secretKey?: string;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT})
    fullPhoneNumber: string = "";

    readonly enabled?: boolean;
}