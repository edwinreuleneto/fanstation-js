import {IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsUrl, MaxLength, ValidateIf, ValidateNested} from "class-validator";

import {IsValidPassword} from "../../utils/validators";

import {Address, SocialNetwork} from "../common";
import {Violation} from "../../values";
import {Type} from "class-transformer";
import {Groups} from "../../utils/validators/groups";
import {AgencyDocument} from "./document";
import {Phone} from "../common/phone";

export class Agency {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    name: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    @IsEmail(undefined, {message: Violation.INVALID_EMAIL_FORMAT, always: true})
    email: string = "";

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.UPDATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.CREATE]})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, groups: [Groups.CREATE]})
    @IsValidPassword({message: Violation.INVALID_PASSWORD, groups: [Groups.CREATE]})
    readonly password?: string = "";

    // @Transform(readablePhoneToPhone)
    // @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    // @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT, always: true})
    // fullPhoneNumber: string = "";

    @Type(() => Phone)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @ValidateNested({always: true})
    phone: Phone = new Phone();

    @Type(() => Address)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @ValidateNested({always: true})
    billingAddress: Address = new Address();

    @Type(() => AgencyDocument)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @ValidateNested({always: true})
    document: AgencyDocument = new AgencyDocument();

    @ValidateIf((value: Agency) => !["", null, undefined].includes(value.website), {always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    website?: string = "";

    @Type(() => SocialNetwork)
    @IsOptional({always: true})
    @ValidateNested({always: true})
    socialNetwork?: SocialNetwork = new SocialNetwork();

}