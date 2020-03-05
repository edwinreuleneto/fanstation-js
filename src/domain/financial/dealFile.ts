import {IsEmpty, IsNotEmpty, IsOptional, ValidateNested} from "class-validator";
import {Violation} from "../../values";
import {Type} from "class-transformer";
import {Groups} from "../../utils/validators/groups";

export class DealFile {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    id?: number;

    readonly url?: string = null;

    readonly active?: boolean = null;


}
