import { combineReducers } from "redux"
import { languageReducer } from "./languageReducer"
import { sidebarReducer } from "./sidebarReducer";
import { titleReducer } from "./titleReducer";

const reducers = combineReducers({
    language: languageReducer,
    sidebar: sidebarReducer,
    title: titleReducer
})

export default reducers;