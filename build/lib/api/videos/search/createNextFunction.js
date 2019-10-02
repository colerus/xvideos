"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __importDefault(require("./search"));
var nextFunction = function (keyword, currentPage) { return function () {
    var next = currentPage + 1;
    return search_1.default({ key: keyword, page: next });
}; };
var createNextFunction = function (keyword, pagination) {
    var page = pagination.page;
    return nextFunction(keyword, page);
};
exports.default = createNextFunction;
//# sourceMappingURL=createNextFunction.js.map