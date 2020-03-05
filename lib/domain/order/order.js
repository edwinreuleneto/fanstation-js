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
const idol_1 = require("../idol");
const order_1 = require("../order");
const values_1 = require("../../values");
const class_transformer_1 = require("class-transformer");
class Order {
    constructor() {
        this.purchase = new order_1.Purchase();
        this.experience = new idol_1.Experience();
        this.publishing = "PRIVATE";
        this.fromUserName = "";
        this.toDedicatoryName = "";
        this.instruction = "";
        this.celebrationReason = new order_1.CelebrationReason();
    }
}
__decorate([
    class_transformer_1.Type(() => order_1.Purchase),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.ValidateNested(),
    __metadata("design:type", order_1.Purchase)
], Order.prototype, "purchase", void 0);
__decorate([
    class_transformer_1.Type(() => idol_1.Experience),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.ValidateNested(),
    __metadata("design:type", idol_1.Experience)
], Order.prototype, "experience", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    __metadata("design:type", String)
], Order.prototype, "publishing", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    __metadata("design:type", String)
], Order.prototype, "fromUserName", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    __metadata("design:type", String)
], Order.prototype, "toDedicatoryName", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED }),
    __metadata("design:type", String)
], Order.prototype, "instruction", void 0);
__decorate([
    class_transformer_1.Type(() => order_1.CelebrationReason),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    __metadata("design:type", order_1.CelebrationReason)
], Order.prototype, "celebrationReason", void 0);
exports.Order = Order;
//# sourceMappingURL=order.js.map