import { ActionTypes } from '../contants/action-types'

export const setTitle = (title) => {
    return {
        type: ActionTypes.SET_TITLE,
        payload: title
    }
}