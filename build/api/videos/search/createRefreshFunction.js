"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __importDefault(require("./search"));
var refreshFunction = function (keyword, currentPage) { return function () {
    return search_1.default({ key: keyword, page: currentPage });
}; };
var createRefreshFunction = function (keyword, pagination) {
    var page = pagination.page;
    return refreshFunction(keyword, page);
};
exports.default = createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.js.map