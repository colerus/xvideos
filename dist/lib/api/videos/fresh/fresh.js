"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("../../base"));
var parseResponses_1 = require("../../utils/parseResponses");
var utils_1 = require("../../utils/utils");
var PATH = '/new';
var fresh = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.page, page = _c === void 0 ? 2 : _c;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var url, request, _d, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    page = utils_1.validatePage(page);
                    url = PATH + "/" + page;
                    request = base_1.default.createRequest();
                    _d = parseResponses_1.parseResponse;
                    _e = [page];
                    return [4, request.get(url)];
                case 1: return [2, _d.apply(void 0, _e.concat([_f.sent(), fresh]))];
            }
        });
    });
};
exports.default = fresh;
//# sourceMappingURL=fresh.js.map