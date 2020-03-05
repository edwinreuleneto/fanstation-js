import {AvailableLocales} from "../../config";
import {IsInt, IsNotEmpty, IsOptional, MaxLength, ValidateNested} from "class-validator";
import {Violation} from "../../values";
import {Type} from "class-transformer";

export class CelebrationReasonList {

    @Type(() => CelebrationReasonList)
    @ValidateNested({each: true})
    readonly celebrationReasons: CelebrationReasonList[] = [];

}

export class CelebrationReason {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    language: AvailableLocales;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED})
    reason: string = "";

}