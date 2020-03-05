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
class SocialNetwork {
    constructor() {
        this.twitterUrl = "";
        this.facebookUrl = "";
        this.youtubeUrl = "";
        this.instagramUrl = "";
    }
}
__decorate([
    class_transformer_1.Transform(value => value && value.length > 0 && "https://www.twitter.com/" + value),
    class_validator_1.ValidateIf((object) => ![null, undefined, ""].includes(object.twitterUrl), { always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], SocialNetwork.prototype, "twitterUrl", void 0);
__decorate([
    class_transformer_1.Transform(value => value && value.length > 0 && "https://www.facebook.com/" + value),
    class_validator_1.ValidateIf((object) => ![null, undefined, ""].includes(object.facebookUrl), { always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], SocialNetwork.prototype, "facebookUrl", void 0);
__decorate([
    class_transformer_1.Transform(value => value && value.length > 0 && "https://www.youtube.com/" + value),
    class_validator_1.ValidateIf((object) => ![null, undefined, ""].includes(object.youtubeUrl), { always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], SocialNetwork.prototype, "youtubeUrl", void 0);
__decorate([
    class_transformer_1.Transform(value => value && value.length > 0 && "https://www.instagram.com/" + value),
    class_validator_1.ValidateIf((object) => ![null, undefined, ""].includes(object.instagramUrl), { always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], SocialNetwork.prototype, "instagramUrl", void 0);
exports.SocialNetwork = SocialNetwork;
//# sourceMappingURL=social-network.js.map