import React, { Component } from 'react';
import ReturnedRestaurantContainer from "../Containers/ReturnedRestaurantContainer";

class RestaurantInfo extends Component {

    render() {
        if (!this.props.returnedRestaurant && this.props.isLoading === 2) {
            return <div className="loading-message">Loading...</div>
        }
        else if (this.props.returnedRestaurant && this.props.isLoading === 2) {
            return <ReturnedRestaurantContainer />
        } else return <div className="hungry-message">Hungry? Type in your city and state and we'll tell you where to go!</div>
    }
}

export default RestaurantInfo;