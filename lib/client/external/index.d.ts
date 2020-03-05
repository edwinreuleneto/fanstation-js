import { ExternalClientModule, Result } from "../interface";
import { Address } from "../../domain";
export default class implements ExternalClientModule {
    getBrazilianStates(): Promise<Result<string[]>>;
    searchCEP(postalCode: string): Promise<Result<Address>>;
    getMinicopy: () => Promise<Result<string>>;
}
