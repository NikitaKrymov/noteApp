import { CREATE_TASK_REQUEST, DELETE_TASK_FAILED, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, FETCH_TASKS_FAILED, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FINISH_TASK_FAILED, FINISH_TASK_REQUEST, FINISH_TASK_SUCCESS, OPEN_TASK_FAILED, OPEN_TASK_REQUEST, OPEN_TASK_SUCCESS, SAVE_TASK_FAILED, SAVE_TASK_REQUEST, SAVE_TASK_SUCCESS } from "../types/actionTypes/TaskActionTypes";
import { AppError, NewTask, Task } from "../types/interfaces";


export const createTaskRequest = (newTask: NewTask) => ({
    type: CREATE_TASK_REQUEST,
    payload: newTask
});

export const fetchTasksRequest = (notebookId: string) => ({
    type: FETCH_TASKS_REQUEST,
    payload: notebookId
});

export const fetchTasksSuccess = (tasks: Task[]) => ({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks
});

export const fetchTasksFailed = (error: AppError) => ({
    type: FETCH_TASKS_FAILED,
    payload: error
});

export const saveTaskRequest = (taskId: string, taskSubject: string) => ({
    type: SAVE_TASK_REQUEST,
    payload: {
        taskId, 
        taskSubject
    }
});

export const saveTaskSuccess = () => ({
    type: SAVE_TASK_SUCCESS
});

export const saveTaskFailed = (error: AppError) => ({
    type: SAVE_TASK_FAILED,
    payload: error
});

export const finishTaskRequest = (taskId: string, notebookId: string) => ({
    type: FINISH_TASK_REQUEST,
    payload: {
        taskId,
        notebookId
    }
});

export const finishTaskSuccess = () => ({
    type: FINISH_TASK_SUCCESS
});

export const finishTaskFailed = (error: AppError) => ({
    type: FINISH_TASK_FAILED,
    payload: error
});

export const openTaskRequest = (taskId: string, notebookId: string) => ({
    type: OPEN_TASK_REQUEST,
    payload: {
        taskId,
        notebookId
    }
});

export const openTaskSuccess = () => ({
    type: OPEN_TASK_SUCCESS
});

export const openTaskFailed = (error: AppError) => ({
    type: OPEN_TASK_FAILED,
    payload: error
});

export const deleteTaskRequest = (task: Task) => ({
    type: DELETE_TASK_REQUEST,
    payload: task
});

export const deleteTaskSuccess = () => ({
    type: DELETE_TASK_SUCCESS
});

export const deleteTaskFailed = (error: AppError) => ({
    type: DELETE_TASK_FAILED,
    payload: error
});
