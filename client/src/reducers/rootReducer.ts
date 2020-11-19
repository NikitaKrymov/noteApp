import { combineReducers } from "redux"

import appReducer from './appReducer';
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    errors: errorReducer    
})

export type AppState = ReturnType<typeof rootReducer>