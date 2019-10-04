"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("../base"));
var BASE_URL = base_1.default.BASE_URL;
function parseVideo($, video) {
    var $video = $(video);
    var title = $video.find('p:not(".metadata") a').attr('title');
    var path = $video.find('.thumb > a').attr('href');
    var url = "" + BASE_URL + path;
    var views = $video.find('p.metadata > span > span:not(.duration)').text();
    var duration = $video.find('p.metadata > span.bg > span.duration').text();
    var profileElement = $video.find('p.metadata > span > a');
    var profile = {
        name: profileElement.text(),
        url: "" + BASE_URL + profileElement.attr('href'),
    };
    return {
        url: url,
        path: path,
        title: title,
        duration: duration,
        profile: profile,
        views: views,
    };
}
exports.parseVideo = parseVideo;
function parseVideos($) {
    return $('#content > .mozaique > .thumb-block')
        .map(function (_i, video) { return parseVideo($, video); })
        .get();
}
exports.parseVideos = parseVideos;
function getPages($) {
    return $('.pagination > ul > li > a')
        .map(function (_i, page) { return $(page).text(); })
        .filter(function (_i, page) { return !isNaN(Number(page)); })
        .map(function (_i, page) { return Number(page); })
        .get();
}
exports.getPages = getPages;
function validatePage(page) {
    if (!page && page !== 0)
        return 1;
    if (!page || page < 1 || page > Number.MAX_SAFE_INTEGER) {
        throw new Error("Invalid page: " + page);
    }
    return page;
}
exports.validatePage = validatePage;
//# sourceMappingURL=utils.js.map