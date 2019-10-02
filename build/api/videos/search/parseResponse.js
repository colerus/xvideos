"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var createRefreshFunction_1 = __importDefault(require("./createRefreshFunction"));
var createHasNextFunction_1 = __importDefault(require("./createHasNextFunction"));
var createNextFunction_1 = __importDefault(require("./createNextFunction"));
var createHasPreviousFunction_1 = __importDefault(require("./createHasPreviousFunction"));
var createPreviousFunction_1 = __importDefault(require("./createPreviousFunction"));
var utils_1 = require("../../utils/utils");
var parseResponse = function (key, page, _a) {
    var data = _a.data;
    var $ = cheerio_1.load(data);
    var videos = utils_1.parseVideos($);
    var pagination = {
        page: page,
        pages: utils_1.getPages($),
    };
    return {
        videos: videos,
        pagination: pagination,
        key: key,
        refresh: createRefreshFunction_1.default(key, pagination),
        hasNext: createHasNextFunction_1.default(pagination),
        next: createNextFunction_1.default(key, pagination),
        hasPrevious: createHasPreviousFunction_1.default(pagination),
        previous: createPreviousFunction_1.default(key, pagination),
    };
};
exports.default = parseResponse;
//# sourceMappingURL=parseResponse.js.map