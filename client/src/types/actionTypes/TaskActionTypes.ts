import { AppError, NewTask, Task } from "../interfaces";

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILED = 'CREATE_TASK_FAILED';

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILED = 'EDIT_TASK_FAILED';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILED = 'DELETE_TASK_FAILED';

export const FINISH_TASK_REQUEST = 'FINISH_TASK_REQUEST';
export const FINISH_TASK_SUCCESS = 'FINISH_TASK_SUCCESS';
export const FINISH_TASK_FAILED = 'FINISH_TASK_FAILED';

export const SAVE_TASK_REQUEST = 'SAVE_TASK_REQUEST';
export const SAVE_TASK_SUCCESS = 'SAVE_TASK_SUCCESS';
export const SAVE_TASK_FAILED = 'SAVE_TASK_FAILED';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED';

export const OPEN_TASK_REQUEST = 'OPEN_TASK_REQUEST';
export const OPEN_TASK_SUCCESS = 'OPEN_TASK_SUCCESS';
export const OPEN_TASK_FAILED = 'OPEN_TASK_FAILED';

export const EDIT_TASKS_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASKS_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASKS_FAILED = 'EDIT_TASK_FAILED';

export interface CreateTaskRequest {
    type: typeof CREATE_TASK_REQUEST,
    payload: NewTask
}

export interface CreateTaskSuccess {
    type: typeof CREATE_TASK_SUCCESS,
    payload: Task[]
}

export interface CreateTaskFailed {
    type: typeof CREATE_TASK_FAILED,
    payload: AppError
}

export interface EditTaskRequest {
    type: typeof EDIT_TASK_REQUEST,
    payload: any
}

export interface EditTaskSuccess {
    type: typeof EDIT_TASK_SUCCESS,
    payload: Task[]
}

export interface EditTasksFailed {
    type: typeof EDIT_TASKS_FAILED,
    payload: AppError
}

export interface EditTasksRequest {
    type: typeof EDIT_TASKS_REQUEST,
    payload: any
}

export interface EditTasksSuccess {
    type: typeof EDIT_TASKS_SUCCESS,
    payload: Task[]
}

export interface EditTaskFailed {
    type: typeof EDIT_TASK_FAILED,
    payload: AppError
}

export interface DeleteTaskRequest {
    type: typeof DELETE_TASK_REQUEST,
    payload: Task
}

export interface DeleteTaskSuccess {
    type: typeof DELETE_TASK_SUCCESS,
    payload: Task[]
}

export interface DeleteTaskFailed {
    type: typeof DELETE_TASK_FAILED,
    payload: AppError
}

export interface FinishTaskRequest {
    type: typeof FINISH_TASK_REQUEST,
    payload: {
        taskId: string,
        notebookId: string
    }
}

export interface FinishTaskSuccess {
    type: typeof FINISH_TASK_SUCCESS
}

export interface FinishTaskFailed {
    type: typeof FINISH_TASK_FAILED,
    payload: AppError
}

export interface OpenTaskRequest {
    type: typeof OPEN_TASK_REQUEST,
    payload: {
        taskId: string,
        notebookId: string
    }
}

export interface OpenTaskSuccess {
    type: typeof OPEN_TASK_SUCCESS
}

export interface OpenTaskFailed {
    type: typeof OPEN_TASK_FAILED,
    payload: AppError
}

export interface SaveTaskRequest {
    type: typeof SAVE_TASK_REQUEST,
    payload: Task
}

export interface SaveTaskSuccess {
    type: typeof SAVE_TASK_SUCCESS
}

export interface SaveTaskFailed {
    type: typeof SAVE_TASK_FAILED,
    payload: AppError
}

export interface FetchTasksRequest {
    type: typeof FETCH_TASKS_REQUEST,
    payload: string
}

export interface FetchTasksSuccess {
    type: typeof FETCH_TASKS_SUCCESS,
    payload: Task[]
}

export interface FetchTasksFailed {
    type: typeof FETCH_TASKS_FAILED,
    payload: AppError
}

export type TasksActionTypes = EditTasksFailed | EditTasksSuccess | EditTasksRequest | OpenTaskFailed | OpenTaskSuccess | OpenTaskRequest | FetchTasksRequest | FetchTasksFailed | FetchTasksSuccess | SaveTaskFailed | SaveTaskRequest | SaveTaskSuccess | FinishTaskFailed | FinishTaskSuccess | FinishTaskRequest | DeleteTaskFailed | DeleteTaskSuccess | DeleteTaskRequest | EditTaskFailed | EditTaskSuccess | EditTaskRequest | CreateTaskFailed | CreateTaskSuccess | CreateTaskRequest;
