import { CharityInstitution } from "./charity-institution";
import { DonationPercentage } from "../common";
export declare class IdolFinancial {
    readonly id?: number;
    include: boolean;
    charityInstitution: CharityInstitution;
    charityPercentage: DonationPercentage;
}
