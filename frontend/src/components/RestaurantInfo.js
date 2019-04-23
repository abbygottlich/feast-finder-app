import React, { Component } from 'react';

class RestaurantInfo extends Component {

    loadRatingButtons() {
        // getting props from redux
        if (this.props.returnedRestaurant) {
            return <div className="ratingButtons">
                <img onClick={() => this.saveRating("like")} className="likeButton" alt="like-button" src="https://image.flaticon.com/icons/svg/126/126473.svg"></img>
                <img onClick={() => this.saveRating("dislike")} className="dislikeButton" alt="dislike-button" src="https://image.flaticon.com/icons/svg/126/126504.svg"></img>
            </div>
        }
    }

    saveRating(rating) {
        // getting props from redux
        const restaurant = this.props.returnedRestaurant
        const restaurantBody = {
            name: restaurant.name,
            genre: restaurant.categories[0].title,
            price: restaurant.price,
            location: restaurant.location.display_address.join(" "),
            rating: rating
        }
        fetch("http://localhost:5000/restaurants", {
            method: "POST",
            body: JSON.stringify(restaurantBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(restaurantData => {
                console.log("restaurant saved!")
            })
    }

    render() {
        // getting props from redux
        const result = this.props.returnedRestaurant
        console.log("restuarant info", result)

        if (this.props.returnedRestaurant) {
            return <div className="restaurantInfo">
                <div><img className="resultImage" src={result.image_url} alt={result.categories[0].title} /></div>
                <div className="restaurantTextInfo">
                    <div className="resultName">{result.name}</div>
                    <div className="resultCategory">{result.categories[0].title}</div>
                    <div className="resultPrice">{result.price}</div>
                    <div className="resultLocation">{result.location.display_address.join(" ")}</div>
                </div>
                <div className="messagesAndButtons">
                    <div className="regenerateMessage">Don't like your result? Click the 'Find Feast' button again.</div>
                    <div className="ratingMessage">Already been here? Give it a thumbs up or thumbs down and the rating will be saved to your profile.</div>
                    <div>{this.loadRatingButtons()}</div>
                </div>
            </div>
        } else {
            return <div className="hungryMessage">Hungry? Type in your city and state and we'll tell you where to go!</div>
        }
    }
}

export default RestaurantInfo;