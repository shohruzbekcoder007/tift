import { ActionTypes } from '../contants/action-types'

export const setSidebar = (sidebar) => {
    return {
        type: ActionTypes.SET_SIDEBAR,
        payload: sidebar
    }
}