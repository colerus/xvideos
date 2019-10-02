"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var previousFunction = function (currentPage, callback) { return function () {
    var previous = currentPage - 1;
    return callback({ page: previous });
}; };
exports.createPreviousFunction = function (pagination, callback) {
    var page = pagination.page;
    return previousFunction(page, callback);
};
var previousFunctionWithKeyword = function (keyword, currentPage, callback) { return function () {
    var previous = currentPage - 1;
    return callback({ key: keyword, page: previous });
}; };
exports.createPreviousFunctionWithKeyword = function (key, pagination, callback) {
    var page = pagination.page;
    return previousFunctionWithKeyword(key, page, callback);
};
//# sourceMappingURL=createPreviousFunction.js.map