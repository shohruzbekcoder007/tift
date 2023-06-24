import { combineReducers } from "redux"
import { languageReducer } from "./languageReducer"
import { sidebarReducer } from "./sidebarReducer";

const reducers = combineReducers({
    language: languageReducer,
    sidebar: sidebarReducer
})

export default reducers;