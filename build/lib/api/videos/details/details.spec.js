"use strict";
/* eslint-disable padded-blocks */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var details_1 = __importDefault(require("./details"));
var dashboard_1 = __importDefault(require("../dashboard"));
before(function () {
    chai_1.should();
});
describe('api/videos/details', function () {
    it('should retrieve video details', function () { return __awaiter(void 0, void 0, void 0, function () {
        var videos, video;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dashboard_1.default()];
                case 1:
                    videos = (_a.sent()).videos;
                    return [4 /*yield*/, details_1.default(videos[0])];
                case 2:
                    video = _a.sent();
                    video.should.be.an('object');
                    video.should.have.ownPropertyDescriptor('duration');
                    video.duration.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('files');
                    video.files.should.be.an('object');
                    video.files.should.have.ownPropertyDescriptor('HLS');
                    video.files.HLS.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('high');
                    video.files.high.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('low');
                    video.files.low.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('thumb');
                    video.files.thumb.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('thumb69');
                    video.files.thumb69.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('thumbSlide');
                    video.files.thumbSlide.should.be.a('string');
                    video.files.should.have.ownPropertyDescriptor('thumbSlideBig');
                    video.files.thumbSlideBig.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('image');
                    video.image.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('videoHeight');
                    video.videoHeight.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('videoType');
                    video.videoType.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('videoWidth');
                    video.videoWidth.should.be.a('string');
                    video.should.have.ownPropertyDescriptor('views');
                    video.views.should.be.a('string');
                    return [2 /*return*/];
            }
        });
    }); }).timeout(100000);
});
