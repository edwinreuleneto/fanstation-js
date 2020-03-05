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
class CategoryList {
    constructor() {
        this.categoryList = [];
    }
}
__decorate([
    class_transformer_1.Type(() => Category),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD }),
    class_validator_1.ArrayNotEmpty({ message: values_1.Violation.NO_CATEGORY_REGISTERED }),
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], CategoryList.prototype, "categoryList", void 0);
exports.CategoryList = CategoryList;
class Category {
    constructor() {
        this.categoryName = "";
        this.description = "";
    }
}
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Category.prototype, "categoryName", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
exports.Category = Category;
//# sourceMappingURL=category.js.map