import * as types from '../Constants'

export const fetchRestaurant = (city, USstate) => dispatch => {
    console.log('fetchRestaurant action');
    const apiUrl = "http://localhost:5000/restaurants/"
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