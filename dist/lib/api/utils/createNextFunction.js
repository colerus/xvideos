"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextFunction = function (currentPage, callback, keyword) { return function () {
    var next = currentPage + 1;
    return callback({ key: keyword, page: next });
}; };
var createNextFunction = function (pagination, callback, keyword) {
    var page = pagination.page;
    return nextFunction(page, callback, keyword);
};
exports.default = createNextFunction;
//# sourceMappingURL=createNextFunction.js.map