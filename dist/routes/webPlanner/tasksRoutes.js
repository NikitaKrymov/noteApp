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
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../../models/Task');
const authorizeUser = require('../../middleware/authorizeUser');
module.exports = (app) => {
    app.get('/api/webPlanner/fetchTasks/:notebookId', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { notebookId } = req.params;
        try {
            const taskList = yield Task.find({ notebook: notebookId });
            res.send({
                status: 1100,
                payload: taskList
            });
        }
        catch (e) {
            res.send({
                errorCode: 1099,
                message: "Failed to fetch tasks"
            });
        }
    }));
    app.post('/api/webPlanner/createTask', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { task: { subject, notebookId } } = req.body;
        try {
            const taskList = yield Task.find({ notebook: notebookId });
            const newTask = new Task({
                subject,
                notebook: notebookId,
                index: taskList.length
            });
            yield newTask.save();
            res.send({
                status: 1500,
                message: "New task has been created"
            });
        }
        catch (e) {
            res.send({
                errorCode: 1201,
                message: "Failed to create a task"
            });
        }
    }));
    app.post('/api/webPlanner/finishTask', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskId } = req.body;
        try {
            const task = yield Task.findOne({ _id: taskId });
            task.isDone = true;
            task.save();
            res.send({
                status: 2000
            });
        }
        catch (e) {
            res.send({
                error: 500,
                message: 'Failed to finish task'
            });
        }
    }));
    app.post('/api/webPlanner/openTask', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskId } = req.body;
        try {
            const task = yield Task.findOne({ _id: taskId });
            task.isDone = false;
            task.save();
            res.send({
                status: 2100
            });
        }
        catch (e) {
            res.send({
                error: 505,
                message: 'Failed to reopen a task'
            });
        }
    }));
    app.post('/api/webPlanner/saveTask', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { editedTask: { taskId, taskSubject } } = req.body;
        try {
            const existingTask = yield Task.findOne({ _id: taskId });
            existingTask.subject = taskSubject;
            existingTask.isDone = false;
            yield existingTask.save();
            res.send({
                status: 1000,
                notebookId: existingTask.notebook
            });
        }
        catch (error) {
            res.send({
                code: 880,
                errorMessage: 'Unable to save task'
            });
        }
    }));
    app.post('/api/webPlanner/deleteTask', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { taskId } = req.body;
        try {
            yield Task.deleteOne({ _id: taskId });
            res.send({
                status: 1000
            });
        }
        catch (e) {
            res.send({
                code: 850,
                errorMessage: 'Delete task has failed'
            });
        }
    }));
};
//# sourceMappingURL=tasksRoutes.js.map