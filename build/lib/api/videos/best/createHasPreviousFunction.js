"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasPreviousFunction = function (currentPage, pages) {
    return currentPage > Math.min.apply(Math, pages);
};
var createHasPreviousFunction = function (pagination) {
    return hasPreviousFunction(pagination.page, pagination.pages);
};
exports.default = createHasPreviousFunction;
//# sourceMappingURL=createHasPreviousFunction.js.map