import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    city: "",
    USstate: "",
    returnedRestaurant: []
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

  loadImage() {
    if (this.state.returnedRestaurant.length > 0) {
      return <img src={this.state.returnedRestaurant[0].image_url} alt="words" />
    }
  }

  render() {
    const restaurantLength = this.state.returnedRestaurant.length
    const result = this.state.returnedRestaurant[0]
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange} className="city-name" id="city-name"></input>
          <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange} className="state-name" id="state-name" maxLength="2"></input>
          <button type="submit">Find a Feast!</button>
        </form>
        <div>{this.loadImage()}</div>
        <div className="resultName">{restaurantLength > 0 ? result.name : ""}</div>
        <div className="resultCategory">{restaurantLength > 0 ? result.categories[0].title : ""}</div>
        <div className="resultPrice">{restaurantLength > 0 ? result.price : ""}</div>
        <div className="resultLocation">{restaurantLength > 0 ? result.location.display_address.join(" ") : ""}</div>
        <div className="hungryMessage">{restaurantLength <= 0 ? "Hungry?" : "Don't like your result? Click the 'Find Feast' button again!"}</div>
        <div className="ratingMessage">{restaurantLength > 0 ? "Already been here? Give it a thumbs up or thumbs down and the rating will be saved to your profile!" : ""}</div>
        <div className="thumbsUpButton">{restaurantLength > 0 ? "Thumbs Up" : ""}</div>
        <div className="thumbsDownButton">{restaurantLength > 0 ? "Thumbs Down" : ""}</div>
      </div>
    );
  }
}

export default App;
