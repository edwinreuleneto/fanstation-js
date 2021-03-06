export const routes = {

    auth: {
        login: (authType: string, realm: string) => `/auth/${authType}/${realm}`,
        mobile: "/auth/sms-code/artists",
        logout: (authType: string, realm: string) => `/auth/${authType}/${realm}`
    },

    user: {
        auth: "/auth/basic/groups/users",
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
        getEncryptionKey: "/user/cards/key"
    },

    idol: {
        auth: "/auth/basic/groups/artists",
        logout: "",
        get: (id) => `/artists/${id}`,
        getMinicopy: (id) => `/artists/${id}/minicopy`,
        getByAlias: (alias) => `/artists/alias/${alias}`,
        getWelcomeVideo: (alias) => `/artists/welcome/${alias}`,
        search: "/artists",
        getFeatured: "/artists/featured",
        getAllCategories: "/artists/category",
        searchCategories: "/artists/category/complete-category-list",
        uploadOrder: "/artists/orders",
    },

    backoffice: {
        auth: "/auth/basic/backoffice",
        logout: "/auth/basic/backoffice",
        create: "/backoffice/request/registration",
        get: "/backoffice",
        update: "/backoffice",
        savePicture: "/backoffice/picture",
        getPicture: (pictureId) => `/backoffice/picture/${pictureId}`,
        confirmRegistration: "/backoffice/confirm/registration",
        requestResetPassword: "/backoffice/request/reset-pw",
        resetPassword: "/backoffice/reset-pw",
        verifyToken: "/backoffice/token/verify",
        createIdol: "/backoffice/artists",
        updateIdol: "/backoffice/artists",
        getIdol: (artistId) => `/backoffice/artists/${artistId}`,
        getIdols: "/backoffice/artists",
        uploadWelcomeVideo: (artistId) => `/backoffice/artists/${artistId}/welcome`,
        uploadMinicopy: (artistId) => `/backoffice/artists/${artistId}/minicopy`,
        createIdolCategory: "/artist/category",
        searchOrders: "/backoffice/orders",
        uploadOrder: "/backoffice/orders",
        setArtistAsFeatured: (artistId) => `/backoffice/artists/${artistId}/featured`,
        togglePurchaseStatementApproval: (orderId) => `/backoffice/orders/${orderId}/statement`,
        togglePurchaseReactionApproval: (orderId) => `/backoffice/orders/${orderId}/reaction`,
        updateCommercialDeal: "/backoffice/artists/update-commercial-deal",
        updateCommercialDealStatus: "/backoffice/artists/update-commercial-deal-status",
        updateCommissions: "/backoffice/artists/commissions",
    },

    order: {
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
    },

    financial: {
        getAllDeals: "/financial/deals",
        getReport: "/financial/report",
        getUsernames: "/user/usernames",
    },

    administrative: {
        termOfUse: "/term_of_use",
        useOfImage: "/use_of_image_term",
        privacyPolicy: "/privacy_policy",
        purchaseTerm: "/purchase_term",
        testing: "/testing"
    },
};
