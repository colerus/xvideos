"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var refreshFunction = function (currentPage, callback) { return function () {
    return callback({ page: currentPage });
}; };
exports.createRefreshFunction = function (pagination, callback) {
    var page = pagination.page;
    return refreshFunction(page, callback);
};
var refreshFunctionWithKeyword = function (keyword, currentPage, callback) { return function () {
    return callback({ key: keyword, page: currentPage });
}; };
exports.createRefreshFunctionWithKeyword = function (keyword, pagination, callback) {
    var page = pagination.page;
    return refreshFunctionWithKeyword(keyword, page, callback);
};
//# sourceMappingURL=createRefreshFunction.js.map