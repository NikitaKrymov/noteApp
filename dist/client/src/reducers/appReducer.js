"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
var NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
var lodash_1 = __importDefault(require("lodash"));
var TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
var INITIAL_STATE = {
    userId: '',
    authStatus: false,
    userNotebooks: [],
    notebookTasks: [],
    isTaskLoading: true,
    isNotebookLoading: true,
    isUserLoading: true,
    currentNotebook: {
        title: '',
        description: '',
        _id: '',
        closedStatus: false,
        owner: ''
    }
};
exports.default = (function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case AuthActionTypes_1.AUTH_USER_SUCCESS:
            return __assign(__assign({}, state), { authStatus: true, userId: action.payload._id, isUserLoading: false });
        case NotebookActionTypes_1.FETCH_NOTEBOOKS_SUCCESS:
            return __assign(__assign({}, state), { userNotebooks: lodash_1.default.mapKeys(action.payload, '_id'), isNotebookLoading: false });
        case TaskActionTypes_1.FETCH_TASKS_SUCCESS:
            return __assign(__assign({}, state), { notebookTasks: lodash_1.default.mapKeys(action.payload, 'index'), isTaskLoading: false });
        case AuthActionTypes_1.LOG_OUT_USER_SUCCESS:
            return __assign(__assign({}, state), { authStatus: false, isTaskLoading: true, isNotebookLoading: true, isUserLoading: true, isInitialTaskLoading: true });
        case AuthActionTypes_1.FETCH_USER_FAILED:
            return __assign(__assign({}, state), { isUserLoading: false });
        case NotebookActionTypes_1.DELETE_NOTEBOOK_SUCCESS:
            return __assign(__assign({}, state), { isNotebookLoading: true });
        case TaskActionTypes_1.FETCH_TASKS_REQUEST:
            return __assign(__assign({}, state), { isTaskLoading: true });
        case NotebookActionTypes_1.FETCH_NOTEBOOKS_REQUEST:
            return __assign(__assign({}, state), { isNotebookLoading: true });
        case NotebookActionTypes_1.FETCH_NOTEBOOK_REQUEST:
            return __assign(__assign({}, state), { isNotebookLoading: true, notebookTasks: [] });
        case NotebookActionTypes_1.FETCH_NOTEBOOK_SUCCESS:
            return __assign(__assign({}, state), { currentNotebook: { _id: action.payload._id, title: action.payload.title, description: action.payload.description, owner: action.payload.owner, closedStatus: action.payload.closedStatus }, isNotebookLoading: false });
        default:
            return state;
    }
});
//# sourceMappingURL=appReducer.js.map