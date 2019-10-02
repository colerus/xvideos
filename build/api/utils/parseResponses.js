"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var utils_1 = require("./utils");
var createRefreshFunction_1 = require("./createRefreshFunction");
var createHasNextFunction_1 = __importDefault(require("./createHasNextFunction"));
var createNextFunction_1 = require("./createNextFunction");
var createHasPreviousFunction_1 = __importDefault(require("./createHasPreviousFunction"));
var createPreviousFunction_1 = require("./createPreviousFunction");
function parseResponse(page, _a, callback) {
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
        refresh: createRefreshFunction_1.createRefreshFunction(pagination, callback),
        hasNext: createHasNextFunction_1.default(pagination),
        next: createNextFunction_1.createNextFunction(pagination, callback),
        hasPrevious: createHasPreviousFunction_1.default(pagination),
        previous: createPreviousFunction_1.createPreviousFunction(pagination, callback),
    };
}
exports.parseResponse = parseResponse;
function parseResponseWithKeyword(key, page, _a, callback) {
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
        refresh: createRefreshFunction_1.createRefreshFunctionWithKeyword(key, pagination, callback),
        hasNext: createHasNextFunction_1.default(pagination),
        next: createNextFunction_1.createNextFunctionWithKeyword(key, pagination, callback),
        hasPrevious: createHasPreviousFunction_1.default(pagination),
        previous: createPreviousFunction_1.createPreviousFunctionWithKeyword(key, pagination, callback),
    };
}
exports.parseResponseWithKeyword = parseResponseWithKeyword;
//# sourceMappingURL=parseResponses.js.map