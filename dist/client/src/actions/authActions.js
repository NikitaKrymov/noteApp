"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserFailed = exports.fetchUserSuccess = exports.fetchUserRequest = exports.logoutUserFailed = exports.logoutUserSuccess = exports.logoutUserRequest = exports.registerUserFailed = exports.registerUserSuccess = exports.registerUser = exports.validatePasswordsFailed = exports.validatePasswordsSuccess = exports.validatePasswordsRequest = exports.validateUsernameFailed = exports.validateUsernameSuccess = exports.validateUsername = exports.authenticateUserFailed = exports.authenticateUserSuccess = exports.authenticateUser = void 0;
const AuthActionTypes_1 = require("../types/actionTypes/AuthActionTypes");
exports.authenticateUser = (userCredentials) => ({
    type: AuthActionTypes_1.AUTH_USER_REQUEST,
    payload: userCredentials
});
exports.authenticateUserSuccess = (userData) => ({
    type: AuthActionTypes_1.AUTH_USER_SUCCESS,
    payload: userData
});
exports.authenticateUserFailed = (authError) => ({
    type: AuthActionTypes_1.AUTH_USER_FAILED,
    payload: authError
});
exports.validateUsername = (username) => ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_REQUEST,
    payload: username
});
exports.validateUsernameSuccess = () => ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_SUCCESS
});
exports.validateUsernameFailed = (authError) => ({
    type: AuthActionTypes_1.USERNAME_VALIDATION_FAILED,
    payload: authError
});
exports.validatePasswordsRequest = (passwords) => ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_REQUEST,
    payload: passwords
});
exports.validatePasswordsSuccess = () => ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_SUCCESS
});
exports.validatePasswordsFailed = (authError) => ({
    type: AuthActionTypes_1.PASSWORDS_VALIDATION_FAILED,
    payload: authError
});
exports.registerUser = (credentials) => ({
    type: AuthActionTypes_1.REG_USER_REQUEST,
    payload: credentials
});
exports.registerUserSuccess = () => ({
    type: AuthActionTypes_1.REG_USER_SUCCESS,
    payload: "User has been successfully registered"
});
exports.registerUserFailed = (authError) => ({
    type: AuthActionTypes_1.REG_USER_FAILED,
    payload: authError
});
exports.logoutUserRequest = () => ({
    type: AuthActionTypes_1.LOG_OUT_USER_REQUEST
});
exports.logoutUserSuccess = () => ({
    type: AuthActionTypes_1.LOG_OUT_USER_SUCCESS
});
exports.logoutUserFailed = (error) => ({
    type: AuthActionTypes_1.LOG_OUT_USER_FAILED,
    payload: error
});
exports.fetchUserRequest = () => ({
    type: AuthActionTypes_1.FETCH_USER_REQUEST
});
exports.fetchUserSuccess = () => ({
    type: AuthActionTypes_1.FETCH_USER_SUCCESS
});
exports.fetchUserFailed = (error) => ({
    type: AuthActionTypes_1.FETCH_USER_FAILED,
    payload: error
});
//# sourceMappingURL=authActions.js.map