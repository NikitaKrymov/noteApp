import { AuthActionTypes } from "./AuthActionTypes";
import { NotebookActionTypes } from "./NotebookActionTypes";
import { TasksActionTypes } from "./TaskActionTypes";

export type AppActions = AuthActionTypes | NotebookActionTypes | TasksActionTypes;