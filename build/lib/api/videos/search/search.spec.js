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
var api_1 = __importDefault(require("../../../api"));
var videos = api_1.default.videos;
before(function () {
    chai_1.should();
});
describe('api/videos/search', function () {
    it('should list search video pages', function () { return __awaiter(void 0, void 0, void 0, function () {
        var list, previous, next;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, videos.search({ key: 'novinha', page: 2 })];
                case 1:
                    list = _a.sent();
                    list.should.be.an('object');
                    list.key.should.be.an('string');
                    list.key.should.be.equals('novinha');
                    list.pagination.should.be.an('object');
                    list.pagination.page.should.be.equals(2);
                    list.pagination.pages.should.be.an('array');
                    list.pagination.pages[0].should.be.a('number');
                    list.hasNext.should.be.a('function');
                    list.hasNext().should.be.equals(true);
                    list.hasPrevious.should.be.a('function');
                    list.hasPrevious().should.be.equals(true);
                    list.next.should.be.a('function');
                    list.previous.should.be.a('function');
                    list.videos.should.be.an('array');
                    list.videos.forEach(function (video) {
                        video.should.be.an('object');
                        video.should.have.ownPropertyDescriptor('duration');
                        video.duration.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('path');
                        video.path.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('profile');
                        video.profile.should.be.an('object');
                        video.profile.should.have.ownPropertyDescriptor('name');
                        video.profile.name.should.be.an('string');
                        video.profile.should.have.ownPropertyDescriptor('url');
                        video.profile.url.should.be.an('string');
                        video.should.have.ownPropertyDescriptor('title');
                        video.title.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('url');
                        video.url.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('views');
                        video.views.should.be.a('string');
                    });
                    return [4 /*yield*/, list.previous()];
                case 2:
                    previous = _a.sent();
                    previous.should.be.an('object');
                    previous.key.should.be.an('string');
                    previous.key.should.be.equals('novinha');
                    previous.pagination.should.be.an('object');
                    previous.pagination.page.should.be.equals(1);
                    previous.pagination.pages.should.be.an('array');
                    previous.pagination.pages[0].should.be.a('number');
                    previous.hasNext.should.be.a('function');
                    previous.hasNext().should.be.equals(true);
                    previous.hasPrevious.should.be.a('function');
                    previous.hasPrevious().should.be.equals(false);
                    previous.next.should.be.a('function');
                    previous.previous.should.be.a('function');
                    previous.videos.should.be.an('array');
                    previous.videos.forEach(function (video) {
                        video.should.be.an('object');
                        video.should.have.ownPropertyDescriptor('duration');
                        video.duration.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('path');
                        video.path.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('profile');
                        video.profile.should.be.an('object');
                        video.profile.should.have.ownPropertyDescriptor('name');
                        video.profile.name.should.be.an('string');
                        video.profile.should.have.ownPropertyDescriptor('url');
                        video.profile.url.should.be.an('string');
                        video.should.have.ownPropertyDescriptor('title');
                        video.title.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('url');
                        video.url.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('views');
                        video.views.should.be.a('string');
                    });
                    return [4 /*yield*/, list.next()];
                case 3:
                    next = _a.sent();
                    next.should.be.an('object');
                    next.key.should.be.an('string');
                    next.key.should.be.equals('novinha');
                    next.pagination.should.be.an('object');
                    next.pagination.page.should.be.equals(3);
                    next.pagination.pages.should.be.an('array');
                    next.pagination.pages[0].should.be.a('number');
                    next.hasNext.should.be.a('function');
                    next.hasNext().should.be.equals(true);
                    next.hasPrevious.should.be.a('function');
                    next.hasPrevious().should.be.equals(true);
                    next.next.should.be.a('function');
                    next.previous.should.be.a('function');
                    next.videos.should.be.an('array');
                    next.videos.forEach(function (video) {
                        video.should.be.an('object');
                        video.should.have.ownPropertyDescriptor('duration');
                        video.duration.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('path');
                        video.path.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('profile');
                        video.profile.should.be.an('object');
                        video.profile.should.have.ownPropertyDescriptor('name');
                        video.profile.name.should.be.an('string');
                        video.profile.should.have.ownPropertyDescriptor('url');
                        video.profile.url.should.be.an('string');
                        video.should.have.ownPropertyDescriptor('title');
                        video.title.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('url');
                        video.url.should.be.a('string');
                        video.should.have.ownPropertyDescriptor('views');
                        video.views.should.be.a('string');
                    });
                    return [4 /*yield*/, list.refresh()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }).timeout(10000);
    it('should fail when page parameter is beyond limit', function () { return __awaiter(void 0, void 0, void 0, function () {
        var err, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, videos.search({ key: 'novinha', page: Number.MAX_SAFE_INTEGER + 1 })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    err = error_1;
                    return [3 /*break*/, 4];
                case 3:
                    err.should.be.an('error');
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }).timeout(10000);
    it('should fail when page parameter is less than 1', function () { return __awaiter(void 0, void 0, void 0, function () {
        var err, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, videos.search({ key: 'novinha', page: 0 })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_2 = _a.sent();
                    err = error_2;
                    return [3 /*break*/, 4];
                case 3:
                    err.should.be.an('error');
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }).timeout(10000);
});
//# sourceMappingURL=search.spec.js.map