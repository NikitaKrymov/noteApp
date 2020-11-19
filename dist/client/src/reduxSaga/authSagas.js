"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.fetchCurrentUser = exports.registerUser = exports.authenticateUser = exports.validatePasswords = exports.validateUsername = void 0;
const effects_1 = require("redux-saga/effects");
const webPlannerApi_1 = __importDefault(require("../utils/webPlannerApi"));
const authActions_1 = require("../actions/authActions");
const notebookActions_1 = require("../actions/notebookActions");
function* validateUsername(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get(`/validateUsername?username=${action.payload}`));
    if (response.data.errorCode) {
        yield effects_1.put(authActions_1.validateUsernameFailed(response.data));
    }
}
exports.validateUsername = validateUsername;
function* validatePasswords(action) {
    if (action.payload.password !== action.payload.confirmPassword) {
        const authError = {
            errorCode: 801,
            message: 'Passwords do not match'
        };
        yield effects_1.put(authActions_1.registerUserFailed(authError));
    }
}
exports.validatePasswords = validatePasswords;
function* authenticateUser(action) {
    if (!action.payload.username || !action.payload.password) {
        const authError = {
            errorCode: 802,
            message: 'Fill all fields'
        };
        yield effects_1.put(authActions_1.authenticateUserFailed(authError));
    }
    else {
        const response = yield effects_1.call(() => webPlannerApi_1.default.post('/authenticateUser', { credentials: action.payload }));
        if (response.data.errorCode) {
            yield effects_1.put(authActions_1.authenticateUserFailed(response.data));
        }
        else if (response.data.code === 1000) {
            yield effects_1.put(authActions_1.authenticateUserSuccess(response.data.userData));
            const state = yield effects_1.select();
            yield effects_1.put(notebookActions_1.fetchNotebooksRequest(state.app.userId));
        }
    }
}
exports.authenticateUser = authenticateUser;
function* registerUser(action) {
    if (!action.payload.username || !action.payload.password || !action.payload.confirmPassword) {
        const authError = {
            errorCode: 802,
            message: 'Fill all fields'
        };
        yield effects_1.put(authActions_1.registerUserFailed(authError));
    }
    else {
        const response = yield effects_1.call(() => webPlannerApi_1.default.post('/createUser', { credentials: action.payload }));
        console.log(response.data);
        if (response.data.code === 900) {
            yield effects_1.put(authActions_1.registerUserSuccess());
            window.location.reload();
        }
        else {
            yield effects_1.put(authActions_1.registerUserFailed(response.data.message));
        }
    }
}
exports.registerUser = registerUser;
function* fetchCurrentUser(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get('/current_user'));
    console.log(response);
    if (!response.data.code) {
        console.log(response);
        yield effects_1.put(authActions_1.authenticateUserSuccess(response.data));
        yield effects_1.put(notebookActions_1.fetchNotebooksRequest(response.data._id));
    }
    else {
        yield effects_1.put(authActions_1.fetchUserFailed(response.data));
    }
}
exports.fetchCurrentUser = fetchCurrentUser;
function* logoutUser(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get('/logout'));
    console.log(response);
    if (response.data.status === 1000) {
        yield effects_1.put(authActions_1.logoutUserSuccess());
    }
    else {
        yield effects_1.put(authActions_1.logoutUserFailed(response.data));
    }
}
exports.logoutUser = logoutUser;
//# sourceMappingURL=authSagas.js.map