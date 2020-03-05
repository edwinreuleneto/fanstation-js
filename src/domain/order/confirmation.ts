import {AdministrativeUser} from "../admin";

export class PurchaseConfirmation {

    readonly id?: number;
    readonly createdAt?: number;
    readonly adminUserResponsible?: AdministrativeUser;
    readonly confirmationDate?: number;

}