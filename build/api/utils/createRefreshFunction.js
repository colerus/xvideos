"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var refreshFunction = function (currentPage, callback, keyword) { return function () {
    return callback({ key: keyword, page: currentPage });
}; };
var createRefreshFunction = function (pagination, callback, keyword) {
    var page = pagination.page;
    return refreshFunction(page, callback, keyword);
};
exports.default = createRefreshFunction;
//# sourceMappingURL=createRefreshFunction.js.map