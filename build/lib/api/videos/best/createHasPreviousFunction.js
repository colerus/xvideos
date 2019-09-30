"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPreviousFunction(currentPage, pages) {
    return currentPage > Math.min.apply(Math, pages);
}
;
var createHasPreviousFunction = function (pagination) {
    var page = pagination.page, pages = pagination.pages;
    return hasPreviousFunction(page, pages);
};
exports.default = createHasPreviousFunction;
//# sourceMappingURL=createHasPreviousFunction.js.map