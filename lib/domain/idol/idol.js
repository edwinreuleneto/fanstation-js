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
const validators_1 = require("../../utils/validators");
const common_1 = require("../common");
const _1 = require("./");
const converters_1 = require("../../utils/converters");
const class_transformer_1 = require("class-transformer");
const groups_1 = require("../../utils/validators/groups");
const phone_1 = require("../common/phone");
class Idol {
    constructor() {
        this.alias = "";
        this.name = "";
        this.description = "";
        this.email = "";
        this.fullPhoneNumber = "";
        this.website = "";
        // File type workaround
        // mandatory only when creating
        this.featuredPictures = "";
        // File type workaround
        // mandatory only when creating
        this.detailPictures = [];
        // File type workaround
        // mandatory only when creating
        this.commercialDealFile = "";
        this.category = [];
        this.socialNetwork = new common_1.SocialNetwork();
        this.shotsperience = new _1.Experience();
        this.voicesperience = new _1.Experience();
        this.textsperience = new _1.Experience();
        // @Type(() => Experience)
        // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
        // @IsOptional({always: true})
        // @ValidateNested({always: true})
        this.chatsperience = new _1.Experience();
        this.financial = new _1.IdolFinancial();
    }
}
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", Array)
], Idol.prototype, "categories", void 0);
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", Number)
], Idol.prototype, "score", void 0);
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", _1.IdolConfirmation)
], Idol.prototype, "confirmation", void 0);
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", Object)
], Idol.prototype, "pictures", void 0);
__decorate([
    class_transformer_1.Exclude(),
    __metadata("design:type", Array)
], Idol.prototype, "reactions", void 0);
__decorate([
    class_validator_1.IsEmpty({ message: values_1.Violation.FORBIDDEN_FIELD_REGISTERED, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", Number)
], Idol.prototype, "id", void 0);
__decorate([
    class_transformer_1.Transform(converters_1.toSnakeCase),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Idol.prototype, "alias", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Idol.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    __metadata("design:type", String)
], Idol.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.IsEmail(undefined, { message: values_1.Violation.INVALID_EMAIL_FORMAT, always: true }),
    __metadata("design:type", String)
], Idol.prototype, "email", void 0);
__decorate([
    class_transformer_1.Transform(converters_1.readablePhoneToPhone),
    class_validator_1.IsOptional({ groups: [groups_1.Groups.UPDATE] }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, groups: [groups_1.Groups.CREATE] }),
    validators_1.IsCellphoneNumber({ message: values_1.Violation.INVALID_CELLPHONE_FORMAT, groups: [groups_1.Groups.CREATE] }),
    __metadata("design:type", String)
], Idol.prototype, "fullPhoneNumber", void 0);
__decorate([
    class_validator_1.IsOptional({ groups: [groups_1.Groups.CREATE] }),
    class_validator_1.ValidateNested({ groups: [groups_1.Groups.UPDATE] }),
    __metadata("design:type", phone_1.Phone)
], Idol.prototype, "phone", void 0);
__decorate([
    class_validator_1.ValidateIf((object) => ![null, undefined, ""].includes(object.website), { always: true }),
    class_validator_1.MaxLength(255, { message: values_1.Violation.LENGTH_EXCEEDED, always: true }),
    class_validator_1.IsUrl(undefined, { message: values_1.Violation.INVALID_URL, always: true }),
    __metadata("design:type", String)
], Idol.prototype, "website", void 0);
__decorate([
    class_transformer_1.Type(() => Object),
    class_transformer_1.Transform((value, obj) => {
        return obj.featuredPictures;
    }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.NO_AVATAR_SELECTED, groups: [groups_1.Groups.CREATE] }),
    __metadata("design:type", Object)
], Idol.prototype, "featuredPictures", void 0);
__decorate([
    class_transformer_1.Type(() => Object),
    class_transformer_1.Transform((value, obj) => {
        return obj.detailPictures;
    }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.NO_PICTURE_SELECTED, groups: [groups_1.Groups.CREATE] }),
    class_validator_1.ArrayNotEmpty({ message: values_1.Violation.NO_PICTURE_SELECTED, groups: [groups_1.Groups.CREATE] }),
    __metadata("design:type", Object)
], Idol.prototype, "detailPictures", void 0);
__decorate([
    class_transformer_1.Type(() => Object),
    class_transformer_1.Transform((value, obj) => {
        return obj.featuredPictures;
    }),
    class_validator_1.IsNotEmpty({ message: values_1.Violation.NO_COMMERCIAL_DEAL_SELECTED, groups: [groups_1.Groups.CREATE] }),
    __metadata("design:type", Object)
], Idol.prototype, "commercialDealFile", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ message: values_1.Violation.MANDATORY_FIELD, always: true }),
    class_validator_1.ArrayNotEmpty({ message: values_1.Violation.NO_CATEGORY_REGISTERED, always: true }),
    __metadata("design:type", Array)
], Idol.prototype, "category", void 0);
__decorate([
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    class_transformer_1.Type(() => common_1.SocialNetwork),
    __metadata("design:type", common_1.SocialNetwork)
], Idol.prototype, "socialNetwork", void 0);
__decorate([
    class_transformer_1.Type(() => _1.Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    ,
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", _1.Experience)
], Idol.prototype, "shotsperience", void 0);
__decorate([
    class_transformer_1.Type(() => _1.Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    ,
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", _1.Experience)
], Idol.prototype, "voicesperience", void 0);
__decorate([
    class_transformer_1.Type(() => _1.Experience)
    // @Transform((value: Experience) => value.include ? value : null, {toClassOnly: true})
    ,
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", _1.Experience)
], Idol.prototype, "textsperience", void 0);
__decorate([
    class_transformer_1.Type(() => _1.IdolFinancial),
    class_transformer_1.Transform((value) => value.include ? value : null, { toClassOnly: true }),
    class_validator_1.IsOptional({ always: true }),
    class_validator_1.ValidateNested({ always: true }),
    __metadata("design:type", _1.IdolFinancial)
], Idol.prototype, "financial", void 0);
exports.Idol = Idol;
//# sourceMappingURL=idol.js.map