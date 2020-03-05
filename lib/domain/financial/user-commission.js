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
const groups_1 = require("../../utils/validators/groups");
const user_1 = require("../user");
const class_transformer_1 = require("class-transformer");
class UserCommission {
    constructor() {
        this.userId = null;
        this.percentage = null;
    }
}
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], UserCommission.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], UserCommission.prototype, "userId", void 0);
__decorate([
    class_transformer_1.Transform(value => typeof value === "string" ? parseInt(value) : value),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    __metadata("design:type", Object)
], UserCommission.prototype, "percentage", void 0);
__decorate([
    class_validator_1.IsEmpty({ groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", user_1.User)
], UserCommission.prototype, "user", void 0);
exports.UserCommission = UserCommission;
//# sourceMappingURL=user-commission.js.map