import React, { Component } from 'react';
import * as action from "../Actions";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            USstate: "",
            returnedRestaurant: false,
            toggle: false,
            menuIcon: "menu",
            showError: false,
            showMessage: true
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
            [name]: value
        })
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
        if (this.state.city === "" || this.state.USstate === "") {
            this.setState({
                showError: true
            })
        } else {
            // fetching from the backend API
            this.props.fetchRestaurants(this.state.city, this.state.USstate)
            this.setState({
                returnedRestaurant: true,
                showMessage: false
            })
        }
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
                <div className="menu-block">
                    <Link to="/favorites" className="my-favorites-button">
                        <div className="menu-text">My Favorites</div>
                    </Link>
                    <Link to="/dislikes" className="my-dislikes-button">
                        <div className="menu-text">My Dislikes</div>
                    </Link>
                    <div className="sign-out-button">
                        <div onClick={this.props.onSignOut} className="menu-text">Sign Out</div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo-white"></div>
                    <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
                        <div className="form-fields">
                            <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange("city")} className="city-name"></input>
                            <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange("USstate")} className="state-name" maxLength="2"></input>
                            <button className="submit-button" type="submit">Find a Feast!</button>
                        </div>
                    </form>
                    <button className={this.state.menuIcon} onClick={this.toggleHandler}></button>
                </div>
                {
                    this.state.showError && !this.state.returnedRestaurant ? <div className="retrieve-message">Please type in your city and state to retrieve a suggestion.</div>
                        : null
                }
                <div>{this.showMenu()}</div>
            </div>
        )
    }
}

export default connect(
    null,
    { fetchRestaurants: action.fetchRestaurant }
)(Header)