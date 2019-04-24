import React, { Component } from 'react';

class Favorites extends Component {

    state = {
        favorites: [],
        selectedRestaurant: null
    }

    componentDidMount() {
        this.fetchRatings('like')
    }

    fetchRatings = (rating) => {
        fetch("/restaurants/" + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    favorites: restaurants
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

    moveToDislikes = () => {
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
                        console.log("Moved to Dislikes!")
                    })
            )
    }

    handleClick = e => {
        this.setState({
            selectedRestaurant: e.target.textContent === this.state.selectedRestaurant ? null : e.target.textContent
        })
    }

    render() {
        return (
            <div className="restaurant-list-bg">
                <div className="back-arrow"></div>
                <div className="rating-title">Favorites</div>
                <div className="restaurant-list">{this.state.favorites.map(f =>
                    <React.Fragment>

                        <div className="restaurant-name" onClick={this.handleClick}>{f.name}</div>

                        {f.name === this.state.selectedRestaurant ?

                            <React.Fragment>
                                <div className="restaurant-info">
                                    <div>{f.price}</div>
                                    <div>{f.genre}</div>
                                    <div>{f.location}</div>
                                </div>
                                <div className="buttons">
                                    <button onClick={() => { this.removeItem() }} className="button">Remove</button>
                                    <button onClick={() => { this.moveToDislikes() }} className="button">Move to Dislikes</button>
                                </div>
                            </React.Fragment> : null}

                    </React.Fragment>)}</div>

            </div>
        );
    }
}

export default Favorites;