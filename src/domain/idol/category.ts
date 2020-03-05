import {ArrayNotEmpty, IsNotEmpty, MaxLength, ValidateNested} from "class-validator";
import {Violation} from "../../values";
import {Type} from "class-transformer";

export class CategoryList {

    @Type(() => Category)
    @IsNotEmpty({message: Violation.MANDATORY_FIELD})
    @ArrayNotEmpty({message: Violation.NO_CATEGORY_REGISTERED})
    @ValidateNested({each: true})
    readonly categoryList: Category[] = [];

}

export class Category {

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    categoryName: string = "";

    @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
    @MaxLength(255, {message: Violation.LENGTH_EXCEEDED, always: true})
    description: string = "";

}
