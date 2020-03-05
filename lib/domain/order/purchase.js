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
const class_transformer_1 = require("class-transformer");
const converters_1 = require("../../utils/converters");
class Purchase {
    constructor() {
        this.installments = "";
        this.totalAmount = "";
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt({ message: values_1.Violation.INVALID_FIELD }),
    __metadata("design:type", Number)
], Purchase.prototype, "id", void 0);
__decorate([
    class_transformer_1.Transform(value => (typeof value === "string" && parseInt(value)) || null),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.IsInt({ message: values_1.Violation.INVALID_FIELD }),
    __metadata("design:type", Object)
], Purchase.prototype, "installments", void 0);
__decorate([
    class_transformer_1.Transform(value => converters_1.priceToNumber(value)),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    __metadata("design:type", Object)
], Purchase.prototype, "totalAmount", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], Purchase.prototype, "refundedAmount", void 0);
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map