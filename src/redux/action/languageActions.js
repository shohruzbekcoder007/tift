import { ActionTypes } from '../contants/action-types'

export const setLanguage = (language) => {
    return {
        type: ActionTypes.SET_LANGUAGE,
        payload: language
    }
}