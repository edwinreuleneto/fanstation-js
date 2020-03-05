import { ValidationError } from "class-validator";
import { Failure, Result } from "../core";
import * as FormData from "form-data";
export declare function transformValidationError(errors: ValidationError[]): Result<Failure[]>;
export declare function transformApiError(e: any): Result<Failure[]>;
export declare function jsonToFormData(data: any): FormData;
