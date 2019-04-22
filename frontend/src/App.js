import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import RestaurantInfoContainer from "./Containers/RestaurantInfoContainer";
import Login from "./components/Login";

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
    const restaurantLength = this.state.returnedRestaurant.length
    return (
      <div className="App">
        <Form />

        <RestaurantInfoContainer />

        <div className="messagesAndButtons">
          <div className="myFavorites" onClick={() => this.showRatings("like")}>My Favorites</div>
          <div className="myDislikes" onClick={() => this.showRatings("dislike")}>My Dislikes</div>
          <div>{this.state.favorites.map(f => <div>{f.name}</div>)}</div>
        </div>

        <Login />
      </div>
    );
  }
}

export default App;
