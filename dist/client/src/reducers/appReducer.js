"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
const NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
const lodash_1 = __importDefault(require("lodash"));
const TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
const INITIAL_STATE = {
    userId: '',
    authStatus: false,
    userNotebooks: [],
    notebookTasks: [],
    isTaskLoading: true,
    isNotebookLoading: true,
    isUserLoading: true
};
exports.default = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes_1.AUTH_USER_SUCCESS:
            return Object.assign(Object.assign({}, state), { authStatus: true, userId: action.payload._id, isUserLoading: false });
        case NotebookActionTypes_1.FETCH_NOTEBOOKS_SUCCESS:
            return Object.assign(Object.assign({}, state), { userNotebooks: lodash_1.default.mapKeys(action.payload, '_id'), isNotebookLoading: false });
        case TaskActionTypes_1.FETCH_TASKS_SUCCESS:
            return Object.assign(Object.assign({}, state), { notebookTasks: lodash_1.default.mapKeys(action.payload, 'index'), isTaskLoading: false });
        case AuthActionTypes_1.LOG_OUT_USER_SUCCESS:
            return Object.assign(Object.assign({}, state), { authStatus: false });
        case AuthActionTypes_1.FETCH_USER_FAILED:
            return Object.assign(Object.assign({}, state), { isUserLoading: false });
        case NotebookActionTypes_1.DELETE_NOTEBOOK_SUCCESS:
            return Object.assign(Object.assign({}, state), { isNotebookLoading: true });
        default:
            return state;
    }
};
//# sourceMappingURL=appReducer.js.map