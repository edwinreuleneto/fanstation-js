import {
    ArrayNotEmpty,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsOptional,
    IsUrl,
    MaxLength,
    ValidateIf,
    ValidateNested
} from "class-validator";

import {Violation} from "../../values";
import {IsCellphoneNumber} from "../../utils/validators";
import {SocialNetwork} from "../common";
import {Experience, IdolConfirmation, IdolFinancial} from "./";
import {Category} from "./category";
import {readablePhoneToPhone, toSnakeCase} from "../../utils/converters";
import {Exclude, Transform, Type} from "class-transformer";
import {Groups} from "../../utils/validators/groups";
import {Phone} from "../common/phone";

export class Idol {

    @Exclude()
    readonly categories?: string[];

    @Exclude()
    readonly score?: number;

    @Exclude()
    readonly confirmation?: IdolConfirmation;

    @Exclude()
    readonly pictures?: object;

    @Exclude()
    readonly reactions?: string[];

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    @Transform(toSnakeCase)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    alias: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    name: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    description: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @IsEmail(undefined, {message: Violation.INVALID_EMAIL_FORMAT, always: true})
    email: string = "";

    @Transform(readablePhoneToPhone)
    @IsOptional({groups: [Groups.UPDATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.CREATE]})
    @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT, groups: [Groups.CREATE]})
    fullPhoneNumber: string = "";

    @IsOptional({groups: [Groups.CREATE]})
    @ValidateNested({groups: [Groups.UPDATE]})
    phone: Phone;

    @ValidateIf((object: Idol) => ![null, undefined, ""].includes(object.website), {always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    website?: string = "";

    // File type workaround
    // mandatory only when creating
    @Type(() => Object)
    @Transform((value: any, obj: any) => {
        return obj.featuredPictures;
    })
    @IsNotEmpty({message: Violation.NO_AVATAR_SELECTED, groups: [Groups.CREATE]})
    featuredPictures?: any = "";

    // File type workaround
    // mandatory only when creating
    @Type(() => Object)
    @Transform((value: any, obj: any) => {
        return obj.detailPictures;
    })
    @IsNotEmpty({message: Violation.NO_PICTURE_SELECTED, groups: [Groups.CREATE]})
    @ArrayNotEmpty({message: Violation.NO_PICTURE_SELECTED, groups: [Groups.CREATE]})
    detailPictures?: any = [];

    // File type workaround
    // mandatory only when creating
    @Type(() => Object)
    @Transform((value: any, obj: any) => {
        return obj.featuredPictures;
    })
    @IsNotEmpty({message: Violation.NO_COMMERCIAL_DEAL_SELECTED, groups: [Groups.CREATE]})
    commercialDealFile?: any = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @ArrayNotEmpty({message: Violation.NO_CATEGORY_REGISTERED, always: true})
    category?: Category[] = [];

    @IsOptional({always: true})
    @ValidateNested({always: true})
    @Type(() => SocialNetwork)
    socialNetwork?: SocialNetwork = new SocialNetwork();

    @Type(() => Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    @IsOptional({always: true})
    @ValidateNested({always: true})
    shotsperience?: Experience = new Experience();
	
    @Type(() => Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    @IsOptional({always: true})
    @ValidateNested({always: true})
    voicesperience?: Experience = new Experience();	

    @Type(() => Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    @IsOptional({always: true})
    @ValidateNested({always: true})
    textsperience?: Experience = new Experience();	
    // @Type(() => Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    // @IsOptional({always: true})
    // @ValidateNested({always: true})
    chatsperience?: Experience = new Experience();

    @Type(() => IdolFinancial)
    @Transform((value: IdolFinancial) => value.include ? value : null, {toClassOnly: true})
    @IsOptional({always: true})
    @ValidateNested({always: true})
    financial?: IdolFinancial = new IdolFinancial();
}
