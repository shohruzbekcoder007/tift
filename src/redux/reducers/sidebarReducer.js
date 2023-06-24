import { ActionTypes } from "../contants/action-types"

const initialSidebar = "uz"

export const sidebarReducer = (state = initialSidebar, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_SIDEBAR:
            return payload
    
        default:
            return state;

    }
}