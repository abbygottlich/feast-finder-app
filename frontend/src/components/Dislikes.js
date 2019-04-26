import React, { Component } from 'react';
import Home from "./Home";
import { Link } from "react-router-dom";

class Dislikes extends Component {

    state = {
        dislikes: [],
        selectedRestaurant: null
    }

    componentDidMount() {
        this.fetchRatings('dislike')
    }

    fetchRatings = (rating) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/restaurants/` + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    dislikes: restaurants
                })
            })
    }

    removeItem = (id) => {
        const fetchRatings = this.fetchRatings
        fetch(`${process.env.REACT_APP_API_URL}/api/restaurants/` + id, {
            method: "DELETE"
        })
            .then(status => {
                console.log("Restaurant Deleted!", status)
                fetchRatings()
            }).then(document.location.reload(true))
    }

    moveToLikes = (restaurant) => {
        console.log("sdfhlaksdjfhalskjf", restaurant)
        const fetchRatings = this.fetchRatings
        restaurant.rating = "like"
        fetch(`${process.env.REACT_APP_API_URL}/api/restaurants`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(restaurant)
        })
            .then(res => res.json())
            .then(restaurantData => {
                fetchRatings()
            }).then(document.location.reload(true))
    }

    handleClick = e => {
        this.setState({
            selectedRestaurant: e.target.textContent === this.state.selectedRestaurant ? null : e.target.textContent
        })
    }

    render() {
        return (
            <div className="restaurant-list-bg">
                <Link to="/">
                    <div className="back-arrow"></div>
                </Link>
                <div className="rating-title">Dislikes</div>
                <div className="restaurant-list">{this.state.dislikes.map(f =>
                    <React.Fragment>

                        <div className="restaurant-name" onClick={this.handleClick}>{f.name}</div>

                        {f.name === this.state.selectedRestaurant ?

                            <React.Fragment>
                                <div className="rating-restaurant-info">
                                    <div>{f.genre}</div>
                                    <div>{f.price}</div>
                                    <div>{f.location}</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={() => { this.removeItem(f._id) }} className="button">Remove</button>
                                    <button onClick={() => { this.moveToLikes(f) }} className="button">Move to Likes</button>
                                </div>
                            </React.Fragment> : null}

                    </React.Fragment>)}</div>
            </div>
        )
    }
}

export default Dislikes;