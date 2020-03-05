import {registerDecorator, ValidationOptions} from "class-validator";
import Regex from "../regex";

export function IsCPF(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsCPF",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    let sum;
                    let rest;
                    sum = 0;
                    if (value == "00000000000") return false;

                    for (let i = 1; i <= 9; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
                    rest = (sum * 10) % 11;

                    if ((rest == 10) || (rest == 11)) rest = 0;
                    if (rest != parseInt(value.substring(9, 10))) return false;

                    sum = 0;
                    for (let i = 1; i <= 10; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
                    rest = (sum * 10) % 11;

                    if ((rest == 10) || (rest == 11)) rest = 0;
                    return rest == parseInt(value.substring(10, 11));
                }
            }
        });
    };
}

export function IsPostalCode(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsPostalCode",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    return new Regex().postalCode.test(value);
                }
            }
        });
    };
}

export function IsValidPassword(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsValidPassword",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    return new Regex().password.test(value);
                }
            }
        });
    };
}

export function IsCNPJ(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "IsCNPJ",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    return value.length === 14
                }
            }
        });
    };
}

export function IsPhoneNumber(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isPhoneNumber",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    return new Regex().phone.test(value);
                }
            }
        });
    };
}

export function IsCellphoneNumber(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isCellphoneNumber",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: string) {
                    return new Regex().cellphone.test(value);
                }
            }
        });
    };
}