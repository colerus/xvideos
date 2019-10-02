"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api = __importStar(require("./lib/api"));
var xv = api.default.videos;
xv.verified().then(function (_data) {
    console.log("rodou");
});
//# sourceMappingURL=teste.js.map