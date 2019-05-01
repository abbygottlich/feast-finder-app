import React, { Component } from 'react';
import ReturnedRestaurantContainer from "../Containers/ReturnedRestaurantContainer";

class RestaurantInfo extends Component {

    render() {
        if (this.props.isLoading === 2) {
            return <div>Loading...</div>
        }
        // if there is a returned restaurant and the city/state blanks are filled in, return the restaurant
        else if (this.props.returnedRestaurant) {
            return <ReturnedRestaurantContainer />
        } else return <div className="hungry-message">Hungry? Type in your city and state and we'll tell you where to go!</div>
    }
}

export default RestaurantInfo;