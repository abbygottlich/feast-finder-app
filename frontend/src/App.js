import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import RestaurantInfoContainer from "./Containers/RestaurantInfoContainer";
import Login from "./components/Login";
import { Link } from "react-router-dom";

class App extends Component {

  state = {
    city: "",
    USstate: "",
    returnedRestaurant: [],
    favorites: [],
    dislikes: []
  }

  showRatings = (rating) => {
    fetch("http://localhost:5000/restaurants/" + rating)
      .then(res => res.json())
      .then(restaurants => {
        this.setState({
          favorites: restaurants
        })
      })
    // if (this.state.favorites.length > 0) {
    //   for (let i = 0; i < this.state.favorites.length; i++) {
    //     // return <div className="favoritesList">{this.state.favorites[i]}</div>
    //     console.log(this.state.favorites[i])
    //   }
    // }
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
    return (
      <div className="App">
        <Form />
        <RestaurantInfoContainer />
        <div className="messagesAndButtons">
          <Link to="/favorites" className="myFavorites">My Favorites</Link>
          <Link to="/dislikes" className="myDislikes">My Dislikes</Link>
          <div>{this.state.favorites.map(f => <div>{f.name}</div>)}</div>
        </div>

        <Login />
      </div>
    );
  }
}

export default App;
