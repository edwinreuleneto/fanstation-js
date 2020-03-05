import {
    IsEmpty,
    IsNotEmpty,
    MaxLength
} from "class-validator";

import {Violation} from "../../values";
import {Groups} from "../../utils/validators/groups";

export class CharityInstitution {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    name: string = "";

}