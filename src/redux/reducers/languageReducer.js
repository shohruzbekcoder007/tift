import { ActionTypes } from "../contants/action-types"

const initialLanguage = "uz"

export const languageReducer = (state = initialLanguage, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_LANGUAGE:
            return payload
    
        default:
            return state;

    }
}