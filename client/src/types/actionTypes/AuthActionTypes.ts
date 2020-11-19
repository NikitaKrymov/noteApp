import { AuthenticateUser, AuthenticationError, PasswordsValidation, RegisterUser, RegistrationError, User } from "../interfaces";

export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED';

export const REG_USER_REQUEST = 'REG_USER_REQUEST';
export const REG_USER_FAILED = 'REG_USER_FAILED';
export const REG_USER_SUCCESS = 'REG_USER_SUCCESS';

export const LOG_OUT_USER_REQUEST = 'LOG_OUT_USER_REQUEST';
export const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';
export const LOG_OUT_USER_FAILED = 'LOG_OUT_USER_FAILED';

export const USERNAME_VALIDATION_REQUEST = 'USERNAME_VALIDATION_REQUEST';
export const USERNAME_VALIDATION_SUCCESS = 'USERNAME_VALIDATION_SUCCESS';
export const USERNAME_VALIDATION_FAILED = 'USERNAME_VALIDATION_FAILED';

export const PASSWORDS_VALIDATION_REQUEST = 'PASSWORDS_VALIDATION_REQUEST';
export const PASSWORDS_VALIDATION_SUCCESS = 'PASSWORDS_VALIDATION_SUCCESS';
export const PASSWORDS_VALIDATION_FAILED = 'PASSWORDS_VALDATION_FAILED';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export interface ValidateUsernameRequest {
    type: typeof USERNAME_VALIDATION_REQUEST,
    payload: string
}

export interface ValidateUsernameSuccess {
    type: typeof USERNAME_VALIDATION_SUCCESS,
    payload: boolean
}

export interface ValidateUsernameFailed {
    type: typeof USERNAME_VALIDATION_FAILED,
    payload: AuthenticationError
}

export interface AuthenticateUserRequest {
    type: typeof AUTH_USER_REQUEST,
    payload: AuthenticateUser
}

export interface AuthenticateUserSuccess {
    type: typeof AUTH_USER_SUCCESS,
    payload: User
}

export interface AuthenticateUserFailed {
    type: typeof AUTH_USER_FAILED,
    payload: AuthenticationError
}

export interface RegisterUserRequest {
    type: typeof REG_USER_REQUEST,
    payload: RegisterUser
}

export interface RegisterUserSuccess {
    type: typeof REG_USER_SUCCESS
}

export interface RegisterUserFailed {
    type: typeof REG_USER_FAILED,
    payload: RegistrationError
}

export interface ValidatePasswordsRequest {
    type: typeof PASSWORDS_VALIDATION_REQUEST,
    payload: PasswordsValidation
}

export interface ValidatePasswordsSuccess {
    type: typeof PASSWORDS_VALIDATION_REQUEST
}

export interface ValidatePasswordsFailed {
    type: typeof PASSWORDS_VALIDATION_REQUEST,
    payload: AuthenticationError
}

export interface LogoutUserRequest {
    type: typeof LOG_OUT_USER_REQUEST
}

export interface LogoutUserSuccess {
    type: typeof LOG_OUT_USER_SUCCESS
}

export interface LogoutUserFailed {
    type: typeof LOG_OUT_USER_FAILED,
    payload: AuthenticationError
}

export interface FetchUserRequest {
    type: typeof FETCH_USER_REQUEST
}

export interface FetchUserSuccess {
    type: typeof FETCH_USER_SUCCESS
}

export interface FetchUserFailed {
    type: typeof FETCH_USER_FAILED,
    payload: AuthenticationError
}

export type AuthActionTypes = FetchUserRequest | FetchUserSuccess | FetchUserFailed | LogoutUserRequest | LogoutUserSuccess | LogoutUserFailed | AuthenticateUserFailed | AuthenticateUserRequest | AuthenticateUserSuccess | RegisterUserFailed | RegisterUserRequest | RegisterUserSuccess | ValidateUsernameRequest | ValidateUsernameSuccess | ValidatePasswordsFailed | ValidateUsernameFailed | ValidatePasswordsRequest | ValidatePasswordsSuccess;