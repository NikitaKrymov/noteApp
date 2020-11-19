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
Object.defineProperty(exports, "__esModule", { value: true });
var Notebook = require('../../models/Notebook');
var authorizeUser = require('../../middleware/authorizeUser');
module.exports = function (app) {
    app.post('/api/webPlanner/createNotebook', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, title, description, owner, newNotebook, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(req.body);
                    _a = req.body.newNotebook, title = _a.title, description = _a.description, owner = _a.owner;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    newNotebook = new Notebook({
                        title: title,
                        description: description,
                        owner: owner
                    });
                    return [4, newNotebook.save()];
                case 2:
                    _b.sent();
                    res.send({
                        code: 910,
                        message: 'Notebook has been saved'
                    });
                    return [3, 4];
                case 3:
                    e_1 = _b.sent();
                    console.log(e_1);
                    res.send({
                        code: 905,
                        message: e_1
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.get('/api/webPlanner/fetchNotebooks', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, notebookList, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.query.userId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Notebook.find({ owner: userId })];
                case 2:
                    notebookList = _a.sent();
                    res.send({
                        status: 1000,
                        notebookList: notebookList
                    });
                    return [3, 4];
                case 3:
                    e_2 = _a.sent();
                    res.send({
                        status: 999,
                        message: 'Unable to fetch notebooks'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.get('/api/fetchNotebook', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var notebookId, notebookData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    notebookId = req.query.notebookId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Notebook.findOne({ _id: notebookId })];
                case 2:
                    notebookData = _a.sent();
                    res.send({
                        status: 1000,
                        notebookData: notebookData
                    });
                    return [3, 4];
                case 3:
                    error_1 = _a.sent();
                    res.send({
                        code: 700,
                        message: 'Unable to fetch notebook data'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/deleteNotebook', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var notebookId, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.body);
                    notebookId = req.body.notebookId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Notebook.deleteOne({ _id: notebookId._id })];
                case 2:
                    _a.sent();
                    res.send({
                        status: 1000,
                        userId: notebookId.owner
                    });
                    return [3, 4];
                case 3:
                    e_3 = _a.sent();
                    res.send({
                        code: 701,
                        message: 'Unable to delete Notebook'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
};
//# sourceMappingURL=notebookRoutes.js.map