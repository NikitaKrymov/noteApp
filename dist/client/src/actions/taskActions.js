"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskFailed = exports.deleteTaskSuccess = exports.deleteTaskRequest = exports.openTaskFailed = exports.openTaskSuccess = exports.openTaskRequest = exports.finishTaskFailed = exports.finishTaskSuccess = exports.finishTaskRequest = exports.saveTaskFailed = exports.saveTaskSuccess = exports.saveTaskRequest = exports.fetchTasksFailed = exports.fetchTasksSuccess = exports.fetchTasksRequest = exports.createTaskRequest = void 0;
var TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
exports.createTaskRequest = function (newTask) { return ({
    type: TaskActionTypes_1.CREATE_TASK_REQUEST,
    payload: newTask
}); };
exports.fetchTasksRequest = function (notebookId) { return ({
    type: TaskActionTypes_1.FETCH_TASKS_REQUEST,
    payload: notebookId
}); };
exports.fetchTasksSuccess = function (tasks) { return ({
    type: TaskActionTypes_1.FETCH_TASKS_SUCCESS,
    payload: tasks
}); };
exports.fetchTasksFailed = function (error) { return ({
    type: TaskActionTypes_1.FETCH_TASKS_FAILED,
    payload: error
}); };
exports.saveTaskRequest = function (taskId, taskSubject) { return ({
    type: TaskActionTypes_1.SAVE_TASK_REQUEST,
    payload: {
        taskId: taskId,
        taskSubject: taskSubject
    }
}); };
exports.saveTaskSuccess = function () { return ({
    type: TaskActionTypes_1.SAVE_TASK_SUCCESS
}); };
exports.saveTaskFailed = function (error) { return ({
    type: TaskActionTypes_1.SAVE_TASK_FAILED,
    payload: error
}); };
exports.finishTaskRequest = function (taskId, notebookId) { return ({
    type: TaskActionTypes_1.FINISH_TASK_REQUEST,
    payload: {
        taskId: taskId,
        notebookId: notebookId
    }
}); };
exports.finishTaskSuccess = function () { return ({
    type: TaskActionTypes_1.FINISH_TASK_SUCCESS
}); };
exports.finishTaskFailed = function (error) { return ({
    type: TaskActionTypes_1.FINISH_TASK_FAILED,
    payload: error
}); };
exports.openTaskRequest = function (taskId, notebookId) { return ({
    type: TaskActionTypes_1.OPEN_TASK_REQUEST,
    payload: {
        taskId: taskId,
        notebookId: notebookId
    }
}); };
exports.openTaskSuccess = function () { return ({
    type: TaskActionTypes_1.OPEN_TASK_SUCCESS
}); };
exports.openTaskFailed = function (error) { return ({
    type: TaskActionTypes_1.OPEN_TASK_FAILED,
    payload: error
}); };
exports.deleteTaskRequest = function (task) { return ({
    type: TaskActionTypes_1.DELETE_TASK_REQUEST,
    payload: task
}); };
exports.deleteTaskSuccess = function () { return ({
    type: TaskActionTypes_1.DELETE_TASK_SUCCESS
}); };
exports.deleteTaskFailed = function (error) { return ({
    type: TaskActionTypes_1.DELETE_TASK_FAILED,
    payload: error
}); };
//# sourceMappingURL=taskActions.js.map