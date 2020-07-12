import { UPDATE_STOCK } from '../actions/types'

const initialState = {
    stocks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STOCK:
            return {
                ...state,
                stocks: action.stocks
            };
        default:
            return state;
    }
}