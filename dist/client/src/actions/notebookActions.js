"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotebookFailed = exports.deleteNotebookSuccess = exports.deleteNotebookRequest = exports.editNotebookFailed = exports.editNotebookSuccess = exports.editNotebookRequest = exports.fetchNotebookFailed = exports.fetchNotebookSuccess = exports.fetchNotebookRequest = exports.fetchNotebooksFailed = exports.fetchNotebooksSuccess = exports.fetchNotebooksRequest = exports.createNotebookFailed = exports.createNotebookSuccess = exports.createNotebookRequest = void 0;
var NotebookActionTypes_1 = require("../types/actionTypes/NotebookActionTypes");
exports.createNotebookRequest = function (newNotebook) { return ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_REQUEST,
    payload: newNotebook
}); };
exports.createNotebookSuccess = function (notebook) { return ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_SUCCESS,
    payload: notebook
}); };
exports.createNotebookFailed = function (error) { return ({
    type: NotebookActionTypes_1.CREATE_NOTEBOOK_FAILED,
    payload: error
}); };
exports.fetchNotebooksRequest = function (userId) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_REQUEST,
    payload: userId
}); };
exports.fetchNotebooksSuccess = function (notebookList) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_SUCCESS,
    payload: notebookList
}); };
exports.fetchNotebooksFailed = function (error) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOKS_FAILED,
    payload: error
}); };
exports.fetchNotebookRequest = function (notebookId) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_REQUEST,
    payload: notebookId
}); };
exports.fetchNotebookSuccess = function (notebook) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_SUCCESS,
    payload: notebook
}); };
exports.fetchNotebookFailed = function (error) { return ({
    type: NotebookActionTypes_1.FETCH_NOTEBOOK_FAILED,
    payload: error
}); };
exports.editNotebookRequest = function (title, description, notebookId) { return ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_REQUEST,
    payload: {
        title: title,
        description: description,
        notebookId: notebookId
    }
}); };
exports.editNotebookSuccess = function () { return ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_SUCCESS
}); };
exports.editNotebookFailed = function (error) { return ({
    type: NotebookActionTypes_1.EDIT_NOTEBOOK_FAILED,
    payload: error
}); };
exports.deleteNotebookRequest = function (notebook) { return ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_REQUEST,
    payload: notebook
}); };
exports.deleteNotebookSuccess = function () { return ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_SUCCESS
}); };
exports.deleteNotebookFailed = function (error) { return ({
    type: NotebookActionTypes_1.DELETE_NOTEBOOK_FAILED,
    payload: error
}); };
//# sourceMappingURL=notebookActions.js.map