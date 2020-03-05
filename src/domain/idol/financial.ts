import {
    IsEmpty,
    IsNotEmpty,
    ValidateNested
} from "class-validator";

import {Violation} from "../../values";
import {CharityInstitution} from "./charity-institution";
import {DonationPercentage} from "../common";
import {Groups} from "../../utils/validators/groups";

export class IdolFinancial {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    include: boolean = false;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @ValidateNested({always: true})
    charityInstitution: CharityInstitution = new CharityInstitution();

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    charityPercentage: DonationPercentage = "ONE";

}