"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasNextFunction = function (currentPage, pages) { return function () {
    return currentPage < Math.max.apply(Math, pages);
}; };
var createHasNextFunction = function (pagination) {
    var page = pagination.page, pages = pagination.pages;
    return hasNextFunction(page, pages);
};
exports.default = createHasNextFunction;
//# sourceMappingURL=createHasNextFunction.js.map