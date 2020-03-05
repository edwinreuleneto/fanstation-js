import {IsEmpty, IsNotEmpty, IsOptional, ValidateNested} from "class-validator";
import {Violation} from "../../values";
import {Type} from "class-transformer";
import {Groups} from "../../utils/validators/groups";
import {Commissions} from "./commissions";

export class Deal {

    readonly artistName?: string = "";

    readonly useOfImageDealAcceptanceDate?: Date | number;

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    artistId?: number;

    @Type(() => Commissions)
    @IsEmpty({groups: [Groups.UPDATE]})
    @ValidateNested({groups: [Groups.CREATE]})
    commissions?: Commissions = new Commissions();

}