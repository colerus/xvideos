"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fresh_1 = __importDefault(require("./fresh"));
var nextFunction = function (currentPage) { return function () {
    var next = currentPage + 1;
    return fresh_1.default({ page: next });
}; };
var createNextFunction = function (pagination) {
    var page = pagination.page;
    return nextFunction(page);
};
exports.default = createNextFunction;
//# sourceMappingURL=createNextFunction.js.map