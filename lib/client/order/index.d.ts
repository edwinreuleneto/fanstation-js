import { AxiosInstance } from "axios";
import { OrderClientModule, Result } from "../interface";
import { CelebrationReason, CelebrationReasonList, Order, User } from "../../domain";
export default class implements OrderClientModule {
    private api;
    constructor(api: AxiosInstance);
    signed: (token: any) => OrderClientModule;
    createCelebrationReason: (celebrationReasons: CelebrationReasonList, token?: string) => Promise<Result<CelebrationReason[]>>;
    getCelebrationReasons: () => Promise<Result<CelebrationReason[]>>;
    getOrderDownload: (nonce: string, purchaseId: number, userId: number) => Promise<Result<Int8Array>>;
    getDownloadNonce: (purchaseId: number, userId: number, token?: string) => Promise<Result<string>>;
    getOrdersByUser: (userId: number, token?: string) => Promise<Result<Order[]>>;
    getAllReactions: (page: number, size: number) => Promise<Result<any>>;
    getAllStatements: (page: number, size: number) => Promise<Result<any>>;
    scheduleOrder: (userId: number, order: Order) => Promise<Result<any>>;
    scheduleUnregisteredOrder: (experienceId: number, installments: number, order: Order, user: User) => Promise<Result<any>>;
    processPurchase: (purchaseId: number, token: string) => Promise<Result<any>>;
    evaluateOrder: (userId: number) => Promise<Result<any>>;
    getEvaluationsBy: () => Promise<Result<any>>;
    getReactionVideo: () => Promise<Result<any>>;
}
