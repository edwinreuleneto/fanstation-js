"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// export {default as Client} from "./client";
var clientV2_1 = require("./clientV2");
exports.Client = clientV2_1.default;
exports.ApiRequestConfiguration = clientV2_1.ApiRequestConfiguration;
__export(require("./values"));
__export(require("./domain"));
//# sourceMappingURL=index.js.map