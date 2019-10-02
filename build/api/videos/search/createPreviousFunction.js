"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = __importDefault(require("./search"));
var previousFunction = function (keyword, currentPage) { return function () {
    var previous = currentPage - 1;
    return search_1.default({ key: keyword, page: previous });
}; };
var createPreviousFunction = function (key, pagination) {
    var page = pagination.page;
    return previousFunction(key, page);
};
exports.default = createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.js.map