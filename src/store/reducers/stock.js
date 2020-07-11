import { UPDATE_STOCK } from '../actions/types'

const initialState = {
    lastStocks: [],
    currentStocks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STOCK:
            return {
                ...state,
            };
        default:
            return state;
    }
}