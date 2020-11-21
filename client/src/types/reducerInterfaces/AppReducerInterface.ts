import { Notebook } from '../interfaces';

export interface AppReducer {
    authStatus: boolean,
    userId: string,
    userNotebooks: any,
    notebookTasks: any,
    isTaskLoading: boolean,
    isNotebookLoading: boolean,
    isUserLoading: boolean,
    currentNotebook: Notebook
}