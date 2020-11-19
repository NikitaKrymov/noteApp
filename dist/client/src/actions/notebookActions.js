"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotebookFailed = exports.deleteNotebookSuccess = exports.deleteNotebookRequest = exports.editNotebookFailed = exports.editNotebookSuccess = exports.editNotebookRequest = exports.fetchNotebookFailed = exports.fetchNotebookSuccess = exports.fetchNotebookRequest = exports.fetchNotebooksFailed = exports.fetchNotebooksSuccess = exports.fetchNotebooksRequest = exports.createNotebookFailed = exports.createNotebookSuccess = exports.createNotebookRequest = void 0;
const NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
exports.createNotebookRequest = (newNotebook) => ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_REQUEST,
    payload: newNotebook
});
exports.createNotebookSuccess = (notebook) => ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_SUCCESS,
    payload: notebook
});
exports.createNotebookFailed = (error) => ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_FAILED,
    payload: error
});
exports.fetchNotebooksRequest = (userId) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_REQUEST,
    payload: userId
});
exports.fetchNotebooksSuccess = (notebookList) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_SUCCESS,
    payload: notebookList
});
exports.fetchNotebooksFailed = (error) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_FAILED,
    payload: error
});
exports.fetchNotebookRequest = (notebookId) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_REQUEST,
    payload: notebookId
});
exports.fetchNotebookSuccess = (notebook) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_SUCCESS,
    payload: notebook
});
exports.fetchNotebookFailed = (error) => ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_FAILED,
    payload: error
});
exports.editNotebookRequest = (notebookId, notebookData) => ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_REQUEST,
    payload: {
        notebookId,
        notebookData
    }
});
exports.editNotebookSuccess = (notebook) => ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_SUCCESS,
    payload: notebook
});
exports.editNotebookFailed = (error) => ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_FAILED,
    payload: error
});
exports.deleteNotebookRequest = (notebook) => ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_REQUEST,
    payload: notebook
});
exports.deleteNotebookSuccess = () => ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_SUCCESS
});
exports.deleteNotebookFailed = (error) => ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_FAILED,
    payload: error
});
//# sourceMappingURL=notebookActions.js.map