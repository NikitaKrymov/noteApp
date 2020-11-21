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
var Task = require('../../models/Task');
var authorizeUser = require('../../middleware/authorizeUser');
module.exports = function (app) {
    app.get('/api/webPlanner/fetchTasks', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var notebookId, taskList, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    notebookId = req.query.notebookId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Task.find({ notebook: notebookId })];
                case 2:
                    taskList = _a.sent();
                    console.log(taskList);
                    res.send({
                        status: 1000,
                        payload: taskList
                    });
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    res.send({
                        errorCode: 1099,
                        message: "Failed to fetch tasks"
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/createTask', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, subject, notebookId, taskList, newTask, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body.task, subject = _a.subject, notebookId = _a.notebookId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4, Task.find({ notebook: notebookId })];
                case 2:
                    taskList = _b.sent();
                    newTask = new Task({
                        subject: subject,
                        notebook: notebookId,
                        index: taskList.length
                    });
                    return [4, newTask.save()];
                case 3:
                    _b.sent();
                    res.send({
                        status: 1500,
                        message: "New task has been created"
                    });
                    return [3, 5];
                case 4:
                    e_2 = _b.sent();
                    res.send({
                        errorCode: 1201,
                        message: "Failed to create a task"
                    });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/finishTask', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var taskId, task, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskId = req.body.taskId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Task.findOne({ _id: taskId })];
                case 2:
                    task = _a.sent();
                    task.isDone = true;
                    task.save();
                    res.send({
                        status: 2000
                    });
                    return [3, 4];
                case 3:
                    e_3 = _a.sent();
                    res.send({
                        error: 500,
                        message: 'Failed to finish task'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/openTask', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var taskId, task, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskId = req.body.taskId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Task.findOne({ _id: taskId })];
                case 2:
                    task = _a.sent();
                    task.isDone = false;
                    task.save();
                    res.send({
                        status: 2100
                    });
                    return [3, 4];
                case 3:
                    e_4 = _a.sent();
                    res.send({
                        error: 505,
                        message: 'Failed to reopen a task'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/saveTask', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, taskId, taskSubject, existingTask, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body.editedTask, taskId = _a.taskId, taskSubject = _a.taskSubject;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4, Task.findOne({ _id: taskId })];
                case 2:
                    existingTask = _b.sent();
                    existingTask.subject = taskSubject;
                    existingTask.isDone = false;
                    return [4, existingTask.save()];
                case 3:
                    _b.sent();
                    res.send({
                        status: 1000,
                        notebookId: existingTask.notebook
                    });
                    return [3, 5];
                case 4:
                    error_1 = _b.sent();
                    res.send({
                        code: 880,
                        errorMessage: 'Unable to save task'
                    });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    app.post('/api/webPlanner/deleteTask', authorizeUser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var taskId, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskId = req.body.taskId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, Task.deleteOne({ _id: taskId })];
                case 2:
                    _a.sent();
                    res.send({
                        status: 1000
                    });
                    return [3, 4];
                case 3:
                    e_5 = _a.sent();
                    res.send({
                        code: 850,
                        errorMessage: 'Delete task has failed'
                    });
                    return [3, 4];
                case 4: return [2];
            }
        });
    }); });
};
//# sourceMappingURL=tasksRoutes.js.map