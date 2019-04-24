import * as types from '../Constants'

export const fetchRestaurant = (city, USstate) => dispatch => {
    console.log('fetchRestaurant action');
    const apiUrl = "/restaurants/"
    const stateName = USstate.toUpperCase()
    const params = city + "," + stateName
    const urlToFetch = apiUrl + params
    // this dispatch is sending a signal that the fetch is starting - use for spinning wheel later
    dispatch({
        type: types.RESTAURANT_REQUEST
    })
    fetch(urlToFetch)
        .then(res => res.json())
        .then(restaurantData =>
            // write conditional testing whether restaurant is liked or disliked
            // if it's in state.dislikes, re-fetch
            // if it's not in state.dislikes, return it
            // if it's in state.likes, return it with thumbs up symbol
            // write this code in the RestaurantInfo.js file???
            dispatch({
                type: types.RESTAURANT_SUCCESS,
                value: restaurantData
            })

        ).catch(error =>
            dispatch({
                type: types.RESTAURANT_FAIL
            })
        )
}