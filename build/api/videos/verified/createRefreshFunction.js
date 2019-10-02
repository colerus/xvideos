"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verified_1 = __importDefault(require("./verified"));
var refreshFunction = function (currentPage) { return function () {
    return verified_1.default({ page: currentPage });
}; };
var createRefreshFunction = function (pagination) {
    var page = pagination.page;
    return refreshFunction(page);
};
exports.default = createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.js.map