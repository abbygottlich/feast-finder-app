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

    showRestaurantInfo() {
        console.log("helllpppppp")
    }

    render() {
        return (
            <div onClick={this.showRestaurantInfo}>{this.state.favorites.map(f => <div>{f.name}
                <button>Remove</button>
                <button>Move to Dislikes</button>
            </div>)}
            </div>
        );
    }
}

export default Favorites;