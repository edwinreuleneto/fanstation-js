import {
    IsNotEmpty, MaxLength,
    ValidateNested
} from "class-validator";

import {Experience, Idol} from "../idol";
import {ExperienceType, PublishingType} from "../common";
import {Purchase, CelebrationReason} from "../order";
import {Violation} from "../../values";
import {Type} from "class-transformer";

export class Order {

    readonly id?: number;
    readonly createdAt?: Date | number;
    readonly deliveryDate?: Date | number;
    readonly type?: ExperienceType;
    readonly url?: string;

    @Type(() => Purchase)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @ValidateNested()
    purchase: Purchase = new Purchase();

    @Type(() => Experience)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @ValidateNested()
    experience: Experience = new Experience();

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    publishing: PublishingType = "PRIVATE";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    fromUserName: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    toDedicatoryName: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    instruction: string = "";

    @Type(() => CelebrationReason)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    celebrationReason?: CelebrationReason = new CelebrationReason();

}