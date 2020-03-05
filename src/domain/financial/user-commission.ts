import {IsEmpty, IsNotEmpty} from "class-validator";
import {Violation} from "../../values";
import {Groups} from "../../utils/validators/groups";
import {User} from "../user";
import {Transform} from "class-transformer";

export class UserCommission {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.UPDATE]})
    // @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    userId?: number = null;

    @Transform(value => typeof value === "string" ? parseInt(value) : value)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    percentage: number | string = null;

    @IsEmpty({groups: [Groups.UPDATE]})
    user: User;
}