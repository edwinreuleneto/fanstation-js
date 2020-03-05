import {IsEmpty, IsNotEmpty, ValidateNested} from "class-validator";
import {Violation} from "../../values";
import {Transform, Type} from "class-transformer";
import {Groups} from "../../utils/validators/groups";
import {UserCommission} from "./user-commission";

export class Commissions {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.UPDATE]})
    readonly edited: boolean;

    // @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    // @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    // readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    artistId?: number;

    @Transform(value => typeof value === "string" ? parseInt(value) : value)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    celebrityPercentage: number | string = null;

    @Transform(value => typeof value === "string" ? parseInt(value) : value)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    fanstationPercentage: number | string = null;

    @Type(() => UserCommission)
    @ValidateNested({each: true})
    percentages: UserCommission[] = []
}