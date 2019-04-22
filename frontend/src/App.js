import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import RestaurantInfoContainer from "./Containers/RestaurantInfoContainer";
import Login from "./components/Login";
import { Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <RestaurantInfoContainer />
        <Link to="/favorites" className="myFavorites">My Favorites</Link>
        <Link to="/dislikes" className="myDislikes">My Dislikes</Link>
        <Login />
      </div>
    );
  }
}

export default App;
