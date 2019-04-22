import * as actionNames from '../Constants';
import { combineReducers } from "redux";

function returnedRestaurant(state = {}, action) {
    if (action.type === actionNames.RESTAURANT_SUCCESS) {
        return action.value;
    }
    return state;
}

function favorites(state = [], action) {
    return state;
}

function dislikes(state = [], action) {
    return state;
}

const rootReducer = combineReducers({
    returnedRestaurant,
    favorites,
    dislikes
});

export default rootReducer;
