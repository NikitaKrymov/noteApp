import { AUTH_USER_FAILED, AUTH_USER_REQUEST, AUTH_USER_SUCCESS, FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOG_OUT_USER_FAILED, LOG_OUT_USER_REQUEST, LOG_OUT_USER_SUCCESS, PASSWORDS_VALIDATION_FAILED, PASSWORDS_VALIDATION_REQUEST, PASSWORDS_VALIDATION_SUCCESS, REG_USER_FAILED, REG_USER_REQUEST, REG_USER_SUCCESS, USERNAME_VALIDATION_FAILED, USERNAME_VALIDATION_REQUEST, USERNAME_VALIDATION_SUCCESS } from "../types/actionTypes/AuthActionTypes";
import { AuthenticationError, AuthenticateUser, RegisterUser, PasswordsValidation, User } from "../types/interfaces";

export const authenticateUser = (userCredentials: AuthenticateUser) => ({
    type: AUTH_USER_REQUEST,
    payload: userCredentials
});

export const authenticateUserSuccess = (userData: User) => ({
    type: AUTH_USER_SUCCESS,
    payload: userData
});

export const authenticateUserFailed = (authError: AuthenticationError) => ({
    type: AUTH_USER_FAILED,
    payload: authError
});

export const validateUsername = (username: string) => ({
    type: USERNAME_VALIDATION_REQUEST,
    payload: username
});

export const validateUsernameSuccess = () => ({
    type: USERNAME_VALIDATION_SUCCESS
});

export const validateUsernameFailed = (authError: AuthenticationError) => ({
    type: USERNAME_VALIDATION_FAILED,
    payload: authError
});

export const validatePasswordsRequest = (passwords: PasswordsValidation) => ({
    type: PASSWORDS_VALIDATION_REQUEST,
    payload: passwords
})

export const validatePasswordsSuccess = () => ({
    type: PASSWORDS_VALIDATION_SUCCESS
});

export const validatePasswordsFailed = (authError: AuthenticationError) => ({
    type: PASSWORDS_VALIDATION_FAILED,
    payload: authError
})

export const registerUser = (credentials: RegisterUser) => ({
    type: REG_USER_REQUEST,
    payload: credentials
});

export const registerUserSuccess = () => ({
    type: REG_USER_SUCCESS,
    payload: "User has been successfully registered"
});

export const registerUserFailed = (authError: AuthenticationError) => ({
    type: REG_USER_FAILED,
    payload: authError
});

export const logoutUserRequest = () => ({
    type: LOG_OUT_USER_REQUEST
});

export const logoutUserSuccess = () => ({
    type: LOG_OUT_USER_SUCCESS
});

export const logoutUserFailed = (error: AuthenticationError) => ({
    type: LOG_OUT_USER_FAILED,
    payload: error
});

export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST
});

export const fetchUserSuccess = () => ({
    type: FETCH_USER_SUCCESS
});

export const fetchUserFailed = (error: AuthenticationError) => ({
    type: FETCH_USER_FAILED,
    payload: error
});