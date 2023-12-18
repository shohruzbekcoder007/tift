import { ActionTypes } from "../contants/action-types"

const initialTable = {
    results: []
}

export const TableReducer = (state = initialTable, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TABLE:
            console.log(payload);
            return payload
    
        default:
            return state;

    }
}