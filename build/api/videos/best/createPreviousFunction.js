"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var videos_1 = require("../../videos");
var previousFunction = function (currentPage) { return function () {
    var previous = currentPage - 1;
    return videos_1.best({ page: previous });
}; };
var createPreviousFunction = function (pagination) {
    var page = pagination.page;
    return previousFunction(page);
};
exports.default = createPreviousFunction;
//# sourceMappingURL=createPreviousFunction.js.map