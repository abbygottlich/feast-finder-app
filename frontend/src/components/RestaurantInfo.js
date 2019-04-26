import React, { Component } from 'react';

class RestaurantInfo extends Component {

    state = {
        restaurantSaved: false
    }

    // all props in this file coming from redux

    loadRatingButtons() {
        if (this.props.returnedRestaurant) {
            return <div className="rating-buttons">
                <img onClick={() => this.saveRating("like")} className="like-button" alt="like-button" src="https://image.flaticon.com/icons/svg/126/126473.svg"></img>
                <img onClick={() => this.saveRating("dislike")} className="dislike-button" alt="dislike-button" src="https://image.flaticon.com/icons/svg/126/126504.svg"></img>
            </div>
        }
    }

    saveRating(rating) {
        const restaurant = this.props.returnedRestaurant
        const restaurantBody = {
            name: restaurant.name,
            genre: restaurant.categories[0].title,
            price: restaurant.price,
            location: restaurant.location.display_address.join(" "),
            rating: rating
        }
        fetch("/restaurants:rating", {
            method: "POST",
            body: JSON.stringify(restaurantBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(restaurantData => {
            }).then(this.setState({
                restaurantSaved: true
            }))
    }

    render() {
        if (this.props.returnedRestaurant) {

            const result = this.props.returnedRestaurant

            const bgImage = {
                width: "300px",
                height: "300px",
                backgroundImage: "url(" + result.image_url + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            };

            return <div className="restaurant-info">

                <div className="result-image" style={bgImage}>
                    <div className="restaurant-text-info">
                        <div className="result-name">{result.name}</div>
                        <div className="result-category">{result.categories[0].title}</div>
                        <div className="result-price">{result.price}</div>
                        <div className="result-location">{result.location.display_address.join(" ")}</div>
                    </div>
                </div>

                <div className="messages-and-buttons">
                    <div className="regenerate-message">Don't like your result? Click the 'Find A Feast!' button again.</div>
                    <div className="rating-message">Already been here? Give it a thumbs up or thumbs down and the rating will be saved to your profile.</div>
                    <div>{this.loadRatingButtons()}</div>
                    {this.state.restaurantSaved === true ? <div className="saved">Saved!</div> : null}
                </div>
            </div>
        } else {
            return <div className="hungry-message">Hungry? Type in your city and state and we'll tell you where to go!</div>
        }
    }
}

export default RestaurantInfo;