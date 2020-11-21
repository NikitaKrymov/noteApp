import { call, put } from "redux-saga/effects";
import { deleteTaskFailed, deleteTaskSuccess, fetchTasksFailed, fetchTasksRequest, fetchTasksSuccess, saveTaskFailed } from "../actions/taskActions";
import { CreateTaskRequest, DeleteTaskRequest, FetchTasksRequest, FinishTaskRequest, OpenTaskRequest, SaveTaskRequest } from "../types/actionTypes/TaskActionTypes";
import webPlannerApi from "../utils/webPlannerApi";

export function* fetchTasks(action: FetchTasksRequest) {
    const response = yield call(() => webPlannerApi.get(`/fetchTasks/?notebookId=${action.payload}`));
    if (response.data.status === 1000) {
        yield put(fetchTasksSuccess(response.data.payload));
    } else {
        yield put(fetchTasksFailed(response.data));
    }
}

export function* createTask(action: CreateTaskRequest){
    const response = yield call(() => webPlannerApi.post('/createTask', { task:action.payload } ));
    if (response.data.status === 1500){
        yield put(fetchTasksRequest(action.payload.notebookId));
    } else {
    }
}

export function* finishTask(action: FinishTaskRequest){
    const response = yield call(() => webPlannerApi.post('/finishTask', { taskId: action.payload.taskId }));
    if (response.data.status === 2000) {
        console.log(action.payload.notebookId)
        yield put(fetchTasksRequest(action.payload.notebookId));
    }
}

export function* openTask(action: OpenTaskRequest){
    const response = yield call(() => webPlannerApi.post('/openTask', { taskId: action.payload.taskId }));
    if (response.data.status === 2100) {
        yield put(fetchTasksRequest(action.payload.notebookId));
    }
}

export function* saveTask(action: SaveTaskRequest){
    const response = yield call(() => webPlannerApi.post('/saveTask', { editedTask: action.payload }));
    if (response.data.status === 1000) {
        yield put(fetchTasksRequest(response.data.notebookId))
    } else {
        yield put(saveTaskFailed(response.data))
    }
}

export function* deleteTask(action: DeleteTaskRequest) {
    console.log(action.payload)
    const response = yield call(() => webPlannerApi.post('/deleteTask', { taskId: action.payload }));
    if (response.data.status === 1000) {
        yield put(deleteTaskSuccess());
        yield put(fetchTasksRequest(action.payload.notebook));
    } else {
        yield put(deleteTaskFailed(response.data));
    }
}