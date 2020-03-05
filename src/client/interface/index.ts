import {Agency, CelebrationReasonList, ExperienceType, Idol, Order, User} from "../../domain";
import {Category, CategoryList} from "../../domain/idol/category";
import {Term} from "../../domain/admin/term";
import {Deal} from "../../domain/financial/deal";
import {DealFile} from "../../domain/financial/dealFile";
import {Commissions} from "../../domain/financial/commissions";

export interface Result<T> {
    ok: boolean,
    headers?: any,
    data: T
}

export interface Failure {
    code: string;
    message?: string;
    fault: string;
}

export interface Authentication {
    "accessToken": string,
    "tokenType": string,
    "expiresIn": number,
}

interface Authenticable {
    authenticate(...args): Promise<Result<Authentication>>;

    logout(token: string): Promise<Result<null>>
}

export interface Signable<T> {
}

export interface ExternalClientModule {
    getBrazilianStates(): Promise<Result<any>>;

    searchCEP(postalCode: string): Promise<Result<any>>;
}

export interface AgencyClientModule extends Authenticable, Signable<AgencyClientModule> {
    create(agency: Agency): Promise<Result<Agency>>;

    get(): Promise<Result<Agency>>;

    update(agency: Agency): Promise<Result<Agency>>;

    savePicture(file: any): Promise<Result<Agency>>;

    getPicture(pictureId: number): Promise<Result<Int8Array>>;

    confirmRegistration(token: string): Promise<Result<undefined>>;

    requestResetPassword(email: string): Promise<Result<undefined>>;

    resetPassword(token: string, newPassword: string): Promise<Result<string>>;

    verifyToken(token: string): Promise<Result<undefined>>;

    getIdol(artistId: number): Promise<Result<Idol>>;

    getIdols(name: string, category: string, page: number, size: number): Promise<Result<Idol[]>>;

    uploadWelcomeVideo(artistId: number, video: any): Promise<Result<undefined>>;

    uploadMinicopy(artistId: number, experienceType: ExperienceType, minicopy: any): Promise<Result<undefined>>;

    createIdol(idol: Idol): Promise<Result<Idol>>;

    updateIdol(idol: Idol): Promise<Result<Idol>>;

    createIdolCategory(categories: CategoryList): Promise<Result<CategoryList>>;

    searchOrders(page: number, size: number): Promise<Result<Order>>;

    uploadOrder(file: any, orderId: number): Promise<Result<undefined>>;

    toggleIdolFeatured(artistId: number, featured: boolean): Promise<Result<undefined>>

    togglePurchaseStatementApproval(orderId: number): Promise<Result<undefined>>

    togglePurchaseReactionApproval(orderId: number): Promise<Result<undefined>>

    updateCommercialDealStatus(artistId: number): Promise<Result<DealFile>>

    updateCommissions(commissions: Commissions): Promise<Result<any>>
}

export interface UserClientModule extends Authenticable, Signable<UserClientModule> {
    create(user: User): Promise<Result<User>>;

    update(user: User): Promise<Result<User>>;
}

export interface IdolClientModule {
    get(id: number): Promise<Result<Idol>>;

    getByAlias(alias: string): Promise<Result<Idol>>;

    search(name: string, category: string, page: number, size: number): Promise<Result<Idol[]>>;

    getFeatured(page: number, size: number): Promise<Result<Idol[]>>;

    getMinicopy(alias: string): Promise<Result<string>>;

    getWelcomeVideo(alias: string): Promise<Result<any>>;

    getCategories(): Promise<Result<Category>>;

    uploadOrder(artistId: number, orderId: number, order: any): Promise<Result<undefined>>
}

export interface OrderClientModule extends Signable<OrderClientModule> {

    getOrderDownload(nonce: string, purchaseId: number, userId: number): Promise<Result<Int8Array>>;

    getDownloadNonce(purchaseId: number, userId: number): Promise<Result<any>>;

    getOrdersByUser(userId: number): Promise<Result<Order[]>>;

    scheduleOrder(userId: number, order: Order): Promise<Result<any>>;

    scheduleUnregisteredOrder(experienceId: number, installments: number, order: Order, user: User): Promise<Result<any>>;

    processPurchase(purchaseId: number, token: string): Promise<Result<any>>;

    evaluateOrder(userId: number,): Promise<Result<any>>;

    getEvaluationsBy(): Promise<Result<any>>;

    getReactionVideo(): Promise<Result<any>>;

    createCelebrationReason(celebrationReasons: CelebrationReasonList): Promise<Result<any>>;

    getCelebrationReasons(): Promise<Result<any>>;

    getAllReactions(page: number, size: number): Promise<Result<any>>;

    getAllStatements(page: number, size: number): Promise<Result<any>>;
}

export interface AdministrativeClientModule extends Signable<AdministrativeClientModule> {

    getTermOfUse(): Promise<Result<Term>>

    getUseOfImageTerm(): Promise<Result<Term>>

    getLatestUseOfImageTerm() : Promise<Result<Term>>

    getPrivacyPolicy(): Promise<Result<Term>>

    getPurchaseTerm(): Promise<Result<Term>>

    saveTermOfUse(term: Term): Promise<Result<Term>>

    savePrivacyPolicy(term: Term): Promise<Result<Term>>

    savePurchaseTerm(term: Term): Promise<Result<Term>>
}

export interface AuthClientModule {

    asBackoffice(login: string, password: string): Promise<Result<Authentication>>;
}

export interface FinancialClientModule extends Signable<FinancialClientModule> {

    getAllDeals(): Promise<Result<Deal[]>>

    // TODO Criar um domain para input/output
    getReport(userId: number, artistId: number, startDate: string, endDate: string, token?: string): Promise<Result<any>>

    getUsernames(userId: number): Promise<Result<any>>

    uploadNewCommercialDealFile(artistId : number, commercialDealFileId: number, filename : string, file : any , token? : string) : Promise<Result<any>>

    removeFile( commercialDealFileId : number, token? : string )

    downloadCommercialDealFile( commercialDealFileId : number, token? : string )
}
