import { takeLatest } from 'redux-saga/effects';
import { AUTH_USER_REQUEST, FETCH_USER_REQUEST, LOG_OUT_USER_REQUEST, PASSWORDS_VALIDATION_REQUEST, REG_USER_REQUEST, USERNAME_VALIDATION_REQUEST } from '../types/actionTypes/AuthActionTypes';
import { CREATE_NOTEBOOK_REQUEST, DELETE_NOTEBOOK_REQUEST, EDIT_NOTEBOOK_REQUEST, FETCH_NOTEBOOKS_REQUEST, FETCH_NOTEBOOK_REQUEST } from '../types/actionTypes/NotebookActionTypes';
import { CREATE_TASK_REQUEST, DELETE_TASK_REQUEST, FETCH_TASKS_REQUEST, FINISH_TASK_REQUEST, OPEN_TASK_REQUEST, SAVE_TASK_REQUEST } from '../types/actionTypes/TaskActionTypes';
import { authenticateUser, fetchCurrentUser, logoutUser, registerUser, validatePasswords, validateUsername } from './authSagas';
import { createNotebook, deleteNotebook, editNotebook, fetchNotebook, fetchNotebooks } from './notebookSagas';
import { createTask, deleteTask, fetchTasks, finishTask, openTask, saveTask } from './taskSagas';

export default function* rootSaga(){
    yield takeLatest(FETCH_USER_REQUEST, fetchCurrentUser);
    yield takeLatest(USERNAME_VALIDATION_REQUEST, validateUsername);
    yield takeLatest(AUTH_USER_REQUEST, authenticateUser);
    yield takeLatest(REG_USER_REQUEST, registerUser);
    yield takeLatest(PASSWORDS_VALIDATION_REQUEST, validatePasswords);
    yield takeLatest(CREATE_NOTEBOOK_REQUEST, createNotebook);
    yield takeLatest(FETCH_NOTEBOOKS_REQUEST, fetchNotebooks);
    yield takeLatest(CREATE_TASK_REQUEST, createTask);
    yield takeLatest(FETCH_TASKS_REQUEST, fetchTasks);
    yield takeLatest(FINISH_TASK_REQUEST, finishTask);
    yield takeLatest(OPEN_TASK_REQUEST, openTask);
    yield takeLatest(LOG_OUT_USER_REQUEST, logoutUser);
    yield takeLatest(SAVE_TASK_REQUEST, saveTask);
    yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
    yield takeLatest(DELETE_NOTEBOOK_REQUEST, deleteNotebook);
    yield takeLatest(FETCH_NOTEBOOK_REQUEST, fetchNotebook);
    yield takeLatest(EDIT_NOTEBOOK_REQUEST, editNotebook);
}