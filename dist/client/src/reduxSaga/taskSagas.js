"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.saveTask = exports.openTask = exports.finishTask = exports.createTask = exports.fetchTasks = void 0;
const effects_1 = require("redux-saga/effects");
const taskActions_1 = require("../actions/taskActions");
const webPlannerApi_1 = __importDefault(require("../utils/webPlannerApi"));
function* fetchTasks(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get(`/fetchTasks/${action.payload}`));
    if (response.data.status === 1100) {
        console.log(response.data.payload);
        yield effects_1.put(taskActions_1.fetchTasksSuccess(response.data.payload));
    }
    else {
        yield effects_1.put(taskActions_1.fetchTasksFailed(response.data));
    }
}
exports.fetchTasks = fetchTasks;
function* createTask(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/createTask', { task: action.payload }));
    if (response.data.status === 1500) {
        yield effects_1.put(taskActions_1.fetchTasksRequest(action.payload.notebookId));
    }
    else {
        console.log(response);
    }
}
exports.createTask = createTask;
function* finishTask(action) {
    console.log('Finishing task', action.payload);
    console.log(action.payload);
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/finishTask', { taskId: action.payload.taskId }));
    if (response.data.status === 2000) {
        console.log(action.payload.notebookId);
        yield effects_1.put(taskActions_1.fetchTasksRequest(action.payload.notebookId));
    }
}
exports.finishTask = finishTask;
function* openTask(action) {
    console.log("Opening task", action.payload);
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/openTask', { taskId: action.payload.taskId }));
    if (response.data.status === 2100) {
        yield effects_1.put(taskActions_1.fetchTasksRequest(action.payload.notebookId));
    }
}
exports.openTask = openTask;
function* saveTask(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/saveTask', { editedTask: action.payload }));
    if (response.data.status === 1000) {
        yield effects_1.put(taskActions_1.fetchTasksRequest(response.data.notebookId));
    }
    else {
        yield effects_1.put(taskActions_1.saveTaskFailed(response.data));
    }
}
exports.saveTask = saveTask;
function* deleteTask(action) {
    console.log(action.payload);
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/deleteTask', { taskId: action.payload }));
    if (response.data.status === 1000) {
        console.log(response.data);
        yield effects_1.put(taskActions_1.deleteTaskSuccess());
        yield effects_1.put(taskActions_1.fetchTasksRequest(action.payload.notebook));
    }
    else {
        yield effects_1.put(taskActions_1.deleteTaskFailed(response.data));
    }
}
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskSagas.js.map