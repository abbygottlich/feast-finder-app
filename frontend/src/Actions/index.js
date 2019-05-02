import * as types from '../Constants'
import state from '../state';

export const fetchRestaurant = (city, USstate) => dispatch => {
    if (city && USstate) {
        const apiUrl = `${process.env.REACT_APP_API_URL}/restaurants/`
        const stateName = USstate.toUpperCase()
        const params = city + "," + stateName
        const urlToFetch = apiUrl + params

        // this dispatch is sending a signal that the fetch is starting
        dispatch({
            type: types.RESTAURANT_REQUEST,
            value: state.isLoading + 1
        })
        fetch(urlToFetch)
            .then(res => res.json())
            .then(restaurantData =>
                dispatch({
                    type: types.RESTAURANT_SUCCESS,
                    value: restaurantData
                })


            ).then(
                dispatch({
                    type: types.RESTAURANT_SUCCESS,
                    value: state.isLoading - 1
                })
            )
            .catch(error =>
                dispatch({
                    type: types.RESTAURANT_FAIL
                })
            )
    }
}