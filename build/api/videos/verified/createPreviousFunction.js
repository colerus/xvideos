"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verified_1 = __importDefault(require("./verified"));
var previousFunction = function (currentPage) { return function () {
    var previous = currentPage - 1;
    return verified_1.default({ page: previous });
}; };
var createPreviousFunction = function (pagination) {
    var page = pagination.page;
    return previousFunction(page);
};
exports.default = createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.js.map