import { AppError, NewNotebook, Notebook } from "../interfaces";

export const CREATE_NOTEBOOK_REQUEST = 'CREATE_NOTEBOOK_REQUEST';
export const CREATE_NOTEBOOK_SUCCESS = 'CREATE_NOTEBOOK_SUCCESS';
export const CREATE_NOTEBOOK_FAILED = 'CREATE_NOTEBOOK_FAILED';

export const FETCH_NOTEBOOKS_REQUEST = 'FETCH_NOTEBOOKS_REQUEST';
export const FETCH_NOTEBOOKS_SUCCESS = 'FETCH_NOTEBOOKS_SUCCESS';
export const FETCH_NOTEBOOKS_FAILED = 'FETCH_NOTEBOOKS_FAILED';

export const FETCH_NOTEBOOK_REQUEST = 'FETCH_NOTEBOOK_REQUEST';
export const FETCH_NOTEBOOK_SUCCESS = 'FETCH_NOTEBOOK_SUCCESS';
export const FETCH_NOTEBOOK_FAILED = 'FETCH_NOTEBOOK_FAILED';

export const EDIT_NOTEBOOK_REQUEST = 'EDIT_NOTEBOOK_REQUEST';
export const EDIT_NOTEBOOK_SUCCESS = 'EDIT_NOTEBOOK_SUCCESS';
export const EDIT_NOTEBOOK_FAILED = 'EDIT_NOTEBOOK_FAILED';

export const DELETE_NOTEBOOK_REQUEST = 'DELETE_NOTEBOOK_REQUEST';
export const DELETE_NOTEBOOK_SUCCESS = 'DELETE_NOTEBOOK_SUCCESS';
export const DELETE_NOTEBOOK_FAILED = 'DELETE_NOTEBOOK_FAILED';

export interface CreateNotebookRequest {
    type: typeof CREATE_NOTEBOOK_REQUEST,
    payload: NewNotebook
}

export interface CreateNotebookSuccess {
    type: typeof CREATE_NOTEBOOK_SUCCESS
}

export interface CreateNotebookFailed {
    type: typeof CREATE_NOTEBOOK_FAILED,
    payload: AppError
}

export interface FetchNotebooksRequest {
    type: typeof FETCH_NOTEBOOKS_REQUEST,
    payload: number
}

export interface FetchNotebooksSuccess {
    type: typeof FETCH_NOTEBOOKS_SUCCESS,
    payload: Notebook[]
}

export interface FetchNotebooksFailed {
    type: typeof FETCH_NOTEBOOKS_FAILED,
    payload: AppError
}

export interface EditNotebookRequest {
    type: typeof EDIT_NOTEBOOK_REQUEST,
    payload: NewNotebook
}

export interface EditNotebookSuccess {
    type: typeof EDIT_NOTEBOOK_SUCCESS,
    paylaod: Notebook
}

export interface EditNotebookFailed {
    type: typeof EDIT_NOTEBOOK_FAILED,
    payload: AppError
}

export interface FetchNotebookRequest {
    type: typeof FETCH_NOTEBOOK_REQUEST,
    payload: number
}

export interface FetchNotebookSuccess {
    type: typeof FETCH_NOTEBOOK_SUCCESS,
    paylaod: Notebook
}

export interface FetchNotebookFailed {
    type: typeof FETCH_NOTEBOOK_FAILED,
    payload: AppError
}

export interface DeleteNotebookRequest {
    type: typeof DELETE_NOTEBOOK_REQUEST,
    payload: Notebook
}

export interface DeleteNotebookSuccess {
    type: typeof DELETE_NOTEBOOK_SUCCESS,
    payload: Notebook[]
}

export interface DeleteNotebookFailed {
    type: typeof DELETE_NOTEBOOK_FAILED,
    payload: AppError
}

export type NotebookActionTypes = CreateNotebookRequest | CreateNotebookSuccess | CreateNotebookFailed | FetchNotebooksRequest | FetchNotebooksSuccess | FetchNotebooksFailed | FetchNotebookFailed | FetchNotebookRequest | FetchNotebookSuccess | EditNotebookFailed | EditNotebookRequest | EditNotebookSuccess | DeleteNotebookFailed | DeleteNotebookRequest | DeleteNotebookSuccess;