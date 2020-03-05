"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const FormData = require("form-data");
const core_1 = require("./core");
class IdolClientModule {
    constructor(api) {
        this.getIdolProfile = () => core_1.createRequest(this.api, "GET", "/artists/informations");
        this.getDetailedCategories = (page, size, sortBy) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.searchCategories)
            .setQuery({ page, size, sortBy });
        this.get = (id) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.get(id));
        this.getByAlias = (alias) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.getByAlias(alias))
            .unsigned();
        this.getMinicopy = (alias) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.getMinicopy(alias))
            .unsigned();
        this.getWelcomeVideo = (alias) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.getWelcomeVideo(alias))
            .unsigned();
        this.getCategories = () => core_1.createRequest(this.api, "GET", routes_1.routes.idol.getAllCategories)
            .unsigned();
        this.getFeatured = (page, size) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.getFeatured)
            .setQuery({ page, size })
            .unsigned();
        this.search = (name, category, page, size) => core_1.createRequest(this.api, "GET", routes_1.routes.idol.search)
            .setQuery({ name, category, page, size })
            .unsigned();
        this.uploadOrder = (orderId, file) => core_1.createRequest(this.api, "POST", routes_1.routes.idol.uploadOrder)
            .setQuery({ orderId })
            .setPayload(file)
            .setPayloadTransformer(payload => {
            const form = new FormData();
            form.append("order", payload);
            return form;
        })
            .setBoundary();
        this.api = api;
    }
}
exports.IdolClientModule = IdolClientModule;
//# sourceMappingURL=idol.js.map