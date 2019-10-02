"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var utils_1 = require("./utils");
var createHasNextFunction_1 = __importDefault(require("./createHasNextFunction"));
var createHasPreviousFunction_1 = __importDefault(require("./createHasPreviousFunction"));
var createRefreshFunction_1 = __importDefault(require("./createRefreshFunction"));
var createNextFunction_1 = __importDefault(require("./createNextFunction"));
var createPreviousFunction_1 = __importDefault(require("./createPreviousFunction"));
function parseResponse(page, _a, callback, key) {
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
        refresh: createRefreshFunction_1.default(pagination, callback, key),
        hasNext: createHasNextFunction_1.default(pagination),
        next: createNextFunction_1.default(pagination, callback, key),
        hasPrevious: createHasPreviousFunction_1.default(pagination),
        previous: createPreviousFunction_1.default(pagination, callback, key),
    };
}
exports.parseResponse = parseResponse;
//# sourceMappingURL=parseResponses.js.map