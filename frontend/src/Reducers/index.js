import * as actionNames from '../Constants';
import { combineReducers } from "redux";

function returnedRestaurant(state = {}, action) {
    // if there is an action with type:RESTAURANT_SUCCESS, set it equal to the value from that action
    if (action.type === actionNames.RESTAURANT_SUCCESS) {
        return action.value;
    }
    return state;
}

const rootReducer = combineReducers({
    returnedRestaurant
});

export default rootReducer;
