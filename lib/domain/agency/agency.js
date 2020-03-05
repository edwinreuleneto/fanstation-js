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
const common_1 = require("../common");
const values_1 = require("../../values");
const class_transformer_1 = require("class-transformer");
const groups_1 = require("../../utils/validators/groups");
const document_1 = require("./document");
const phone_1 = require("../common/phone");
class Agency {
    constructor() {
        this.name = "";
        this.email = "";
        this.password = "";
        // @Transform(readablePhoneToPhone)
        // @IsNotEmpty({message: Violation.MANDATORY_FIELD, always: true})
        // @IsCellphoneNumber({message: Violation.INVALID_CELLPHONE_FORMAT, always: true})
        // fullPhoneNumber: string = "";
        this.phone = new phone_1.Phone();
        this.billingAddress = new common_1.Address();
        this.document = new document_1.AgencyDocument();
        this.website = "";
        this.socialNetwork = new common_1.SocialNetwork();
    }
}
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], Agency.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Agency.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    class_validator_1.IsEmail(undefined, { message: values_1.Violation.INVALID_EMAIL_FORMAT, always: true }),
    __metadata("design:type", String)
], Agency.prototype, "email", void 0);
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.UPDATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, groups: [groups_1.Groups.CREATE] }),
    validators_1.IsValidPassword({ message: values_1.Violation.INVALID_PASSWORD, groups: [groups_1.Groups.CREATE] }),
    __metadata("design:type", String)
], Agency.prototype, "password", void 0);
__decorate([
    class_transformer_1.Type(() => phone_1.Phone),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", phone_1.Phone)
], Agency.prototype, "phone", void 0);
__decorate([
    class_transformer_1.Type(() => common_1.Address),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", common_1.Address)
], Agency.prototype, "billingAddress", void 0);
__decorate([
    class_transformer_1.Type(() => document_1.AgencyDocument),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", document_1.AgencyDocument)
], Agency.prototype, "document", void 0);
__decorate([
    class_validator_1.ValidateIf((value) => !["", null, undefined].includes(value.website), { always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], Agency.prototype, "website", void 0);
__decorate([
    class_transformer_1.Type(() => common_1.SocialNetwork),
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", common_1.SocialNetwork)
], Agency.prototype, "socialNetwork", void 0);
exports.Agency = Agency;
//# sourceMappingURL=agency.js.map