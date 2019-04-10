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
        console.log("first", restaurantData)
        returnedRestaurantArr.push(restaurantData)
        this.setState({
          returnedRestaurant: returnedRestaurantArr
        })
      })
  }

  render() {
    const restaurantLength = this.state.returnedRestaurant.length
    const result = this.state.returnedRestaurant[0]
    console.log('city: ', this.state.city, ' state: ', this.state.USstate)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange} className="city-name" id="city-name"></input>
          <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange} className="state-name" id="state-name" maxLength="2"></input>
          <button type="submit">Find a Feast!</button>
        </form>
        <div className="resultName">{restaurantLength > 0 ? result.name : "nonenansd"}</div>
        <div className="resultCategory">{restaurantLength > 0 ? result.categories[0].title : "nonenansd"}</div>
        <div className="resultPrice">{restaurantLength > 0 ? result.price : "nonenansd"}</div>
        <div className="resultLocation">{restaurantLength > 0 ? result.location.display_address.join(" ") : "nonenansd"}</div>
      </div>
    );
  }
}

export default App;
