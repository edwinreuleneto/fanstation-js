"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
class FinancialClientModule {
    constructor(api) {
        this.getFinancialReports = (startDate, endDate) => core_1.createRequest(this.api, "GET", "/financial/artist-report")
            .setQuery({ startDate, endDate });
        this.api = api;
    }
}
exports.FinancialClientModule = FinancialClientModule;
//# sourceMappingURL=financial.js.map