"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("../utils/decorators");
let Violation = class Violation {
};
Violation.NO_PICTURE_SELECTED = "NO_PICTURE_SELECTED";
Violation.NO_AVATAR_SELECTED = "NO_AVATAR_SELECTED";
Violation.INVALID_CNPJ = "INVALID_CNPJ";
Violation.INVALID_URL = "INVALID_URL";
Violation.FORBIDDEN_FIELD_REGISTERED = "FORBIDDEN_FIELD_REGISTERED";
Violation.NO_CATEGORY_REGISTERED = "NO_CATEGORY_REGISTERED";
Violation.INVALID_PASSWORD = "INVALID_PASSWORD";
Violation.INVALID_POSTAL_CODE_FORMAT = "INVALID_POSTAL_CODE_FORMAT";
Violation.LENGTH_EXCEEDED = "LENGTH_EXCEEDED";
Violation.INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT";
Violation.INVALID_PHONE_FORMAT = "INVALID_PHONE_FORMAT";
Violation.INVALID_CELLPHONE_FORMAT = "INVALID_CELLPHONE_FORMAT";
Violation.MANDATORY_FIELD = "MANDATORY_FIELD";
Violation.INVALID_FIELD = "INVALID_FIELD";
Violation.INVALID_CPF = "INVALID_CPF";
Violation.NO_COMMERCIAL_DEAL_SELECTED = "NO_COMMERCIAL_DEAL_SELECTED";
Violation = __decorate([
    decorators_1.staticImplements()
], Violation);
exports.Violation = Violation;
//# sourceMappingURL=violation.js.map