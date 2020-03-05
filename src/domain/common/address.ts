import {
    IsNotEmpty,
    MaxLength,
    IsInt,
    ValidateIf, Length
} from "class-validator";

import {IsPostalCode} from "../../utils/validators";
import {Violation} from "../../values";
import {Transform} from "class-transformer";
import {withdrawNaN} from "../../utils/converters";

export class Address {

    @Transform(withdrawNaN)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @IsPostalCode({message: Violation.INVALID_POSTAL_CODE_FORMAT, always: true})
    postalCode?: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @Length(2, 2, {message: Violation.INVALID_FIELD, always: true})
    country: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(50, {message: Violation.INVALID_FIELD, always: true})
    region: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(100, {message: Violation.LENGTH_EXCEEDED, always: true})
    cityName: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(100, {message: Violation.LENGTH_EXCEEDED, always: true})
    streetAddress: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(100, {message: Violation.LENGTH_EXCEEDED, always: true})
    neighborhood: string = "";

    @Transform(value => (typeof value === "string" && parseInt(value)) || null)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @IsInt({message: Violation.INVALID_FIELD, always: true})
    streetNumber?: string | number = "";

    @ValidateIf((value: Address) => !["", null, undefined].includes(value.complement), {always: true})
    @MaxLength(100, {message: Violation.LENGTH_EXCEEDED, always: true})
    complement?: string = "";

}