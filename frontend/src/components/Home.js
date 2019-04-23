import React, { Component } from 'react';
import Header from "../components/Header";
import RestaurantInfoContainer from "../Containers/RestaurantInfoContainer";

class Home extends Component {

    render() {

        return (
            <div className="App">
                <Header onSignOut={this.props.onSignOut} showNavItems={this.props.authenticated} />
                <RestaurantInfoContainer />
            </div>
        );
    }
}

export default Home;