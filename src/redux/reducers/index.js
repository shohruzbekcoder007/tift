import { combineReducers } from "redux"
import { languageReducer } from "./languageReducer"

const reducers = combineReducers({
    language: languageReducer,
})

export default reducers;