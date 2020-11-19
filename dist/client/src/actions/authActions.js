"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserFailed = exports.fetchUserSuccess = exports.fetchUserRequest = exports.logoutUserFailed = exports.logoutUserSuccess = exports.logoutUserRequest = exports.registerUserFailed = exports.registerUserSuccess = exports.registerUser = exports.validatePasswordsFailed = exports.validatePasswordsSuccess = exports.validatePasswordsRequest = exports.validateUsernameFailed = exports.validateUsernameSuccess = exports.validateUsername = exports.authenticateUserFailed = exports.authenticateUserSuccess = exports.authenticateUser = void 0;
var AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
exports.authenticateUser = function (userCredentials) { return ({
    type: AuthActionTypes_1.AUTH_USER_REQUEST,
    payload: userCredentials
}); };
exports.authenticateUserSuccess = function (userData) { return ({
    type: AuthActionTypes_1.AUTH_USER_SUCCESS,
    payload: userData
}); };
exports.authenticateUserFailed = function (authError) { return ({
    type: AuthActionTypes_1.AUTH_USER_FAILED,
    payload: authError
}); };
exports.validateUsername = function (username) { return ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_REQUEST,
    payload: username
}); };
exports.validateUsernameSuccess = function () { return ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_SUCCESS
}); };
exports.validateUsernameFailed = function (authError) { return ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_FAILED,
    payload: authError
}); };
exports.validatePasswordsRequest = function (passwords) { return ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_REQUEST,
    payload: passwords
}); };
exports.validatePasswordsSuccess = function () { return ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_SUCCESS
}); };
exports.validatePasswordsFailed = function (authError) { return ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_FAILED,
    payload: authError
}); };
exports.registerUser = function (credentials) { return ({
    type: AuthActionTypes_1.REG_USER_REQUEST,
    payload: credentials
}); };
exports.registerUserSuccess = function () { return ({
    type: AuthActionTypes_1.REG_USER_SUCCESS,
    payload: "User has been successfully registered"
}); };
exports.registerUserFailed = function (authError) { return ({
    type: AuthActionTypes_1.REG_USER_FAILED,
    payload: authError
}); };
exports.logoutUserRequest = function () { return ({
    type: AuthActionTypes_1.LOG_OUT_USER_REQUEST
}); };
exports.logoutUserSuccess = function () { return ({
    type: AuthActionTypes_1.LOG_OUT_USER_SUCCESS
}); };
exports.logoutUserFailed = function (error) { return ({
    type: AuthActionTypes_1.LOG_OUT_USER_FAILED,
    payload: error
}); };
exports.fetchUserRequest = function () { return ({
    type: AuthActionTypes_1.FETCH_USER_REQUEST
}); };
exports.fetchUserSuccess = function () { return ({
    type: AuthActionTypes_1.FETCH_USER_SUCCESS
}); };
exports.fetchUserFailed = function (error) { return ({
    type: AuthActionTypes_1.FETCH_USER_FAILED,
    payload: error
}); };
//# sourceMappingURL=authActions.js.map