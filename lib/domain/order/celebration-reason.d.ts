import { AvailableLocales } from "../../config";
export declare class CelebrationReasonList {
    readonly celebrationReasons: CelebrationReasonList[];
}
export declare class CelebrationReason {
    readonly id?: number;
    language: AvailableLocales;
    reason: string;
}
