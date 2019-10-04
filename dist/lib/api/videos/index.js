"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var best_1 = tslib_1.__importDefault(require("./best"));
var dashboard_1 = tslib_1.__importDefault(require("./dashboard"));
var details_1 = tslib_1.__importDefault(require("./details"));
var fresh_1 = tslib_1.__importDefault(require("./fresh"));
var search_1 = tslib_1.__importDefault(require("./search"));
var verified_1 = tslib_1.__importDefault(require("./verified"));
exports.best = best_1.default;
exports.dashboard = dashboard_1.default;
exports.details = details_1.default;
exports.fresh = fresh_1.default;
exports.search = search_1.default;
exports.verified = verified_1.default;
var videos = {
    best: exports.best,
    dashboard: exports.dashboard,
    details: exports.details,
    fresh: exports.fresh,
    search: exports.search,
    verified: exports.verified,
};
exports.default = videos;
//# sourceMappingURL=index.js.map