"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasNextFunction = function (currentPage, pages) {
    return currentPage < Math.max.apply(Math, pages);
};
var createHasNextFunction = function (pagination) {
    return hasNextFunction(pagination.page, pagination.pages);
};
exports.default = createHasNextFunction;
//# sourceMappingURL=createHasNextFunction.js.map