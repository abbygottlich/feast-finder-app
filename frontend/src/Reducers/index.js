import * as types from '../Constants'

export default function restaurants(state, action) {
    switch (action.type) {
        case types.RESTAURANT_SUCCESS:
            return { restaurant: action.payload.restaurant }

        default:
            return state
    }
}
