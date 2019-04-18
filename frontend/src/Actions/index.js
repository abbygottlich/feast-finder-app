import * as types from '../Constants'

export const fetchRestaurant = (city, USstate) => dispatch => {

    const apiUrl = "http://localhost:5000/restaurants/"
    const stateName = USstate.toUpperCase()
    const params = city + "," + stateName
    const urlToFetch = apiUrl + params
    dispatch({
        type: types.RESTAURANT_REQUEST
    })
    fetch(urlToFetch)
        .then(res => res.json())
        .then(restaurantData =>
            // returnedRestaurantArr.push(restaurantData)
            // // setting the state equal to the returned data
            // this.setState({
            //     returnedRestaurant: returnedRestaurantArr
            // })
            // console.log(this.state.returnedRestaurant)
            dispatch({
                type: types.RESTAURANT_SUCCESS,
                payload: { restaurant: restaurantData }
            })

        ).catch(error =>
            dispatch({
                type: types.RESTAURANT_FAIL
            })
        )
}