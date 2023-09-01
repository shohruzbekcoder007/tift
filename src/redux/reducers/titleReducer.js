import { ActionTypes } from "../contants/action-types"

const initialLanguage = {
    text: {
        uz: "Dashboard",
        ru: "Панель",
        eng: "Dashboard"
      },
      type: "text"
}

export const titleReducer = (state = initialLanguage, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_TITLE:
            return payload
    
        default:
            return state;

    }
}