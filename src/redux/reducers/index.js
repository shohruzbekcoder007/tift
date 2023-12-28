import { combineReducers } from "redux"
import { languageReducer } from "./languageReducer"
import { sidebarReducer } from "./sidebarReducer";
import { titleReducer } from "./titleReducer";
import { userReducer } from "./userReducer"
import { TableReducer } from "./TableReducer";

const reducers = combineReducers({
    language: languageReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    title: titleReducer,
    table: TableReducer,
})

export default reducers;