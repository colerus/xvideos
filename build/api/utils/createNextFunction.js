"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextFunction = function (currentPage, callback) { return function () {
    var next = currentPage + 1;
    return callback({ page: next });
}; };
exports.createNextFunction = function (pagination, callback) {
    var page = pagination.page;
    return nextFunction(page, callback);
};
var nextFunctionWithKeyword = function (keyword, currentPage, callback) { return function () {
    var next = currentPage + 1;
    return callback({ key: keyword, page: next });
}; };
exports.createNextFunctionWithKeyword = function (keyword, pagination, callback) {
    var page = pagination.page;
    return nextFunctionWithKeyword(keyword, page, callback);
};
//# sourceMappingURL=createNextFunction.js.map