import { AppActions } from "../types/actionTypes/AppActionTypes"
import { AUTH_USER_FAILED, FETCH_USER_FAILED, REG_USER_FAILED, USERNAME_VALIDATION_FAILED } from "../types/actionTypes/AuthActionTypes"
import { DELETE_NOTEBOOK_FAILED } from "../types/actionTypes/NotebookActionTypes"
import { FETCH_TASKS_FAILED } from "../types/actionTypes/TaskActionTypes"
import { ErrorReducer } from "../types/reducerInterfaces/ErrorReducerInterface"

const INITIAL_STATE: ErrorReducer = {
    authError: '',
    appError: ''
}

export default (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case AUTH_USER_FAILED:
            return {...state, authError: action.payload.message };
        case REG_USER_FAILED:
            return {...state, authError: action.payload.message };
        case USERNAME_VALIDATION_FAILED:
            return {...state, authError: action.payload.message };
        case FETCH_TASKS_FAILED:
            return {...state, appError: action.payload.message};
        case FETCH_USER_FAILED:
            return {...state, appError: action.payload.message};
        case DELETE_NOTEBOOK_FAILED:
            return {...state, appError: action.payload.message};
        default:
            return INITIAL_STATE;
    }
}