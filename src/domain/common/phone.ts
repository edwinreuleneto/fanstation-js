import {IsCellphoneNumber} from "../../utils/validators";
import {Violation} from "../../values";
import {IsEmpty, IsNotEmpty, IsOptional} from "class-validator";
import {Groups} from "../../utils/validators/groups";
import {Transform} from "class-transformer";
import {readablePhoneToPhone} from "../../utils/converters";

export class Phone {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id: number;

    @Transform(readablePhoneToPhone)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT, always: true})
    fullPhoneNumber: string = "";

}