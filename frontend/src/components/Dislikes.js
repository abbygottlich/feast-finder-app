import React, { Component } from 'react';
import Home from "./Home";

class Dislikes extends Component {

    state = {
        dislikes: [],
        selectedRestaurant: null,
        toggle: false
    }

    componentDidMount() {
        this.fetchRatings('dislike')
    }

    fetchRatings = (rating) => {
        fetch("/restaurants/" + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    dislikes: restaurants
                })
                console.log(restaurants)
            })
    }

    removeItem = () => {
        fetch("/restaurants", {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(restaurantData => {
                console.log("Restaurant Deleted!")
            })
    }

    moveToLikes = () => {
        fetch("/restaurants", {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(restaurantData => {
                console.log("Restaurant Deleted!")
            })
            .then(
                fetch("/restaurants", {
                    method: "POST"
                })
                    .then(res => res.json())
                    .then(restaurantData => {
                        console.log("Moved to Likes!")
                    })
            )
    }

    toggleBackButton = () => {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true
            })
        } else {
            this.setState({
                toggle: false
            })
        }
    }

    handleClick = e => {
        this.setState({
            selectedRestaurant: e.target.textContent === this.state.selectedRestaurant ? null : e.target.textContent
        })
    }

    render() {
        if (this.state.toggle === false) {
            return (
                <div className="restaurant-list-bg">
                    <div className="back-arrow" onClick={this.toggleBackButton}></div>
                    <div className="rating-title">Dislikes</div>
                    <div className="restaurant-list">{this.state.dislikes.map(f =>
                        <React.Fragment>

                            <div className="restaurant-name" onClick={this.handleClick}>{f.name}</div>

                            {f.name === this.state.selectedRestaurant ?

                                <React.Fragment>
                                    <div className="restaurant-info">
                                        <div>{f.genre}</div>
                                        <div>{f.price}</div>
                                        <div>{f.location}</div>
                                    </div>
                                    <div className="buttons">
                                        <button onClick={() => { this.removeItem() }} className="button">Remove</button>
                                        <button onClick={() => { this.moveToLikes() }} className="button">Move to Likes</button>
                                    </div>
                                </React.Fragment> : null}

                        </React.Fragment>)}</div>
                </div>
            )
        } else return <Home />
    }
}

export default Dislikes;