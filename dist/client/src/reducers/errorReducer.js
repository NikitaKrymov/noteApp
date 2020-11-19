"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
const NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
const TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
const INITIAL_STATE = {
    authError: '',
    appError: ''
};
exports.default = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionTypes_1.AUTH_USER_FAILED:
            return Object.assign(Object.assign({}, state), { authError: action.payload.message });
        case AuthActionTypes_1.REG_USER_FAILED:
            return Object.assign(Object.assign({}, state), { authError: action.payload.message });
        case AuthActionTypes_1.USERNAME_VALIDATION_FAILED:
            return Object.assign(Object.assign({}, state), { authError: action.payload.message });
        case TaskActionTypes_1.FETCH_TASKS_FAILED:
            return Object.assign(Object.assign({}, state), { appError: action.payload.message });
        case AuthActionTypes_1.FETCH_USER_FAILED:
            return Object.assign(Object.assign({}, state), { appError: action.payload.message });
        case NotebookActionTypes_1.DELETE_NOTEBOOK_FAILED:
            return Object.assign(Object.assign({}, state), { appError: action.payload.message });
        default:
            return INITIAL_STATE;
    }
};
//# sourceMappingURL=errorReducer.js.map