import { call, select, put } from 'redux-saga/effects';
import webPlannerApi from '../utils/webPlannerApi';
import { AuthenticateUserRequest, FetchUserRequest, LogoutUserRequest, RegisterUserRequest, ValidateUsernameRequest } from '../types/actionTypes/AuthActionTypes';
import { authenticateUserFailed, authenticateUserSuccess, fetchUserFailed, logoutUserFailed, logoutUserSuccess, registerUserFailed, registerUserSuccess, validateUsernameFailed } from '../actions/authActions';
import { AuthenticationError } from '../types/interfaces';
import { fetchNotebooksRequest } from '../actions/notebookActions';
import history from '../history';

export function* validateUsername(action: ValidateUsernameRequest) {
    const response = yield call(() => webPlannerApi.get(`/validateUsername?username=${action.payload}`));
    if (response.data.errorCode){
        yield put(validateUsernameFailed(response.data));
    }
}

export function* validatePasswords(action: any) {
    if (action.payload.password !== action.payload.confirmPassword) {
        const authError: AuthenticationError = {
            errorCode: 801,
            message: 'Passwords do not match'
        };
        yield put(registerUserFailed(authError));
    }
}

export function* authenticateUser(action: AuthenticateUserRequest){
    if (!action.payload.username || !action.payload.password){
        const authError: AuthenticationError = {
            errorCode: 802,
            message: 'Fill all fields'
        };
        yield put(authenticateUserFailed(authError));
    } else {
        const response = yield call(() => webPlannerApi.post('/authenticateUser', { credentials: action.payload } ));
        if (response.data.errorCode) {
            yield put(authenticateUserFailed(response.data));
        } else if (response.data.code === 1000) {
            yield put(authenticateUserSuccess(response.data.userData));
            const state = yield select();
            yield put(fetchNotebooksRequest(state.app.userId));
        }
    }
}

export function* registerUser(action: RegisterUserRequest) {
    if (!action.payload.username || !action.payload.password || !action.payload.confirmPassword){
        const authError: AuthenticationError = {
            errorCode: 802,
            message: 'Fill all fields'
        };
        yield put(registerUserFailed(authError));
    } else {
        const response = yield call(() => webPlannerApi.post('/createUser', { credentials: action.payload }));
        console.log(response.data);
        if (response.data.code === 900) {
            yield put(registerUserSuccess());
            window.location.reload();
        } else {
            yield put(registerUserFailed(response.data.message))
        }
    }
}

export function* fetchCurrentUser(action: FetchUserRequest) {
    const response = yield call(() => webPlannerApi.get('/current_user'));
    console.log(response);
    if (!response.data.code) {
        console.log(response)
        yield put(authenticateUserSuccess(response.data));
        yield put(fetchNotebooksRequest(response.data._id));
    } else {
        yield put(fetchUserFailed(response.data))
    }
}

export function* logoutUser(action: LogoutUserRequest) {
    const response = yield call(() => webPlannerApi.get('/logout'));
    console.log(response);
    if (response.data.status === 1000) {
        yield put(logoutUserSuccess());
    } else {
        yield put(logoutUserFailed(response.data))
    }
}