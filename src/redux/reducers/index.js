import { combineReducers } from "redux"
import { languageReducer } from "./languageReducer"
import { sidebarReducer } from "./sidebarReducer";
import { titleReducer } from "./titleReducer";
import { userReducer } from "./userReducer"

const reducers = combineReducers({
    language: languageReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    title: titleReducer
})

export default reducers;