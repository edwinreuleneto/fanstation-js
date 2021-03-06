import { User } from "./user";
import { PublishingType } from "../common";
export declare class UserMedia {
    readonly id: number;
    readonly user: User;
    readonly key: string;
    readonly url: string;
    readonly visibility: PublishingType;
}
