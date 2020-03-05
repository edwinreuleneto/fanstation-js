"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
class LegalClientModule {
    constructor(api) {
        this.getLatestUseOfImageTerm = () => core_1.createRequest(this.api, "GET", "/term_of_use_image/latest")
            .unsigned();
        this.getUseOfImageTermStatus = () => core_1.createRequest(this.api, "GET", "/financial/use-of-image-deal-status");
        this.toggleUseOfImageTermStatus = () => core_1.createRequest(this.api, "PUT", "/financial/use-of-image-deal-status");
        this.api = api;
    }
}
exports.LegalClientModule = LegalClientModule;
//# sourceMappingURL=legal.js.map