import { CREATE_NOTEBOOK_FAILED, CREATE_NOTEBOOK_REQUEST, CREATE_NOTEBOOK_SUCCESS, DELETE_NOTEBOOK_FAILED, DELETE_NOTEBOOK_REQUEST, DELETE_NOTEBOOK_SUCCESS, EDIT_NOTEBOOK_FAILED, EDIT_NOTEBOOK_REQUEST, EDIT_NOTEBOOK_SUCCESS, FETCH_NOTEBOOKS_FAILED, FETCH_NOTEBOOKS_REQUEST, FETCH_NOTEBOOKS_SUCCESS, FETCH_NOTEBOOK_FAILED, FETCH_NOTEBOOK_REQUEST, FETCH_NOTEBOOK_SUCCESS } from "../types/actionTypes/NotebookActionTypes";
import { AppError, NewNotebook, Notebook } from "../types/interfaces";

export const createNotebookRequest = (newNotebook: NewNotebook) => ({
    type: CREATE_NOTEBOOK_REQUEST,
    payload: newNotebook
});

export const createNotebookSuccess = (notebook: Notebook) => ({
    type: CREATE_NOTEBOOK_SUCCESS,
    payload: notebook
});

export const createNotebookFailed = (error: AppError) => ({
    type: CREATE_NOTEBOOK_FAILED,
    payload: error
});

export const fetchNotebooksRequest = (userId: string) => ({
    type: FETCH_NOTEBOOKS_REQUEST,
    payload: userId
});

export const fetchNotebooksSuccess = (notebookList: Notebook[]) => ({
    type: FETCH_NOTEBOOKS_SUCCESS,
    payload: notebookList
});

export const fetchNotebooksFailed = (error: AppError) => ({
    type: FETCH_NOTEBOOKS_FAILED,
    payload: error
});

export const fetchNotebookRequest = (notebookId: string) => ({
    type: FETCH_NOTEBOOK_REQUEST,
    payload: notebookId
});

export const fetchNotebookSuccess = (notebook: Notebook) => ({
    type: FETCH_NOTEBOOK_SUCCESS,
    payload: notebook
});

export const fetchNotebookFailed = (error: AppError) => ({
    type: FETCH_NOTEBOOK_FAILED,
    payload: error
});

export const editNotebookRequest = (notebookId: string, notebookData: NewNotebook) => ({
    type: EDIT_NOTEBOOK_REQUEST,
    payload: {
        notebookId, 
        notebookData
    }
});

export const editNotebookSuccess = (notebook: Notebook) => ({
    type: EDIT_NOTEBOOK_SUCCESS,
    payload: notebook
});

export const editNotebookFailed = (error: AppError) => ({
    type: EDIT_NOTEBOOK_FAILED,
    payload: error
});

export const deleteNotebookRequest = (notebook: Notebook) => ({
    type: DELETE_NOTEBOOK_REQUEST,
    payload: notebook
});

export const deleteNotebookSuccess = () => ({
    type: DELETE_NOTEBOOK_SUCCESS
});

export const deleteNotebookFailed = (error: AppError) => ({
    type: DELETE_NOTEBOOK_FAILED,
    payload: error
});