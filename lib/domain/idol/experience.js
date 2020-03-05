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
const values_1 = require("../../values");
const converters_1 = require("../../utils/converters");
const price_consultation_1 = require("./price-consultation");
const class_transformer_1 = require("class-transformer");
const minicopy_1 = require("./minicopy");
const groups_1 = require("../../utils/validators/groups");
class Experience {
    constructor() {
        this.enabled = false;
        this.description = "";
        this.businessPrice = "";
        this.consumerPrice = "";
        this.businessPriceConsultation = new price_consultation_1.PriceConsultation();
        this.consumerPriceConsultation = new price_consultation_1.PriceConsultation();
    }
}
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], Experience.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", minicopy_1.Minicopy)
], Experience.prototype, "minicopy", void 0);
__decorate([
    class_validator_1.ValidateIf(experience => experience.enabled === true, { always: true }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Experience.prototype, "description", void 0);
__decorate([
    class_transformer_1.Transform(value => converters_1.priceToNumber(value)),
    __metadata("design:type", Object)
], Experience.prototype, "businessPrice", void 0);
__decorate([
    class_transformer_1.Transform(value => converters_1.priceToNumber(value)),
    __metadata("design:type", Object)
], Experience.prototype, "consumerPrice", void 0);
__decorate([
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", price_consultation_1.PriceConsultation)
], Experience.prototype, "businessPriceConsultation", void 0);
__decorate([
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", price_consultation_1.PriceConsultation)
], Experience.prototype, "consumerPriceConsultation", void 0);
exports.Experience = Experience;
//# sourceMappingURL=experience.js.map