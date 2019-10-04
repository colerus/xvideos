"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios = tslib_1.__importStar(require("axios"));
var BASE_URL = 'https://www.xvideos.com';
var createRequest = function (options) {
    if (options === void 0) { options = {}; }
    return axios.default.create(Object.assign({
        baseURL: BASE_URL,
    }, options));
};
var base = {
    BASE_URL: BASE_URL,
    createRequest: createRequest,
};
exports.default = base;
//# sourceMappingURL=base.js.map