import { UserCommission } from "./user-commission";
export declare class Commissions {
    readonly edited: boolean;
    artistId?: number;
    celebrityPercentage: number | string;
    fanstationPercentage: number | string;
    percentages: UserCommission[];
}
