import { ValidationOptions } from "class-validator";
export declare function IsCPF(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsPostalCode(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsValidPassword(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsCNPJ(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsPhoneNumber(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function IsCellphoneNumber(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
