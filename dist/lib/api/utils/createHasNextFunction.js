"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hasNextFunction = function (currentPage, pages) { return function () {
    return currentPage < Math.max.apply(Math, tslib_1.__spread(pages));
}; };
var createHasNextFunction = function (pagination) {
    return hasNextFunction(pagination.page, pagination.pages);
};
exports.default = createHasNextFunction;
//# sourceMappingURL=createHasNextFunction.js.map