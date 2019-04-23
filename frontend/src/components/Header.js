import React, { Component } from 'react';
import * as action from "../Actions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            city: "",
            USstate: "",
            returnedRestaurant: [],
            toggle: false,
            menuIcon: "menu"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.restaurantResult = this.restaurantResult.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    // setting the state equal to what's being typed inside the form fields
    handleChange = name => e => {
        const value = e.target.value
        this.setState({
            // setting 'name' equal to e.target.name
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

    toggleHandler() {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true,
                menuIcon: "x"
            })
        } else {
            this.setState({
                toggle: false,
                menuIcon: "menu"
            })
        }
    }

    showMenu() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <Link to="/favorites" className="myFavoritesButton">My Favorites</Link>
                    <Link to="/dislikes" className="myDislikesButton">My Dislikes</Link>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="formFields">
                        <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange("city")} className="city-name"></input>
                        <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange("USstate")} className="state-name" maxLength="2"></input>
                        <button className="submitButton" type="submit">Find a Feast!</button>
                    </div>
                </form>
                <button className={this.state.menuIcon} onClick={this.toggleHandler}></button>
                <div>{this.showMenu()}</div>
            </div>
        )
    }
}

export default connect(
    null,
    { fetchRestaurants: action.fetchRestaurant }
)(Header)