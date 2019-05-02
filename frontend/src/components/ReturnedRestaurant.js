import React, { Component } from 'react';

class ReturnedRestaurant extends Component {

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
        // ${process.env.REACT_APP_API_URL}
        fetch(`/restaurants`, {
            method: "POST",
            body: JSON.stringify(restaurantBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(restaurantData => {
            })
            .then(this.setState({
                restaurantSaved: true
            }))
            // resetting restaurantSaved to false after 1 second to show saved message again
            .then(setTimeout(() => {
                this.setState({ restaurantSaved: false });
            }, 1000))
    }

    render() {

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
                <div className="restaurant-info-and-overlay">
                    <div className="restaurant-text-info">
                        <div className="text">
                            <div className="result-name">{result.name}</div>
                            <div className="result-category">{result.categories[0].title}</div>
                            <div className="result-price">{result.price}</div>
                            <div className="result-location">{result.location.display_address.join(" ")}</div>
                            {this.state.restaurantSaved === true ? <div className="saved">Saved!</div> : null}
                        </div>
                    </div>
                </div>
            </div>

            <div className="messages-and-buttons">
                <div className="regenerate-message">Don't like your result? Click the 'Find A Feast!' button again.</div>
                <div className="rating-message">Already been here? Give it a thumbs up or thumbs down and the rating will be saved to your profile.</div>
                <div>{this.loadRatingButtons()}</div>
            </div>
        </div>
    }
}

export default ReturnedRestaurant;