import { ActionTypes } from "../contants/action-types"

const initialUser = null

export const userReducer = (state = initialUser, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_USER:
            return payload

        default:
            return state;

    }
}