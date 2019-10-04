"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = tslib_1.__importDefault(require("../../base"));
var parseResponses_1 = require("../../utils/parseResponses");
var utils_1 = require("../../utils/utils");
var PATH = '/?k=';
var search = function (input) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var url, request, _a, _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!input.key) {
                    throw new Error('Invalid search keyword.');
                }
                input.page = utils_1.validatePage(input.page);
                url = "" + PATH + input.key + "&p=" + input.page;
                request = base_1.default.createRequest();
                _a = parseResponses_1.parseResponse;
                _b = [input.page];
                return [4, request.get(url)];
            case 1: return [2, _a.apply(void 0, _b.concat([_c.sent(), search, input.key]))];
        }
    });
}); };
exports.default = search;
//# sourceMappingURL=search.js.map