"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var previousFunction = function (currentPage) { return function () {
    var previous = currentPage - 1;
    return __1.best({ page: previous });
}; };
var createPreviousFunction = function (pagination) {
    var page = pagination.page;
    return previousFunction(page);
};
exports.default = createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.js.map