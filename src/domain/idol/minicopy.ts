import {IsNotEmpty} from "class-validator";
import {Violation} from "../../values";

export class Minicopy {

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    rawHtml: string

}