import { Experience } from "../idol";
import { ExperienceType, PublishingType } from "../common";
import { Purchase, CelebrationReason } from "../order";
export declare class Order {
    readonly id?: number;
    readonly createdAt?: Date | number;
    readonly deliveryDate?: Date | number;
    readonly type?: ExperienceType;
    readonly url?: string;
    purchase: Purchase;
    experience: Experience;
    publishing: PublishingType;
    fromUserName: string;
    toDedicatoryName: string;
    instruction: string;
    celebrationReason?: CelebrationReason;
}
