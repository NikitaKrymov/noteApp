import { call, put, select } from 'redux-saga/effects';
import webPlannerApi from '../utils/webPlannerApi';
import { CreateNotebookRequest, DeleteNotebookRequest, EditNotebookRequest, FetchNotebookRequest, FetchNotebooksRequest } from '../types/actionTypes/NotebookActionTypes';
import { createNotebookFailed, deleteNotebookFailed, deleteNotebookSuccess, editNotebookFailed, editNotebookRequest, editNotebookSuccess, fetchNotebookFailed, fetchNotebookRequest, fetchNotebooksFailed, fetchNotebooksRequest, fetchNotebooksSuccess, fetchNotebookSuccess } from '../actions/notebookActions';
import history from '../history';

export function* createNotebook(action: CreateNotebookRequest) {
    const response = yield call(() => webPlannerApi.post('/createNotebook', { newNotebook: action.payload }));
    if (response.data.code === 910) {
        const state = yield select();
        history.push('/');
        yield put(fetchNotebooksRequest(state.app.userId));
    } else {
        yield put(createNotebookFailed(response.data.message));
    }
}

export function* fetchNotebooks(action: FetchNotebooksRequest){
    const response = yield call(() => webPlannerApi.get(`/fetchNotebooks?userId=${action.payload}`));
    if (response.data.status === 1000){
        yield put(fetchNotebooksSuccess(response.data.notebookList));
    } else {
        yield put(fetchNotebooksFailed(response.data));
    }
}

export function* fetchNotebook(action: FetchNotebookRequest){
    const response = yield call(() => webPlannerApi.get(`/fetchNotebook?notebookId=${action.payload}`));
    if (response.data.status === 1000) {
        yield put(fetchNotebookSuccess(response.data.notebookData));
    } else {
        yield put(fetchNotebookFailed(response.data));
    }
}

export function* deleteNotebook(action: DeleteNotebookRequest){
    const response = yield call(() => webPlannerApi.post('/deleteNotebook', { notebookId: action.payload }));
    if (response.data.status === 1000) {
        yield put(deleteNotebookSuccess());
        yield put(fetchNotebooksRequest(response.data.userId));
        history.push('/');
    } else {
        yield put(deleteNotebookFailed(response.data));
    }
}

export function* editNotebook(action: EditNotebookRequest){
    const response = yield call(() => webPlannerApi.post('/editNotebook', { newTitle: action.payload.title, newDescription: action.payload.description, notebookId: action.payload.notebookId}));
    if (response.data.status === 1000){
        yield put(editNotebookSuccess());
        yield put(fetchNotebookRequest(action.payload.notebookId));
    } else {
        yield put(editNotebookFailed(response.data));
    }
}