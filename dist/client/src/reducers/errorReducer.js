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
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
var NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
var TaskActionTypes_1 = require("../types/actionTypes/TaskActionTypes");
var INITIAL_STATE = {
    authError: '',
    appError: ''
};
exports.default = (function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case AuthActionTypes_1.AUTH_USER_FAILED:
            return __assign(__assign({}, state), { authError: action.payload.message });
        case AuthActionTypes_1.REG_USER_FAILED:
            return __assign(__assign({}, state), { authError: action.payload.message });
        case AuthActionTypes_1.USERNAME_VALIDATION_FAILED:
            return __assign(__assign({}, state), { authError: action.payload.message });
        case TaskActionTypes_1.FETCH_TASKS_FAILED:
            return __assign(__assign({}, state), { appError: action.payload.message });
        case AuthActionTypes_1.FETCH_USER_FAILED:
            return __assign(__assign({}, state), { appError: action.payload.message });
        case NotebookActionTypes_1.DELETE_NOTEBOOK_FAILED:
            return __assign(__assign({}, state), { appError: action.payload.message });
        default:
            return INITIAL_STATE;
    }
});
//# sourceMappingURL=errorReducer.js.map