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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.fetchCurrentUser = exports.registerUser = exports.authenticateUser = exports.validatePasswords = exports.validateUsername = void 0;
var effects_1 = require("redux-saga/effects");
var webPlannerApi_1 = __importDefault(require("../utils/webPlannerApi"));
var authActions_1 = require("../actions/authActions");
var notebookActions_1 = require("../actions/notebookActions");
var history_1 = __importDefault(require("../history"));
function validateUsername(action) {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, effects_1.call(function () { return webPlannerApi_1.default.get("/validateUsername?username=" + action.payload); })];
            case 1:
                response = _a.sent();
                if (!response.data.errorCode) return [3, 3];
                return [4, effects_1.put(authActions_1.validateUsernameFailed(response.data))];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2];
        }
    });
}
exports.validateUsername = validateUsername;
function validatePasswords(action) {
    var authError;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(action.payload.password !== action.payload.confirmPassword)) return [3, 2];
                authError = {
                    errorCode: 801,
                    message: 'Passwords do not match'
                };
                return [4, effects_1.put(authActions_1.registerUserFailed(authError))];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2];
        }
    });
}
exports.validatePasswords = validatePasswords;
function authenticateUser(action) {
    var authError, response, state;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(!action.payload.username || !action.payload.password)) return [3, 2];
                authError = {
                    errorCode: 802,
                    message: 'Fill all fields'
                };
                return [4, effects_1.put(authActions_1.authenticateUserFailed(authError))];
            case 1:
                _a.sent();
                return [3, 9];
            case 2: return [4, effects_1.call(function () { return webPlannerApi_1.default.post('/authenticateUser', { credentials: action.payload }); })];
            case 3:
                response = _a.sent();
                if (!response.data.errorCode) return [3, 5];
                return [4, effects_1.put(authActions_1.authenticateUserFailed(response.data))];
            case 4:
                _a.sent();
                return [3, 9];
            case 5:
                if (!(response.data.code === 1000)) return [3, 9];
                return [4, effects_1.put(authActions_1.authenticateUserSuccess(response.data.userData))];
            case 6:
                _a.sent();
                history_1.default.push('/');
                return [4, effects_1.select()];
            case 7:
                state = _a.sent();
                return [4, effects_1.put(notebookActions_1.fetchNotebooksRequest(state.app.userId))];
            case 8:
                _a.sent();
                _a.label = 9;
            case 9: return [2];
        }
    });
}
exports.authenticateUser = authenticateUser;
function registerUser(action) {
    var authError, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(!action.payload.username || !action.payload.password || !action.payload.confirmPassword)) return [3, 2];
                authError = {
                    errorCode: 802,
                    message: 'Fill all fields'
                };
                return [4, effects_1.put(authActions_1.registerUserFailed(authError))];
            case 1:
                _a.sent();
                return [3, 7];
            case 2: return [4, effects_1.call(function () { return webPlannerApi_1.default.post('/createUser', { credentials: action.payload }); })];
            case 3:
                response = _a.sent();
                if (!(response.data.code === 900)) return [3, 5];
                return [4, effects_1.put(authActions_1.registerUserSuccess())];
            case 4:
                _a.sent();
                window.location.reload();
                return [3, 7];
            case 5: return [4, effects_1.put(authActions_1.registerUserFailed(response.data.message))];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2];
        }
    });
}
exports.registerUser = registerUser;
function fetchCurrentUser(action) {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, effects_1.call(function () { return webPlannerApi_1.default.get('/current_user'); })];
            case 1:
                response = _a.sent();
                if (!!response.data.code) return [3, 4];
                console.log(response);
                return [4, effects_1.put(authActions_1.authenticateUserSuccess(response.data))];
            case 2:
                _a.sent();
                return [4, effects_1.put(notebookActions_1.fetchNotebooksRequest(response.data._id))];
            case 3:
                _a.sent();
                return [3, 6];
            case 4: return [4, effects_1.put(authActions_1.fetchUserFailed(response.data))];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2];
        }
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
function logoutUser(action) {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, effects_1.call(function () { return webPlannerApi_1.default.get('/logout'); })];
            case 1:
                response = _a.sent();
                if (!(response.data.status === 1000)) return [3, 3];
                return [4, effects_1.put(authActions_1.logoutUserSuccess())];
            case 2:
                _a.sent();
                return [3, 5];
            case 3: return [4, effects_1.put(authActions_1.logoutUserFailed(response.data))];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [2];
        }
    });
}
exports.logoutUser = logoutUser;
//# sourceMappingURL=authSagas.js.map