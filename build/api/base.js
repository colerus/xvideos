"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios = __importStar(require("axios"));
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