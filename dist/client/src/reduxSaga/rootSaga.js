"use strict";
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
var effects_1 = require("redux-saga/effects");
var AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
var NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
var TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
var authSagas_1 = require("./authSagas");
var notebookSagas_1 = require("./notebookSagas");
var taskSagas_1 = require("./taskSagas");
function rootSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, effects_1.takeLatest(AuthActionTypes_1.FETCH_USER_REQUEST, authSagas_1.fetchCurrentUser)];
            case 1:
                _a.sent();
                return [4, effects_1.takeLatest(AuthActionTypes_1.USERNAME_VALIDATION_REQUEST, authSagas_1.validateUsername)];
            case 2:
                _a.sent();
                return [4, effects_1.takeLatest(AuthActionTypes_1.AUTH_USER_REQUEST, authSagas_1.authenticateUser)];
            case 3:
                _a.sent();
                return [4, effects_1.takeLatest(AuthActionTypes_1.REG_USER_REQUEST, authSagas_1.registerUser)];
            case 4:
                _a.sent();
                return [4, effects_1.takeLatest(AuthActionTypes_1.PASSWORDS_VALIDATION_REQUEST, authSagas_1.validatePasswords)];
            case 5:
                _a.sent();
                return [4, effects_1.takeLatest(NotebookActionTypes_1.CREATE_NOTEBOOK_REQUEST, notebookSagas_1.createNotebook)];
            case 6:
                _a.sent();
                return [4, effects_1.takeLatest(NotebookActionTypes_1.FETCH_NOTEBOOKS_REQUEST, notebookSagas_1.fetchNotebooks)];
            case 7:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.CREATE_TASK_REQUEST, taskSagas_1.createTask)];
            case 8:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.FETCH_TASKS_REQUEST, taskSagas_1.fetchTasks)];
            case 9:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.FINISH_TASK_REQUEST, taskSagas_1.finishTask)];
            case 10:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.OPEN_TASK_REQUEST, taskSagas_1.openTask)];
            case 11:
                _a.sent();
                return [4, effects_1.takeLatest(AuthActionTypes_1.LOG_OUT_USER_REQUEST, authSagas_1.logoutUser)];
            case 12:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.SAVE_TASK_REQUEST, taskSagas_1.saveTask)];
            case 13:
                _a.sent();
                return [4, effects_1.takeLatest(TaskActionTypes_1.DELETE_TASK_REQUEST, taskSagas_1.deleteTask)];
            case 14:
                _a.sent();
                return [4, effects_1.takeLatest(NotebookActionTypes_1.DELETE_NOTEBOOK_REQUEST, notebookSagas_1.deleteNotebook)];
            case 15:
                _a.sent();
                return [4, effects_1.takeLatest(NotebookActionTypes_1.FETCH_NOTEBOOK_REQUEST, notebookSagas_1.fetchNotebook)];
            case 16:
                _a.sent();
                return [4, effects_1.takeLatest(NotebookActionTypes_1.EDIT_NOTEBOOK_REQUEST, notebookSagas_1.editNotebook)];
            case 17:
                _a.sent();
                return [2];
        }
    });
}
exports.default = rootSaga;
//# sourceMappingURL=rootSaga.js.map