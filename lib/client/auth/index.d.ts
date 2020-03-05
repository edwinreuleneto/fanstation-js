import { AxiosInstance } from "axios";
import { AuthClientModule, Result } from "../interface";
export default class implements AuthClientModule {
    private api;
    constructor(api: AxiosInstance);
    asBackoffice(login: string, password: string): Promise<Result<any>>;
}
