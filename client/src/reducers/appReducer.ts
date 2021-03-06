import { AUTH_USER_FAILED, AUTH_USER_SUCCESS, FETCH_USER_FAILED, LOG_OUT_USER_SUCCESS } from "../types/actionTypes/AuthActionTypes";
import { DELETE_NOTEBOOK_SUCCESS, FETCH_NOTEBOOKS_REQUEST, FETCH_NOTEBOOKS_SUCCESS, FETCH_NOTEBOOK_REQUEST, FETCH_NOTEBOOK_SUCCESS } from "../types/actionTypes/NotebookActionTypes";
import { AppReducer } from "../types/reducerInterfaces/AppReducerInterface";
import _ from 'lodash';
import { AppActions } from "../types/actionTypes/AppActionTypes";
import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS } from "../types/actionTypes/TaskActionTypes";

const INITIAL_STATE: AppReducer = {
    userId: '',
    authStatus: false,
    userNotebooks: [],
    notebookTasks: [],
    isTaskLoading: true,
    isNotebookLoading: true,
    isUserLoading: true,
    currentNotebook: {
        title: '',
        description: '',
        _id: '',
        closedStatus: false,
        owner: ''
    }
};

export default (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case AUTH_USER_SUCCESS:
            return {...state, authStatus: true, userId: action.payload._id, isUserLoading: false };
        case FETCH_NOTEBOOKS_SUCCESS:
            return {...state, userNotebooks: _.mapKeys(action.payload, '_id'), isNotebookLoading: false };
        case FETCH_TASKS_SUCCESS:
            return {...state, notebookTasks: _.mapKeys(action.payload, 'index'), isTaskLoading: false };
        case LOG_OUT_USER_SUCCESS: 
            return {...state, authStatus: false, isTaskLoading: true, isNotebookLoading: true, isUserLoading: true, isInitialTaskLoading: true };
        case FETCH_USER_FAILED: 
            return { ...state, isUserLoading: false };
        case DELETE_NOTEBOOK_SUCCESS:
            return { ...state, isNotebookLoading: true };
        case FETCH_TASKS_REQUEST: 
            return { ...state, isTaskLoading: true };
        case FETCH_NOTEBOOKS_REQUEST:
            return { ...state, isNotebookLoading: true };
        case FETCH_NOTEBOOK_REQUEST: 
            return { ...state, isNotebookLoading: true, notebookTasks: []};
        case FETCH_NOTEBOOK_SUCCESS: 
            return { ...state, currentNotebook: { _id: action.payload._id, title: action.payload.title, description: action.payload.description, owner: action.payload.owner, closedStatus: action.payload.closedStatus }, isNotebookLoading: false,}
        default: 
            return state;
    }
}