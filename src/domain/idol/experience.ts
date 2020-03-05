import {
    IsEmpty,
    IsInt,
    IsNotEmpty,
    IsOptional,
    MaxLength, ValidateNested, ValidateIf
} from "class-validator";

import {Violation} from "../../values";
import {priceToNumber} from "../../utils/converters";
import {PriceConsultation} from "./price-consultation";
import {Exclude, Transform} from "class-transformer";
import {Idol} from "./idol";
import {Minicopy} from "./minicopy";
import {Groups} from "../../utils/validators/groups";

export class Experience {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    readonly artist?: Idol;

    enabled: boolean = false;

    @IsOptional({always: true})
    @ValidateNested({always: true})
    minicopy?: Minicopy;

    @ValidateIf(experience => experience.enabled === true, {always: true})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    description: string = "";

    @Transform(value => priceToNumber(value))
    businessPrice: number | string = "";

    @Transform(value => priceToNumber(value))
    consumerPrice: number | string = "";

    @ValidateNested({always: true})
    businessPriceConsultation: PriceConsultation = new PriceConsultation();

    @ValidateNested({always: true})
    consumerPriceConsultation: PriceConsultation = new PriceConsultation();

}