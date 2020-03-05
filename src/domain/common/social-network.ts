import {
    IsUrl,
    ValidateIf
} from "class-validator";

import {Violation} from "../../values";
import {Transform} from "class-transformer";

export class SocialNetwork {

    @Transform(value => value && value.length > 0 && "https://www.twitter.com/" + value)
    @ValidateIf((object: SocialNetwork) => ![null, undefined, ""].includes(object.twitterUrl), {always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    twitterUrl?: string = "";

    @Transform(value => value && value.length > 0 && "https://www.facebook.com/" + value)
    @ValidateIf((object: SocialNetwork) => ![null, undefined, ""].includes(object.facebookUrl), {always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    facebookUrl?: string = "";

    @Transform(value => value && value.length > 0 && "https://www.youtube.com/" + value)
    @ValidateIf((object: SocialNetwork) => ![null, undefined, ""].includes(object.youtubeUrl), {always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    youtubeUrl?: string = "";

    @Transform(value => value && value.length > 0 && "https://www.instagram.com/" + value)
    @ValidateIf((object: SocialNetwork) => ![null, undefined, ""].includes(object.instagramUrl), {always: true})
    @IsUrl(undefined, {message: Violation.INVALID_URL, always: true})
    instagramUrl?: string = "";


}