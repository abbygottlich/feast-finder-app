import React, { Component } from 'react';
import Header from "../components/Header";
import RestaurantInfoContainer from "../Containers/RestaurantInfoContainer";

class Home extends Component {

    render() {

        return (
            <div className="App">
                <div className="header-component">
                    <Header onSignOut={this.props.onSignOut} showNavItems={this.props.authenticated} />
                </div>
                <div className="restaurant-info-component">
                    <RestaurantInfoContainer />
                </div>
            </div>
        );
    }
}

export default Home;