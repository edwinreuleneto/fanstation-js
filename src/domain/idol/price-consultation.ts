import {IsNotEmpty} from "class-validator";
import {Violation} from "../../values";

export class PriceConsultation {

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    underConsultation: boolean = false;

}