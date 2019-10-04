"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cheerio_1 = require("cheerio");
var puppeteer_1 = require("puppeteer");
var details = function (_a) {
    var url = _a.url;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var browser, page, html, $_1, title, duration, image, videoType, videoWidth, videoHeight, views, videoScript, tags, files, err_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 9]);
                    return [4, puppeteer_1.launch()];
                case 1:
                    browser = _b.sent();
                    return [4, browser.newPage()];
                case 2:
                    page = _b.sent();
                    return [4, page.goto(url, { waitUntil: 'networkidle2' })];
                case 3:
                    _b.sent();
                    return [4, page.content()];
                case 4:
                    html = _b.sent();
                    $_1 = cheerio_1.load(html);
                    title = $_1('meta[property="og:title"]').attr('content');
                    duration = $_1('meta[property="og:duration"]').attr('content');
                    image = $_1('meta[property="og:image"]').attr('content');
                    videoType = $_1('meta[property="og:video:type"]').attr('content');
                    videoWidth = $_1('meta[property="og:video:width"]').attr('content');
                    videoHeight = $_1('meta[property="og:video:height"]').attr('content');
                    views = $_1('#nb-views-number').text();
                    videoScript = $_1('#video-player-bg > script:nth-child(6)').html();
                    tags = $_1('.video-tags-list > ul > li')
                        .toArray()
                        .map(function (elm) {
                        return $_1(elm).text();
                    });
                    files = {
                        low: (videoScript.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
                        high: (videoScript.match("html5player.setVideoUrlHigh\\('(.*?)'\\);") || [])[1],
                        HLS: (videoScript.match("html5player.setVideoHLS\\('(.*?)'\\);") || [])[1],
                        thumb: (videoScript.match("html5player.setThumbUrl\\('(.*?)'\\);") || [])[1],
                        thumb69: (videoScript.match("html5player.setThumbUrl169\\('(.*?)'\\);") || [])[1],
                        thumbSlide: (videoScript.match("html5player.setThumbSlide\\('(.*?)'\\);") || [])[1],
                        thumbSlideBig: (videoScript.match("html5player.setThumbSlideBig\\('(.*?)'\\);") || [])[1],
                    };
                    return [2, {
                            title: title,
                            url: url,
                            duration: duration,
                            image: image,
                            views: views,
                            videoType: videoType,
                            videoWidth: videoWidth,
                            videoHeight: videoHeight,
                            files: files,
                            tags: tags,
                        }];
                case 5:
                    err_1 = _b.sent();
                    throw err_1;
                case 6:
                    if (!browser) return [3, 8];
                    return [4, browser.close()];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [7];
                case 9: return [2];
            }
        });
    });
};
exports.default = details;
//# sourceMappingURL=details.js.map