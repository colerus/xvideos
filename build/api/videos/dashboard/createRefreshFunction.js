"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_1 = __importDefault(require("./dashboard"));
var refreshFunction = function (_a) {
    var page = _a.page;
    return function () {
        return dashboard_1.default({ page: page });
    };
};
var createRefreshFunction = function (pagination) {
    var page = pagination.page;
    return refreshFunction({ page: page });
};
exports.default = createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.js.map