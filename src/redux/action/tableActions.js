import { ActionTypes } from '../contants/action-types'

export const setTable = (table) => {
    return {
        type: ActionTypes.SET_TABLE,
        payload: table
    }
}