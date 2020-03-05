import {IsInt, IsNotEmpty, IsOptional} from "class-validator";
import {IsCPF} from "../../utils/validators";
import {Violation} from "../../values";
import {Transform} from "class-transformer";

export class UserDocument {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    documentType: string = "CPF";

    @Transform(value => value.replace(/\D/, ""))
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @IsCPF({message: Violation.INVALID_CPF})
    documentNumber: string = "";

}