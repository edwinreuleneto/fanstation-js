import {staticImplements} from "../utils/decorators";

export interface FailureInterface {
    FORBIDDEN;
    CONNECTION_FAILURE;
    UNDEFINED;
}

@staticImplements<FailureInterface>()
export class Failure {
    static FORBIDDEN = "FORBIDDEN";
    static CONNECTION_FAILURE = "CONNECTION_FAILURE";
    static UNDEFINED = "UNDEFINED";
}