"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hasPreviousFunction = function (currentPage, pages) { return function () {
    return currentPage > Math.min.apply(Math, tslib_1.__spread(pages));
}; };
var createHasPreviousFunction = function (pagination) {
    return hasPreviousFunction(pagination.page, pagination.pages);
};
exports.default = createHasPreviousFunction;
//# sourceMappingURL=createHasPreviousFunction.js.map