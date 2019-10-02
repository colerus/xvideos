"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var previousFunction = function (currentPage, callback, keyword) { return function () {
    var previous = currentPage - 1;
    return callback({ key: keyword, page: previous });
}; };
var createPreviousFunction = function (pagination, callback, key) {
    var page = pagination.page;
    return previousFunction(page, callback, key);
};
exports.default = createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.js.map