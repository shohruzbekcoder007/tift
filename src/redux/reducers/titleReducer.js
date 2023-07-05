import { ActionTypes } from "../contants/action-types"

const initialLanguage = "Dashboard"

export const titleReducer = (state = initialLanguage, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_TITLE:
            return payload
    
        default:
            return state;

    }
}