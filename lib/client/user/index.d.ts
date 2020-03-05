import { AxiosInstance } from "axios";
import { User } from "../../domain";
import { Authentication, Result, UserClientModule } from "../interface";
export default class implements UserClientModule {
    private api;
    constructor(api: AxiosInstance);
    create: (user: User) => Promise<Result<User>>;
    authenticate: (login: string, password: string) => Promise<Result<Authentication>>;
    logout: (token: string) => Promise<Result<null>>;
    update: (user: User, token?: string) => Promise<Result<User>>;
}
