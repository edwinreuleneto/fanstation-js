"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const validators_1 = require("../../utils/validators");
const values_1 = require("../../values");
const class_transformer_1 = require("class-transformer");
const converters_1 = require("../../utils/converters");
class Address {
    constructor() {
        this.postalCode = "";
        this.country = "";
        this.region = "";
        this.cityName = "";
        this.streetAddress = "";
        this.neighborhood = "";
        this.streetNumber = "";
        this.complement = "";
    }
}
__decorate([
    class_transformer_1.Transform(converters_1.withdrawNaN),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    validators_1.IsPostalCode({ message: values_1.Violation.INVALID_POSTAL_CODE_FORMAT, always: true }),
    __metadata("design:type", String)
], Address.prototype, "postalCode", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.Length(2, 2, { message: values_1.Violation.INVALID_FIELD, always: true }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(50, { message: values_1.Violation.INVALID_FIELD, always: true }),
    __metadata("design:type", String)
], Address.prototype, "region", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(100, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Address.prototype, "cityName", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(100, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Address.prototype, "streetAddress", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(100, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Address.prototype, "neighborhood", void 0);
__decorate([
    class_transformer_1.Transform(value => (typeof value === "string" && parseInt(value)) || null),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.IsInt({ message: values_1.Violation.INVALID_FIELD, always: true }),
    __metadata("design:type", Object)
], Address.prototype, "streetNumber", void 0);
__decorate([
    class_validator_1.ValidateIf((value) => !["", null, undefined].includes(value.complement), { always: true }),
    class_validator_1.MaxLength(100, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Address.prototype, "complement", void 0);
exports.Address = Address;
//# sourceMappingURL=address.js.map