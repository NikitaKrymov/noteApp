import { call, put, select } from 'redux-saga/effects';
import webPlannerApi from '../utils/webPlannerApi';
import { CreateNotebookRequest, DeleteNotebookRequest, FetchNotebookRequest, FetchNotebooksRequest } from '../types/actionTypes/NotebookActionTypes';
import { createNotebookFailed, deleteNotebookFailed, deleteNotebookSuccess, fetchNotebooksFailed, fetchNotebooksRequest, fetchNotebooksSuccess } from '../actions/notebookActions';
import history from '../history';

export function* createNotebook(action: CreateNotebookRequest) {
    console.log(action.payload.title);
    const response = yield call(() => webPlannerApi.post('/createNotebook', { newNotebook: action.payload }));
    if (response.data.code === 910) {
        console.log('Created successfully');
        const state = yield select();
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
    console.log(response);
}

export function* deleteNotebook(action: DeleteNotebookRequest){
    console.log('sending', action.payload)
    const response = yield call(() => webPlannerApi.post('/deleteNotebook', { notebookId: action.payload }));
    if (response.data.status === 1000) {
        yield put(deleteNotebookSuccess());
        yield put(fetchNotebooksRequest(response.data.userId));
        history.push('/');
    } else {
        yield put(deleteNotebookFailed(response.data));
    }
}