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
const common_1 = require("../common");
const document_1 = require("./document");
const class_transformer_1 = require("class-transformer");
class User {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt({ message: values_1.Violation.INVALID_FIELD }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    class_validator_1.IsEmail(undefined, { message: values_1.Violation.INVALID_EMAIL_FORMAT }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    class_validator_1.ValidateIf((value) => !["", null, undefined].includes(value.password)),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    validators_1.IsValidPassword({ message: values_1.Violation.INVALID_PASSWORD }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    validators_1.IsCellphoneNumber({ message: values_1.Violation.INVALID_CELLPHONE_FORMAT }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    class_validator_1.ValidateIf((value) => !["", null, undefined].includes(value.fixedLineNumber)),
    class_validator_1.IsOptional(),
    validators_1.IsPhoneNumber({ message: values_1.Violation.INVALID_PHONE_FORMAT }),
    __metadata("design:type", String)
], User.prototype, "fixedLineNumber", void 0);
__decorate([
    class_transformer_1.Type(() => common_1.Address),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.ValidateNested(),
    __metadata("design:type", common_1.Address)
], User.prototype, "billingAddress", void 0);
__decorate([
    class_transformer_1.Type(() => document_1.UserDocument),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.ValidateNested(),
    __metadata("design:type", document_1.UserDocument)
], User.prototype, "userDocument", void 0);
exports.User = User;
//# sourceMappingURL=user.js.map