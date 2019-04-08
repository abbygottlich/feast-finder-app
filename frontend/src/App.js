import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    city: "",
    USstate: ""
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const apiUrl = "http://localhost:5000/restaurants/"
    const stateName = this.state.USstate.toUpperCase()
    const params = this.state.city + "," + stateName
    const urlToFetch = apiUrl + params
    fetch(urlToFetch)
      .then(res => res.json())
      .then(restaurantData => console.log(restaurantData))
  }

  render() {
    console.log('city: ', this.state.city, ' state: ', this.state.USstate)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form onSubmit={this.handleSubmit}>
            <input name="city" value={this.state.city} placeholder="City" onChange={this.handleChange} className="city-name" id="city-name"></input>
            <input name="USstate" value={this.state.USstate} placeholder="State" onChange={this.handleChange} className="state-name" id="state-name" maxLength="2"></input>
            <button type="submit">Find a Feast!</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
