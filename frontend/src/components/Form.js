import React, { Component } from 'react';
import * as action from "../Actions";
import { connect } from 'react-redux'

class Form extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            city: "",
            USstate: "",
            returnedRestaurant: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.restaurantResult = this.restaurantResult.bind(this);
    }

    // setting the state equal to what's being typed inside the form fields
    handleChange = name => e => {
        const value = e.target.value
        // const name = e.target.name
        this.setState({
            [name]: value
        })
        console.log(e.target.value)
    };

    restaurantResult(restaurantData) {
        return {
            type: 'RESTAURANT_RESULT',
            restaurantData
        }
    }

    handleSubmit(e) {
        // prevents the form from being refreshed before it gets submitted
        e.preventDefault()
        // fetching from the backend API
        console.log(this.state.city)
        this.props.fetchRestaurants(this.state.city, this.state.USstate)
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} autoComplete="off" >
                <div className="formFields">
                    <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange("city")} className="city-name"></input>
                    <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange("USstate")} className="state-name" maxLength="2"></input>
                    <button className="submitButton" type="submit">Find a Feast!</button>
                </div>
            </form>
        )
    }
}

// const mapStateToProps = (state) => ({
//     restaurant: state.restaurant
// })

export default connect(
    null,
    { fetchRestaurants: action.fetchRestaurant }
)(Form)