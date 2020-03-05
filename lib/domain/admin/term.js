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
class Term {
    constructor() {
        this.text = "";
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt({ message: values_1.Violation.INVALID_FIELD }),
    __metadata("design:type", Number)
], Term.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    __metadata("design:type", String)
], Term.prototype, "text", void 0);
exports.Term = Term;
//# sourceMappingURL=term.js.map