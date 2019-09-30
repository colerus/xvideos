"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = require("cheerio");
var parseVideo_1 = __importDefault(require("./parseVideo"));
var createRefreshFunction_1 = __importDefault(require("./createRefreshFunction"));
var createHasNextFunction_1 = __importDefault(require("./createHasNextFunction"));
var createNextFunction_1 = __importDefault(require("./createNextFunction"));
var createHasPreviousFunction_1 = __importDefault(require("./createHasPreviousFunction"));
var createPreviousFunction_1 = __importDefault(require("./createPreviousFunction"));
var getVideos = function ($) {
    return $('#content > .mozaique > .thumb-block')
        .map(function (_i, video) { return parseVideo_1.default($, video); })
        .get();
};
var getPages = function ($) {
    return $('.pagination > ul > li > a')
        .map(function (_i, page) { return $(page)
        .text(); })
        .filter(function (_i, page) { return !isNaN(Number(page)); })
        .map(function (_i, page) { return Number(page) - 1; })
        .get();
};
var parseResponse = function (key, page, _a) {
    var data = _a.data;
    var $ = cheerio_1.load(data);
    var videos = getVideos($);
    var pagination = {
        page: page,
        pages: getPages($),
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