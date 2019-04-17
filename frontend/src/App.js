import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import RestaurantInfo from "./components/RestaurantInfo"

class App extends Component {

  state = {
    city: "",
    USstate: "",
    returnedRestaurant: [],
    favorites: [],
    dislikes: []
  }

  // setting the state equal to what's being typed inside the form fields
  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    // prevents the form from being refreshed before it gets submitted
    e.preventDefault()
    // fetching from the backend API
    const apiUrl = "http://localhost:5000/restaurants/"
    const stateName = this.state.USstate.toUpperCase()
    const params = this.state.city + "," + stateName
    const urlToFetch = apiUrl + params
    let returnedRestaurantArr = []
    fetch(urlToFetch)
      .then(res => res.json())
      .then(restaurantData => {
        returnedRestaurantArr.push(restaurantData)
        // setting the state equal to the returned data
        this.setState({
          returnedRestaurant: returnedRestaurantArr
        })
        console.log(this.state.returnedRestaurant)
      })
  }

  loadRatingButtons() {
    if (this.state.returnedRestaurant.length > 0) {
      return <div className="ratingButtons">
        <img onClick={() => this.saveRating("like")} className="likeButton" alt="like-button" src="https://image.flaticon.com/icons/svg/126/126473.svg"></img>
        <img onClick={() => this.saveRating("dislike")} className="dislikeButton" alt="dislike-button" src="https://image.flaticon.com/icons/svg/126/126504.svg"></img>
      </div>
    }
  }

  showRatings = (rating) => {
    fetch("http://localhost:5000/restaurants/" + rating)
      .then(res => res.json())
      .then(restaurants => {
        console.log(restaurants)
      })
    // if (this.state.favorites.length > 0) {
    //   for (let i = 0; i < this.state.favorites.length; i++) {
    //     // return <div className="favoritesList">{this.state.favorites[i]}</div>
    //     console.log(this.state.favorites[i])
    //   }
    // }
  }

  saveRating(rating) {
    const restaurant = this.state.returnedRestaurant[0]
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

  showDislikes() {
    if (this.state.dislikes.length > 0) {
      for (let i = 0; i < this.state.dislikes.length; i++) {
        // return <div className="dislikesList">{this.state.dislikes[i]}</div>
        console.log(this.state.dislikes[i])
      }
    }
  }

  render() {
    const restaurantLength = this.state.returnedRestaurant.length
    return (
      <div className="App">
        <Form city={this.state.city}
          USstate={this.state.USstate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />

        <RestaurantInfo returnedRestaurant={this.state.returnedRestaurant} />

        <div className="messagesAndButtons">
          <div className="hungryMessage">{restaurantLength <= 0 ? "Hungry? Type in your city and state and we'll tell you where to go!" : ""}</div>
          <div className="regenerateMessage">{restaurantLength > 0 ? "Don't like your result? Click the 'Find Feast' button again." : ""}</div>
          <div className="ratingMessage">{restaurantLength > 0 ? "Already been here? Give it a thumbs up or thumbs down and the rating will be saved to your profile." : ""}</div>
          <div>{this.loadRatingButtons()}</div>
          <div className="myFavorites" onClick={() => this.showRatings("like")}>My Favorites</div>
          <div className="myDislikes" onClick={() => this.showRatings("dislike")}>My Dislikes</div>
        </div>
      </div>
    );
  }
}

export default App;
