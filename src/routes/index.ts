export const auth = {
    agency: "/auth/basic/groups/agency",
    idol: "/auth/sms-code/artists",
    user: "/auth/basic/groups/users"
};

export const user = {
    // authenticate: "/auth/realms/user/openid-connect/token",
    authenticate: "/user/login",
    logout: "/user/logout",
    create: "/user",
    update: "/user",
    get: "/user",
    savePicture: "/user/picture",
    getPicture: (pictureId) => `/user/picture/${pictureId}`,
    sendConfirmationEmail: "/user/request/confirmation-email",
    confirmUserEmail: "/user/confirm/email",
    changePassword: "/user/request/change-pw",
    requestPasswordReset: "/user/request/reset-pw",
    resetPassword: "/user/reset-pw",
    getEncryptionKey: "/user/cards/key",
};

export const idol = {
    get: (id) => `/artists/${id}`,
    getMinicopy: (id) => `/artists/${id}/minicopy`,
    getByAlias: (alias) => `/artists/alias/${alias}`,
    getWelcomeVideo: (alias) => `/artists/welcome/${alias}`,
    search: "/artists",
    getFeatured: "/artists/featured",
    getAllCategories: "/artists/category",
    uploadOrder: "/artists/orders",
};

export const agency = {
    authenticate: "/agency/login",
    logout: "/agency/login",
    create: "/agency/request/registration",
    get: "/agency",
    update: "/agency",
    savePicture: "/agency/picture",
    getPicture: (pictureId) => `/agency/picture/${pictureId}`,
    confirmRegistration: "/agency/confirm/registration",
    requestResetPassword: "/agency/request/reset-pw",
    resetPassword: "/agency/reset-pw",
    verifyToken: "/agency/token/verify",
    createIdol: "/agency/artists",
    updateIdol: "/agency/artists",
    getIdol: (artistId) => `/agency/artists/${artistId}`,
    getIdols: "/agency/artists",
    uploadWelcomeVideo: (artistId) => `/agency/artists/${artistId}/welcome`,
    uploadMinicopy: (artistId) => `/agency/artists/${artistId}/minicopy`,
    createIdolCategory: "/artist/category",
    searchOrders: "/agency/orders",
    uploadOrder: "/agency/orders",
    setArtistAsFeatured: (artistId) => `/agency/artists/${artistId}/featured`,
    togglePurchaseStatementApproval: (orderId) => `/agency/orders/${orderId}/statement`,
    togglePurchaseReactionApproval: (orderId) => `/agency/orders/${orderId}/reaction`,
    updateCommercialDealStatus: "/financial/update-commercial-deal-status",
    updateCommissions: "/financial/commissions"
};

export const order = {
    getOrderDownload: "/orders/download",
    getDownloadNonce: "/download/orders/nonce",
    getOrdersByUser: "/orders/receipts",
    scheduleOrder: "/orders",
    scheduleUnregisteredOrder: "/orders/unregistered",
    processPurchase: "/orders/process",
    evaluateOrder: "/orders/evaluate",
    getEvaluationsBy: "/orders/evaluations",
    getReactionVideo: "/orders/evaluate/reaction",
    createCelebrationReason: "/orders/reasons",
    getCelebrationReasons: "/orders/reasons",
    getAllReactions: "/orders/evaluations/user-reaction",
    getAllStatements: "/orders/evaluations/statement"
};

export const financial = {
    getAllDeals: "/financial/deals",
    getReport: "/financial/report",
    getUsernames: "/agency/usernames",
    uploadNewCommercialDealFile : "/financial/upload-new-commercial-deal-file",
    removeFile : "/financial/remove-file",
    downloadCommercialDealFile : "/financial/commercial-deal-file",
};

export const administrative = {
    termOfUse: "/term_of_use",
    useOfImage: "/term_of_use_image",
    latestUseOfImage: "/term_of_use_image/latest",
    privacyPolicy: "/privacy_policy",
    purchaseTerm: "/purchase_term"
};
