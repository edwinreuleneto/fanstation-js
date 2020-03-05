import {IsEmpty, IsInt, IsNotEmpty, IsOptional} from "class-validator";
import {IsCNPJ, IsCPF} from "../../utils/validators";
import {Violation} from "../../values";
import {Transform} from "class-transformer";
import {Groups} from "../../utils/validators/groups";
import {withdrawNaN} from "../../utils/converters";

export class AgencyDocument {

    @IsEmpty({message: Violation.FORBIDDEN_FIELD_REGISTERED, groups: [Groups.CREATE]})
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, groups: [Groups.UPDATE]})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    documentType: string = "CNPJ";

    @Transform(withdrawNaN)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @IsCNPJ({message: Violation.INVALID_CNPJ, always: true})
    documentNumber: string = "";

}