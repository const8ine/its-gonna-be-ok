"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const js_base64_1 = require("js-base64");
const lodash_1 = require("lodash");
const database_1 = __importDefault(require("../config/database"));
const router = express_1.default.Router();
router.get('/', (request, response) => {
    response.json({ status: 'success' });
});
router.get('/ids', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (lodash_1.isEmpty(request.query) && lodash_1.isEmpty(request.body)) {
        return response.json({ status: 'error' });
    }
    const params = ((_a = request.query) === null || _a === void 0 ? void 0 : _a.ids) || ((_b = request.body) === null || _b === void 0 ? void 0 : _b.ids) || '';
    const ids = lodash_1.compact(params.split(',').map(lodash_1.toNumber));
    const collection = (yield database_1.default)
        .get('data', [])
        .filter((value) => lodash_1.includes(ids, value.id))
        .value();
    return response.json({
        status: 'success',
        data: collection
    });
}));
router.get('/by', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    if (lodash_1.isEmpty(request.query) && lodash_1.isEmpty(request.body)) {
        return response.json({ status: 'error' });
    }
    const params = ((_c = request.query) === null || _c === void 0 ? void 0 : _c.hash) || ((_d = request.body) === null || _d === void 0 ? void 0 : _d.hash) || '';
    const ids = lodash_1.compact(js_base64_1.decode(params).split(',').map(lodash_1.toNumber));
    const collection = (yield database_1.default)
        .get('data', [])
        .filter((value) => lodash_1.includes(ids, value.id))
        .value();
    response.json({
        status: 'success',
        data: collection
    });
}));
router.get('/generate', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    if (lodash_1.isEmpty(request.query) && lodash_1.isEmpty(request.body)) {
        return response.json({ status: 'error' });
    }
    const ids = ((_e = request.query) === null || _e === void 0 ? void 0 : _e.ids) || ((_f = request.body) === null || _f === void 0 ? void 0 : _f.ids) || '';
    response.json({
        status: 'success',
        data: js_base64_1.encode(ids)
    });
}));
router.get('/id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    if (lodash_1.isEmpty(request.query) && lodash_1.isEmpty(request.body)) {
        return response.json({ status: 'error' });
    }
    const id = ((_g = request.query) === null || _g === void 0 ? void 0 : _g.id) || ((_h = request.body) === null || _h === void 0 ? void 0 : _h.id) || '';
    const collection = (yield database_1.default)
        .get('data', [])
        .filter((value) => lodash_1.toNumber(id) === value.id)
        .value();
    response.json({
        status: 'success',
        data: collection
    });
}));
exports.default = router;
