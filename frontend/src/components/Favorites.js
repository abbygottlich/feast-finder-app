import React, { Component } from 'react';

class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        this.showRatings('like')
    }

    showRatings = (rating) => {
        fetch("http://localhost:5000/restaurants/" + rating)
            .then(res => res.json())
            .then(restaurants => {
                this.setState({
                    favorites: restaurants
                })
                console.log(restaurants)
            })
    }

    render() {
        return (
            <div>{this.state.favorites.map(f => <div>{f.name}</div>)}</div>
        );
    }
}

export default Favorites;