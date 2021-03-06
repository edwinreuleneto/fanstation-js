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
const validators_1 = require("../../utils/validators");
const values_1 = require("../../values");
const class_validator_1 = require("class-validator");
const groups_1 = require("../../utils/validators/groups");
const class_transformer_1 = require("class-transformer");
const converters_1 = require("../../utils/converters");
class Phone {
    constructor() {
        this.fullPhoneNumber = "";
    }
}
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], Phone.prototype, "id", void 0);
__decorate([
    class_transformer_1.Transform(converters_1.readablePhoneToPhone),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    validators_1.IsCellphoneNumber({ message: values_1.Violation.INVALID_CELLPHONE_FORMAT, always: true }),
    __metadata("design:type", String)
], Phone.prototype, "fullPhoneNumber", void 0);
exports.Phone = Phone;
//# sourceMappingURL=phone.js.map