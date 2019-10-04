"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("../../base"));
var parseResponses_1 = require("../../utils/parseResponses");
var utils_1 = require("../../utils/utils");
var PATH = '/new';
var fresh = function (_a) {
    var _b = (_a === void 0 ? {} : _a).page, page = _b === void 0 ? 2 : _b;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var url, request, _c, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    page = utils_1.validatePage(page);
                    url = PATH + "/" + page;
                    request = base_1.default.createRequest();
                    _c = parseResponses_1.parseResponse;
                    _d = [page];
                    return [4, request.get(url)];
                case 1: return [2, _c.apply(void 0, _d.concat([_e.sent(), fresh]))];
            }
        });
    });
};
exports.default = fresh;
//# sourceMappingURL=fresh.js.map