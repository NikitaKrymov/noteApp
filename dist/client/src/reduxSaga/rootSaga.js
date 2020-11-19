"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
const NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
const TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
const authSagas_1 = require("./authSagas");
const notebookSagas_1 = require("./notebookSagas");
const taskSagas_1 = require("./taskSagas");
function* rootSaga() {
    yield effects_1.takeLatest(AuthActionTypes_1.FETCH_USER_REQUEST, authSagas_1.fetchCurrentUser);
    yield effects_1.takeLatest(AuthActionTypes_1.USERNAME_VALIDATION_REQUEST, authSagas_1.validateUsername);
    yield effects_1.takeLatest(AuthActionTypes_1.AUTH_USER_REQUEST, authSagas_1.authenticateUser);
    yield effects_1.takeLatest(AuthActionTypes_1.REG_USER_REQUEST, authSagas_1.registerUser);
    yield effects_1.takeLatest(AuthActionTypes_1.PASSWORDS_VALIDATION_REQUEST, authSagas_1.validatePasswords);
    yield effects_1.takeLatest(NotebookActionTypes_1.CREATE_NOTEBOOK_REQUEST, notebookSagas_1.createNotebook);
    yield effects_1.takeLatest(NotebookActionTypes_1.FETCH_NOTEBOOKS_REQUEST, notebookSagas_1.fetchNotebooks);
    yield effects_1.takeLatest(TaskActionTypes_1.CREATE_TASK_REQUEST, taskSagas_1.createTask);
    yield effects_1.takeLatest(TaskActionTypes_1.FETCH_TASKS_REQUEST, taskSagas_1.fetchTasks);
    yield effects_1.takeLatest(TaskActionTypes_1.FINISH_TASK_REQUEST, taskSagas_1.finishTask);
    yield effects_1.takeLatest(TaskActionTypes_1.OPEN_TASK_REQUEST, taskSagas_1.openTask);
    yield effects_1.takeLatest(AuthActionTypes_1.LOG_OUT_USER_REQUEST, authSagas_1.logoutUser);
    yield effects_1.takeLatest(TaskActionTypes_1.SAVE_TASK_REQUEST, taskSagas_1.saveTask);
    yield effects_1.takeLatest(TaskActionTypes_1.DELETE_TASK_REQUEST, taskSagas_1.deleteTask);
    yield effects_1.takeLatest(NotebookActionTypes_1.DELETE_NOTEBOOK_REQUEST, notebookSagas_1.deleteNotebook);
}
exports.default = rootSaga;
//# sourceMappingURL=rootSaga.js.map