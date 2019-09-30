"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var base = __importStar(require("../../base"));
var BASE_URL = base.default.BASE_URL;
var parseVideo = function ($, video) {
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
};
exports.default = parseVideo;
//# sourceMappingURL=parseVideo.js.map