"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotebook = exports.fetchNotebook = exports.fetchNotebooks = exports.createNotebook = void 0;
const effects_1 = require("redux-saga/effects");
const webPlannerApi_1 = __importDefault(require("../utils/webPlannerApi"));
const notebookActions_1 = require("../actions/notebookActions");
const history_1 = __importDefault(require("../history"));
function* createNotebook(action) {
    console.log(action.payload.title);
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/createNotebook', { newNotebook: action.payload }));
    if (response.data.code === 910) {
        console.log('Created successfully');
        const state = yield effects_1.select();
        yield effects_1.put(notebookActions_1.fetchNotebooksRequest(state.app.userId));
    }
    else {
        yield effects_1.put(notebookActions_1.createNotebookFailed(response.data.message));
    }
}
exports.createNotebook = createNotebook;
function* fetchNotebooks(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get(`/fetchNotebooks?userId=${action.payload}`));
    if (response.data.status === 1000) {
        yield effects_1.put(notebookActions_1.fetchNotebooksSuccess(response.data.notebookList));
    }
    else {
        yield effects_1.put(notebookActions_1.fetchNotebooksFailed(response.data));
    }
}
exports.fetchNotebooks = fetchNotebooks;
function* fetchNotebook(action) {
    const response = yield effects_1.call(() => webPlannerApi_1.default.get(`/fetchNotebook?notebookId=${action.payload}`));
    console.log(response);
}
exports.fetchNotebook = fetchNotebook;
function* deleteNotebook(action) {
    console.log('sending', action.payload);
    const response = yield effects_1.call(() => webPlannerApi_1.default.post('/deleteNotebook', { notebookId: action.payload }));
    if (response.data.status === 1000) {
        yield effects_1.put(notebookActions_1.deleteNotebookSuccess());
        yield effects_1.put(notebookActions_1.fetchNotebooksRequest(response.data.userId));
        history_1.default.push('/');
    }
    else {
        yield effects_1.put(notebookActions_1.deleteNotebookFailed(response.data));
    }
}
exports.deleteNotebook = deleteNotebook;
//# sourceMappingURL=notebookSagas.js.map