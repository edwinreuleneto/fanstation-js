"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const regex_1 = require("../regex");
function IsCPF(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsCPF",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    let sum;
                    let rest;
                    sum = 0;
                    if (value == "00000000000")
                        return false;
                    for (let i = 1; i <= 9; i++)
                        sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
                    rest = (sum * 10) % 11;
                    if ((rest == 10) || (rest == 11))
                        rest = 0;
                    if (rest != parseInt(value.substring(9, 10)))
                        return false;
                    sum = 0;
                    for (let i = 1; i <= 10; i++)
                        sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
                    rest = (sum * 10) % 11;
                    if ((rest == 10) || (rest == 11))
                        rest = 0;
                    return rest == parseInt(value.substring(10, 11));
                }
            }
        });
    };
}
exports.IsCPF = IsCPF;
function IsPostalCode(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsPostalCode",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return new regex_1.default().postalCode.test(value);
                }
            }
        });
    };
}
exports.IsPostalCode = IsPostalCode;
function IsValidPassword(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsValidPassword",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return new regex_1.default().password.test(value);
                }
            }
        });
    };
}
exports.IsValidPassword = IsValidPassword;
function IsCNPJ(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "IsCNPJ",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return value.length === 14;
                }
            }
        });
    };
}
exports.IsCNPJ = IsCNPJ;
function IsPhoneNumber(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "isPhoneNumber",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return new regex_1.default().phone.test(value);
                }
            }
        });
    };
}
exports.IsPhoneNumber = IsPhoneNumber;
function IsCellphoneNumber(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: "isCellphoneNumber",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return new regex_1.default().cellphone.test(value);
                }
            }
        });
    };
}
exports.IsCellphoneNumber = IsCellphoneNumber;
//# sourceMappingURL=index.js.map