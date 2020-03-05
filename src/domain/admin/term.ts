import {IsInt, IsNotEmpty, IsOptional} from "class-validator";
import {Violation} from "../../values";

export class Term {

    @IsOptional()
    @IsInt({message: Violation.INVALID_FIELD})
    readonly id?: number;

    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    text: string = "";

    readonly effectiveInDate?: number;

    readonly creationDate?: number;

}