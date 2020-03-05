import { AdministrativeClientModule, Result } from "../interface";
import { AxiosInstance } from "axios";
import { Term } from "../../domain/admin/term";
export default class implements AdministrativeClientModule {
    readonly api: AxiosInstance;
    constructor(api: AxiosInstance);
    getTermOfUse: () => Promise<Result<Term>>;
    getUseOfImageTerm: () => Promise<Result<Term>>;
    getLatestUseOfImageTerm: () => Promise<Result<Term>>;
    getPrivacyPolicy: () => Promise<Result<Term>>;
    getPurchaseTerm: () => Promise<Result<Term>>;
    saveTermOfUse: (term: Term, token?: string) => Promise<Result<Term>>;
    savePrivacyPolicy: (term: Term, token?: string) => Promise<Result<Term>>;
    savePurchaseTerm: (term: Term, token?: string) => Promise<Result<Term>>;
    saveUseOfImageTerm: (term: Term, token?: string) => Promise<Result<Term>>;
}
