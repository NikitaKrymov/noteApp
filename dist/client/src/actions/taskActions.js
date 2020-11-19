"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskFailed = exports.deleteTaskSuccess = exports.deleteTaskRequest = exports.openTaskFailed = exports.openTaskSuccess = exports.openTaskRequest = exports.finishTaskFailed = exports.finishTaskSuccess = exports.finishTaskRequest = exports.saveTaskFailed = exports.saveTaskSuccess = exports.saveTaskRequest = exports.fetchTasksFailed = exports.fetchTasksSuccess = exports.fetchTasksRequest = exports.createTaskRequest = void 0;
const TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
exports.createTaskRequest = (newTask) => ({
    type: TaskActionTypes_1.CREATE_TASK_REQUEST,
    payload: newTask
});
exports.fetchTasksRequest = (notebookId) => ({
    type: TaskActionTypes_1.FETCH_TASKS_REQUEST,
    payload: notebookId
});
exports.fetchTasksSuccess = (tasks) => ({
    type: TaskActionTypes_1.FETCH_TASKS_SUCCESS,
    payload: tasks
});
exports.fetchTasksFailed = (error) => ({
    type: TaskActionTypes_1.FETCH_TASKS_FAILED,
    payload: error
});
exports.saveTaskRequest = (taskId, taskSubject) => ({
    type: TaskActionTypes_1.SAVE_TASK_REQUEST,
    payload: {
        taskId,
        taskSubject
    }
});
exports.saveTaskSuccess = () => ({
    type: TaskActionTypes_1.SAVE_TASK_SUCCESS
});
exports.saveTaskFailed = (error) => ({
    type: TaskActionTypes_1.SAVE_TASK_FAILED,
    payload: error
});
exports.finishTaskRequest = (taskId, notebookId) => ({
    type: TaskActionTypes_1.FINISH_TASK_REQUEST,
    payload: {
        taskId,
        notebookId
    }
});
exports.finishTaskSuccess = () => ({
    type: TaskActionTypes_1.FINISH_TASK_SUCCESS
});
exports.finishTaskFailed = (error) => ({
    type: TaskActionTypes_1.FINISH_TASK_FAILED,
    payload: error
});
exports.openTaskRequest = (taskId, notebookId) => ({
    type: TaskActionTypes_1.OPEN_TASK_REQUEST,
    payload: {
        taskId,
        notebookId
    }
});
exports.openTaskSuccess = () => ({
    type: TaskActionTypes_1.OPEN_TASK_SUCCESS
});
exports.openTaskFailed = (error) => ({
    type: TaskActionTypes_1.OPEN_TASK_FAILED,
    payload: error
});
exports.deleteTaskRequest = (task) => ({
    type: TaskActionTypes_1.DELETE_TASK_REQUEST,
    payload: task
});
exports.deleteTaskSuccess = () => ({
    type: TaskActionTypes_1.DELETE_TASK_SUCCESS
});
exports.deleteTaskFailed = (error) => ({
    type: TaskActionTypes_1.DELETE_TASK_FAILED,
    payload: error
});
//# sourceMappingURL=taskActions.js.map