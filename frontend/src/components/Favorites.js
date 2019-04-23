import React, { Component } from 'react';

class Favorites extends Component {

    state = {
        favorites: [],
        toggle: false
    }

    componentDidMount() {
        this.fetchRatings('like')
    }

    fetchRatings = (rating) => {
        fetch("http://localhost:5000/restaurants/" + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    favorites: restaurants
                })
                console.log(restaurants)
            })
    }

    removeItem = () => {
        console.log("removed!")
    }

    toggleHandler = () => {
        if (this.state.toggle === false) {
            this.setState({
                toggle: true,
                // menuIcon: "x"
            })
        } else {
            this.setState({
                toggle: false,
                // menuIcon: "menu"
            })
        }
    }

    handleClick = e => {
        let restaurantName = e.target.textContent
        for (let i = 0; i < this.state.favorites.length; i++) {
            if (restaurantName === this.state.favorites[i].name) {
                console.log(this.state.favorites[i].price)
            }
        }
    }

    // <button onClick={() => { this.removeItem() }}>Remove</button>
    //         <button>Move to Dislikes</button>

    render() {
        return (
            <div onClick={this.showRestaurantInfo}>{this.state.favorites.map(f => <div onClick={this.handleClick}>{f.name}</div>)}</div>
        );
    }
}

export default Favorites;